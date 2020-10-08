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


	$('#tab_1').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tabContent_1').addClass('active');
	})
	$('#tab_2').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tabContent_2').addClass('active');
	})
	$('#tab_3').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_content').removeClass('active');
		$('#tabContent_3').addClass('active');
	})


	$('#map .map_overlay').click(function(){
		$('#mapPopupWindow').fadeToggle();
		ymaps.ready(init2);
		function init2(){
		    var myMap = new ymaps.Map("map2", {
		        center: [56.328978, 44.010703],
		        zoom: 17,
		        controls: []
		    });
		    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
		            '<div>$[properties.iconContent]</div>'
		        ),

		        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
		        }, {
		            iconLayout: 'default#image',
		            iconImageHref: 'https://maksimradziuk.github.io/Georgievsky/img/map_marker.png',
		            iconImageSize: [52, 60],
		            // Смещение левого верхнего угла иконки относительно
		            // её "ножки" (точки привязки).
		            iconImageOffset: [-30, -70]
		        });

		    myMap.geoObjects
		        .add(myPlacemark);
		};
	})
	$('#mapPopupWindow .close').click(function(){
		$('#mapPopupWindow').fadeToggle();
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

	if ($(window).width()>=481) {
		$('.about_slider_wrap .slick-slider').slick({
			slidesToShow: 3,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		  ]
		});
		$('.docs_slider_wrap').slick({
			slidesToShow: 6,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		      {
		      breakpoint: 1025,
		      settings: {
		        rows: 2,
		        slidesToShow:4
			      }
			    },
		      {
		      breakpoint: 601,
		      settings: {
		        rows: 2,
		        slidesToShow:3
		        }
		      }
		  ]
		});
		$('.progrres_slider_wrap').slick({
			slidesToShow: 4,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		      {
		      breakpoint: 1025,
		      settings: {
		        rows: 2,
		        slidesToShow:3
			      }
			    },
		      {
		      breakpoint: 601,
		      settings: {
		        rows: 2,
		        slidesToShow:2
		        }
		      }
		  ]
		});
	}
	if ($(window).width()<481) {
		$('.about_slider_wrap .slick-slider').slick('unslick');
		$('.docs_slider_wrap').slick('destroy');
		$('.progrres_slider_wrap').slick('destroy');
	}

	$('.history_slider_wrap').slick({
		slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows:true
	});
	$('.docs_slider_wrap').slick({
		slidesToShow: 6,
    	slidesToScroll: 1,
    	arrows:true,
    	responsive: [
	      {
	      breakpoint: 1025,
	      settings: {
	        rows: 2,
	        slidesToShow:4
	        }
	      },
	      {
	      breakpoint: 601,
	      settings: {
	        rows: 2,
	        slidesToShow:3
	        }
	      }
	  ]
	});
	
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


	if ($(window).width()>=481) {
		$('.about_slider_wrap .slick-slider').slick({
			slidesToShow: 3,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		  ]
		});
		$('.docs_slider_wrap').slick({
			slidesToShow: 6,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		      {
		      breakpoint: 1025,
		      settings: {
		        rows: 2,
		        slidesToShow:4
		        }
		      },
		      {
		      breakpoint: 601,
		      settings: {
		        rows: 2,
		        slidesToShow:3
		        }
		      }
		  ]
		});
		$('.progrres_slider_wrap').slick({
			slidesToShow: 4,
	    	slidesToScroll: 1,
	    	arrows:true,
	    	responsive: [
		      {
		      breakpoint: 1025,
		      settings: {
		        rows: 2,
		        slidesToShow:3
			      }
			    },
		      {
		      breakpoint: 601,
		      settings: {
		        rows: 2,
		        slidesToShow:2
		        }
		      }
		  ]
		});
	}
	if ($(window).width()<481) {
		$('.about_slider_wrap .slick-slider').slick('unslick');
		$('.docs_slider_wrap').slick('destroy');
		$('.progrres_slider_wrap').slick('destroy');
	}

})


ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [56.328978, 44.010703],
        zoom: 17,
        controls: []
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div>$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'https://maksimradziuk.github.io/Georgievsky/img/map_marker.png',
            iconImageSize: [52, 60],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -70]
        });

    myMap.geoObjects
        .add(myPlacemark);
};
