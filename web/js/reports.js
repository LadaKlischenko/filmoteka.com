var DELAY_REPORTS = 1000;

$(document).ready(function() {
	$(document).on("click", "#reports #articles h2", function() {
		$("#reports #article_ids").toggle(DELAY_REPORTS);
	});
	
	$(document).on("click", "#reports #sh_articles h2", function() {
		var form = $("form[name='reports']");
		var articles = form.find("input[name='article_ids[]']:checked");
		if (articles.length) form.find("input[name='article_ids[]']").prop("checked", false);
		else form.find("input[name='article_ids[]']").prop("checked", true);
	});
	
	$(document).on("submit", "form[name='reports']", function() {
		
		var form = $("form[name='reports']");
		
		var from = form.find("input[name='from']").val();
		var to = form.find("input[name='to']").val();
		var step = form.find("input[name='step']:checked").val();
		var income = form.find("input[name='income']").prop("checked");
		var exp = form.find("input[name='exp']").prop("checked");
		var balance = form.find("input[name='balance']").prop("checked");
		var show_result = form.find("input[name='show_result']").prop("checked");
		var articles = form.find("input[name='article_ids[]']:checked");
		var article_ids = new Array();

		var income_orders = form.find("input[name='income_orders']").prop("checked");
		var count_orders = form.find("input[name='count_orders']").prop("checked");
		var avg_price = form.find("input[name='avg_price']").prop("checked");
		
		for (var i = 0; i < articles.length; i++) {
			article_ids[i] = $(articles.get(i)).val();
		}
		if (income) income = 1;
		else income = 0;
		if (exp) exp = 1;
		else exp = 0;
		if (balance) balance = 1;
		else balance = 0;
		
		if (income_orders) income_orders = 1;
		else income_orders = 0;
		if (count_orders) count_orders = 1;
		else count_orders = 0;
		if (avg_price) avg_price = 1;
		else avg_price = 0;
		
		var data = {from: from, to: to, step: step, income: income, exp: exp, balance: balance, article_ids: article_ids, income_orders: income_orders, count_orders: count_orders, avg_price: avg_price, func: "reports"};
		ajax(data, function() {
			alert("Ошибка соединения");
		}, function (result) {
			if (result["e"] == false) {
				var series = new Array();
				var result = $.parseJSON(result["r"]);
				if (income) {
					var incomes = setNumbers(result["incomes"]);
					series[series.length] = {"name": "Доходы", "data": incomes};
				}
				if (exp) {
					var exps = setNumbers(result["exps"]);
					series[series.length] = {"name": "Расходы", "data": exps};
				}
				if (balance) {
					var balances = setNumbers(result["balances"]);
					series[series.length] = {"name": "Баланс", "data": balances};
				}
				if (article_ids.length) {
					articles = result["articles"];
					for (var id in articles) {
						articles[id] = setNumbers(articles[id]);
						series[series.length] = {"name": $("label[for='article_ids_" + id + "']").text(), "data": articles[id]};
					}
				}
				if (show_result) {
					var trs = new Array();
					$("#result tr").not("tr[class='header']").remove();
					if (income) {
						trs[trs.length] = "<tr><td>Общий доход</td><td>" + getSumma(incomes) + "</td></tr>";
					}
					if (exp) {
						trs[trs.length] = "<tr><td>Общий расход</td><td>" + getSumma(exps) + "</td></tr>";
					}
					if (article_ids.length) {
						trs[trs.length] = "<tr><td colspan='2'>Статьи</tr>";
						var summa_articles = new Array();
						for (var id in articles) {
							summa_articles[summa_articles.length] = new Array($("label[for='article_ids_" + id + "']").text(), getSumma(articles[id]));
						}
						
						summa_articles.sort(compareArticles);
						var s = 0;
						for (var i in summa_articles) {
							var title = summa_articles[i][0];
							var summa = summa_articles[i][1];
							s += Math.abs(summa);
							trs[trs.length] = "<tr><td>" + title + "</td><td>" + summa + "</td></tr>";
						}
						var data = new Array();
						for (var i in summa_articles) {
							data[data.length] = {
								name: summa_articles[i][0],
								y: Number((Math.abs(summa_articles[i][1]) * 100 / s).toFixed(2))
							};
						}
						diag("#diag_1", data);
						
					}
					for (var i in trs) $("#result").append(trs[i]);
				}
				var categories = result["x"];
				if (series.length) {
					graph("#graph_1", series, categories);
					$("html, body").animate({ scrollTop: $("#graph_1").offset().top }, DELAY_REPORTS);
				}
				if (income_orders || count_orders || avg_price) {
					if (income_orders) {
						var series = new Array();
						var incomes_orders = setNumbers(result["incomes_orders"]);
						series[series.length] = {"name": "Сумма продаж", "data": incomes_orders};
						graph("#graph_1", series, categories, "Сумма продаж");
					}
					if (count_orders) {
						var series = new Array();
						var counts_orders = setNumbers(result["counts_orders"]);
						series[series.length] = {"name": "Количество продаж", "data": counts_orders};
						graph("#graph_2", series, categories, "Количество продаж", "Количество", '');
					}
					if (avg_price) {
						var series = new Array();
						var avg_prices = setNumbers(result["avg_prices"]);
						series[series.length] = {"name": "Средний чек", "data": avg_prices};
						graph("#graph_3", series, categories, "Средний чек");
					}
				}
				return false; 
			}
			else alert("Неизвестная ошибка");
		});
		return false;
	});
	
});

function compareArticles(a, b) {
	if (Math.abs(a[1]) < Math.abs(b[1])) return 1;
	return -1;
}

function setNumbers(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] = Number(array[i]);
	}
	return array;
}

function getSumma(array) {
	array = setNumbers(array);
	var s = 0;
	for (var i = 0; i < array.length; i++) {
		s += array[i];
	}
	return s.toFixed(2);
}

function graph(id, series, categories, title, y_title, suf) {
	if (title == undefined) title = "Результат";
	if (y_title == undefined) y_title = "Сумма (Руб.)";
	if (suf == undefined) suf = " Руб.";
	$(id).highcharts({
		title: {
			text: title,
			x: -20 //center
		},
		xAxis: {
            categories: categories
        },
		yAxis: {
			title: {
				text: y_title
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			valueSuffix: suf
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'middle',
			borderWidth: 0
		},
		series: series
	});
}

function diag(id, data) {
	$(id).highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Диграмма статей'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Доля',
            colorByPoint: true,
            data: data
        }]
    });
}