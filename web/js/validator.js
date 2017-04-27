function checkForm(form) {
	var elements = $(form).find("[data-type]");
	var bad = "";
	for (var i = 0; i < elements.length; i++) {
		bad += checkElement(elements.get(i));
	}
	if (bad == "") {
		var t_confirm = $(form).find("[data-tconfirm]").attr("data-tconfirm");
		if (t_confirm) return confirm(t_confirm);
		return true;
	}
	alert(bad);
	return false;
}

function checkElement(element) {
	var type = $(element).attr("data-type");
	var min_len = $(element).attr("data-minlen");
	var max_len = $(element).attr("data-maxlen");
	var t_min_len = $(element).attr("data-tminlen");
	var t_max_len = $(element).attr("data-tmaxlen");
	var t_empty = $(element).attr("data-tempty");
	var t_type = $(element).attr("data-ttype");
	var f_equal = $(element).attr("data-fequal");
	var t_equal = $(element).attr("data-tequal");
	bad = "";
	if (type == "") {
		bad += checkTextInput($(element).val(), min_len, max_len, t_empty, t_min_len, t_max_len);
		bad += checkEqual($(element), f_equal, t_equal);
	}
	else if (type == "title_empty") {
		bad += checkTitleEmpty($(element).val(), max_len, t_max_len);
	}
	else if (type == "text_empty") {
		bad += checkTextEmpty($(element).val(), max_len, t_max_len);
	}
	else if (type == "radio") {
		bad += checkRadio($(element), t_empty);
	}
	else if (type == "name") {
		bad += checkName($(element).val(), max_len, t_empty, t_type, t_max_len);
	}
	else if (type == "email") {
		bad += checkEmail($(element).val(), max_len, t_empty, t_type, t_max_len);
	}
	else if (type == "select") {
		bad += checkSelect($(element), t_empty);
	}
	else if (type == "login") {
		bad += checkLogin($(element).val(), max_len, t_empty, t_type, t_max_len);
	}
	else if (type == "ids") {
		bad += checkIDs($(element), t_empty);
	}
	else if (type == "amount") {
		bad += checkAmount($(element).val(), t_empty, t_type);
	}
	else if (type == "amount_empty") {
		bad += checkAmountEmpty($(element).val(), t_type);
	}
	else if (type == "date") {
		bad += checkDate($(element).val(), t_empty, t_type);
	}
	else if (type == "date_nohms") {
		bad += checkDateNoHMS($(element).val(), t_empty, t_type);
	}
	else if (type == "date_nohms_empty") {
		bad += checkDateNoHMSEmpty($(element).val(), t_type);
	}
	else if (type == "url") {
		bad += checkURL($(element).val(), t_type);
	}
	else if (type == "fee") {
		bad += checkFee($(element).val(), t_type);
	}
	else if (type == "phone") {
		bad += checkPhone($(element).val(), t_empty, t_type);
	}
	else if (type == "count_days") {
		bad += checkCountDays($(element).val(), t_type);
	}
	return bad;
}

function checkEmail(email, max_len, t_empty, t_type, t_max_len) {
	if (email.length == 0) return t_empty + "\n";
	if (email.match(/^[a-z0-9_][a-z0-9\._-]*[a-z0-9_]*@([a-z0-9]+([a-z0-9-]*[a-z0-9]+)*\.)+[a-z]+$/i) == null) return t_type + "\n";
	if (email.length > max_len) return t_max_len + "\n";
	return "";
}

function checkTextInput(value, min_len, max_len, t_empty, t_min_len, t_max_len) {
	if (!t_empty && value.length == 0) return "";
	if (value.length == 0) return t_empty + "\n";
	if (value.length < min_len) return t_min_len + "\n";
	if (max_len && value.length > max_len) return t_max_len + "\n";
	return "";
}

function checkTitleEmpty(value, max_len, t_max_len) {
	if (value.length > max_len) return t_max_len + "\n";
	return "";
}

function checkTextEmpty(value, max_len, t_max_len) {
	if (value.length > max_len) return t_max_len + "\n";
	return "";
}

function checkSelect(element, t_empty) {
	var value = "";
	if ($(element).is("select")) value = $(element).val();
	else value = $(element).find("[type='hidden']").val();
	if (value == "") return t_empty + "\n";
	return "";
}

function checkEqual(element, f_equal, t_equal) {
	if (f_equal == "") return "";
	var form = $(element).parents("form");
	var field = $(form).find("[name='" + f_equal + "']");
	if (element.val() != field.val()) return t_equal + "\n";
	return "";
}

function checkLogin(login, max_len, t_empty, t_type, t_max_len) {
	if (login.length == 0) return t_empty + "\n";
	if (login.length > max_len) return t_max_len + "\n";
	return "";
}

function checkName(name, max_len, t_empty, t_type, t_max_len) {
	if (name.length == 0) return t_empty + "\n";
	if (name.match(/^[a-zа-яё\-\s]+$/i) == null) return t_type + "\n";
	if (name.length > max_len) return t_max_len + "\n";
	return "";
}

function checkIDs(element, t_empty) {
	var checkbox = $(element).find("input[type='checkbox']:checked");
	if (checkbox.length == 0) return t_empty + "\n";
	return "";
}

function checkRadio(element, t_empty) {
	var checkbox = $(element).find("input[type='radio']:checked");
	if (checkbox.length == 0) return t_empty + "\n";
	return "";
}

function checkAmount(amount, t_empty, t_type) {
	if (amount.length == 0) return t_empty + "\n";
	if (amount.match(/^-?\d+(\.\d{2})?$/) == null) return t_type + "\n";
	return "";
}

function checkAmountEmpty(amount, t_type) {
	if (amount.length == 0) return "";
	if (amount.match(/^-?\d+(\.\d{2})?$/) == null) return t_type + "\n";
	return "";
}

function checkDate(date, t_empty, t_type) {
	if (date.length == 0) return t_empty + "\n";
	if (date.match(/^\d{2}\.\d{2}\.\d{4} \d{2}:\d{2}:\d{2}$/) == null) return t_type + "\n";
	return "";
}

function checkDateNoHMS(date, t_empty, t_type) {
	if (date.length == 0) return t_empty + "\n";
	if (date.match(/^\d{2}\.\d{2}\.\d{4}$/) == null) return t_type + "\n";
	return "";
}

function checkDateNoHMSEmpty(date, t_type) {
	if (date.length == 0) return "";
	if (date.match(/^\d{2}\.\d{2}\.\d{4}$/) == null) return t_type + "\n";
	return "";
}

function checkURL(url, t_type) {
	if (url == "") return "";
	if (url.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=\.-]*)*\/?$/i) == null && url.match(/^\/\w+$/i) == null) return t_type + "\n";
	return "";
}

function checkFee(date, t_empty, t_type) {
	if (date.length == 0) return t_empty + "\n";
	if (date.match(/^(0|0\.\d{5}|1)$/) == null) return t_type + "\n";
	return "";
}

function checkPhone(phone, t_empty, t_type) {
	if (phone.length == 0) return t_empty + "\n";
	if (phone.match(/\+\d{1,15}$/) == null) return t_type + "\n";
	return "";
}

function checkCountDays(count_days, t_type) {
	if (count_days == "") return "";
	if (count_days.match(/^[1-9][0-9]*$/) == null) return t_type + "\n";
	return "";
}