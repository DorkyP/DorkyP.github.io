/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

	// Activate Bootstrap scrollspy on the main nav element
	const sideNav = document.body.querySelector('#sideNav');
	if (sideNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#sideNav',
			offset: 74,
		});
	};

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});

	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		loop: true,
		typeSpeed: 70,
		backSpeed: 50,
		backDelay: 1000
	});

	const btn = document.getElementById("showNames");
	const skillsListIcons = document.getElementById("skillsListIcons");
	const skillsListNames = document.getElementById("skillsListNames");
	btn.onclick = function () {
		if (btn.innerText == "Show names") {
			console.log("Showing text");
			btn.innerText = "Hide names";
			skillsListIcons.style.display = "none";
			skillsListNames.style.display = "block";
		} else {
			console.log("Hiding text");
			btn.innerText = "Show names";
			skillsListIcons.style.display = "block";
			skillsListNames.style.display = "none";
		}
	};
});