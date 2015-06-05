(function () {
	// BOOKING FORM
	var url = "//gussoler.github.io/src/booking.html?artist-id=[ARTIST]"
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
	script.async = true;
	document.getElementsByTagName("head")[0].appendChild(script);
	gwInit();
	
	function gwInit() {
		if (typeof $ == 'undefined') {
			setTimeout(function() { gwInit(); }, 0);
			return;
		}
		
		var gw$ = $.noConflict(true);
		var bookingbtn = gw$('<a href="'+url+'" class="booking">Booking Form</a>');
		gw$("div.gigwell-container").html(bookingbtn);
		
		gw$(bookingbtn).click(function() {
			var container = gw$([
   		      '<iframe src="'+url+'" width="99%" height="100%" margin="0" frameborder="0">',
   		      '</iframe>',
   		    ].join(' '));
			
			var closebtn = gw$('<a href="#" class="close-gigwell-container">close</a>');
			gw$(closebtn).click(function() {
				gw$("div.gigwell-overlay").remove();
				gw$("a.close-gigwell-container").remove();
				bookingbtn.show();
				return false;
			});
			
			var overlay = gw$('<div class="gigwell-overlay"></div>');
			gw$("div.gigwell-container").after(overlay);
			overlay.before(closebtn);
			overlay.html(container);
			overlay.css({
			    position:  'absolute',
			    width:     '100%',
			    height:    '100%'
			});
			
			bookingbtn.hide();
			return false;
		});
	}
})();
