(function () {
	// BOOKING FORM
	if (typeof gigwell != 'object') return;
	if (typeof gigwell.agencyId == 'undefined') return;
	gigwell.iframeName = gigwell.iframeName || 'gigwell-iframe';
	gigwell.container = gigwell.container || 'gigwell-container';
	
	var url = "//gussoler.github.io/src/booking.html?v=[TMS]&artist-id=[ARTIST]&agency-id=[AGENCY]"
		.replace('[TMS]', new Date().getTime())
		.replace('[ARTIST]', gigwell.artistId? gigwell.artistId:'')
		.replace('[AGENCY]', gigwell.agencyId);
	
	if (typeof jQuery != 'function') {
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
		script.async = true;
		
		// Handle Script loading
	    var done = false;
	    
	    // Attach handlers for all browsers
		script.onload = script.onreadystatechange = function() {
			if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
				done = true;
				script.onload = script.onreadystatechange = null;
				head.removeChild(script);
				
				// callback function
				if (typeof jQuery == 'function') {
					// Super failsafe
					gwInit($.noConflict(true));
				}
			}
		};
	    
		head.appendChild(script);
	} else {
		gwInit(jQuery);
	}
	
	function gwInit(gw$) {
		var bookingbtn = gw$('<a href="'+url+'" class="booking">Booking Form</a>');
		gw$("div.gigwell-container").html(bookingbtn);
		
		gw$(bookingbtn).click(function() {
			var closebtn = gw$('<a href="#" class="close-gigwell-container" title="Cancel request">x</a>');
			gw$(closebtn).click(function() {
				gw$("div.gigwell-overlay").remove();
				gw$("a.close-gigwell-container").remove();
				bookingbtn.show();
				return false;
			});
			
			var container = gw$(document.getElementsByClassName(gigwell.container));
			var overlay = gw$('<div class="gigwell-overlay"></div>');
			container.after(overlay);
			overlay.before(closebtn);
			overlay.html(createIFrame());
			overlay.css({
			    position:  'absolute',
			    width:     '100%',
			    height:    '100%'
			});
			
			bookingbtn.hide();
			if (gigwell.onBooking) gigwell.onBooking();
			return false;
		});
	}
	
	function createIFrame() {
        var iFrame = document.createElement('iframe');
        iFrame.id = gigwell.iframeName;
        iFrame.style.cssText = 'width: 100%; overflow:hidden; border:0; padding: 0; margin: 0;';
        iFrame.width = '100%';
        iFrame.height= '100%';
        iFrame.scrolling = 'yes'; //no
        iFrame.frameborder = '0';
        iFrame.allowTransparency = true;
        iFrame.src = url;
        
        try { /* html5 specials */
          iFrame.seamless = true;
        }
        catch (e) {}
        return iFrame;
	}
})();