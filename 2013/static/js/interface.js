$(document).ready(function(){
	var $body = $('body');

	// Como Funciona
	if ($body.hasClass('page-como-funciona')) {
		var $group = $('body .instructions'),
			$items = $group.find('>.instruction');
		$group.show().height(195);
		$items.fadeTo(0,0);
		$(window).scroll(function(){
			var $win = $(this),
				top = $win.scrollTop(),
				height = $win.height()
				size = top + height;
			if (size > 740) {
				$items.eq(0).stop().fadeTo('slow',1);
				$group.stop().animate({ height : 490 }, 'slow').css('overflow', 'visible');
			} else {
				$group.stop().animate({ height : 195 }, 'slow').css('overflow', 'visible');
				$items.eq(0).stop().fadeTo('slow',0);
			}
			if (size > 1040) {
				$items.eq(1).stop().fadeTo('slow',1);
				$group.stop().animate({ height : 750 }, 'slow').css('overflow', 'visible');
			} else if (size < 740) {
				$group.stop().animate({ height : 195 }, 'slow').css('overflow', 'visible');
				$items.eq(0).stop().fadeTo('slow',0);
			} else {
				$items.eq(1).stop().fadeTo('slow',0);
				$group.stop().animate({ height : 490 }, 'slow').css('overflow', 'visible');
			}
			if (size > 1210)
				$items.eq(2).stop().fadeTo('slow',1);
			else
				$items.eq(2).stop().fadeTo('slow',0);
		}).trigger('scroll');
	}
});