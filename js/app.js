!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=61)}({16:function(e,t,n){"use strict";function o(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===o||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function a(e){if(m===clearTimeout)return clearTimeout(e);if((m===r||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(e);try{return m(e)}catch(t){try{return m.call(null,e)}catch(t){return m.call(this,e)}}}function c(){y&&p&&(y=!1,p.length?g=p.concat(g):h=-1,g.length&&l())}function l(){if(!y){var e=i(c);y=!0;for(var t=g.length;t;){for(p=g,g=[];++h<t;)p&&p[h].run();h=-1,t=g.length}p=null,y=!1,a(e)}}function s(e,t){this.fun=e,this.array=t}function d(){}var u,m,v=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:o}catch(e){u=o}try{m="function"==typeof clearTimeout?clearTimeout:r}catch(e){m=r}}();var p,g=[],y=!1,h=-1;v.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];g.push(new s(e,t)),1!==g.length||y||i(l)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=d,v.addListener=d,v.once=d,v.off=d,v.removeListener=d,v.removeAllListeners=d,v.emit=d,v.prependListener=d,v.prependOnceListener=d,v.listeners=function(e){return[]},v.binding=function(e){throw new Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw new Error("process.chdir is not supported")},v.umask=function(){return 0}},61:function(e,t,n){"use strict";(function(e){n(62),n(63);var t=n(64);if("production"!==e.env.NODE_ENV&&"undefined"!=typeof AFRAME){var o=AFRAME.utils.debug("webxr-webpack-boilerplate:info");o("Looks like we are in development mode!"),o("Version: 0.9.10-dev"),o("report issues: https://github.com/mkungla/webxr-webpack-boilerplate/issues"),o("A-Frame Version: "+AFRAME.version),o("three.js Version: r"+THREE.REVISION),o("including TWEEN: "+TWEEN._nextId),console.dir(t)}"serviceWorker"in navigator?(console.log("CLIENT: service worker registration in progress."),navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("CLIENT: service worker registration complete.")},function(){console.log("CLIENT: service worker registration failure.")})):console.log("CLIENT: service worker is not supported."),function(){window.addEventListener("load",function e(t){function n(){function e(){r.remove(),o.style.display="block",n(),l()}function t(){r.display="none",o.style.display="block",document.querySelector("a-scene").enterVR(),l()}function n(){document.getElementById("music").components.sound.playSound()}function l(){console.log("setTimeout"),d=setTimeout(function(){u&&(console.log("close Intro after 20s"),u.emit("closeintro"))},2e4)}function s(){console.log("clearTimeout"),clearTimeout(d)}i&&i.remove(),a&&(a.style.display="block",a.addEventListener("click",e)),c&&(c.style.display="block",c.addEventListener("click",t)),AFRAME.utils.device.isGearVR()&&(console.log("AFRAME.utils.device.isGearVR ()"),document.querySelector("a-scene").addEventListener("enter-vr",function(){n()}),document.addEventListener("GARREADY",function(e){e.detail.setCustomVariable("GearVR")})),AFRAME.utils.device.isMobile()&&(console.log("AFRAME.utils.device.isMobile ()"),document.addEventListener("GARREADY",function(e){e.detail.setCustomVariable("Cardboard / Mobile")})),AFRAME.utils.device.isMobile()&&AFRAME.utils.device.checkHeadsetConnected()&&(console.log("AFRAME.utils.device.isMobile() && AFRAME.utils.device.checkHeadsetConnected()"),document.addEventListener("GARREADY",function(e){e.detail.setCustomVariable("Oculus Rift / HTC Vive")})),AFRAME.utils.device.checkHeadsetConnected()||(console.log("Desktop"),document.addEventListener("GARREADY",function(e){e.detail.setCustomVariable("Desktop")}));var d,u=null,m=document.getElementById("intro-screen-cardboard"),v=document.getElementById("intro-screen-gearvr");m&&(u=m,m.addEventListener("click",function(){this.emit("closeintro"),s()})),v&&(u=v,v.addEventListener("click",function(){this.emit("closeintro"),s()}));var p=document.getElementById("chimedevicedemo"),g=(document.getElementById("chimedevicedemohide"),document.getElementById("chimecapacitydemo")),y=(document.getElementById("chimecapacitydemohide"),document.getElementById("smartwandemo")),h=(document.getElementById("smartwandemohide"),document.getElementById("contactcenterskillsdemo")),f=(document.getElementById("contactcenterskillsdemohide"),document.getElementById("contactcenterissuesdemo")),b=(document.getElementById("contactcenterissuesdemohide"),document.getElementById("reachretaildemo")),w=(document.getElementById("reachretaildemohide"),document.getElementById("reachrealestatedemo"));document.getElementById("reachrealestatedemohide");window.demochime1=function(){p.emit("chime-device-demo-play"),ga("send",{hitType:"event",eventCategory:"Amazon Chime",eventAction:"play",eventLabel:"Demo - Access Across Devices"})},window.demochime2=function(){g.emit("chime-capacity-demo-play"),ga("send",{hitType:"event",eventCategory:"Amazon Chime",eventAction:"play",eventLabel:"Demo - High Capacity Collaboration"})},window.bookmarkchime=function(){ga("send",{hitType:"event",eventCategory:"Amazon Chime",eventAction:"check",eventLabel:"Product Bookmarked"})},window.democontactcenter1=function(){h.emit("contactcenter-skills-demo-play"),ga("send",{hitType:"event",eventCategory:"Contact Center",eventAction:"play",eventLabel:"Demo - ACD & Skill-based Routing"})},window.democontactcenter2=function(){f.emit("contactcenter-issues-demo-play"),ga("send",{hitType:"event",eventCategory:"Contact Center",eventAction:"play",eventLabel:"Demo - Real-time Sentiment Analysis"})},window.bookmarkcontactcenter=function(){ga("send",{hitType:"event",eventCategory:"Contact Center",eventAction:"check",eventLabel:"Product Bookmarked"})},window.demosmartwan=function(){y.emit("smartwan-demo-play"),ga("send",{hitType:"event",eventCategory:"SmartWan",eventAction:"play",eventLabel:"Demo - Voice Prioritization/QoE"})},window.bookmarksmartwan=function(){ga("send",{hitType:"event",eventCategory:"SmartWan",eventAction:"check",eventLabel:"Product Bookmarked"})},window.demovonagereach1=function(){b.emit("reach-retail-demo-play"),ga("send",{hitType:"event",eventCategory:"Vonage Reach",eventAction:"play",eventLabel:"Demo - Case Study: Retail"})},window.demovonagereach2=function(){w.emit("reach-realestate-demo-play"),ga("send",{hitType:"event",eventCategory:"Vonage Reach",eventAction:"play",eventLabel:"Demo - Case Study: Real Estate"})},window.bookmarkvonagereach=function(){ga("send",{hitType:"event",eventCategory:"Vonage Reach",eventAction:"check",eventLabel:"Product Bookmarked"})},window.videocrm=function(){ga("send",{hitType:"event",eventCategory:"CRM Integrations",eventAction:"play",eventLabel:"CRM Video Watched"})},window.bookmarkcrm=function(){ga("send",{hitType:"event",eventCategory:"CRM Integrations",eventAction:"check",eventLabel:"Product Bookmarked"})},window.videosip=function(){ga("send",{hitType:"event",eventCategory:"SIP Trunking",eventAction:"play",eventLabel:"SIP Trunking Video Watched"})},window.bookmarksip=function(){ga("send",{hitType:"event",eventCategory:"SIP Trunking",eventAction:"check",eventLabel:"Product Bookmarked"})},window.videoucaas=function(){ga("send",{hitType:"event",eventCategory:"UCaaS & CPaaS",eventAction:"play",eventLabel:"UCaaS & CPaaS Video Watched"})},window.bookmarkucaas=function(){ga("send",{hitType:"event",eventCategory:"UCaaS & CPaaS",eventAction:"check",eventLabel:"Product Bookmarked"})},window.opentrunk=function(){ga("send",{hitType:"event",eventCategory:"Tradeshow Only",eventAction:"open",eventLabel:"Treasure Trunk"})}}var o=document.querySelector("a-scene"),r=document.querySelector("#background-landing"),i=document.querySelector("#progressDiv"),a=document.querySelector("#enter-vr"),c=document.querySelector("#enter-gearvr");window.removeEventListener("load",e,!1),o&&(o.hasLoaded?n():o.addEventListener("loaded",n))},!1)}()}).call(t,n(16))},62:function(e,t,n){"use strict";$(document).ready(function(){console.log("jQuery loaded"),$("#submit-button, #enter-gearvr").click(function(){console.log("SUBMITTED");var e=$("#name").val(),t=$("#company").val(),n=$("#email").val();""===e&&""===t&&""===n&&(e=$("#name2").val(),t=$("#company2").val(),n=$("#email2").val());var r,i=$("#chnlMgr").val();if(""!==i)var r=!0;else r=!1;var a=$("#typeP").val(),c=$("#companySize").val(),l=$("#vertical").val();window.location.pathname.includes("gearvr")&&(n="gearvrcustomer@vonage.com"+Math.random()),console.log(e,t,n,r,i,a,c,l),o(e,t,n,r,i,a,c,l).then(function(e){console.log("User Created! ",e)})})});var o=function(e,t,n,o,r,i,a,c){var l={name:e,company:t,email:n,currentP:o,chnlMgr:r,typeP:i,companySize:a,vertical:c};return localStorage.setItem("active_user",JSON.stringify(l)),new Promise(function(e,t){$.ajax({url:"https://backend-vonagevrcpev2.herokuapp.com/user",type:"GET",dataType:"jsonp",data:l,success:function(t){e(t)},error:function(t){console.log("Failed!",t),e(t)},complete:function(e){200!=e.code&&(top.location.href="cardboard.html")}})})}},63:function(e,t){},64:function(e,t){e.exports={project:{name:"Vonage VR CPE Version 2",version:"1.0.1",description:"",author:"Roland Dubois <rdub80@gmail.com> (https://github.com/rdub80)",license:"MIT",repository:{type:"git",url:"https://github.com/rdub80/vonagevrcpev2.git"},bugs:{url:"https://github.com/rdub80/vonagevrcpev2/issues"},homepage:"https://github.com/rdub80/vonagevrcpev2#readme",keywords:["webxr-boilerplate","webvr","webxr","boilerplate-application","starter-kit","aframe","aframevr","aframexr","aframe-vr","aframe-boilerplate","webpack","webpack-boilerplate","sass","pwa","service-workers"]},app:{name:"Vonage VR CPE",themecolor:"#ee295f",mstilecolor:"#24caff"}}}});
//# sourceMappingURL=app.js.map