// Child js

jQuery(document).ready(function($) {	
	
	// Window Size Tracking
	function resizeChecks() {
		
		// Mobile navigation
		if (window.matchMedia('(max-width: 767px)').matches) {
			$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
			$('#top-menu .menu--secondary').appendTo('#navbar > .container-fluid > .menu--main');
			$('#navbar').css('display', 'none');
			$('#navbar .navbar-header').css('display', 'none');
			$('#mobile-nav').css('display', 'block');
			$('#mobile-nav-dimmer').addClass('closed');
			$('body').removeClass('scrolled');
		} 
		else {
			$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-sustainable-main-menu');
			$('.menu--main .menu--secondary').appendTo('#block-secondary-2');
			$('#navbar').css('display', 'block');
			$('#navbar .navbar-header').css('display', 'block');
			$('#mobile-nav').css('display', 'none');
			$('#mobile-nav-dimmer').removeClass('open');
			$('#mobile-nav-dimmer').css('display','none');
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
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
		$('#top-menu .menu--secondary').appendTo('#navbar > .container-fluid > .menu--main');
		$('#navbar').css('display', 'none');
		$('#navbar .navbar-header').css('display', 'none');
		$('#mobile-nav').css('display', 'block');
		$('#mobile-nav-dimmer').addClass('closed');
		$('body').removeClass('scrolled');
	} 
	else {
		$('#navbar .menu.menu--main.nav.navbar-nav').appendTo('#block-sustainable-main-menu');
		$('.menu--main .menu--secondary').appendTo('#block-secondary-2');
		$('#navbar').css('display', 'block');
		$('#navbar .navbar-header').css('display', 'block');
		$('#mobile-nav').css('display', 'none');
		$('#mobile-nav-dimmer').removeClass('open');
		$('#mobile-nav-dimmer').css('display','none');
	}

	$('#mobile-nav').on('click', function() {
		$('#mobile-nav-dimmer').toggleClass('open closed');
		$('#navbar').slideToggle('fast');
	});
	$('#mobile-nav-dimmer').on('click', function() {
		$('#mobile-nav-dimmer').toggleClass('open closed');
		$('#navbar').slideToggle('fast');
	});

	// Add anchor for broken ARIA reference error. Not a real solution, quick and dirty, but see here: https://github.com/react-bootstrap/react-bootstrap/issues/1827
	$('<a id="popup-anchor" href="#" class="visually-hidden">Popup</a>').appendTo('#popup');
	
	// ...and another
	$('nav h4').attr('id', 'pagination-heading');
		
	$(window).resize(resizeChecks);
	resizeChecks();
	
	
	
	// Window Load ------------------------------------------------------------
	$(window).on("load", function() {
		
		if (window.matchMedia('(max-width: 767px)').matches) {
			$('body').removeClass('scrolled');
		} 

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
	
	// Window scroll ------------------------------------------------------------
	$(window).on("scroll", function() {
		if ( $(window).width() >= 768 ) {
			var top_offset = $(window).scrollTop();
			if (top_offset == 0) {
				$('body').removeClass('scrolled');
			} else {
				$('body').addClass('scrolled');
			}
		}
	});
	
	
});