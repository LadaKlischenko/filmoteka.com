var jQ = false;
function initJQ() {
	if (typeof(jQuery) == 'undefined' || !('ui' in jQuery) || !('version' in jQuery.ui)) {
		if (!jQ) {
			jQ = true;
			document.write('<script type="text/javascript" src="js/jquery.js"></script>');
			document.write('<script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>');
			document.write('<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">');
		}
		setTimeout('initJQ()', 50);
	}
}
initJQ();

function leven(a, b) {
	if(a.length == 0) return b.length; 
	if(b.length == 0) return a.length; 

	var matrix = [];

	var i;
	for(i = 0; i <= b.length; i++) matrix[i] = [i];

	var j;
	for (j = 0; j <= a.length; j++) matrix[0][j] = j;

	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i-1) == a.charAt(j-1)) matrix[i][j] = matrix[i-1][j-1];
			else {
				matrix[i][j] = Math.min(matrix[i-1][j-1] + 1,
				Math.min(matrix[i][j-1] + 1,
				matrix[i-1][j] + 1));
			}
		}
	}
	return matrix[b.length][a.length];
}
	
function SR_IsListSelected(el) {
	for (var i = 0; i < el.length; i ++)
		if (el[i].selected || el[i].checked) return i;
	return -1;
}

function SR_trim(f) {
	return f.toString().replace(/^[ ]+/, '').replace(/[ ]+$/, '');
}

function SR_submit(f) {
	f["email"].value = SR_trim(f["email"].value);
	f["name"].value = SR_trim(f["name"].value);
	if (f["name"].value == "Ваше имя") {
		alert("Укажите Ваше имя");
		return false;
	}
	if ((SR_focus = f["email"]) && f["email"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1 || (SR_focus = f["name"]) && f["name"].value.replace(/^[ ]+/, '').replace(/[ ]+$/, '').length < 1) {
		alert("Укажите значения всех полей");
		SR_focus.focus();
		return false;
	}
	if (!f["email"].value.match(/^[A-Za-z0-9][A-Za-z0-9\._-]*[A-Za-z0-9_]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]+$/)) {
		alert("Некорректный синтаксис email-адреса!");
		f["email"].focus();
		return false;
	}
	var domains = new Array("gmail.com", "mail.ru", "yandex.ru", "ya.ru", "rambler.ru", "ukr.net", "inbox.ru", "list.ru", "bk.ru", "");
	f["email"].value = f["email"].value.toLowerCase();
	var email = f["email"].value;
	var domain = email.substring(email.indexOf("@") + 1);
	var s = true;
	for (var i = 0; i < domains.length; i++) {
		if (leven(domains[i], domain) == 1 || (domains[i] == "gmail.com" && domain == "gmail.ru")) {
			s = false;
			var new_email = email.substring(0, email.indexOf("@") + 1) + domains[i];
			$("#sr_dialog").remove();
			$("body").append("<div id='sr_dialog' style='font-size: 12pt;'>" + "Может стоит заменить указанный адрес <b>" + email + "</b> на <b>" + new_email + "</b>?" + "</div>");
			$("#sr_dialog").dialog({
				resizable: false,
				height: "auto",
				width: 400,
				modal: true,
				buttons: {
					"Заменить e-mail": function() {
						f["email"].value = new_email;
						f.submit();
					},
					"Оставить прежним": function() {
						f.submit();
					}
				}
			});
			break;
		}
	}
	if (s) return true;
	else return false;
}