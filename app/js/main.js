$(function () {

	$('.header__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrows-right.svg" alt="">',
		asNavFor: '.slider-dotshead',
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header__slider',
	});

	$('.serf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrows-right.svg" alt="">',
		asNavFor: '.slider-map',
		responsive: [
			{
				breakpoint: 1290,
				settings: {
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 970,
				settings: {
					centerMode: true,
					centerPadding: '10px',
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 650,
				settings: {
					centerMode: true,
					centerPadding: '1px',
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.serf-slider',
		focusOnSelect: true,
	});

	$('.holder__slider, .shop__slider').slick({
		infinite: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows__left" src="../img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows__right" src="../img/arrows-right.svg" alt="">',
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="Plus"></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="Minus"></div></div>').insertAfter('.quantity input');
	$('.quantity').each(function () {
		var spinner = $(this),
			input = spinner.find('input[type="number"]'),
			btnUp = spinner.find('.quantity-up'),
			btnDown = spinner.find('.quantity-down'),
			min = input.attr('min'),
			max = input.attr('max');

		btnUp.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function () {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

	});

	$('.quantity-button').on('click', function () {
		let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
		$('.summ').html('$' + summ);
	});

	let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
	$('.summ').html('$' + summ);


	$('.surfboard-box__circle').on('click', function () {
		$(this).toggleClass('active');
	});


	new WOW().init();

});