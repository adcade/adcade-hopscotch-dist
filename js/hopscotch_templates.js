this["templates"] = this["templates"] || {};

this["templates"]["bubble_default"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


  function optEscape(str, unsafe){
    if(unsafe){
      return _.escape(str);
    }
    return str;
  }
;
__p += '\n<div class="hopscotch-bubble-container" style="width: ' +
((__t = ( step.width )) == null ? '' : __t) +
'px; padding: ' +
((__t = ( step.padding )) == null ? '' : __t) +
'px;">\n  <div class="hopscotch-bubble-content">\n    ';
 if(step.title !== ''){ ;
__p += '<h3 class="hopscotch-title">' +
((__t = ( optEscape(step.title, tour.unsafe) )) == null ? '' : __t) +
'</h3>';
 } ;
__p += '\n    ';
 if(step.content  !== ''){ ;
__p += '<div class="hopscotch-content">' +
((__t = ( optEscape(step.content, tour.unsafe) )) == null ? '' : __t) +
'</div>';
 } ;
__p += '\n  </div>\n  <div class="hopscotch-actions">\n    ';
 if(buttons.showPrev){ ;
__p += '<button class="hopscotch-nav-button prev hopscotch-prev">' +
((__t = ( i18n.prevBtn )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n    ';
 if(buttons.showCTA){ ;
__p += '<button class="hopscotch-nav-button next hopscotch-cta">' +
((__t = ( buttons.ctaLabel )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n    ';
 if(buttons.showNext){ ;
__p += '<button class="hopscotch-nav-button next hopscotch-next">' +
((__t = ( i18n.nextBtn )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n  </div>\n  <ul class="hopscotch-progress">\n  ';
   
  var stepWidth = Math.floor(100/tour.numSteps);
  var lastStepWidth = 100 - (stepWidth * tour.numSteps) + stepWidth;
  for(var s=0; s<tour.numSteps; s++) {

    var onOrPastStepClass = s <= step.num ? " hopscotch-progress-step-on" : " hopscotch-progress-step-off";
    ;
__p += '\n      <li class="hopscotch-progress-step' +
((__t = ( onOrPastStepClass )) == null ? '' : __t) +
'" style="width: ' +
((__t = ( s < tour.numSteps-1 ? stepWidth : lastStepWidth )) == null ? '' : __t) +
'%"><span>' +
((__t = ( (s+1) )) == null ? '' : __t) +
'</span></li>\n    ';
 };
__p += '\n  </ul>\n  ';
 if(buttons.showClose){ ;
__p += '<button class="hopscotch-bubble-close hopscotch-close">' +
((__t = ( i18n.closeTooltip )) == null ? '' : __t) +
'</button>';
 } ;
__p += '\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>';

}
return __p
};