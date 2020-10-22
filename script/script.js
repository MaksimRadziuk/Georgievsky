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
	
	$('#blockB').click(function(){
		$('.tabs_wrap').toggleClass('active');
		$('#BlockBMinina').addClass('active');
		$('#BlockA').removeClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.floor').removeClass('checked');
		$('.floor-1').addClass('checked');
	    $('.block_info>.floor>.number').text('2');
		$('.appartment').removeClass('active');
		$('#BlockBMinina .appart_floor-1').addClass('active');
	})
	$('#backToFirst').click(function(){
		$('.tabs_wrap').toggleClass('active');
		$('.tab_content').removeClass('active');
		$('#BlockA').addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.floor').removeClass('checked');
		$('.floor-1').addClass('checked');
	    $('.block_info>.floor>.number').text('2');
		$('.appartment').removeClass('active');
		$('#BlockA .appart_floor-1').addClass('active');
	})

	$('#blockTemple').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBTemple').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
		$('#BlockBTemple .appart_floor-1').addClass('active');
	})
	$('#blockMinina').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBMinina').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
		$('#BlockBMinina .appart_floor-1').addClass('active');
	})
	$('#blockRiver').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBRiver').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
		$('#BlockBRiver .appart_floor-1').addClass('active');
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
	$('#appartNum13').click(function(){
		$('#appartNum13Icon').addClass('active');
		$('#appartNum13Table').addClass('active');
	})
	$('#appartNum14').click(function(){
		$('#appartNum14Icon').addClass('active');
		$('#appartNum14Table').addClass('active');
	})
	$('#appartNum15').click(function(){
		$('#appartNum15Icon').addClass('active');
		$('#appartNum15Table').addClass('active');
	})
	$('#appartNum16').click(function(){
		$('#appartNum16Icon').addClass('active');
		$('#appartNum16Table').addClass('active');
	})
	$('#appartNum17').click(function(){
		$('#appartNum17Icon').addClass('active');
		$('#appartNum17Table').addClass('active');
	})
	$('#appartNum18').click(function(){
		$('#appartNum18Icon').addClass('active');
		$('#appartNum18Table').addClass('active');
	})
	$('#appartNum19').click(function(){
		$('#appartNum19Icon').addClass('active');
		$('#appartNum19Table').addClass('active');
	})
	$('#appartNum20').click(function(){
		$('#appartNum20Icon').addClass('active');
		$('#appartNum20Table').addClass('active');
	})
	$('#appartNum21').click(function(){
		$('#appartNum21Icon').addClass('active');
		$('#appartNum21Table').addClass('active');
	})
	$('#appartNum22').click(function(){
		$('#appartNum22Icon').addClass('active');
		$('#appartNum22Table').addClass('active');
	})
	$('#appartNum23').click(function(){
		$('#appartNum23Icon').addClass('active');
		$('#appartNum23Table').addClass('active');
	})
	$('#appartNum24').click(function(){
		$('#appartNum24Icon').addClass('active');
		$('#appartNum24Table').addClass('active');
	})
	$('#appartNum25').click(function(){
		$('#appartNum25Icon').addClass('active');
		$('#appartNum25Table').addClass('active');
	})
	$('#appartNum26').click(function(){
		$('#appartNum26Icon').addClass('active');
		$('#appartNum26Table').addClass('active');
	})
	$('#appartNum27').click(function(){
		$('#appartNum27Icon').addClass('active');
		$('#appartNum27Table').addClass('active');
	})
	$('#appartNum28').click(function(){
		$('#appartNum28Icon').addClass('active');
		$('#appartNum28Table').addClass('active');
	})
	$('#appartNum29').click(function(){
		$('#appartNum29Icon').addClass('active');
		$('#appartNum29Table').addClass('active');
	})
	$('#appartNum30').click(function(){
		$('#appartNum30Icon').addClass('active');
		$('#appartNum30Table').addClass('active');
	})
	$('#appartNum31').click(function(){
		$('#appartNum31Icon').addClass('active');
		$('#appartNum31Table').addClass('active');
	})
	$('#appartNum32').click(function(){
		$('#appartNum32Icon').addClass('active');
		$('#appartNum32Table').addClass('active');
	})
	$('#appartNum33').click(function(){
		$('#appartNum33Icon').addClass('active');
		$('#appartNum33Table').addClass('active');
	})
	$('#appartNum34').click(function(){
		$('#appartNum34Icon').addClass('active');
		$('#appartNum34Table').addClass('active');
	})
	$('#appartNum35').click(function(){
		$('#appartNum35Icon').addClass('active');
		$('#appartNum35Table').addClass('active');
	})
	$('#appartNum36').click(function(){
		$('#appartNum36Icon').addClass('active');
		$('#appartNum36Table').addClass('active');
	})
	$('#appartNum37').click(function(){
		$('#appartNum37Icon').addClass('active');
		$('#appartNum37Table').addClass('active');
	})
	$('#appartNum38').click(function(){
		$('#appartNum38Icon').addClass('active');
		$('#appartNum38Table').addClass('active');
	})
	$('#appartNum39').click(function(){
		$('#appartNum39Icon').addClass('active');
		$('#appartNum39Table').addClass('active');
	})
	$('#appartNum40').click(function(){
		$('#appartNum40Icon').addClass('active');
		$('#appartNum40Table').addClass('active');
	})
	$('#appartNum41').click(function(){
		$('#appartNum41Icon').addClass('active');
		$('#appartNum41Table').addClass('active');
	})
	$('#appartNum42').click(function(){
		$('#appartNum42Icon').addClass('active');
		$('#appartNum42Table').addClass('active');
	})
	$('#appartNum43').click(function(){
		$('#appartNum43Icon').addClass('active');
		$('#appartNum43Table').addClass('active');
	})
	$('#appartNum44').click(function(){
		$('#appartNum44Icon').addClass('active');
		$('#appartNum44Table').addClass('active');
	})
	$('#appartNum45').click(function(){
		$('#appartNum45Icon').addClass('active');
		$('#appartNum45Table').addClass('active');
	})
	$('#appartNum46').click(function(){
		$('#appartNum46Icon').addClass('active');
		$('#appartNum46Table').addClass('active');
	})
	$('#appartNum47').click(function(){
		$('#appartNum47Icon').addClass('active');
		$('#appartNum47Table').addClass('active');
	})
	$('#appartNum48').click(function(){
		$('#appartNum48Icon').addClass('active');
		$('#appartNum48Table').addClass('active');
	})
	$('#appartNum49').click(function(){
		$('#appartNum49Icon').addClass('active');
		$('#appartNum49Table').addClass('active');
	})
	$('#appartNum50').click(function(){
		$('#appartNum50Icon').addClass('active');
		$('#appartNum50Table').addClass('active');
	})
	$('#appartNum51').click(function(){
		$('#appartNum51Icon').addClass('active');
		$('#appartNum51Table').addClass('active');
	})
	$('#appartNum52').click(function(){
		$('#appartNum52Icon').addClass('active');
		$('#appartNum52Table').addClass('active');
	})
	$('#appartNum53').click(function(){
		$('#appartNum53Icon').addClass('active');
		$('#appartNum53Table').addClass('active');
	})
	$('#appartNum54').click(function(){
		$('#appartNum54Icon').addClass('active');
		$('#appartNum54Table').addClass('active');
	})

	$('.floor-1').hover(
	  function() {
	    $(this).siblings('.floor-1').addClass('active');
	    $('.block_info>.floor>.number').text('2');
	  }, function() {
	    $(this).siblings('.floor-1').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-2').hover(
	  function() {
	    $(this).siblings('.floor-2').addClass('active');
	    $('.block_info>.floor>.number').text('3');
	  }, function() {
	    $(this).siblings('.floor-2').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-3').hover(
	  function() {
	    $(this).siblings('.floor-3').addClass('active');
	    $('.block_info>.floor>.number').text('4');
	  }, function() {
	    $(this).siblings('.floor-3').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-4').hover(
	  function() {
	    $(this).siblings('.floor-4').addClass('active');
	    $('.block_info>.floor>.number').text('5');
	  }, function() {
	    $(this).siblings('.floor-4').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-5').hover(
	  function() {
	    $(this).siblings('.floor-5').addClass('active');
	    $('.block_info>.floor>.number').text('6');
	  }, function() {
	    $(this).siblings('.floor-5').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-6').hover(
	  function() {
	    $(this).siblings('.floor-6').addClass('active');
	    $('.block_info>.floor>.number').text('7');
	  }, function() {
	    $(this).siblings('.floor-6').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);
	$('.floor-7').hover(
	  function() {
	    $(this).siblings('.floor-7').addClass('active');
	    $('.block_info>.floor>.number').text('8');
	  }, function() {
	    $(this).siblings('.floor-7').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+1);
	  }
	);


	$('.floor').click(function(){
		$('.floor').removeClass('checked');
		$('.appartment').removeClass('active');
		$('.select').removeClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
	})

	$('.floor-1').click(function(){
		$('.appart_floor-1').addClass('active');
		$('.floor-1').addClass('checked');
	})
	$('.floor-2').click(function(){
		$('.appart_floor-2').addClass('active');
		$('.floor-2').addClass('checked');
	})
	$('.floor-3').click(function(){
		$('.appart_floor-3').addClass('active');
		$('.floor-3').addClass('checked');
	})
	$('.floor-4').click(function(){
		$('.appart_floor-4').addClass('active');
		$('.floor-4').addClass('checked');
	})
	$('.floor-5').click(function(){
		$('.appart_floor-5').addClass('active');
		$('.floor-5').addClass('checked');
	})
	$('.floor-6').click(function(){
		$('.appart_floor-6').addClass('active');
		$('.floor-6').addClass('checked');
	})
	$('.floor-7').click(function(){
		$('.appart_floor-7').addClass('active');
		$('.floor-7').addClass('checked');
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
