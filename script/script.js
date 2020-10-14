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




/* Квартиры */
	
	$('#blockB, #backToFirst').click(function(){
		$('.tabs_wrap').toggleClass('active');
	})

	$('.camera').click(function(){
		$('#popupBackground').fadeIn();
		$('#cameraView').fadeIn();
	})

	$('.select').click(function(){
		$(this).siblings('.select').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$(this).parent('.img_wrap').siblings('.notification').remove();
	})
		
	$('#appartNum1').click(function(){
		$('#appartNum1Table').addClass('active');
		$('#appartNum1Icon').addClass('active');
	})
	$('#appartNum2').click(function(){
		$('#appartNum2Icon').addClass('active');
		$('#appartNum2Table').addClass('active');
	})
	$('#appartNum3').click(function(){
		$('#appartNum3Icon').addClass('active');
		$('#appartNum3Table').addClass('active');
	})
	$('#appartNum4').click(function(){
		$('#appartNum4Icon').addClass('active');
		$('#appartNum4Table').addClass('active');
	})
	$('#appartNum5').click(function(){
		$('#appartNum5Icon').addClass('active');
		$('#appartNum5Table').addClass('active');
	})
	$('#appartNum6').click(function(){
		$('#appartNum6Icon').addClass('active');
		$('#appartNum6Table').addClass('active');
	})
	$('#appartNum7').click(function(){
		$('#appartNum7Icon').addClass('active');
		$('#appartNum7Table').addClass('active');
	})
	$('#appartNum8').click(function(){
		$('#appartNum8Icon').addClass('active');
		$('#appartNum8Table').addClass('active');
	})
	$('#appartNum9').click(function(){
		$('#appartNum9Icon').addClass('active');
		$('#appartNum9Table').addClass('active');
	})
	$('#appartNum10').click(function(){
		$('#appartNum10Icon').addClass('active');
		$('#appartNum10Table').addClass('active');
	})
	$('#appartNum11').click(function(){
		$('#appartNum11Icon').addClass('active');
		$('#appartNum11Table').addClass('active');
	})
	$('#appartNum12').click(function(){
		$('#appartNum12Icon').addClass('active');
		$('#appartNum12Table').addClass('active');
	})

	$('.floor-1').hover(
	  function() {
	    $(this).siblings('.floor-1').addClass('active');
	    $('.block_info>.floor>.number').text('1');
	  }, function() {
	    $(this).siblings('.floor-1').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);
	$('.floor-2').hover(
	  function() {
	    $(this).siblings('.floor-2').addClass('active');
	    $('.block_info>.floor>.number').text('2');
	  }, function() {
	    $(this).siblings('.floor-2').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);
	$('.floor-3').hover(
	  function() {
	    $(this).siblings('.floor-3').addClass('active');
	    $('.block_info>.floor>.number').text('3');
	  }, function() {
	    $(this).siblings('.floor-3').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);
	$('.floor-4').hover(
	  function() {
	    $(this).siblings('.floor-4').addClass('active');
	    $('.block_info>.floor>.number').text('4');
	  }, function() {
	    $(this).siblings('.floor-4').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);
	$('.floor-5').hover(
	  function() {
	    $(this).siblings('.floor-5').addClass('active');
	    $('.block_info>.floor>.number').text('5');
	  }, function() {
	    $(this).siblings('.floor-5').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);
	$('.floor-6').hover(
	  function() {
	    $(this).siblings('.floor-6').addClass('active');
	    $('.block_info>.floor>.number').text('6');
	  }, function() {
	    $(this).siblings('.floor-6').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index);
	  }
	);


	$('.floor-1').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-1').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor1').addClass('active');
	})
	$('.floor-2').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-2').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor2').addClass('active');
	})
	$('.floor-3').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-3').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor3').addClass('active');
	})
	$('.floor-4').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-4').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor4').addClass('active');
	})
	$('.floor-5').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-5').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor5').addClass('active');
	})
	$('.floor-6').click(function(){
		$('.floor').removeClass('checked');
		$('.floor-6').addClass('checked');
		$('.appartment').removeClass('active');
		$('#floor6').addClass('active');
	})

	
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
