$(document).ready(function() {
	$(document).on("click", "#button_push", function(event) {
		$("#button_push").addClass("hide");
		$("#notice_push").removeClass("hide");
		requestPermission();
	});
	messaging.getToken().then(function(currentToken) {
		if (currentToken) {
			$("input[name='token']").val(currentToken);
		}
	});
});

var config = {
	apiKey: "AIzaSyB_P9ro3OrSzAbSz-jfokfKHkOrLjJ4zZE",
	authDomain: "myrusakov-90.firebaseapp.com",
	databaseURL: "https://myrusakov-90.firebaseio.com",
	storageBucket: "myrusakov-90.appspot.com",
	messagingSenderId: "335879287858"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.onTokenRefresh(function() {
	messaging.getToken().then(function(refreshedToken) {
		console.log('Token refreshed.');
		sendTokenToServer(refreshedToken);
		resetUI();
	}).catch(function(err) {
		console.log('Unable to retrieve refreshed token ', err);
	});
});

function requestPermission() {
	console.log('Requesting permission...');
	messaging.requestPermission().then(function() {
		console.log('Notification permission granted.');
		resetUI();
	}).catch(function(err) {
		$("#button_push").removeClass("hide");
		$("#notice_push").addClass("hide");
		console.log('Unable to get permission to notify.', err);
	});
}

function deleteToken() {
	messaging.getToken().then(function(currentToken) {
		messaging.deleteToken(currentToken).then(function() {
			console.log('Token deleted.');
			resetUI();
		}).catch(function(err) {
			console.log('Unable to delete token. ', err);
		});
	}).catch(function(err) {
		console.log('Error retrieving Instance ID token. ', err);
	});
}

function resetUI() {
	messaging.getToken().then(function(currentToken) {
		if (currentToken) {
			sendTokenToServer(currentToken);
		} else {
			console.log('No Instance ID token available. Request permission to generate one.');
		}
	}).catch(function(err) {
		console.log('An error occurred while retrieving token. ', err);
	});
}

function sendTokenToServer(token) {
	$.ajax({
		url: "/api.php",
		type: "POST",
		data: ({func: "subscribe_push", token: token, delivery_id: $("#button_push").attr("data-delivery-id")}),
		dataType: "text",
		error: function() {
			alert("Произошла ошибка, попробуйте ещё раз.");
			$("#button_push").removeClass("hide");
			$("#notice_push").addClass("hide");
		},
		success: successSendToken
	});
}

function successSendToken(error) {
	if (error == "0") {
		$("#notice_push").addClass("hide");
		$("#success_push").removeClass("hide")
	}
	else {
		$("#button_push").removeClass("hide");
		$("#notice_push").addClass("hide");
		alert("Произошла ошибка, попробуйте ещё раз.");
	}
}