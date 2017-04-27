$(document).ready(function() {
	var video = $("#video").get(0);
	video.volume = 1;
	if (isMobile.any()) $(video).attr("controls", "controls");
	if (!video.controls) {
		$("<style>::-webkit-media-controls {display: none !important;}</style>").appendTo("head");
		$("#video").on("click", function(event) {
			if (video.paused) video.play();
			else video.pause();
		});
		$("#video").on("dblclick", function(event) {
			if( window.innerHeight == screen.height) {
				if (document.cancelFullScreen) {
					 document.cancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
			else {
				if (video.requestFullscreen) {
					video.requestFullscreen();
				} 
				else if (video.mozRequestFullScreen) {
					video.mozRequestFullScreen();
				} else if (video.webkitRequestFullscreen) {
					video.webkitRequestFullscreen();
				}
			}
		});
	}
});