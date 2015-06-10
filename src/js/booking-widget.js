(function () {
	// BOOKING FORM WIDGET
	if (typeof gigwell != 'object') return;
	if (typeof gigwell.agencyId == 'undefined') return;
	gigwell.iframeName = gigwell.iframeName || 'gigwell-iframe';
	gigwell.container = gigwell.container || 'gigwell-container';
	gigwell.baseUrl = gigwell.baseUrl || 'http://localhost:8080/';
	gigwell.apiUrl = gigwell.apiUrl || 'http://green.dev.gig-well.com/';
	gigwell.formDisplayMode = gigwell.formDisplayMode || 'inline';
	
	var url = gigwell.baseUrl + "src/booking.html?v=[TMS]&artist-id=[ARTIST]&" +
			  "agency-id=[AGENCY]&iframeOrigin=[ORIGIN]&apiUrl=[API]&display=[DISPLAY]";
	var callbackExecuted = false;
	var bookingbtn = null;
	
	window.addEventListener('message', function(event) {
		if (!event || !event.data) return;
		try {
			var data = JSON.parse(event.data);
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
						bookingbtn.style.display = 'inline-block';
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
	});
	
	var gwInit = function () {
		/* global escape */
		url = url.replace('[TMS]', new Date().getTime())
				 .replace('[ARTIST]', gigwell.artistId? gigwell.artistId:'')
				 .replace('[AGENCY]', gigwell.agencyId)
				 .replace('[ORIGIN]', escape(getOrigin(location.href)))
				 .replace('[API]', escape(gigwell.apiUrl))
				 .replace('[DISPLAY]', gigwell.formDisplayMode);
		
		if (typeof gigwell.preview == 'object') url += '&preview=true';
		
		var container = document.getElementById(gigwell.container);
		bookingbtn = createBtn(url);
		container.appendChild(bookingbtn);
		
		bookingbtn.onclick = function() {
			this.style.display = 'none';
			container.appendChild(createIFrame(url));
			callbackExecuted = false;
			return false;
		};
	};

	var createBtn = function(src) {
        var btn = document.createElement('a');
        btn.setAttribute('href',src);
        btn.setAttribute('class','booking');
        btn.innerHTML = "Booking Form";
        return btn;
	};
	
	var createIFrame = function(src) {

        var iFrame = document.createElement('iframe');
        iFrame.id = gigwell.iframeName;
        iFrame.width = '100%';
        iFrame.height= '100%';
        iFrame.frameborder = '0';
        iFrame.allowTransparency = true;
        iFrame.src = src;

		if(gigwell.formDisplayMode !== 'modal'){
			iFrame.scrolling = 'no';
			iFrame.style.cssText = 'width: 100%; overflow:hidden; border:0; padding: 0; margin: 0;';
		} else {
			iFrame.scrolling = 'yes';
			iFrame.style.cssText = 'position:fixed; width: 100%; height: 100%; overflow:scroll; border:0; padding: 0; margin: 0; left: 0; top: 0;';
		}
        
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
	
	gwInit();
})();
