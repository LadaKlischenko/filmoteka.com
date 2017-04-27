function externalLinks() {
	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i < anchors.length; i++) {
		if (anchors[i].getAttribute("href") && anchors[i].getAttribute("rel") == "external")
			anchors[i].target = "_blank";
	}
}

window.onload = function () {
	externalLinks();
}