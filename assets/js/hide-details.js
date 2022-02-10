(function($) {
	$.fn.hideDetails = function(options) {

		var settings = $.extend({
			showDetails: 3,
			linkClass: 'tel-link',
			aStyle: 'tel'
		}, options);

		return this.each(function() {
			var asciiData = $(this).data("ascii"),
					htmlData = $(this).html(),
					myRegex = /[\s-\(\()]/g,
					newData = asciiData.replace(myRegex, '');

			$(this).html(asciiData.substr(0, settings.showDetails) + " " + htmlData);

			$(this).find('a').on('click', function(e) {
				e.preventDefault();
				$(this).parent().html("<a href='"+ settings.aStyle + ":" + newData + "' class='" + settings.linkClass + "'>" + asciiData + "</a>")
			})

		});
	};
}(jQuery));

$('.phone').hideDetails({
	linkClass: 'tel-link',
	aStyle: 'tel'
});

$('.email').hideDetails({
	showDetails: 4,
	linkClass: 'mail-to',
	aStyle: 'mailto'
});