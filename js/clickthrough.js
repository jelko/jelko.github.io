"use strict";
$(function(){
	var ClickThroughController = {
		'COOKIE_NAME': 'click-through-state',
		'default_state': {},
		'init': function (){
			// make sure every non-on element is "off"
			//$(".click-through").find("[id]:not(.on)").addClass("off");
			this.default_state = this.getState();
			this.loadState();
			var self = this;


			var randomColor = require(['js/lib/randomColor.min'], function(randomColor){
				var color = randomColor({luminosity: 'dark', format: 'rgb'});
				document.documentElement.style.setProperty('--highlight-color-strong', color);
				document.documentElement.style.setProperty('--highlight-color', color.replace(')', ', 0.5)').replace('rgb', 'rgba'))
			});

			$('a[data-opens]').click(function() {
				var openedby = $(this).attr('data-opens');
				$('[id="' + openedby +'"]').removeClass('off').addClass('on');
				$(this).addClass('clicked');
				$("#reset").removeClass('off').addClass('on');
			});

			$('a[data-closes]').click(function() {
				var closedby = $(this).attr('data-closes');
				$('[id="' + closedby +'"]').removeClass('on').addClass('off');
				$(this).addClass('clicked');
			});
			$('.click-through a').click(function(){self.saveState()});

			$('#reset-btn').click(function(){
				self.resetState();
				window.location.reload();
			});

      $("body").addClass("loaded").removeClass("unloaded");
      $(".click-through").removeClass("hidden");
		},
		'getState': function(){
			var state = {
				'on': [],
				'off': [],
				'clicked': []
			}
			state.on = this.getIdsForClass('on');
			state.off = this.getIdsForClass('off');
			state.clicked = this.getIdsForClass('clicked');
			return state;
		},
		'getIdsForClass': function(class_name){
			var ids = [];
			$(".click-through").find("." + class_name + "[id]").each(function(){ids.push(this.id)});
			return ids;
		},
		'setCookie': function (cookiename, cookievalue, hours) {
	    var date = new Date();
	    date.setTime(date.getTime() + Number(hours) * 3600 * 1000);
	    document.cookie = cookiename + "=" + cookievalue + "; path=/;expires = " + date.toGMTString();
		},
		'getCookie': function (name) {
		  var value = "; " + document.cookie;
		  var parts = value.split("; " + name + "=");
		  if (parts.length == 2) return parts.pop().split(";").shift();
		},
		'resetState': function(){
			this.setCookie(this.COOKIE_NAME, "", 24*365);
		},
		'saveState': function(){
			var state = this.getState();
			this.setCookie(this.COOKIE_NAME, JSON.stringify(state), 24*365)
		},
		'loadState': function(){
			try{
				var cookie_str = this.getCookie(this.COOKIE_NAME);
				var cookie = JSON.parse(cookie_str);
				var unchanged = true;
				cookie.on.forEach(function(e){$(document.getElementById(e)).removeClass('off').addClass('on'); unchanged = false;});
				cookie.off.forEach(function(e){$(document.getElementById(e)).removeClass('on').addClass('off'); unchanged = false;});
				cookie.clicked.forEach(function(e){$(document.getElementById(e)).addClass('clicked'); unchanged = false;});
				if(!unchanged)
					$("#reset").removeClass('off').addClass('on');
			}catch(e){
				console.warn("state not loaded");
				//this.saveState();
			}
		}
	}.init();
});
