webpackJsonp([1],{0:function(t,l,e){t.exports=e("cDNt")},cDNt:function(t,l,e){"use strict";function n(t){return s._18(0,[(t()(),s._4(0,0,null,null,29,"div",[["class","cover-flow-wrapper"],["cover-flow",""]],null,[["window","resize"]],function(t,l,e){var n=!0;if("window:resize"===l){n=!1!==s._15(t,1).onResize(e)&&n}return n},null,null)),s._2(1,737280,null,0,a,[s.k,s.F],{disabled:[0,"disabled"]},null),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(3,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(4,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=1027"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(6,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(7,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=1026"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(9,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(10,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=1011"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(12,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(13,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=987"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(15,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(16,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=974"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(18,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(19,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=912"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(21,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(22,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=899"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(24,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(25,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=867"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["\n    "])),(t()(),s._4(27,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),s._4(28,0,null,null,0,"img",[["src","https://picsum.photos/200/200?image=799"],["style","width: 100%; height: 100%;"]],null,null,null,null,null)),(t()(),s._17(-1,null,["    \n"]))],function(t,l){t(l,1,0,!1)},null)}function i(t){return s._18(0,[(t()(),s._4(0,0,null,null,1,"app-root",[],null,null,null,n,c)),s._2(1,49152,null,0,r,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var s=e("/oeL"),u={production:!0},o=function(){function t(){}return t}(),r=function(){function t(){this.title="app"}return t}(),h=[".cover-flow-wrapper[_ngcontent-%COMP%]{height:200px}.cover-flow-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#f0f}"],a=function(){function t(t,l){this.el=t,this.renderer=l,this.childrenElements=[],this.onMouseMoveHandler=this.onMouseMove.bind(this),this.onMouseDownHandler=this.onMouseDown.bind(this),this.onMouseUpHandler=this.onMouseUp.bind(this)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=t},enumerable:!0,configurable:!0}),t.prototype.attach=function(t){var l=t.disabled;console.log("attach"),this._disabled=l,this.ngOnChanges()},t.prototype.onResize=function(t){this.scroll(t)},t.prototype.ngOnChanges=function(){},t.prototype.ngOnInit=function(){this.displayType=window.getComputedStyle(this.el.nativeElement).display,this.initialize(),this.markElDimension(),this.setupEvents(),this.renderer.setAttribute(this.el.nativeElement,"cover-flow","true")},t.prototype.initialize=function(){var t=this;this._xform="webkitTransform",this._pressed=!1,this.displayType="block",this._pressed=!1,this._timeConstant=950,this._dim=200,this._offset=this._target=0,this._angle=-60,this._dist=-150,this._shift=10,this._count=9,this._children=[],this.el.nativeElement.style.display=this.displayType,this.el.nativeElement.style.perspective="500px",this.el.nativeElement.style.transformStyle="preserve-3d",this.childrenElements=this.el.nativeElement.children||[],Array.from(this.el.nativeElement.children).map(function(l,e){l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.opacity="0",l.style.width="200px",l.style.height="200px",t._children.push(l)}),this.scroll(this._offset)},t.prototype.setupEvents=function(){this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDownHandler),this.mouseMoveListener=this.renderer.listen("document","mousemove",this.onMouseMoveHandler),this.mouseUpListener=this.renderer.listen("document","mouseup",this.onMouseUpHandler)},t.prototype.xpos=function(t){return t.clientX},t.prototype.wrap=function(t){return t>=this._count?t%this._count:t<0?this.wrap(this._count+t%this._count):t},t.prototype.scroll=function(t){var l,e,n,i,s,u,o;for(this._offset="number"==typeof t?t:this._offset,this._center=Math.floor((this._offset+this._dim/2)/this._dim),n=this._offset-this._center*this._dim,i=n<0?1:-1,s=-i*n*2/this._dim,o="translateX("+(innerWidth-this._dim)/2+"px) ",u=this._children[this.wrap(this._center)],u.style[this._xform]=o+" translateX("+-n/2+"px) translateX("+i*this._shift*s+"px) translateZ("+this._dist*s+"px) rotateY("+i*this._angle*s+"deg)",u.style.zIndex=0,u.style.opacity=1,e=this._count>>1,l=1;l<=e;++l)u=this._children[this.wrap(this._center+l)],u.style[this._xform]=o+" translateX("+(this._shift+(this._dim*l-n)/2)+"px) translateZ("+this._dist+"px) rotateY("+this._angle+"deg)",u.style.zIndex=-l,u.style.opacity=l===e&&n<0?1-s:1,u=this._children[this.wrap(this._center-l)],u.style[this._xform]=o+" translateX("+(-this._shift+(-this._dim*l-n)/2)+"px) translateZ("+this._dist+"px) rotateY("+-this._angle+"deg)",u.style.zIndex=-l,u.style.opacity=l===e&&n>0?1-s:1;u=this._children[this.wrap(this._center)],u.style[this._xform]=o+" translateX("+-n/2+"px) translateX("+i*this._shift*s+"px) translateZ("+this._dist*s+"px) rotateY("+i*this._angle*s+"deg)",u.style.zIndex=0,u.style.opacity=1},t.prototype.autoScroll=function(){var t=this;!function l(){var e,n;t._amplitude&&(e=Date.now()-t._timestamp,n=t._amplitude*Math.exp(-e/t._timeConstant),n>4||n<-4?(t.scroll(t._target-n),requestAnimationFrame(l)):t.scroll(t._target))}()},t.prototype.tap=function(t){var l=this;return this._pressed=!0,this._reference=this.xpos(t),this._velocity=0,this._amplitude=0,console.log(this._amplitude),this._frame=this._offset,this._timestamp=Date.now(),clearInterval(this._ticker),this._ticker=setInterval(function(){var t,e,n,i;t=Date.now(),e=t-l._timestamp,l._timestamp=t,n=l._offset-l._frame,l._frame=l._offset,i=1e3*n/(1+e),l._velocity=.8*i+.2*l._velocity},100),t.preventDefault(),t.stopPropagation(),!1},t.prototype.drag=function(t){var l,e;return this._pressed&&(l=this.xpos(t),((e=this._reference-l)>2||e<-2)&&(this._reference=l,this.scroll(this._offset+e))),t.preventDefault(),t.stopPropagation(),!1},t.prototype.release=function(t){return this._pressed=!1,clearInterval(this._ticker),this._target=this._offset,(this._velocity>10||this._velocity<-10)&&(this._amplitude=.9*this._velocity,this._target=this._offset+this._amplitude),this._target=Math.round(this._target/this._dim)*this._dim,this._amplitude=this._target-this._offset,this._timestamp=Date.now(),this.autoScroll(),t.preventDefault(),t.stopPropagation(),!1},t.prototype.ngOnDestroy=function(){this.renderer.setAttribute(this.el.nativeElement,"cover-flow","false"),this.mouseMoveListener(),this.mouseUpListener()},t.prototype.onMouseMove=function(t){this._pressed&&!this.disabled&&(t.preventDefault(),this.drag(t))},t.prototype.onMouseDown=function(t){this.tap(t)},t.prototype.onMouseUp=function(t){t.preventDefault(),this._pressed&&this.release(t)},t.prototype.markElDimension=function(){this.wrapper?(this.elWidth=this.wrapper.style.width,this.elHeight=this.wrapper.style.height):(this.elWidth=this.el.nativeElement.style.width,this.elHeight=this.el.nativeElement.style.height)},t.ctorParameters=function(){return[{type:s.k},{type:s.F}]},t}(),_=function(){function t(){}return t}(),p=[h],c=s._1({encapsulation:0,styles:p,data:{}}),d=s.Z("app-root",r,i,{},{},[]),f=e("qbdv"),m=e("fc+i"),y=s._0(o,[r],function(t){return s._13([s._14(512,s.i,s.X,[[8,[d]],[3,s.i],s.x]),s._14(5120,s.v,s._12,[[3,s.v]]),s._14(4608,f.d,f.c,[s.v]),s._14(4608,s.h,s.h,[]),s._14(5120,s.a,s._5,[]),s._14(5120,s.t,s._10,[]),s._14(5120,s.u,s._11,[]),s._14(4608,m.b,m.s,[f.b]),s._14(6144,s.I,null,[m.b]),s._14(4608,m.e,m.f,[]),s._14(5120,m.c,function(t,l,e,n){return[new m.k(t),new m.o(l),new m.n(e,n)]},[f.b,f.b,f.b,m.e]),s._14(4608,m.d,m.d,[m.c,s.z]),s._14(135680,m.m,m.m,[f.b]),s._14(4608,m.l,m.l,[m.d,m.m]),s._14(6144,s.G,null,[m.l]),s._14(6144,m.p,null,[m.m]),s._14(4608,s.M,s.M,[s.z]),s._14(4608,m.g,m.g,[f.b]),s._14(4608,m.i,m.i,[f.b]),s._14(512,f.a,f.a,[]),s._14(1024,s.l,m.q,[]),s._14(1024,s.b,function(t,l){return[m.r(t,l)]},[[2,m.h],[2,s.y]]),s._14(512,s.c,s.c,[[2,s.b]]),s._14(131584,s._3,s._3,[s.z,s.Y,s.r,s.l,s.i,s.c]),s._14(2048,s.e,null,[s._3]),s._14(512,s.d,s.d,[s.e]),s._14(512,m.a,m.a,[[3,m.a]]),s._14(512,_,_,[]),s._14(512,o,o,[])])});u.production&&Object(s.S)(),Object(m.j)().bootstrapModuleFactory(y).catch(function(t){return console.log(t)})},gFIY:function(t,l){function e(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="gFIY"}},[0]);