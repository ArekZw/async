n("selector,threshold,offset,top,left,right,bottom",82);S=P("MutationObserver");function qb(a){var b=0;return function(){var c=(new Date).getTime();if(!(100>c-b))return b||ma(function(){a.apply(null,arguments)},100),b=c,a.apply(null,arguments)}}function rb(a,b){var c;c||(c=z);a=y(a);c=y(c);p(a,function(a){a=q(a);p(c,function(d){oa?d.removeEventListener(a,b,!1):c.attachEvent&&d.detachEvent("on"+a,b)})})}
ia=function(a,b,c,d){var e,k=["scroll","resize","load"];b=b||0;c=T(c||0,85);var f;ob(function(){if((e=va(a,0,1))&&e.length){p([87,86,88],function(a){ra(c[a])&&(c[a]=c[85])});var h,g=qb(function(){h||p(e,function(a){var e;if(e=!h)if(a.offsetWidth||a.offsetHeight||a.getClientRects().length){a=a.getBoundingClientRect();e=z.innerWidth-a.left;var m=z.innerHeight-a.top,v=a.right,I=b*a.width,t=b*a.height;e=a.bottom>c[85]+t&&e>c[87]+I&&m>c[88]+t&&v>c[86]+I}else e=!1;e&&(h=1,d(),rb(k,g),f&&(f.disconnect(),
f=!1))})});sa(k,g);S&&f&&(f=(new S(g)).observe(A.body,{attributes:!0,childList:!0,subtree:!0}));g()}})};
