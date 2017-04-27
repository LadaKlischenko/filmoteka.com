;'use strict';

/* slider */

$('.reviews-slider').slick();

/* menu */

$('.menu-top a').on('click',function(){
	$('html, body').stop().animate({
		scrollTop: $( $(this).attr('href') ).offset().top - $('.nav-top').innerHeight()
	}, 1000);
	return false;
});

$('.check-col').on('click',function(event) {
	$('.check-group').removeClass("active");
	var cc = $(event.target).parents(".check-col");
	cc.find(".check-group").addClass("active");
	var n = cc.attr("data-n");
	$("div[id^='course_']").removeClass("active");
	if (n == 2 || n == 3) {
		$("#course_1").addClass("active");
		$("#course_2").addClass("active");
		$("#course_3").addClass("active");
		$("#course_4").addClass("active");
		$("#course_5").addClass("active");
		$("#course_7").addClass("active");
		$("#course_8").addClass("active");
		$("#course_24").addClass("active");
	}
	else if (n == 4) {
		$("#course_1").addClass("active");
		$("#course_2").addClass("active");
		$("#course_3").addClass("active");
		$("#course_4").addClass("active");
		$("#course_5").addClass("active");
		$("#course_7").addClass("active");
		$("#course_8").addClass("active");
		$("#course_9").addClass("active");
		$("#course_10").addClass("active");
		$("#course_24").addClass("active");
	}
	updateCourses();
});

/* animate */

$('.animIt1').waypoint(function() {
	setTimeout(function(){$('.animIt1').addClass('fadeOutTop')},200);
	setTimeout(function(){$('.animIt2').addClass('scaleIn')},400);
	setTimeout(function(){$('.animIt3').addClass('scaleOut')},600);
	setTimeout(function(){$('.animIt4').addClass('fadeOutBottom')},800);
	setTimeout(function(){$('.animIt5').addClass('fadeOutBottom')},1000);
},{offset: '100%'});

$('.animIt6').waypoint(function() {
	setTimeout(function(){$('.animIt6').addClass('fadeOutTop')},200);
},{offset: '100%'});

$('.animIt7').waypoint(function() {
	setTimeout(function(){$('.animIt7').addClass('fadeOutBigLeft')},200);
	setTimeout(function(){$('.animIt8').addClass('fadeOutBigRight')},200);
},{offset: '100%'});

$('.animIt10').waypoint(function() {
	setTimeout(function(){$('.animIt9').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt10').addClass('fadeOutRight')},200);
},{offset: '80%'});
$('.animIt12').waypoint(function() {
	setTimeout(function(){$('.animIt11').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt12').addClass('fadeOutRight')},200);
},{offset: '80%'});
$('.animIt14').waypoint(function() {
	setTimeout(function(){$('.animIt13').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt14').addClass('fadeOutRight')},200);
},{offset: '80%'});
$('.animIt16').waypoint(function() {
	setTimeout(function(){$('.animIt15').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt16').addClass('fadeOutRight')},200);
},{offset: '80%'});

$('.animIt17').waypoint(function() {
	setTimeout(function(){$('.animIt17').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt18').waypoint(function() {
	setTimeout(function(){$('.animIt18').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt19').waypoint(function() {
	setTimeout(function(){$('.animIt19').addClass('fadeOutBottom')},200);
},{offset: '90%'});

$('.animIt20').waypoint(function() {
	setTimeout(function(){$('.animIt20').addClass('scaleOut')},200);
	setTimeout(function(){$('.animIt21').addClass('fadeOutTop')},400);
},{offset: '90%'});
$('.animIt22').waypoint(function() {
	setTimeout(function(){$('.animIt22').addClass('scaleOut')},200);
	setTimeout(function(){$('.animIt23').addClass('fadeOutTop')},400);
},{offset: '90%'});
$('.animIt24').waypoint(function() {
	setTimeout(function(){$('.animIt24').addClass('scaleOut')},200);
	setTimeout(function(){$('.animIt25').addClass('fadeOutTop')},400);
},{offset: '90%'});

$('.animIt26').waypoint(function() {
	setTimeout(function(){$('.animIt26').addClass('fadeOutTop')},200);
},{offset: '90%'});
$('.animIt27').waypoint(function() {
	setTimeout(function(){$('.animIt27').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt28').waypoint(function() {
	setTimeout(function(){$('.animIt28').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt29').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt30').waypoint(function() {
	setTimeout(function(){$('.animIt30').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt31').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt32').waypoint(function() {
	setTimeout(function(){$('.animIt32').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt33').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt34').waypoint(function() {
	setTimeout(function(){$('.animIt34').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt35').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt36').waypoint(function() {
	setTimeout(function(){$('.animIt36').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt37').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt38').waypoint(function() {
	setTimeout(function(){$('.animIt38').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt39').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt40').waypoint(function() {
	setTimeout(function(){$('.animIt40').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt41').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt42').waypoint(function() {
	setTimeout(function(){$('.animIt42').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt43').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt44').waypoint(function() {
	setTimeout(function(){$('.animIt44').addClass('scaleIn')},200);
	setTimeout(function(){$('.animIt45').addClass('fadeOutRight')},400);
},{offset: '90%'});

$('.animIt46').waypoint(function() {
	setTimeout(function(){$('.animIt46').addClass('fadeOutTop')},200);
},{offset: '90%'});
$('.animIt47').waypoint(function() {
	setTimeout(function(){$('.animIt47').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt48').waypoint(function() {
	setTimeout(function(){$('.animIt48').addClass('fadeOutRight')},200);
},{offset: '90%'});

$('.animIt49').waypoint(function() {
	setTimeout(function(){$('.animIt49').addClass('fadeOutTop')},200);
},{offset: '90%'});
$('.animIt50').waypoint(function() {
	setTimeout(function(){$('.animIt50').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt51').waypoint(function() {
	setTimeout(function(){$('.animIt51').addClass('fadeOutRight')},200);
},{offset: '90%'});
$('.animIt52').waypoint(function() {
	setTimeout(function(){$('.animIt52').addClass('scaleOut')},200);
},{offset: '90%'});

$('.animIt53').waypoint(function() {
	setTimeout(function(){$('.animIt53').addClass('scaleIn')},200);
},{offset: '90%'});
$('.animIt54').waypoint(function() {
	setTimeout(function(){$('.animIt54').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt55').waypoint(function() {
	setTimeout(function(){$('.animIt55').addClass('fadeOutBigLeft')},200);
	setTimeout(function(){$('.animIt56').addClass('fadeOutBigRight')},200);
},{offset: '90%'});

$('.animIt57').waypoint(function() {
	setTimeout(function(){$('.animIt57').addClass('scaleIn')},200);
},{offset: '90%'});
$('.animIt58').waypoint(function() {
	setTimeout(function(){$('.animIt58').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt59').waypoint(function() {
	setTimeout(function(){$('.animIt59').addClass('fadeOutBigLeft')},200);
	setTimeout(function(){$('.animIt60').addClass('fadeOutBigRight')},200);
},{offset: '90%'});

$('.animIt61').waypoint(function() {
	setTimeout(function(){$('.animIt61').addClass('scaleIn')},200);
},{offset: '90%'});
$('.animIt62').waypoint(function() {
	setTimeout(function(){$('.animIt62').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt63').waypoint(function() {
	setTimeout(function(){$('.animIt63').addClass('fadeOutBigLeft')},200);
	setTimeout(function(){$('.animIt64').addClass('fadeOutBigRight')},200);
},{offset: '90%'});

$('.animIt65').waypoint(function() {
	setTimeout(function(){$('.animIt65').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt66').waypoint(function() {
	setTimeout(function(){$('.animIt66').addClass('fadeOutMediumLeft')},200);
},{offset: '90%'});
$('.animIt67').waypoint(function() {
	setTimeout(function(){$('.animIt67').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt68').waypoint(function() {
	setTimeout(function(){$('.animIt68').addClass('fadeOutMediumLeft')},200);
},{offset: '90%'});
$('.animIt69').waypoint(function() {
	setTimeout(function(){$('.animIt69').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt70').waypoint(function() {
	setTimeout(function(){$('.animIt70').addClass('fadeOutMediumLeft')},200);
},{offset: '90%'});
$('.animIt71').waypoint(function() {
	setTimeout(function(){$('.animIt71').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});
$('.animIt72').waypoint(function() {
	setTimeout(function(){$('.animIt72').addClass('fadeOutMediumLeft')},200);
},{offset: '90%'});
$('.animIt73').waypoint(function() {
	setTimeout(function(){$('.animIt73').addClass('fadeOutMediumRight')},200);
},{offset: '90%'});

$('.animIt74').waypoint(function() {
	setTimeout(function(){$('.animIt74').addClass('fadeOutTop')},200);
},{offset: '90%'});

$('.animIt75').waypoint(function() {
	setTimeout(function(){$('.animIt75').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt76').waypoint(function() {
	setTimeout(function(){$('.animIt76').addClass('fadeOutBottom')},200);
},{offset: '90%'});
$('.animIt77').waypoint(function() {
	setTimeout(function(){$('.animIt77').addClass('fadeOutBottom')},200);
},{offset: '90%'});

$('.animIt78').waypoint(function() {
	setTimeout(function(){$('.animIt78').addClass('fadeOutTop')},300);
	setTimeout(function(){$('.animIt79').addClass('fadeOutBottom')},200);
},{offset: '80%'});
$('.animIt80').waypoint(function() {
	setTimeout(function(){$('.animIt80').addClass('fadeOutTop')},300);
	setTimeout(function(){$('.animIt81').addClass('fadeOutBottom')},200);
},{offset: '80%'});
$('.animIt82').waypoint(function() {
	setTimeout(function(){$('.animIt82').addClass('fadeOutTop')},300);
	setTimeout(function(){$('.animIt83').addClass('fadeOutBottom')},200);
},{offset: '80%'});

$('.animIt84').waypoint(function() {
	setTimeout(function(){$('.animIt84').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt85').waypoint(function() {
	setTimeout(function(){$('.animIt85').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt86').waypoint(function() {
	setTimeout(function(){$('.animIt86').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt87').waypoint(function() {
	setTimeout(function(){$('.animIt87').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt88').waypoint(function() {
	setTimeout(function(){$('.animIt88').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt89').waypoint(function() {
	setTimeout(function(){$('.animIt89').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt90').waypoint(function() {
	setTimeout(function(){$('.animIt90').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt91').waypoint(function() {
	setTimeout(function(){$('.animIt91').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt92').waypoint(function() {
	setTimeout(function(){$('.animIt92').addClass('fadeOutRight')},200);
},{offset: '100%'});
$('.animIt93').waypoint(function() {
	setTimeout(function(){$('.animIt93').addClass('fadeOutRight')},200);
},{offset: '100%'});

$('.animIt94').waypoint(function() {
	setTimeout(function(){$('.animIt94').addClass('scaleOut')},200);
},{offset: '100%'});

$('.animIt95').waypoint(function() {
	setTimeout(function(){$('.animIt95').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt96').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt97').waypoint(function() {
	setTimeout(function(){$('.animIt97').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt98').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt99').waypoint(function() {
	setTimeout(function(){$('.animIt99').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt100').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt101').waypoint(function() {
	setTimeout(function(){$('.animIt101').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt102').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt103').waypoint(function() {
	setTimeout(function(){$('.animIt103').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt104').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt105').waypoint(function() {
	setTimeout(function(){$('.animIt105').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt106').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt107').waypoint(function() {
	setTimeout(function(){$('.animIt107').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt108').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt109').waypoint(function() {
	setTimeout(function(){$('.animIt109').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt110').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt111').waypoint(function() {
	setTimeout(function(){$('.animIt111').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt112').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt113').waypoint(function() {
	setTimeout(function(){$('.animIt113').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt114').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt115').waypoint(function() {
	setTimeout(function(){$('.animIt115').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt116').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt117').waypoint(function() {
	setTimeout(function(){$('.animIt117').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt118').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt119').waypoint(function() {
	setTimeout(function(){$('.animIt119').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt120').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt121').waypoint(function() {
	setTimeout(function(){$('.animIt121').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt122').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt123').waypoint(function() {
	setTimeout(function(){$('.animIt123').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt124').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt125').waypoint(function() {
	setTimeout(function(){$('.animIt125').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt126').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt127').waypoint(function() {
	setTimeout(function(){$('.animIt127').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt128').addClass('fadeOutRight')},400);
},{offset: '90%'});
$('.animIt129').waypoint(function() {
	setTimeout(function(){$('.animIt129').addClass('fadeOutLeft')},200);
	setTimeout(function(){$('.animIt130').addClass('fadeOutRight')},400);
},{offset: '90%'});