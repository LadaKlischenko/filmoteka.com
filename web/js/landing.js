$(document).ready(function() {
	if (!isMobile.any()) new WOW().init();
	
	  var InputClass = 'blured';
	  var ClickedClass = 'clicked';
	  $('.'+InputClass).focus(function(){
		if ($(this).attr('defvalue') == undefined) 
			$(this).attr('defvalue',$(this).val());
		if (($(this).attr('blurvalue') == undefined)||($(this).attr('blurvalue') == $(this).attr('defvalue'))) 
		  $(this).val('').addClass(ClickedClass);
	  }).blur(function(){
		var blurvalue = $(this).val();
		if (blurvalue == '') 
		  $(this)
			.removeAttr('blurvalue')
			.val($(this).attr('defvalue'))
			.removeClass(ClickedClass);
		else 
		  $(this).attr('blurvalue',blurvalue);
	  });
	  
	  $(".top-menu").sticky({topSpacing:0});
	  
	  $('a[href*=#]').bind("click", function(e){
		  var anchor = $(this);
		  $('html, body').stop().animate({
			 scrollTop: $(anchor.attr('href')).offset().top
		  }, 2500);
		  e.preventDefault();
	  });
	  
	  $("a.choice").bind("click", function(event) {
		$(".checkbox").removeClass("active");
		var ids = $(event.target).attr("data-ids").split(",");
		for (var i = 0; i < ids.length; i++) {
			$("#course_" + ids[i]).addClass("active");
		}
		updateCourses();
		return false;
	  });
	  
	  $('.checkbox').on('click',function(event) {
			$(this).toggleClass("active");
			updateCourses();
	   });
	  
});