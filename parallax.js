$(window).scroll(function(){
	var st= $(this).scrollTop();
	console.log(st);
	
	$(".text").css({
		"transform": "translate(0%, " +st/2 +"%"
		});
	$(".sect_2").css({
		"transform": "translate(0%, -" +st/20 +"%"
	});
	$(".sect_3").css({
		"transform": "translate(0%, -" +st/20 +"%"
	});
	$(".footer_text").css({
		"transform": "translate(0%, " +st/2 +"%"
		});
});