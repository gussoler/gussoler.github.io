(function () {
	// BOOKING FORM
	if (typeof gigwell != 'object') return;
	if (typeof gigwell.agencyId == 'undefined') return;
	gigwell.iframeName = gigwell.iframeName || 'gigwell-iframe';
	gigwell.container = gigwell.container || 'gigwell-container';
	
	var url = "http://gussoler.github.io/src/booking.html?v=[TMS]&artist-id=[ARTIST]&agency-id=[AGENCY]&iframeOrigin=[ORIGIN]";
	var callbackExecuted = false;
	var bookingbtn = null;
	var url;
	
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
	
	window.addEventListener('message', function(event) {
		if (event && event.data) {
			var data = null;
			try {
				data = JSON.parse(event.data);
				if (data !== null) {
					if (data.name === 'gigwell:resize:iframe') {
						var iFrame = document.getElementById(gigwell.iframeName);
						if (iFrame !== null) iFrame.height = data.height;
						if (!callbackExecuted && typeof gigwell.onBooking == 'function') {
							callbackExecuted = true;
							gigwell.onBooking();
						}
						
					} else if (data.name === 'gigwell:close:iframe') {
						var iFrame = document.getElementById(gigwell.iframeName);
						if (iFrame !== null) {
							bookingbtn.show();
							iFrame.remove();
						}
						
					} else if (data.name === 'gigwell:preview:sendData' && gigwell.preview) {
						var data = {
							name : 'gigwell:preview:data',
							json : gigwell.preview
						};
						document.getElementById(gigwell.iframeName).contentWindow.postMessage(JSON.stringify(data), getOrigin(url));
					}
				}
			} catch (e) {
				/* TODO: report failure stats */
			}
		}
	});
	
	var gwInit = function (gw$) {
		url = url.replace('[TMS]', new Date().getTime())
				 .replace('[ARTIST]', gigwell.artistId? gigwell.artistId:'')
				 .replace('[AGENCY]', gigwell.agencyId)
				 .replace('[ORIGIN]', escape(getOrigin(location.href))); /* global escape */
		
		if (typeof gigwell.preview == 'object') url += '&preview=true';
		
		var container = gw$(document.getElementsByClassName(gigwell.container));
		bookingbtn = gw$('<a href="'+url+'" class="booking">Booking Form</a>');
		container.html(bookingbtn);
		
		gw$(bookingbtn).click(function() {
			bookingbtn.hide();
			container.append(createIFrame(url));
			callbackExecuted = false;
			return false;
		});
	}
	
	var createIFrame = function(src) {
        var iFrame = document.createElement('iframe');
        iFrame.id = gigwell.iframeName;
        iFrame.style.cssText = 'width: 100%; overflow:hidden; border:0; padding: 0; margin: 0;';
        iFrame.width = '100%';
        iFrame.height= '100%';
        iFrame.scrolling = 'no';
        iFrame.frameborder = '0';
        iFrame.allowTransparency = true;
        iFrame.src = src;
        
        try {
        	/* html5 specials */
        	iFrame.seamless = true;
        }
        catch (e) {
        	/* TODO: report failure stats */
        }
        return iFrame;
	};
	
	var getOrigin = function(origin) {
		if (origin.indexOf('?') > -1)
			origin = origin.split('?')[0];
		return origin;
	};
})();