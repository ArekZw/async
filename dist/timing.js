n("load_timing,render_timing,renderCallback,unrenderCallback,requestAnimationFrame,requestIdleCallback,domReady,inview,frame,timeout,setTimeout,DOMContentLoaded,exec_timing,method,lazy",48);var kb=P("requestAnimationFrame",1);na=P("requestIdleCallback");var lb,mb=[];function nb(a){if(a||lb||-1!==["complete","loaded","interactive"].indexOf(A.readyState))for(lb=1,a=mb.shift();a;)a(),a=mb.shift()}function ob(a){nb();lb?a():mb.push(a)}sa(59,function(){nb(1)});nb();function pb(a,b){b=b||1;kb(function(){1<b?pb(a,--b):a()})}
D=function(a,b){if(J){var c=T(a[0],2);var d=a[1]}else c=T(a,2);a=c?c[2]:0;if(61===a){z[c[61]]=function(){ma(b);J&&d&&(Da(d,function(){d=!1}),Q.then=function(a){a&&(d?Da(d,function(){d=!1;a()}):a());return Q});return Q};var e=1}52===a&&kb&&(pb(b,c[56]||1),e=1);53===a&&na&&(e=c[57],na(b,e?{timeout:e}:void 0),e=1);54===a&&(ob(b),e=1);58===a&&(ma(b,c[57]),e=1);9===a&&ha&&(ha(c[9],b),e=1);55===a&&ia&&(ia(c[82],c[83],c[84],b),e=1);62===a&&ja&&(ja(c[89],c[16],b),e=1);e||b()};
