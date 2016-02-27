jQuery(document).ready(function($) {
    $('li>a').click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
   });
});
$(function(){
	var nav = $('header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 57) {
			nav.addClass("menu-fixo");
		} else {
			nav.removeClass("menu-fixo");
		}
	});
});