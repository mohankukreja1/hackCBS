function glasSlider(e){e=void 0===e?{}:e;var i,a,d,s=$.extend({images:[],delay:6e3,opacity:.6},e),l=0,t=0,o=[];for(i=$('<div id="bg" style="opacity: '+s.opacity+'"></div>'),$("body").append(i),d=0;d<s.images.length;d++)a=$('<div style="background-image:url('+s.images[d]+');">'),i.append(a),o.push(a);o[l].addClass("visible top"),1!=o.length&&window.setInterval(function(){t=l,++l>=o.length&&(l=0),o[t].removeClass("top"),o[l].addClass("visible"),o[l].addClass("top"),window.setTimeout(function(){o[t].removeClass("visible")},s.delay/2)},s.delay)}