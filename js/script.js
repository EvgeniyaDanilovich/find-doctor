"use strict";

//=====================================================================

$('.header-menu__icon').click(function (event) {
	$(this).toggleClass('active');
	$('.header-menu__menu').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//=====================================================================

//Full-screen экран

$(window).resize(function (event) {
	mainblock();
});
function mainblock() {
	var h = $(window).outerHeight();
	$('.mainblock').css('min-height', h);
}
mainblock();

//=====================================================================

//Отправка формы на email

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let formData = new FormData(form);

		form.classList.add('_sending');

		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			let result = await response.join();
			alert(result.message);
			formPreview.innerHTML = '';
			form.reset();
			form.classList.remove('_sending');
		}
		else {
			alert('mistake');
			form.classList.remove('_sending');
		}

	}

});

//=====================================================================







