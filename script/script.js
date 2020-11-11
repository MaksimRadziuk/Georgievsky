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
	
	/*$('#blockB').click(function(){
		$('.tabs_wrap').toggleClass('active');
		$('#BlockBRiver').addClass('active');
		$('#BlockA').removeClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.floor').removeClass('checked');
		$('.floor-1').addClass('checked');
	    $('.block_info>.floor>.number').text('2');
		$('.appartment').removeClass('active');
		$('#BlockBRiver .appart_floor-1').addClass('active');
	})*/
	$('#backToFirst').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockA').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
	    $('.block_info>.floor>.number').text('3');
		$('#BlockA .appart_floor-2').addClass('active');
		$('#BlockA .floor').removeClass('checked');
		$('#BlockA .floor-2').addClass('checked');
	})

	$('#blockTemple, #BlockBMinina .move-2, #BlockBRiver .move-2').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBTemple').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$('#blockTemple').addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
	    $('.block_info>.floor>.number').text('2');
		$('#BlockBTemple .appart_floor-1').addClass('active');
		$('#BlockBTemple .floor').removeClass('checked');
		$('#BlockBTemple .floor-1').addClass('checked');
	})
	$('#blockMinina, #BlockBTemple .move-1').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBMinina').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$('#blockMinina').addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
	    $('.block_info>.floor>.number').text('2');
		$('#BlockBMinina .appart_floor-1').addClass('active');
		$('#BlockBMinina .floor').removeClass('checked');
		$('#BlockBMinina .floor-1').addClass('checked');
	})
	$('#blockRiver, #BlockBTemple .move-3').click(function(){
		$('.tab_content').removeClass('active');
		$('#BlockBRiver').addClass('active');
		$('.tabs_wrap.second>.tab').removeClass('active');
		$('#blockRiver').addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$('.select').removeClass('active');
		$('.appartment').removeClass('active');
	    $('.block_info>.floor>.number').text('2');
		$('#BlockBRiver .appart_floor-1').addClass('active');
		$('#BlockBRiver .floor').removeClass('checked');
		$('#BlockBRiver .floor-1').addClass('checked');
	})

	$('.select').click(function(){
		$(this).siblings('.select').removeClass('active');
		$(this).addClass('active');
		$('.appart_number').removeClass('active');
		$('.table').removeClass('active');
		$(this).parent('.img_wrap').siblings('.notification').remove();
	})
		
	$('#appartNum1_1').click(function(){
		$('#appartNum1_1Table').addClass('active');
		$('#appartNum1_1Icon').addClass('active');
	})	
	$('#appartNum1_2').click(function(){
		$('#appartNum1_2Table').addClass('active');
		$('#appartNum1_2Icon').addClass('active');
	})	
	$('#appartNum1_3').click(function(){
		$('#appartNum1_3Table').addClass('active');
		$('#appartNum1_3Icon').addClass('active');
	})	
	$('#appartNum1_4').click(function(){
		$('#appartNum1_4Table').addClass('active');
		$('#appartNum1_4Icon').addClass('active');
	})
	$('#appartNum2_1').click(function(){
		$('#appartNum2_1Icon').addClass('active');
		$('#appartNum2_1Table').addClass('active');
	})
	$('#appartNum2_2').click(function(){
		$('#appartNum2_2Icon').addClass('active');
		$('#appartNum2_2Table').addClass('active');
	})
	$('#appartNum2_3').click(function(){
		$('#appartNum2_3Icon').addClass('active');
		$('#appartNum2_3Table').addClass('active');
	})
	$('#appartNum2_4').click(function(){
		$('#appartNum2_4Icon').addClass('active');
		$('#appartNum2_4Table').addClass('active');
	})
	$('#appartNum3_1').click(function(){
		$('#appartNum3_1Icon').addClass('active');
		$('#appartNum3_1Table').addClass('active');
	})
	$('#appartNum3_2').click(function(){
		$('#appartNum3_2Icon').addClass('active');
		$('#appartNum3_2Table').addClass('active');
	})
	$('#appartNum3_3').click(function(){
		$('#appartNum3_3Icon').addClass('active');
		$('#appartNum3_3Table').addClass('active');
	})
	$('#appartNum3_4').click(function(){
		$('#appartNum3_4Icon').addClass('active');
		$('#appartNum3_4Table').addClass('active');
	})
	$('#appartNum3_5').click(function(){
		$('#appartNum3_5Icon').addClass('active');
		$('#appartNum3_5Table').addClass('active');
	})
	$('#appartNum3_6').click(function(){
		$('#appartNum3_6Icon').addClass('active');
		$('#appartNum3_6Table').addClass('active');
	})
	$('#appartNum3_7').click(function(){
		$('#appartNum3_7Icon').addClass('active');
		$('#appartNum3_7Table').addClass('active');
	})
	$('#appartNum4_1').click(function(){
		$('#appartNum4_1Icon').addClass('active');
		$('#appartNum4_1Table').addClass('active');
	})
	$('#appartNum4_2').click(function(){
		$('#appartNum4_2Icon').addClass('active');
		$('#appartNum4_2Table').addClass('active');
	})
	$('#appartNum4_3').click(function(){
		$('#appartNum4_3Icon').addClass('active');
		$('#appartNum4_3Table').addClass('active');
	})
	$('#appartNum4_4').click(function(){
		$('#appartNum4_4Icon').addClass('active');
		$('#appartNum4_4Table').addClass('active');
	})
	$('#appartNum4_5').click(function(){
		$('#appartNum4_5Icon').addClass('active');
		$('#appartNum4_5Table').addClass('active');
	})
	$('#appartNum4_6').click(function(){
		$('#appartNum4_6Icon').addClass('active');
		$('#appartNum4_6Table').addClass('active');
	})
	$('#appartNum5_1').click(function(){
		$('#appartNum5_1Icon').addClass('active');
		$('#appartNum5_1Table').addClass('active');
	})
	$('#appartNum5_2').click(function(){
		$('#appartNum5_2Icon').addClass('active');
		$('#appartNum5_2Table').addClass('active');
	})
	$('#appartNum5_3').click(function(){
		$('#appartNum5_3Icon').addClass('active');
		$('#appartNum5_3Table').addClass('active');
	})
	$('#appartNum5_4').click(function(){
		$('#appartNum5_4Icon').addClass('active');
		$('#appartNum5_4Table').addClass('active');
	})
	$('#appartNum5_5').click(function(){
		$('#appartNum5_5Icon').addClass('active');
		$('#appartNum5_5Table').addClass('active');
	})
	$('#appartNum5_6').click(function(){
		$('#appartNum5_6Icon').addClass('active');
		$('#appartNum5_6Table').addClass('active');
	})
	$('#appartNum6_1').click(function(){
		$('#appartNum6_1Icon').addClass('active');
		$('#appartNum6_1Table').addClass('active');
	})
	$('#appartNum6_2').click(function(){
		$('#appartNum6_2Icon').addClass('active');
		$('#appartNum6_2Table').addClass('active');
	})
	$('#appartNum6_3').click(function(){
		$('#appartNum6_3Icon').addClass('active');
		$('#appartNum6_3Table').addClass('active');
	})
	$('#appartNum6_4').click(function(){
		$('#appartNum6_4Icon').addClass('active');
		$('#appartNum6_4Table').addClass('active');
	})
	$('#appartNum6_5').click(function(){
		$('#appartNum6_5Icon').addClass('active');
		$('#appartNum6_5Table').addClass('active');
	})
	$('#appartNum6_6').click(function(){
		$('#appartNum6_6Icon').addClass('active');
		$('#appartNum6_6Table').addClass('active');
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
	$('#appartNum55').click(function(){
		$('#appartNum55Icon').addClass('active');
		$('#appartNum55Table').addClass('active');
	})
	$('#appartNum56').click(function(){
		$('#appartNum56Icon').addClass('active');
		$('#appartNum56Table').addClass('active');
	})
	$('#appartNum57').click(function(){
		$('#appartNum57Icon').addClass('active');
		$('#appartNum57Table').addClass('active');
	})
	$('#appartNum58').click(function(){
		$('#appartNum58Icon').addClass('active');
		$('#appartNum58Table').addClass('active');
	})
	$('#appartNum59').click(function(){
		$('#appartNum59Icon').addClass('active');
		$('#appartNum59Table').addClass('active');
	})
	$('#appartNum60').click(function(){
		$('#appartNum60Icon').addClass('active');
		$('#appartNum60Table').addClass('active');
	})
	$('#appartNum61').click(function(){
		$('#appartNum61Icon').addClass('active');
		$('#appartNum61Table').addClass('active');
	})
	$('#appartNum8_1').click(function(){
		$('#appartNum8_1Icon').addClass('active');
		$('#appartNum8_1Table').addClass('active');
	})
	$('#appartNum8_2').click(function(){
		$('#appartNum8_2Icon').addClass('active');
		$('#appartNum8_2Table').addClass('active');
	})
	$('#appartNum8_3').click(function(){
		$('#appartNum8_3Icon').addClass('active');
		$('#appartNum8_3Table').addClass('active');
	})
	$('#appartNum8_4').click(function(){
		$('#appartNum8_4Icon').addClass('active');
		$('#appartNum8_4Table').addClass('active');
	})

	$('#appartNum62').click(function(){
		$('#appartNum62Icon').addClass('active');
		$('#appartNum62Table').addClass('active');
	})
	$('#appartNum63').click(function(){
		$('#appartNum63Icon').addClass('active');
		$('#appartNum63Table').addClass('active');
	})
	$('#appartNum64').click(function(){
		$('#appartNum64Icon').addClass('active');
		$('#appartNum64Table').addClass('active');
	})
	$('#appartNum65').click(function(){
		$('#appartNum65Icon').addClass('active');
		$('#appartNum65Table').addClass('active');
	})
	$('#appartNum66').click(function(){
		$('#appartNum66Icon').addClass('active');
		$('#appartNum66Table').addClass('active');
	})
	$('#appartNum67').click(function(){
		$('#appartNum67Icon').addClass('active');
		$('#appartNum67Table').addClass('active');
	})
	$('#appartNum68').click(function(){
		$('#appartNum68Icon').addClass('active');
		$('#appartNum68Table').addClass('active');
	})
	$('#appartNum69').click(function(){
		$('#appartNum69Icon').addClass('active');
		$('#appartNum69Table').addClass('active');
	})
	$('#appartNum70').click(function(){
		$('#appartNum70Icon').addClass('active');
		$('#appartNum70Table').addClass('active');
	})
	$('#appartNum71').click(function(){
		$('#appartNum71Icon').addClass('active');
		$('#appartNum71Table').addClass('active');
	})
	$('#appartNum72').click(function(){
		$('#appartNum72Icon').addClass('active');
		$('#appartNum72Table').addClass('active');
	})
	$('#appartNum73').click(function(){
		$('#appartNum73Icon').addClass('active');
		$('#appartNum73Table').addClass('active');
	})
	$('#appartNum74').click(function(){
		$('#appartNum74Icon').addClass('active');
		$('#appartNum74Table').addClass('active');
	})
	$('#appartNum75').click(function(){
		$('#appartNum75Icon').addClass('active');
		$('#appartNum75Table').addClass('active');
	})
	$('#appartNum75').click(function(){
		$('#appartNum75Icon').addClass('active');
		$('#appartNum75Table').addClass('active');
	})
	$('#appartNum76').click(function(){
		$('#appartNum76Icon').addClass('active');
		$('#appartNum76Table').addClass('active');
	})
	$('#appartNum77').click(function(){
		$('#appartNum77Icon').addClass('active');
		$('#appartNum77Table').addClass('active');
	})
	$('#appartNum78').click(function(){
		$('#appartNum78Icon').addClass('active');
		$('#appartNum78Table').addClass('active');
	})
	$('#appartNum79').click(function(){
		$('#appartNum79Icon').addClass('active');
		$('#appartNum79Table').addClass('active');
	})
	$('#appartNum80').click(function(){
		$('#appartNum80Icon').addClass('active');
		$('#appartNum80Table').addClass('active');
	})
	$('#appartNum81').click(function(){
		$('#appartNum81Icon').addClass('active');
		$('#appartNum81Table').addClass('active');
	})
	$('#appartNum82').click(function(){
		$('#appartNum82Icon').addClass('active');
		$('#appartNum82Table').addClass('active');
	})
	$('#appartNum83').click(function(){
		$('#appartNum83Icon').addClass('active');
		$('#appartNum83Table').addClass('active');
	})
	$('#appartNum84').click(function(){
		$('#appartNum84Icon').addClass('active');
		$('#appartNum84Table').addClass('active');
	})
	$('#appartNum85').click(function(){
		$('#appartNum85Icon').addClass('active');
		$('#appartNum85Table').addClass('active');
	})
	$('#appartNum86').click(function(){
		$('#appartNum86Icon').addClass('active');
		$('#appartNum86Table').addClass('active');
	})
	$('#appartNum86').click(function(){
		$('#appartNum86Icon').addClass('active');
		$('#appartNum86Table').addClass('active');
	})
	$('#appartNum87').click(function(){
		$('#appartNum87Icon').addClass('active');
		$('#appartNum87Table').addClass('active');
	})
	$('#appartNum88').click(function(){
		$('#appartNum88Icon').addClass('active');
		$('#appartNum88Table').addClass('active');
	})
	$('#appartNum89').click(function(){
		$('#appartNum89Icon').addClass('active');
		$('#appartNum89Table').addClass('active');
	})
	$('#appartNum90').click(function(){
		$('#appartNum90Icon').addClass('active');
		$('#appartNum90Table').addClass('active');
	})
	$('#appartNum91').click(function(){
		$('#appartNum91Icon').addClass('active');
		$('#appartNum91Table').addClass('active');
	})
	$('#appartNum92').click(function(){
		$('#appartNum92Icon').addClass('active');
		$('#appartNum92Table').addClass('active');
	})
	$('#appartNum93').click(function(){
		$('#appartNum93Icon').addClass('active');
		$('#appartNum93Table').addClass('active');
	})
	$('#appartNum94').click(function(){
		$('#appartNum94Icon').addClass('active');
		$('#appartNum94Table').addClass('active');
	})
	$('#appartNum95').click(function(){
		$('#appartNum95Icon').addClass('active');
		$('#appartNum95Table').addClass('active');
	})
	$('#appartNum96').click(function(){
		$('#appartNum96Icon').addClass('active');
		$('#appartNum96Table').addClass('active');
	})
	$('#appartNum97').click(function(){
		$('#appartNum97Icon').addClass('active');
		$('#appartNum97Table').addClass('active');
	})
	$('#appartNum98').click(function(){
		$('#appartNum98Icon').addClass('active');
		$('#appartNum98Table').addClass('active');
	})
	$('#appartNum99').click(function(){
		$('#appartNum99Icon').addClass('active');
		$('#appartNum99Table').addClass('active');
	})
	$('#appartNum100').click(function(){
		$('#appartNum100Icon').addClass('active');
		$('#appartNum100Table').addClass('active');
	})
	$('#appartNum101').click(function(){
		$('#appartNum101Icon').addClass('active');
		$('#appartNum101Table').addClass('active');
	})
	$('#appartNum102').click(function(){
		$('#appartNum102Icon').addClass('active');
		$('#appartNum102Table').addClass('active');
	})
	$('#appartNum102').click(function(){
		$('#appartNum102Icon').addClass('active');
		$('#appartNum102Table').addClass('active');
	})
	$('#appartNum103').click(function(){
		$('#appartNum103Icon').addClass('active');
		$('#appartNum103Table').addClass('active');
	})
	$('#appartNum104').click(function(){
		$('#appartNum104Icon').addClass('active');
		$('#appartNum104Table').addClass('active');
	})
	$('#appartNum105').click(function(){
		$('#appartNum105Icon').addClass('active');
		$('#appartNum105Table').addClass('active');
	})
	$('#appartNum106').click(function(){
		$('#appartNum106Icon').addClass('active');
		$('#appartNum106Table').addClass('active');
	})
	$('#appartNum107').click(function(){
		$('#appartNum107Icon').addClass('active');
		$('#appartNum107Table').addClass('active');
	})
	$('#appartNum108').click(function(){
		$('#appartNum108Icon').addClass('active');
		$('#appartNum108Table').addClass('active');
	})
	$('#appartNum109').click(function(){
		$('#appartNum109Icon').addClass('active');
		$('#appartNum109Table').addClass('active');
	})
	$('#appartNum110').click(function(){
		$('#appartNum110Icon').addClass('active');
		$('#appartNum110Table').addClass('active');
	})
	$('#appartNum111').click(function(){
		$('#appartNum111Icon').addClass('active');
		$('#appartNum111Table').addClass('active');
	})
	$('#appartNum112').click(function(){
		$('#appartNum112Icon').addClass('active');
		$('#appartNum112Table').addClass('active');
	})
	$('#appartNum113').click(function(){
		$('#appartNum113Icon').addClass('active');
		$('#appartNum113Table').addClass('active');
	})
	$('#appartNum114').click(function(){
		$('#appartNum114Icon').addClass('active');
		$('#appartNum114Table').addClass('active');
	})
	$('#appartNum115').click(function(){
		$('#appartNum115Icon').addClass('active');
		$('#appartNum115Table').addClass('active');
	})
	$('#appartNum116').click(function(){
		$('#appartNum116Icon').addClass('active');
		$('#appartNum116Table').addClass('active');
	})
	$('#appartNum117').click(function(){
		$('#appartNum117Icon').addClass('active');
		$('#appartNum117Table').addClass('active');
	})
	$('#appartNum118').click(function(){
		$('#appartNum118Icon').addClass('active');
		$('#appartNum118Table').addClass('active');
	})
	$('#appartNum119').click(function(){
		$('#appartNum119Icon').addClass('active');
		$('#appartNum119Table').addClass('active');
	})
	$('#appartNum120').click(function(){
		$('#appartNum120Icon').addClass('active');
		$('#appartNum120Table').addClass('active');
	})
	$('#appartNum121').click(function(){
		$('#appartNum121Icon').addClass('active');
		$('#appartNum121Table').addClass('active');
	})
	$('#appartNum122').click(function(){
		$('#appartNum122Icon').addClass('active');
		$('#appartNum122Table').addClass('active');
	})
	$('#appartNum123').click(function(){
		$('#appartNum123Icon').addClass('active');
		$('#appartNum123Table').addClass('active');
	})
	$('#appartNum124').click(function(){
		$('#appartNum124Icon').addClass('active');
		$('#appartNum124Table').addClass('active');
	})
	$('#appartNum125').click(function(){
		$('#appartNum125Icon').addClass('active');
		$('#appartNum125Table').addClass('active');
	})
	$('#appartNum126').click(function(){
		$('#appartNum126Icon').addClass('active');
		$('#appartNum126Table').addClass('active');
	})
	$('#appartNum127').click(function(){
		$('#appartNum127Icon').addClass('active');
		$('#appartNum127Table').addClass('active');
	})
	$('#appartNum128').click(function(){
		$('#appartNum128Icon').addClass('active');
		$('#appartNum128Table').addClass('active');
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

	
	$('#BlockA .floor-2').hover(
	  function() {
	    $(this).siblings('.floor-2').addClass('active');
	    $('.block_info>.floor>.number').text('3');
	  }, function() {
	    $(this).siblings('.floor-2').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
	  }
	);
	$('#BlockA .floor-3').hover(
	  function() {
	    $(this).siblings('.floor-3').addClass('active');
	    $('.block_info>.floor>.number').text('4');
	  }, function() {
	    $(this).siblings('.floor-3').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
	  }
	);
	$('#BlockA .floor-4').hover(
	  function() {
	    $(this).siblings('.floor-4').addClass('active');
	    $('.block_info>.floor>.number').text('5');
	  }, function() {
	    $(this).siblings('.floor-4').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
	  }
	);
	$('#BlockA .floor-5').hover(
	  function() {
	    $(this).siblings('.floor-5').addClass('active');
	    $('.block_info>.floor>.number').text('6');
	  }, function() {
	    $(this).siblings('.floor-5').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
	  }
	);
	$('#BlockA .floor-6').hover(
	  function() {
	    $(this).siblings('.floor-6').addClass('active');
	    $('.block_info>.floor>.number').text('7');
	  }, function() {
	    $(this).siblings('.floor-6').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
	  }
	);
	$('#BlockA .floor-7').hover(
	  function() {
	    $(this).siblings('.floor-7').addClass('active');
	    $('.block_info>.floor>.number').text('8');
	  }, function() {
	    $(this).siblings('.floor-7').removeClass('active');
	    let index = $('.floor.checked').index()/2;
	    $('.block_info>.floor>.number').text(++index+2);
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
