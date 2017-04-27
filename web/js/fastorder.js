$(document).ready(function() {
	$(".button_order[href*=firstname]").bind("click", function(event) {
		if (confirm("Оформить заказ на основе Вашего последнего заказа? Если да, то нажмите \"OK\".\nЕсли же Вы хотите ввести все данные заново, то нажмите \"Отмена\".")) {
			return true;
		}
		else {
			var href = $(event.target).attr("href");
			var d = href.split("?");  
			var base = d[0];
			var query = d[1];
			var res = "";
			if(query) {
				var params = query.split("&");
				if (params.length == 0) params = query.split("&amp;");
				for(var i = 0; i < params.length; i++) {  
					var keyval = params[i].split("=");  
					if(keyval[0] == "product_ids" || keyval[0] == "code") {  
						res += params[i] + '&';
					}
				}
			}
			href = base + "?" + res;
			href = href.substring(0, href.length -1);
			location.href = href;
			return false;
		}
	});
});