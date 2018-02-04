"use strict";

function updateTotalPrice(_this, newVal) {
	var parentTd     = _this.parents('td'),
		productPrice = (parentTd.prev().text()).replace('$', ''),
		totalPrice   = newVal * parseFloat(productPrice);
	parentTd.next().text('$' + totalPrice.toFixed(2));
}

var body       = jQuery('body'),
	mainHeader = jQuery("#main-header");

jQuery(document).ready(function () {

	// Enable Menu menu toggling
	jQuery('#main-menu-handle').on('click', function () {
		if (body.hasClass('header-type-3') || body.hasClass('header-type-2') || body.hasClass('header-type-1')) {
			jQuery(this).toggleClass('active');
			jQuery('#mobile-menu').slideToggle();
		} else {
			jQuery(this).toggleClass('active').next('.main-menu').slideToggle();
		}
	});

	var sortHandle = jQuery('.sort-handle');
	if (sortHandle.length > 0) {
		sortHandle.on('click', function () {
			jQuery(this).toggleClass('active').next('ul').slideToggle();
		});
	}
	jQuery('.animated-box').on('inview', function (event, isInView) {
		if (isInView) {
			var _this          = jQuery(this),
				animationType  = _this.data('animation'),
				animationDelay = _this.data('delay');
			animationDelay ? setTimeout(function () {
				_this.addClass(animationType);
			}, animationDelay) : _this.addClass(animationType);
		}
	});

	jQuery('[data-bg-img]').each(function () {
		var _this = jQuery(this);
		_this.css('background-image', 'url(' + _this.data('bg-img') + ')');
	});

	var mainSlider = jQuery("#main-slider");
	if (mainSlider.length > 0 && jQuery.fn.owlCarousel) {
		// Main Slider
		mainSlider.owlCarousel({
			nav:      !0,
			loop:     !0,
			items:    1,
			dots:     !1,
			autoplay: !0
		});
	}

	var testiSlider = jQuery("#testimonials").find('.owl-carousel');
	if (testiSlider.length > 0 && jQuery.fn.owlCarousel) {
		// Testimonial Slider
		testiSlider.owlCarousel({
			nav:      !0,
			loop:     !0,
			items:    1,
			dots:     !1,
			autoplay: !0
		});
	}

	var whatNew = jQuery("#whats-new").find('.owl-carousel');
	if (whatNew.length > 0 && jQuery.fn.owlCarousel) {
		// Main Slider
		whatNew.owlCarousel({
			nav:        !0,
			dots:       !1,
			autoplay:   !0,
			responsive: {
				0:    {
					items: 1
				},
				600:  {
					items: 1
				},
				980:  {
					items: 2
				},
				1200: {
					items: 3
				},
				1600: {
					items: 4
				},
				1800: {
					items: 5
				}
			}
		});
	}


	var mainImgContainer = jQuery(".image-main-box, .image-container");
	// Enable the magnificPopup
	jQuery.fn.magnificPopup && mainImgContainer.magnificPopup({
		delegate:     '.item:not(":hidden") .more-details',
		type:         'image',
		removalDelay: 600,
		mainClass:    'mfp-fade',
		gallery:      {
			enabled:            true,
			navigateByImgClick: true,
			preload:            [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image:        {
			titleSrc: 'data-title',
			tError:   '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});


	// Enable isotop for gallery
	if (jQuery.fn.imagesLoaded) {
		mainImgContainer.isotope({
			transitionDuration: "0.7s"
		});
		mainImgContainer.imagesLoaded(function () {
			mainImgContainer.isotope("layout");
			jQuery(".sort-section-container").on("click", "a", function (e) {
				e.preventDefault();
				jQuery(".sort-section-container a").removeClass("active");
				jQuery(this).addClass("active");
				var filterValue = jQuery(this).attr("data-filter");
				mainImgContainer.isotope({filter: filterValue});
			});
		});
	}


	var mainSliderT2 = jQuery("#main-slider-type-2");
	if (mainSliderT2.length > 0 && jQuery.fn.owlCarousel) {
		// Main Slider Type 2
		mainSliderT2.owlCarousel({
			nav:           !0,
			autoplay:      !0,
			autoplaySpeed: 1000,
			dots:          !1,
			loop:          !0,
			items:         1,
			responsive:    {
				0:    {
					stagePadding: 0,
					margin:       0
				},
				300:  {
					stagePadding: 0,
					margin:       0
				},
				600:  {
					stagePadding: 30,
					margin:       10
				},
				992:  {
					stagePadding: 100,
					margin:       20
				},
				1200: {
					stagePadding: 200,
					margin:       40
				},
				1718: {
					stagePadding: 300,
					margin:       80
				}
			}
		});
	}

	var mainSliderT3 = jQuery("#main-slider-type-3");
	if (mainSliderT3.length > 0 && jQuery.fn.owlCarousel) {
		var firstImg = mainSliderT3.find('.items').first().find('img').attr('src');
		mainSliderT3.css('background-image', 'url(' + firstImg + ')');
		// Main Slider Type 2
		mainSliderT3.find('.owl-carousel').owlCarousel({
			nav:           !0,
			autoplay:      !0,
			autoplaySpeed: 1000,
			dots:          !1,
			loop:          !0,
			items:         1,
			animateOut:    'fadeOut'
		});
		mainSliderT3.on('changed.owl.carousel', function (event) {
			var itemIndex  = event.item.index,
				currentImg = mainSliderT3.find('.owl-item').eq(itemIndex).find('img').attr('src');
			mainSliderT3.css('background-image', 'url(' + currentImg + ')');
		});
	}

	jQuery.fn.magnificPopup && jQuery('.video-url').magnificPopup({
		disableOn:       700,
		type:            'iframe',
		mainClass:       'mfp-fade',
		removalDelay:    600,
		preloader:       false,
		fixedContentPos: false
	});

	// Enable isotop for testimonials
	if (jQuery.fn.magnificPopup && jQuery.fn.imagesLoaded) {
		var testimonialContainer = jQuery('#testimonials.type-2').find('.box-container');
		testimonialContainer.isotope({
			transitionDuration: "0.7s"
		});
	}

	var socialSlider = jQuery("#social-networks.type-2, .clients-section").find('.owl-carousel');
	if (socialSlider.length > 0 && jQuery.fn.owlCarousel) {
		// Social Networks Slider
		socialSlider.owlCarousel({
			nav:        !0,
			dots:       !1,
			autoplay:   !0,
			loop:       !0,
			responsive: {
				0:    {
					items: 4
				},
				300:  {
					items: 1
				},
				600:  {
					items: 2
				},
				992:  {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}


	// Google Map
	function initialize() {
		var myLatLng   = new google.maps.LatLng(40.6700, -73.9400);
		var mapOptions = {
			zoom:               15,
			center:             myLatLng,
			// This is where you would paste any style found on Snazzy Maps.
			styles:             [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers":     [{"color": "#e9e9e9"}, {"lightness": 17}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers":     [{"color": "#f5f5f5"}, {"lightness": 20}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers":     [{"color": "#ffffff"}, {"lightness": 17}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers":     [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers":     [{"color": "#ffffff"}, {"lightness": 18}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers":     [{"color": "#ffffff"}, {"lightness": 16}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers":     [{"color": "#f5f5f5"}, {"lightness": 21}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers":     [{"color": "#dedede"}, {"lightness": 21}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers":     [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
			}, {
				"elementType": "labels.text.fill",
				"stylers":     [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
			}, {"elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers":     [{"color": "#f2f2f2"}, {"lightness": 19}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers":     [{"color": "#fefefe"}, {"lightness": 20}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers":     [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
			}],
			// Extra options
			scrollwheel:        false,
			mapTypeControl:     false,
			panControl:         false,
			zoomControlOptions: {
				style:    google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.LEFT_BOTTOM
			}
		};
		var mapBox     = document.getElementById("google-map");
		var map        = new google.maps.Map(mapBox, mapOptions);

		var image = mapBox.getAttribute("data-marker");

		new google.maps.Marker({
			position: myLatLng,
			map:      map,
			icon:     image
		});
	}

	if (typeof google != 'undefined') {
		google.maps.event.addDomListener(window, "load", initialize);
	}


	// Send contact information
	var contactFormBox = jQuery('#contact-form-box');
	if (contactFormBox.length > 0) {
		contactFormBox.on('submit', function (e) {
			e.preventDefault();

			var _this      = jQuery(this),
				messageBox = _this.find('.message-box');

			jQuery.ajax({
				type:     'POST',
				dataType: 'json',
				url:      '../forms/contact.php',
				data:     {
					'name':    _this.find('#contact-name').val(),
					'phone':   _this.find('#contact-phone').val(),
					'email':   _this.find('#contact-email').val(),
					'message': _this.find('#contact-message').val()
				},
				success:  function (data) {
					if (data.status == true) {
						messageBox.addClass('alert alert-success').text(data.message);
					} else {
						messageBox.addClass('alert alert-danger').text(data.message);
					}
				}
			});
		})
	}


	var hGallery          = jQuery('.gallery-horizontal-image-container, .portfolio-horizontal-image-container'),
		hGalleryItems     = hGallery.find('.item'),
		hGalleryContainer = hGallery.find('.image-container');
	if (hGallery.length > 0) {
		hGalleryContainer.width((hGalleryItems.length) * (hGalleryItems.outerWidth()));
		hGallery.mCustomScrollbar({
			axis:          "x",
			scrollButtons: {
				enable:       !0,
				scrollAmount: 30
			},
			advanced:      {
				autoExpandHorizontalScroll: !0,
				updateOnContentResize:      !1,
				updateOnImageLoad:          !1
			}
		});
		jQuery(window).on('resize', function () {
			hGalleryContainer.width((hGalleryItems.length) * (hGalleryItems.outerWidth()));
			hGallery.mCustomScrollbar("update");
		});
	}

	if (body.hasClass('gallery-slideshow')) {
		var gallerySlideShow = jQuery('#gallery-slideshow'),
			mainImgSlider    = gallerySlideShow.find(".main-image-slider"),
			thumbImgSlider   = gallerySlideShow.find(".thumbnail-slider"),
			duration         = 700;

		mainImgSlider.owlCarousel({
			loop:      !0,
			nav:       !0,
			items:     1,
			dots:      !1,
			navSpeed:  700,
			autoplay:  !0,
			onChanged: function (e) {
				var targetIndex = (e.item.index - (e.relatedTarget.clones().length / 2));
				thumbImgSlider.trigger('to.owl.carousel', [targetIndex, duration, true]);
				thumbImgSlider.find('.owl-item').removeClass('synced').eq(targetIndex).addClass('synced');
			}
		});

		thumbImgSlider.owlCarousel({
			nav:        !1,
			dots:       !1,
			responsive: {
				0:    {
					items: 2
				},
				600:  {
					items: 3
				},
				1000: {
					items: 4
				}
			},
			onChanged:  function (e) {
				mainImgSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
				thumbImgSlider.find('.owl-item').removeClass('synced').eq(e.item.index).addClass('synced');
			}
		}).on('click', '.owl-item', function () {
			mainImgSlider.trigger('to.owl.carousel', [jQuery(this).index(), duration, true]);
		});
	}

	var pItemContainer = jQuery(".p-item-container");
	// Enable the magnificPopup
	jQuery.fn.magnificPopup && pItemContainer.magnificPopup({
		delegate:     '.more-details',
		type:         'image',
		removalDelay: 600,
		mainClass:    'mfp-fade',
		gallery:      {
			enabled:            true,
			navigateByImgClick: true,
			preload:            [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image:        {
			titleSrc: 'data-title',
			tError:   '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

	var sideMenu = mainHeader.find('.side-menu');
	jQuery('#menu-handle').on('click', function () {
		sideMenu.addClass('active');
	});

	sideMenu.find('.close-btn').on('click', function () {
		sideMenu.removeClass('active');
	});

	var searchFrom = mainHeader.find('.main-search-form');
	mainHeader.find('.menu-icon-box').on('click', '.search', function (e) {
		e.preventDefault();
		searchFrom.addClass('active');
	});

	searchFrom.find('.close-btn').on('click', function () {
		searchFrom.removeClass('active');
	});

	var featuredProducts = jQuery(".featured-products").find('.owl-carousel');
	if (featuredProducts.length > 0 && jQuery.fn.owlCarousel) {
		// Main Slider
		featuredProducts.owlCarousel({
			nav:        !0,
			dots:       !1,
			autoplay:   !0,
			responsive: {
				0:    {
					items: 1
				},
				600:  {
					items: 1
				},
				980:  {
					items: 2
				},
				1200: {
					items: 3
				}
			}
		});
	}

	var counterBox = jQuery('.count-selector').find('.inner-box'),
		shopCard   = jQuery('#shop-card');
	counterBox.on('click', '.plus', function () {
		var _this           = jQuery(this),
			numberInput     = _this.prev('.number'),
			currentInputVal = parseInt(numberInput.val()),
			newVal          = currentInputVal + 1;

		numberInput.val(newVal);
		if (shopCard.length > 0) {
			updateTotalPrice(_this, newVal);
		}
	});

	counterBox.on('click', '.minus', function () {
		var _this           = jQuery(this),
			numberInput     = _this.next('.number'),
			currentInputVal = parseInt(numberInput.val()),
			newVal          = currentInputVal - 1;

		if (currentInputVal > 1) {
			numberInput.val(newVal);
			if (shopCard.length > 0) {
				updateTotalPrice(_this, newVal);
			}
		}
	});


	var tabBoxContainer = jQuery('.tab-titles'),
		tabTitleItem    = tabBoxContainer.children('ul').find('a');

	tabTitleItem.on('click', function (e) {
		e.preventDefault();
		var _this      = jQuery(this),
			clickedTab = _this.attr('href');
		_this.parent().addClass('active').siblings().removeClass('active');
		jQuery(clickedTab).addClass('active').siblings().removeClass('active');
	});

	var checkOut = jQuery('#shop-checkout'),
		boxTitle = checkOut.find('.main-title');

	boxTitle.on('click', function (e) {
		e.preventDefault();
		jQuery(this).next('.extra-box').slideToggle();
	});

	var countDownBox = jQuery('#count-down-counter');
	if (countDownBox.length > 0 && jQuery.fn.countdown) {
		// Start Counter from next 90 days
		var countDownDate = new Date().valueOf() + 7776000000;
		countDownBox.countdown(countDownDate, function (event) {
			var $this = jQuery(this).html(event.strftime('' +
				'<div class="day">' +
				'<div class="digit">%D</div>' +
				'<div class="unit">Day%!D</div>' +
				'</div>' +
				'<div class="hours">' +
				'<div class="digit">%H</div>' +
				'<div class="unit">Hour%!H</div>' +
				'</div>' +
				'<div class="minutes">' +
				'<div class="digit">%M</div>' +
				'<div class="unit">Minute%!M</div>' +
				'</div>' +
				'<div class="second">' +
				'<div class="digit">%S</div>' +
				'<div class="unit">Second%!S</div>' +
				'</div>'
			));
		});
	}

	if (body.hasClass('header-type-3')) {
		var mobileMenu = jQuery('<ul></ul>').appendTo('#mobile-menu');
		jQuery('#main-header').find('.main-menu').each(function () {
			jQuery(this).children('ul').children('li').clone().appendTo(mobileMenu);
		});
	}

	if (body.hasClass('header-type-2') || body.hasClass('header-type-1')) {
		jQuery('#main-header').find('.main-menu').children('ul').clone().removeClass('list-inline').appendTo('#mobile-menu');
	}

});

if (body.hasClass('sticky-header')) {
	jQuery(window).on('scroll', function () {
		jQuery(document).scrollTop() > 30 && mainHeader.addClass("sticky");
		jQuery(document).scrollTop() < 30 && mainHeader.removeClass("sticky");
	});
}