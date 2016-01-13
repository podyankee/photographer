(function  () {
	var documentElem = $(document),
		projectVisibleContent = $('.project-visible-content'),
		projectExtraToggleBtn = projectVisibleContent.find('.project-extra-toggle'),
		nav = $('nav'),
		navigateElems = $('nav li a, .continue-btn'),
		htmlBody = $('html, body'),
		lastScrollTop = 0;
	
documentElem.on('scroll', function  () {
	var currentScrollTop = $(this).scrollTop();
	(currentScrollTop > lastScrollTop) ? nav.addClass('hidden') : nav.removeClass('hidden');
	lastScrollTop = currentScrollTop;
});
	
	navigateElems.on('click', function  (e) {
		var targetElem = $($(this).data('scroll-target')),
			targetOffsetTop = targetElem.offset().top;
		
		htmlBody.animate({
			scrollTop: targetOffsetTop
		}, 400);
		
		e.preventDefault();
	});
	
	projectExtraToggleBtn.on('click', function  (e) {
		
		var self = $(this),
			closestExtra = self.closest('.project').find('.project-extra');
		
		closestExtra.slideToggle(400, function  () {
			(closestExtra.is(':visible'))
? self.text('Less') : self.text('More');
		});
		
		e.preventDefault();
	});
	
})();
