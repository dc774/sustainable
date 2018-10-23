// Child js

jQuery(document).ready(function($) {	
	
	$.fn.exists = function () {
		return this.length !== 0;
	}

	var pathArray = window.location.pathname.split( '/' );	
	var child_alias = pathArray[2];
	//var one = pathArray[0];
	//var two = pathArray[1];
	//var three = pathArray[2];
	//var four = pathArray[3];
	//console.log('-'+one+'\n-'+two+'\n-'+three+'\n-'+four);
	
	// Window Size Tracking
	function resizeChecks() {
		
		// Mobile navigation
		if (window.matchMedia('(max-width: 767px)').matches) {
			$('#navbar ul').removeClass('expanded').addClass('collapsed');
			$('#navbar li button .fa').removeClass('fa-minus').addClass('fa-plus');
			$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
			$('#page-header .menu--secondary').appendTo('#navbar > .container-fluid > .menu--main');
			$('#navbar').css('display', 'none');
			$('#navbar .navbar-header').css('display', 'none');
			$('#mobile-nav').css('display', 'block');
			$('#mobile-nav-dimmer').addClass('closed');
			
			if ( !$('.mobile-home-list-item').exists() ) {
				$('#navbar .menu--main').prepend('<li class="mobile-home-list-item"><a class="mobile-home-link" href="/">Home</a></li>');
			}
			
			if ( $('.mobile-home-list-item').exists() && $('#homepage-flag').exists() ) {
				$('.mobile-home-link').addClass('is-active');
				$('.mobile-home-list-item').addClass('active-parent');
				$('.mobile-home-list-item').prevAll('li').removeClass('active-parent').addClass('active-parent-sibling');
				$('.mobile-home-list-item').nextAll('li').removeClass('active-parent').addClass('active-parent-sibling');
			}
			
			
			$('#navbar > .container-fluid > ul > li ul li a.is-active').each(function () {
				$(this).parents('.has-submenu').addClass('active-parent');
			});

			$('#navbar > .container-fluid > ul > li > a.is-active').each(function () {
				$(this).parent('.has-submenu').addClass('active-parent');
			});

			$('#navbar > .container-fluid > ul > li.has-submenu.active-parent').prevAll('li').addClass('active-parent-sibling');
			$('#navbar > .container-fluid > ul > li.has-submenu.active-parent').nextAll('li').addClass('active-parent-sibling');

			$('#navbar > .container-fluid > ul > li.has-submenu').removeAttr('aria-haspopup').removeClass('expanded');
			$('#navbar > .container-fluid > ul > li.has-submenu > a').removeAttr('aria-haspopup');
			$('#navbar > .container-fluid > ul > li.has-submenu > a').removeAttr('aria-expanded');
			$('#navbar > .container-fluid > ul > li.has-submenu > a > span.sr-only').remove();
			
			
			$('#navbar > .container-fluid > ul > li.has-submenu > a > button').each(function () {
				$(this).remove();
			});
		
			
			
			$('#navbar > .container-fluid > ul > li.has-submenu').each(function(){
				$(this).unbind();
				
				
				if ( !$(this).children('button').length) {
					$(this).append('<button><span class="fa fa-plus" aria-hidden="true"></span><span class="sr-only">Toggle the sub-menu</span></span></button>');
				}
				
				
				
				$('button', this).on('click', function(e){
					e.preventDefault();
					if ($(this).parent('li').children('.sub-menu').hasClass('collapsed')) {
						$(this).parent('li').children('.sub-menu.collapsed').removeClass('collapsed').addClass('expanded');
						$(this).removeClass('closedButton').addClass('openButton');
						$(this).parent('li').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
					}
					else if ($(this).parent('li').children('.sub-menu').hasClass('expanded')) {
						$(this).parent().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
						$(this).removeClass('openButton').addClass('closedButton');
						$(this).parent('li').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
					}
				});
			});			
			
			
			
			
			
			
			
			if ( !$('.mobile-more-nav').exists() ) {
				$('.menu--main .menu--secondary').wrap('<li class="mobile-more-nav has-submenu active-parent"><span class="mobile-more-nav-text">More</span></li>');
				$('.menu--secondary').appendTo('.mobile-more-nav');
			}
			if ( !$('.mobile-more-nav button').exists() ) {
				$('.mobile-more-nav').append('<button><span class="fa fa-plus" aria-hidden="true"></span><span class="sr-only">Toggle the sub-menu</span></span></button>');
				$('.mobile-more-nav > ul').addClass('sub-menu collapsed');
				$('.mobile-more-nav button').on('click', function(e){
					e.preventDefault();
					if ($(this).parent('li').children('.sub-menu').hasClass('collapsed')) {
						$(this).parent('li').children('.sub-menu.collapsed').removeClass('collapsed').addClass('expanded');
						$(this).removeClass('closedButton').addClass('openButton');
						$(this).parent('li').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
					}
					else if ($(this).parent('li').children('.sub-menu').hasClass('expanded')) {
						$(this).parent().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
						$(this).removeClass('openButton').addClass('closedButton');
						$(this).parent('li').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
					}
				});
			}
		} 
		else {
			if ( !$('#navbar #block-mainnavigation-2 .menu--main').exists() ) {
				$('#navbar .menu--main').appendTo('#block-mainnavigation-2');
			}
			$('#navbar .has-submenu > button').each(function () {
				var hiddenButtonLink = $(this).parent('li').children('a');
				$('<button><span><span class="sr-only">Toggle the sub-menu</span></span></button>').appendTo(hiddenButtonLink);
				$(this).remove();
			});
			$('#navbar .menu--main').removeClass('collapsed');
			$('#page-header #block-mainnavigation-2 > ul > li.has-submenu').each(function () {
				$(this).removeClass('active-parent');
				$(this).removeClass('active-parent-sibling');
				$(this).addClass('expanded');
				$(this).attr('aria-haspopup','true');
				$(this).children('a').attr({'aria-haspopup': true,'aria-expanded': false});
			});
			$('.mobile-more-nav button').remove();
			$('.menu--main .menu--secondary').unwrap();
			$('.mobile-more-nav-text').remove();
			$('.menu--main .menu--secondary').appendTo('#block-secondary-2');
			$('#navbar').css('display', 'block');
			$('#navbar .navbar-header').css('display', 'block');
			$('#mobile-nav').css('display', 'none');
			$('#mobile-nav-dimmer').removeClass('open');
			$('#mobile-nav-dimmer').css('display','none');
			
			if ( $('.mobile-home-list-item').exists() ) {
				$('.mobile-home-list-item').remove();
			}
			
			//Improve mouse support
			var timer;
			$('#page-header #block-mainnavigation-2 > ul > li.has-submenu').each(function(){
				$(this).on('mouseover', function(){
					$(this).siblings().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
					$(this).children('.sub-menu').removeClass('collapsed').addClass('expanded');
					clearTimeout(timer);
				});	
				$(this).on('mouseout', function(){
					timer = setTimeout(function(){
						$('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
					}, 750);
				});	
			});	
		
			
			
			
			
		}

	}
	
	
																   
	/*$('.paragraph--bp-accordion-container .panel-title > a').each(function(){

		$('<i class="fa fa-plus" aria-hidden="true"></i>').appendTo(this);

		$(this).on('click',function(){

			if( $(this).attr('aria-expanded') == "false" ) {
				$(this).find('.fa-plus').remove();
				$('<i class="fa fa-minus" aria-hidden="true"></i>').appendTo(this);
			} else {
				$(this).find('.fa-minus').remove();
				$('<i class="fa fa-plus" aria-hidden="true"></i>').appendTo(this);
			}

		});	

	});	*/
	
	//match paragraph column heights
	//$(function() {
		if ($(window).width() > 768) {
			$('div[class^="paragraph--type--bp-columns__"]').matchHeight();
			$('#awards .award').matchHeight();
		}
	//});
			
	

	$('img').each(function () {
		var theimagestyle = $(this).attr('data-image-style');
		if( theimagestyle == 'circle_300x300_' ) {
			$(this).parent('figure').css('background','#ffffff');
		}
		if( theimagestyle == 'circle_250x250_' ) {
			$(this).parent('figure').css('background','#ffffff');
		}
		if( theimagestyle == 'circle_200x200_' ) {
			$(this).parent('figure').css('background','#ffffff');
		}
		if( theimagestyle == 'circle_150x150_' ) {
			$(this).parent('figure').css('background','#ffffff');
		}
	});

	
	// If we're on a landing page
	if (child_alias === undefined) {
		$('body').addClass('landing-page');
	}
	
	
	// Fit videos
	$('#main').fitVids();
	$('.container-fluid').fitVids();
	
	// Check if link is external
	$.fn.isExternal = function() {
		var host = window.location.host;
		var link = $('<a>', {
		href: this.attr('href')
		})[0].hostname;

		return (link !== host);
	};
	
	// Add external link icon
	//$('a').each(function () {
		//if( $(this).isExternal() ) {
			//$(this).addClass('external');
		//}
	//});
	
	$('a.external').each(function () {
		$(this).append('<span class="fa fa-external-link" aria-hidden="true"></span>');
	});

	
	// Remove default nav toggle from main nav
	$('#navbar li a').removeAttr('data-toggle');
	$('#navbar li a').removeClass('dropdown-toggle');
	
	// Mobile navigation
	if (window.matchMedia('(max-width: 767px)').matches) {
		$('#navbar .navbar-header').before( $('#navbar .menu.menu--main.nav.navbar-nav') );
		$('#page-header .menu--secondary').appendTo('#navbar > .container-fluid > .menu--main');
		$('#navbar').css('display', 'none');
		$('#navbar .navbar-header').css('display', 'none');
		$('#mobile-nav').css('display', 'block');
		$('#mobile-nav-dimmer').addClass('closed');
		if ( !$('.mobile-more-nav').exists() ) {
			$('.menu--main .menu--secondary').wrap('<li class="mobile-more-nav"><span class="mobile-more-nav-text">More</span></li>');
			$('.menu--secondary').appendTo('.mobile-more-nav');
		}
	} 
	else {
		if ( !$('#navbar #block-mainnavigation-2 .menu--main').exists() ) {
			$('#navbar .menu--main').appendTo('#block-mainnavigation-2');
		}
		$('.mobile-more-nav button').remove();
		$('.menu--main .menu--secondary').unwrap();
		$('.mobile-more-nav-text').remove();
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
	//resizeChecks();
	
	// Add All Events link
	$('#block-eventsblock').prepend('<a class="eventsblock more-link" href="/events">All Events</a>')
	
	
	// Window Load ------------------------------------------------------------
	$(window).on("load", function() {
		
		
		var parentPage = $('h2#block-mainnavigation-menu').text();				
		var newParentPage = parentPage.replace('-',' ');
		var newNewParentPage = capitalize_Words(newParentPage);
		
		$('#block-mainnavigation-menu').html(newNewParentPage);
		
		
		//capitalize_Words 
		function capitalize_Words(str) {
			return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
		}		
		

		$('#main > .row > aside').each(function () {
			if ( !$(this).children().length ) {
				$(this).siblings('section').removeClass('col-sm-8').addClass('col-sm-12');
				$(this).remove();
			}
		});
		
		// Main Navigation
		$('#page-header #block-mainnavigation-2 > ul > li').each(function () {
			if ($(this).children('ul').length) {
				$(this).addClass('has-submenu');
				$(this).attr('aria-haspopup', 'true');
				$(this).children('ul').addClass('sub-menu collapsed');
			}
		});
	
		// Mobile main Navigation
		$('#navbar > .container-fluid > ul > li').each(function () {
			if ($(this).children('ul').length) {
				$(this).addClass('has-submenu');
				$(this).children('ul').addClass('sub-menu collapsed');
			}
		});
	
		// Mobile main Navigation
		$('#navbar > .container-fluid > ul > li ul li a.is-active').each(function () {
			$(this).parents('.has-submenu').addClass('active-parent');
		});
	
		$('#navbar > .container-fluid > ul > li > a.is-active').each(function () {
			$(this).parent('.has-submenu').addClass('active-parent');
		});
		
		$('#navbar > .container-fluid > ul > li.has-submenu.active-parent').prevAll('li').addClass('active-parent-sibling');
		$('#navbar > .container-fluid > ul > li.has-submenu.active-parent').nextAll('li').addClass('active-parent-sibling');
	
		$('#page-header #block-mainnavigation-2 > ul > li.has-submenu > a').attr({'aria-haspopup': true,'aria-expanded': false});
		

		
	
		//Improve mouse support
		var timer;
		$('#page-header #block-mainnavigation-2 > ul > li.has-submenu').each(function(){
			$(this).on('mouseover', function(){
				$(this).siblings().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
				$(this).children('.sub-menu').removeClass('collapsed').addClass('expanded');
				clearTimeout(timer);
			});	
			$(this).on('mouseout', function(){
				timer = setTimeout(function(){
					$('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
				}, 750);
			});	
		});	
		
		//Improve keyboard support - Toggle submenu using a hidden button
		if ($(window).width() > 767) {
			
			$('#page-header #block-mainnavigation-2 > ul > li.has-submenu > a').each(function(){
				$(this).append('<button><span><span class="sr-only">Toggle the sub-menu</span></span></button>');
				$(this).append('<span class="sr-only">Press tab again to toggle the sub-menu</span>'); // Let screen readers know about the hidden button
				$(this).parent().attr('aria-haspopup', 'true').addClass('expanded');
				$('button', this).on('click', function(e){
					e.preventDefault();
					if ($(this).parents('li').children('.sub-menu').hasClass('collapsed')) {
						$(this).attr('aria-expanded', 'true');
						$(this).parents('li').children('.sub-menu.collapsed').removeClass('collapsed').addClass('expanded');
						$(this).removeClass('closedButton').addClass('openButton');
					}
					else if ($(this).parents('li').children('.sub-menu').hasClass('expanded')) {
						$(this).attr('aria-expanded', 'false');
						$(this).parent().parent().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
						$(this).removeClass('openButton').addClass('closedButton');
					}
				});
			});
			
			
			// Close sub-menu when leaving the last item in the list (if it's the last sub-menu in the tree)
			$('#page-header #block-mainnavigation-2 > ul > li.has-submenu .sub-menu li:last-child').on('focusout', function(){
				if ( $(this).find('.sub-menu').length === 0) {
					$(this).parents('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
					$(this).parents('.has-submenu').find('.openButton').attr('aria-expanded', 'false').removeClass('openButton').addClass('closedButton');
				}
			});
					
			// Collapse all other sub-menus when any top level parent is focused
			$('#page-header #block-mainnavigation-2 > ul > li > a').on('focus', function(){
				$(this).parent().siblings('.has-submenu').find('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
				$(this).parent().siblings('.has-submenu').find('.openButton').attr('aria-expanded', 'false').removeClass('openButton').addClass('closedButton');
			});
			
			// Collapse sub-menu when expanded button loses focus away from sub-menu
			$('#page-header #block-mainnavigation-2 > ul > .has-submenu > a').on('focus', function(){
				$(this).parents('li').children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
				$(this).parents('.has-submenu').find('.openButton').attr('aria-expanded', 'false').removeClass('openButton').addClass('closedButton');
			});
			
			$('.mobile-home-list-item').remove();
			
		}

		
		
		//Improve keyboard support - Toggle submenu using a hidden button
		else {
			
			$('#navbar > .container-fluid > ul > li.has-submenu').each(function(){
				$(this).append('<button><span class="fa fa-plus" aria-hidden="true"></span><span class="sr-only">Toggle the sub-menu</span></span></button>');
				$('button', this).on('click', function(e){
					e.preventDefault();
					if ($(this).parent('li').children('.sub-menu').hasClass('collapsed')) {
						$(this).parent('li').children('.sub-menu.collapsed').removeClass('collapsed').addClass('expanded');
						$(this).removeClass('closedButton').addClass('openButton');
						$(this).parent('li').find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
					}
					else if ($(this).parent('li').children('.sub-menu').hasClass('expanded')) {
						$(this).parent().children('.sub-menu.expanded').removeClass('expanded').addClass('collapsed');
						$(this).removeClass('openButton').addClass('closedButton');
						$(this).parent('li').find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
					}
				});
			});
			
			if ( !$('.mobile-home-list-item').exists() ) {
				$('#navbar .menu--main').prepend('<li class="mobile-home-list-item"><a class="mobile-home-link" href="/">Home</a></li>');
			}
			
			if ( $('.mobile-home-list-item').exists() && $('#homepage-flag').exists() ) {
				$('.mobile-home-link').addClass('is-active');
				$('.mobile-home-list-item').addClass('active-parent');
				$('.mobile-home-list-item').prevAll('li').removeClass('active-parent').addClass('active-parent-sibling');
				$('.mobile-home-list-item').nextAll('li').removeClass('active-parent').addClass('active-parent-sibling');
			}
			
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
	
	
	
});