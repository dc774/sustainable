// Child js

jQuery(document).ready(function($) {	
	
	// Window Size Tracking
	function resizeChecks() {
		
		if ( $(window).width() <= 752 ) {
			
		} 
		else {

		}
		
	}
	
	// Fit videos
	$('#main').fitVids({ customSelector: "iframe[src^='https://cdnapisec.kaltura.com']"});
	
	
	// Mobile navigation
	if ( $(window).width() <= 752 ) {
		$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
		$('#navbar .navbar-header').css('display', 'none');
	} else {
		$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-cuenergy-main-menu');
		$('#navbar .navbar-header').css('display', 'block');
	}
	
	$('#mobile-nav').on('click', function() {
		$('#mobile-nav-dimmer').toggleClass('open closed');
		$('#navbar').slideToggle('fast');
	});
	
	$(window).resize(resizeChecks);
	resizeChecks();
		
	
	
	// Window Load ------------------------------------------------------------
	$(window).on("load", function() {

		$("#cu-search-form").attr("action", "/search/node/");
		$("#cu-search-query").attr("name", "keys");

		$('input[type=radio][name=sitesearch]').on('change', function() {
	     switch($(this).val()) {
	         case 'thissite':
				 $("#cu-search-form").attr("action", "/search/node/");
				 $("#cu-search-query").attr("name", "keys");
				 cu-search-query
	             break;
	         case 'cornell':
	             $("#cu-search-form").attr("action", "https://cornell.edu/search/");
	             $("#cu-search-query").attr("name", "q");
	             break;
	     }
		});

	});
	
});