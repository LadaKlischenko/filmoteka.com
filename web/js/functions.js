var save_obj = null;
var delay = 500;

$(document).ready(function() {
	
	$("#filter_show").bind("click", function(event) {
		if ($("#filter").is(":visible")) $("#filter").hide(delay);
		else $("#filter").show(delay);
		return false;
	});
	
	$("#group_show").bind("click", function(event) {
		if ($("#group").is(":visible")) $("#group").hide(delay);
		else $("#group").show(delay);
		return false;
	});
	
	$(".edit").bind("click", function(event) {
		var target = $(event.target);
		var id = target.attr("data-name");
		if (save_obj) return;
		save_obj = $("#" + id);
		if (target.attr("data-typecontent") == "html") text = save_obj.html();
		else text = save_obj.text();
		var input = getInput(target.attr("data-type"), target.attr("data-typecontent"), target.attr("data-obj"), target.attr("data-name"), target.attr("data-values"), text);
		$("#" + id).replaceWith(input);
		if ($(input).is("div")) $(input).children("textarea, input").focus();
		else input.focus();
	});
	
	$(".invert").bind("click", function(event) {
		var target = $(event.target);
		var img = false;
		if (target.is("img")) {
			img = true;
			text = target.attr("src");
		}
		else text = target.text();
		var obj = target.attr("data-obj");
		var name = target.attr("data-name");
		var type = target.attr("data-type");
		var ct;
		var value;
		var nt;
		if (text == target.attr("data-nt1")) {
			ct = target.attr("data-ct1");
			value = target.attr("data-v1");
			nt = target.attr("data-nt2");
		}
		else if (text == target.attr("data-nt2")) {
			ct = target.attr("data-ct2");
			value = target.attr("data-v2");
			nt = target.attr("data-nt1");
		}
		else return;
		if (ct)
			if (!confirm(ct)) return;
		ajax({obj: obj, name: name, value: value, type: type, func: "edit"}, function() {
			alert("Ошибка соединения");
		}, function (result) {
			if (result["e"] == false) {
				var element = $("[data-name='" + name + "']");
				if (img) element.attr("src", nt);
				else element.text(nt);
			}
			else alert("Неизвестная ошибка");
		});
	});
	
	$(document).on("click", ".delete", function(event) {
		var target = $(event.target);
		if (!confirm("Вы уверены, что хотите удалить " + target.attr("data-text") + "?")) return;
		var obj = target.attr("data-obj");
		var id = target.attr("data-id");
		ajax({obj: obj, id: id, func: "delete"}, function() {
			alert("Ошибка соединения");
		}, function (result) {
			if (result["e"] == false) $("#" + obj + "_" + id).hide(delay);
			else alert("Неизвестная ошибка");
		});
	});
	
	$(".r_button").bind("click", function(event) {
		$(".radio_js").hide(delay);
		var target = $(event.target);
		var div = $(target).parent().find(".radio_js");
		$(div).show(delay);
	});
	
	$(document).on("blur", "[data-func='edit']", function(event) {
		var target = $(event.target);
		var obj = target.attr("data-obj");
		var name = target.attr("name");
		var value = $(event.target).val();
		var load = $(getLoad());
		var select_value = false;
		if (target.is("select")) select_value = $("select[name='" + name + "'] option:selected" ).text();
		if (target.is("textarea")) target.parent().replaceWith(load);
		else target.replaceWith(load);
		
		ajax({obj: obj, name: name, value: value, func: "edit"}, function() {
			alert("Ошибка соединения");
			$(load).replaceWith(save_obj);
		}, function (result) {
			if (result["e"] == false) {
				if (select_value) result["r"] = select_value;
				if (target.attr("data-typecontent") == "html") $(save_obj).html(result["r"]);
				else $(save_obj).html(result["r"].replace(/\n/g, "<br/>\n"));
				$(load).replaceWith(save_obj);
			}
			else {
				alert("Некорректное значение");
				$(load).replaceWith(save_obj);
			}
			save_obj = null;
		});
	});
	$(document).on("click", "input[data-func='save']", function(event) {
		var target = $(event.target);
		var obj = target.attr("data-obj");
		var name = target.attr("data-name");
		var checkbox = $("input[name='" + name + "']:checked");
		var ids = new Array();
		var title = "";
		for (var i = 0; i < checkbox.length; i++) {
			ids[i] = checkbox[i].value;
			title += $(checkbox[i]).attr("data-title") + "\", ";
		}
		title = title.replace(/Видеокурс /g, "Видеокурс \"");
		title = title.substring(0, title.length - 2);
		ids.sort();
		value = ids.join(",");
		var load = $(getLoad());
		$("#" + name).replaceWith(load);
		
		ajax({obj: obj, name: name, value: value, func: "edit"}, function() {
			alert("Ошибка соединения");
			$(load).replaceWith(save_obj);
		}, function (result) {
			if (result["e"] == false) {
				$(save_obj).html(title.replace(/\n/g, "<br/>\n"));
				$(load).replaceWith(save_obj);
			}
			else {
				alert("Некорректное значение");
				$(load).replaceWith(save_obj);
			}
			save_obj = null;
		});
	});
	
});

function chatWebinar(delay) {
	var update = 30;
	var names = new Array("Лариса","Denis","Сергей","Манс","Ольга","Игорь","Данил","Victor","Aleksander","Asd","darjus","Егор","Дорогой Друг","Александр","Serhiy","Наталья","Сергей","Roman","User","Vahagn","Елена","Олексей","Анастасия","shenkevich","Игорь","Артём","impresivu","Вова Пицюк","Роман","Гаврила","Антон","Владимир","НАТАЛЬЯ","Надежда","Дорогой Друг","Андрей","Герман","Alex","Дмитрий","Вячеслав","Виктор","Алексей","Наталья","Руслан","Дмитрий","Neil","ISTproekt","Мария","Никита","Константин","Алексей","ДжохаридзЕ Премудрый","Valenti","Тимур","Юрий","Inju","Руслан аникин","Антонина","Артём","Фируз","Дорогой Друг","Лиля","Intiqam","Виктор","Roma","Илья","Ivana","Саша","Гена","Сергей","Alex","Наталья","Любовь Константиновна","Юрий","Денис","Михаил","Shukurjan","Максим","Стелла","Bашe имя Tatyana","Valentina","LUDA","Оперативный командующий Беркут","Лиза","Дорогой Друг","Андрей","Владимир","shariktyrochka@mail.ru","Erbol","Виктор","Жека","Николай","Сергей","Надежда","Владимир","Сергей","Андрей","Николай","Надежда","Евгений","Ольга","Сергей","Эрмек","Алексей","Фёдор","javhar","Александр","Александр","Maga","Илья","Антон","Бек","Сергей","Юрий","Михаил","Fad","ВашСергейе имя","Анатолий","Майк","Подписчик","Владимир","Алишер","Ada","Asel","Александр","Илья","Sasha1","Ольга","Oleg","Надежда","Александр","eremeev Павел","Виктор","Александр","Belibov Nikolay","Владимир","Lesena","Станислав","Андрей","Владимир","Виктория","Анастасия","Евгений","Михаил","Олег","Петр","Олег","celal","Игорь","светлана","Ярослав","Виталий","Николай","Andrey","Эмиль Мамедли","Светлана","Алексей","Собака","Виктор","Стас","Александр","Сергей","Yasin","Ольга","Сергей","Игорь","Зульмира","Salavat","Даниель","Анатолий","Виктория","Павел","Сергей","Вероника","pochitatelj","Юрий","Андрия","махарэ","Михаил","Вячеслав","Сергей","Владимир","Elena","Александр","Azat","dotsband","Xacho","Veronica","Олег","Лариса","Александр","Игорь","Андрей","Намик","Galymzhan","Роман","Денис","йц","Валентин Гойхман","максим","Вадим","David","george","Mihail","Magnika","Nataly","Ярослав","Сергей","Лариса","Юрий вол","Вадим","Ольга Михайлюк-Соронович","Юлия","Артем","Валентина","перизат","Давид","Руслан","Елена","Иван","Mark","Юлия продиашвили","Евгений","Вася","Елена","Валентина","Денис","Утемис","Вакалюк Виктор","Владимир","Владимир","Mikhail","Алексей","Таня","Алексей","Максим","Игорь","Ramin","Тамерлан","Александр","Галина","Евгений","Маруся","Светлана","Инна","Магомед","Freia","Роман","Сергей","Galina petrovna","Кira","Виктор","Andrey","Антон","Arslan","Михаил","Ss","Aidana","Анатолий","Екатерина","Kgb","Зайцев Михаил","Виталий","Владислав","Влад","Влад","Юля","Андрей","Anna","Evgen","Anastasiya","Иван","Миша","Орел","олег","Наталия","Владимир","Макс","Володимир","Александр","Катя","Дмитрий","Сергей","Жека","Маша","Анастасия","Bexruzjik","Наталья","Виктор","Максим","Сергей","Юлия","Владимир","Влад","Николай","Данил","Олег","Денис","TomWhite","Павел","Дарья","Игорь","Наталья","Карина","Olga","Елена","Фердинант","Ольга","Максим","Антон","Дорогой Друг","Александр","Анна","Анна","Руслан","Владимир","Денис","Пётр","Денис","Валерий","Narek","Anton","Алексей","Людмила","Вячеслав","Sergey","Гезова Евгения","Максим","Михаил","Андрей","Сергей","Юрий","Лилия","Антон","Владимир","Olzen","Музаффар Рухуллаевич","Арман","Игорь","Саша","Юлия","Коломыцева Татьяна","Ильнур","Игорь","Руслан","Татьяна","Иван","Айгуль","Mukhiddin","Олег Кныш","Саша","Роман","Алексей","Роман","Владимир","Alexsste","Алексей","Марина","Владимир","Сергей","Андрей","Эльдар","Виктор","Коля","Сергей","Роман","Дорогой Друг","Мишка","Дмитрий","Вячеслав","Дима","Вадим","Владислав","Олег","Сергей","Суша","Ольга","Василий","Санек","Дорогой Друг","Екатерина","Дмитрий","Александр","Alex","Дмитрий","Speciall","Виталий","Мудите","Глеб","Елена","Юрий","Денис","Наталья","Антон","Евгений","Тамара","Александр","Anri","Дмитрий","Виктория","Abduvali","Ваше полное имя","Ывфвфы","Адам","Sergik","Виктор","vadim","Коллега","Павел","Александр","Андрей","Краснюк Сергей","Андрей","Евгений","Анна","kasma","Сергей","Друг","Андрей","REGIS","sergei","Гришина Ангелина","Сергей","Данил","игорь","Виктор","kerem","Sashaa","Светланаана","Андрей","Александр","Продизблогнари","Yunusxon","чямся","Олег","Светлана","Александр","Маргарита","Жемойдло Юрий Георгиевич","Лида","Дмитрий","Уважаемый подписчик","Владимир","Иоланта","Станислав","Юлия","Андрей","Татьяна Бронникова","GoodBoy","Azer","Дмитрий","Andrejj","Сергей","Александр","Татьяна","Константин","Алексей","Володя","Ирина","Дмитрий","Александр .","Владимир","Сергей","Гокти","Серегй","Сергей","nick","Евгений","Геннадий","Никита","Алексей","Елена","Водолагина люция","Александр","Vahid","Larisa","Vova","Юрий Помазан","Таня","Alex","Dima","Александр Бронский","Александр","Артем","Станислав","Алексей","Aidos","Айбар","Юлия","Владимир","Pharel","Dilshod","эдгар","Александр","Дмитрий","Нина","acent","Нурлан","Людмила","Салман");
	delay += update;
	var count = 0;
	if (delay < 200) count = 300 + Math.random() * 50;
	else if (delay < 800) count = 300 + delay / 5 + Math.random() * 30;
	else if (delay < 2000) count = 450 + Math.random() * 50;
	else if (delay < 2500) count = 450 - delay / 20 + Math.random() * 30;
	else count = 200 + Math.random() * 50;
	count = Math.floor(count);
	$(".green").nextAll().remove();
	var delete_arg = Math.floor(Math.random() * 9);
	
	for (var i = 0; i < count; i++) {
		if (delete_arg == i) continue;
		$("#chat").append($("<p>" + names[i] + "</p>"));
	}
	
	$("#count b").text(count + 1);
	setTimeout(chatWebinar, update * 1000, delay);
}

function ajax(data, func_error, func_success) {
	$.ajax({
		url: "/api.php",
		type: "POST",
		data: (data),
		dataType: "text",
		error: func_error,
		success: function(result) {
			result = $.parseJSON(result);
			func_success(result);
		}
	});
}

function getInput(type, type_content, obj, name, values, active) {
	var input;
	if (type == "select") {
		input = $("<select data-func='edit' data-obj='" + obj + "' name='" + name + "'>");
		values = values.replace(/"/g, "");
		values = values.replace(/\x27+/g, "\x22");
		active = active.replace(/"/g, "");
		var data = $.parseJSON(values);
		for (var i in data) {
			if (data[i] == active) $(input).append("<option value='" + i + "' selected='selected'>" + data[i] + "</option>");
			else $(input).append("<option value='" + i + "'>" + data[i] + "</option>");
		}
	}
	else if (type == "checkbox") {
		input = $("<div id='" + name + "'>");
		var content = "<table>";
		values = values.replace(/"/g, "");
		values = values.replace(/\x27+/g, "\x22");
		var data = $.parseJSON(values);
		active = active.split("\",");
		for (var i in active) {
			active[i] = active[i].replace(/"/g, "").trim();
		}
		
		for (var i in data) {
			if (inArray(data[i], active)) content += "<tr><td><input id='name_" + i + "' type='checkbox' name='" + name + "' value='" + i + "' data-title='" + data[i] + "' checked='checked' /></td>";
			else content += "<tr><td><input id='name_" + i + "' type='checkbox' name='" + name + "' value='" + i + "' data-title='" + data[i] + "' /></td>";
			content += "<td><label for='name_" + i + "'>" + data[i] + "</label></td></tr>";
		}
		
		content += "<tr><td colspan=2'><input class='button' data-obj='" + obj + "' data-func='save' data-name='" + name + "' type='button' value='Сохранить' /></td></tr>";
		content += "</table>";
		$(input).append(content);
	}
	else if (type == "text") {
		input = $("<input type='text' data-func='edit' data-obj='" + obj + "' name='" + name + "' value='" + active + "' />");
	}
	else if (type == "textarea") {
		input = $("<div class='textarea'><textarea data-func='edit' cols='56' rows='6' data-obj='" + obj + "' data-typecontent='" + type_content + "' name='" + name + "'>" + active + "</textarea></div>");
	}
	else return false;

	return input;
}

function inArray(value, array) {
	for (var i = 0; i < array.length; i++)
		if (value == array[i]) return true;
	return false;
}

function getLoad() {
	return "<img src='/images/load.gif' alt='' />";
}