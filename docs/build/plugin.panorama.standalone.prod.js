!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var s=e();for(var o in s)("object"==typeof exports?exports:t)[o]=s[o]}}(this,function(){return function(t){function e(o){if(s[o])return s[o].exports;var n=s[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}({0:function(t,e,s){t.exports=s(46)},46:function(t,e){"use strict";var s=void 0,o=function(t){var e=t.img,s=t.dx,o=void 0===s?.5:s,n=new Easycanvas.class.sprite(t);n.dx=o;var a=t.style.tw,c=t.style.th,i=t.style.sw,r=0,l=new Easycanvas.class.sprite({content:{img:e},style:{locate:"left",sw:a,th:c}}),y=new Easycanvas.class.sprite({content:{img:e},style:{locate:"left",sw:a,th:c,sx:-a,opacity:0}});n.add(l),n.add(y);var f=function(){r>i&&(r=-i),r>=0?(y.style.sx=-i+r+1,r<i-a?y.style.opacity=0:(l.style.sw=i-r>=0&&i-r<=5?0:i-r,y.style.opacity=1,y.style.sw=a-l.style.sw)):r>=-i&&(y.style.sx=i+r-1,r<-a?l.style.opacity=0:(l.style.opacity=1,l.style.sw=a+r,y.style.sw=-r)),l.style.sx=r,r+=n.dx};return n.start=function(){n.on("ticked",f)},n.stop=function(){n.off("ticked",f)},n.changeSpeed=function(t){o=t},n};window&&window.Easycanvas&&(s=window.Easycanvas,s.class.panorama=o),t.exports=function(t){s=t,t.class.panorama=o}}})});