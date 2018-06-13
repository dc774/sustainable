// Child js

jQuery(document).ready(function($) {	
	
	// Window Size Tracking
	function resizeChecks() {
		
		if ( $(window).width() <= 752 ) {
			
		} 
		else {

		}
		
	}
	
	var pathArray = window.location.pathname.split( '/' );	
	var child_alias = pathArray[2];
	//console.log('-'+one+'\n-'+two+'\n-'+three+'\n-'+four);
	
	// If we're on a landing page
	if (child_alias === undefined) {
		$('body').addClass('landing-page');
	}
	
	// Fit videos
	$('#main').fitVids({ customSelector: "iframe[src^='https://cdnapisec.kaltura.com']"});
	
	// Remove default nav toggle from main nav
	$('#navbar li a').removeAttr('data-toggle');
	$('#navbar li a').removeClass('dropdown-toggle');
	
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
	
	// Add anchor for broken ARIA reference error. Not a real solution, quick and dirty, but see here: https://github.com/react-bootstrap/react-bootstrap/issues/1827
	$('<a id="popup-anchor" href="#" class="visually-hidden">Popup</a>').appendTo('#popup');
	
	// ...and another
	$('nav h4').attr('id', 'pagination-heading');
		
	$(window).resize(resizeChecks);
	resizeChecks();
	
	$('#cu-header .cu-brand').attr('data-spy','affix');
		
	$('#cu-header .cu-brand').affix({
		offset: {     
		  top: $('#cu-header .cu-brand').offset().top
		}
	});
	
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