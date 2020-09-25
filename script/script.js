$(document).ready(function(){
	
	$('#sendRequest form button').click(function(){
		$('#sendRequest').hide();
		$('#popupBackground').fadeOut();
	})


	$('#cameraTrgger_1').click(function(){
		$('#cameraView .tab').removeClass('active');
		$(this).addClass('active');
		$('#cameraView .tab_content').removeClass('active');
		$('#camera_1').addClass('active');
	})
	$('#cameraTrgger_2').click(function(){
		$('#cameraView .tab').removeClass('active');
		$(this).addClass('active');
		$('#cameraView .tab_content').removeClass('active');
		$('#camera_2').addClass('active');
	})
	$('#cameraTrgger_3').click(function(){
		$('#cameraView .tab').removeClass('active');
		$(this).addClass('active');
		$('#cameraView .tab_content').removeClass('active');
		$('#camera_3').addClass('active');
	})

	$('.mobile').click(function(){
		$('#mobileMenu').addClass('active');
	})
	$('#mobileMenu .close_menu').click(function(){
		$('#mobileMenu').removeClass('active');
	})

	if ($(window).width()>=1025) {
		$('.close').click(function(){
			$(this).parent('.popup').hide();
			$('#popupBackground').fadeOut();
		})
		$('.video_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#cameraView').fadeIn();
		})
	}
	if ($(window).width()<1025) {
		$('.close').click(function(){
			$(this).parent('.popup').hide();
			$('#popupBackground').hide();
			$('#popupBackground .mobile_header').hide();
		})
		$('.hamburger').click(function(){
			$('#mobileMenu').addClass('active');
		})
		$('.video_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#popupBackground .mobile_header').fadeIn();
			$('#cameraView').fadeIn();
		})
	}


	if ($(window).width()>=731) {
		$('.phone_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#sendRequest').fadeIn();
		})
		$('#sendRequest form button').click(function(){
			$('#sendRequest').hide();
			$('#popupBackground').fadeOut();
		})
	}
	if ($(window).width()<731) {
		$('.phone_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#popupBackground .mobile_header').fadeIn();
			$('#sendRequest').fadeIn();
		})
		$('#sendRequest form button').click(function(){
			$('#sendRequest').hide();
			$('#popupBackground').hide();
			$('#popupBackground .mobile_header').hide();
		})
	}

	$('#fullpage').fullpage({
		sectionSelector: '.section',
		slideSelector: '.slide',
		autoScrolling:true,
		responsiveHeight: 1,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	/*$('a[href="#contacts"]').click(function(){
		$('header').addClass('black');
		$('#contactPage').addClass('active').animate({ left: "0%" }, 800 );
		$('#mainPage').animate({ left: "-200%" }, 800 ).delay( 800 ).removeClass('active');

		$('.dot').removeClass('active');
		$('a[href="#contacts"]').parent('.dot').addClass('active');
	}) 

	$('a[href="#mainPage"]').click(function(){
		$('header').removeClass('black');
		$('#mainPage').addClass('active').animate({ left: "0%" }, 800 );
		$('#contacts').animate({ left: "200%" }, 800 ).delay( 800 ).removeClass('active');
		$('.dot').removeClass('active');
		$('a[href="#mainPage"]').parent('.dot').addClass('active');
	}) */

})

$(window).resize(function(){
	if ($(window).width()>=1025) {
		$('.close').click(function(){
			$(this).parent('.popup').hide();
			$('#popupBackground').fadeOut();
		})
		$('.video_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#cameraView').fadeIn();
		})
	}
	if ($(window).width()<1025) {
		$('.close').click(function(){
			$(this).parent('.popup').hide();
			$('#popupBackground').hide();
			$('#popupBackground .mobile_header').hide();
		})
		$('.hamburger').click(function(){
			$('#mobileMenu').addClass('active');
		})
		$('.video_button').click(function(){
			$('#popupBackground').fadeIn();
			$('#popupBackground .mobile_header').fadeIn();
			$('#cameraView').fadeIn();
		})
	}

	

})


