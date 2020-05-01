!function(t){var e={};function o(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(r,i,function(e){return t[e]}.bind(null,i));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/dist/",o(o.s=1)}([function(t,e,o){},function(t,e,o){"use strict";function r(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}o.r(e);var i=function(){function t(e,o){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=o;var i=new Image;i.src="src/assets/images/corgi.gif",this.image=i,this.height=70,this.width=70,this.mousePos={x:0,y:300},i.onload=function(){r.drawCorgi()},this.mouseMoveHandler()}var e,o,i;return e=t,(o=[{key:"mouseMoveHandler",value:function(){var t=this;this.canvas.addEventListener("mousemove",(function(e){t.mousePos.x=e.clientX-t.canvas.offsetLeft-80,t.mousePos.y=e.clientY-t.canvas.offsetTop-120,t.drawCorgi()}))}},{key:"resetCorgi",value:function(){this.mousePos.x=0,this.mousePos.y=300}},{key:"drawCorgi",value:function(){this.ctx.drawImage(this.image,this.mousePos.x,this.mousePos.y,this.width,this.height)}}])&&r(e.prototype,o),i&&r(e,i),t}();function n(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e;this.frisbeeRadius=8,this.frisbeePos={x:8,y:Math.floor(500*Math.random()+50)},this.frisbeeMove={dx:1,dy:1*Math.random()-.5},this.drawFrisbee=this.drawFrisbee.bind(this)}var e,o,r;return e=t,(o=[{key:"drawFrisbee",value:function(){this.ctx.beginPath(),this.ctx.arc(this.frisbeePos.x,this.frisbeePos.y,this.frisbeeRadius,0,2*Math.PI),this.ctx.fillStyle="rgb(37, 90, 187)",this.ctx.fill(),this.ctx.closePath(),this.frisbeePos.x+=this.frisbeeMove.dx,this.frisbeePos.y+=this.frisbeeMove.dy,(this.frisbeePos.y+this.frisbeeMove.dy>550||this.frisbeePos.y+this.frisbeeMove.dy<50)&&(this.frisbeeMove.dy=-this.frisbeeMove.dy/10)}},{key:"reset",value:function(){this.frisbeePos.x=this.frisbeeRadius,this.frisbeePos.y=Math.floor(500*Math.random()+50),this.frisbeeMove.dy=1*Math.random()-.5,this.frisbeeMove.dx+=.5}}])&&n(e.prototype,o),r&&n(e,r),t}();function a(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e;var o=Math.floor(600*Math.random()+100);this.xPos=o;var r=Math.floor(500*Math.random()+50);this.yPos=r,this.drawObstacle=this.drawObstacle.bind(this),this.move=this.move.bind(this),this.randomMove=this.randomMove.bind(this)}var e,o,r;return e=t,(o=[{key:"getXPos",value:function(){if(this.xPos)return this.xPos}},{key:"getYPos",value:function(){if(this.yPos)return this.yPos}},{key:"drawObstacle",value:function(){this.ctx.drawImage(this.image,this.xPos,this.yPos,60,60)}},{key:"move",value:function(t,e){this.checkValidMove(t,e)||(e=0,t=0),this.xPos+=t,this.yPos+=e}},{key:"checkValidMove",value:function(t,e){return this.getXPos(),!(this.xPos+t<50||this.xPos+t>850||this.yPos+e<50||this.yPos+e>550)}},{key:"randomMove",value:function(){var t=4*Math.random()-2,e=4*Math.random()-2;this.checkValidMove(t,e)?this.move(t,e):this.randomMove()}}])&&a(e.prototype,o),r&&a(e,r),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(r,t);var e,o=(e=r,function(){var t,o=y(e);if(h()){var r=y(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return l(this,t)});function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).ctx=t;var i=new Image;return i.src="src/assets/images/tree.png",e.image=i,e.height=60,e.width=50,e.xPos=e.getXPos(),e.yPos=e.getYPos(),e}return r}(c);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(r,t);var e,o=(e=r,function(){var t,o=g(e);if(m()){var r=g(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return v(this,t)});function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).ctx=t;var i=new Image;return i.src="src/assets/images/brown-dog.png",e.image=i,e.height=60,e.width=60,e.xPos=e.getXPos(),e.yPos=e.getYPos(),e}return r}(c);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function M(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(r,t);var e,o=(e=r,function(){var t,o=k(e);if(M()){var r=k(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return O(this,t)});function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).ctx=t;var i=new Image;return i.src="src/assets/images/husky.png",e.image=i,e.height=60,e.width=60,e.xPos=e.getXPos(),e.yPos=e.getYPos(),e}return r}(c);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function R(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(r,t);var e,o=(e=r,function(){var t,o=E(e);if(C()){var r=E(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return R(this,t)});function r(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=o.call(this,t)).ctx=t;var i=new Image;return i.src="src/assets/images/shiba.png",e.image=i,e.height=60,e.width=60,e.xPos=e.getXPos(),e.yPos=e.getYPos(),e}return r}(c);function L(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D={trees:1,dogs:2},I={trees:2,dogs:3},B={trees:3,dogs:4},F=function(){function t(e,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.canvas=o,this.score=0,this.frisbees=3,this.gameOver=!1,this.difficulty=B;var r=new s(this.ctx);this.frisbee=r;var n=new i(this.ctx,this.canvas);this.player=n;var a=[],c=new P(this.ctx);this.borderCollie=c,a.push(this.borderCollie);var u=new S(this.ctx);this.husky=u,a.push(this.husky);var f=new T(this.ctx);this.shiba=f,a.push(this.shiba);var l=new T(this.ctx);this.shiba2=l,a.push(this.shiba2),this.dogs=a;for(var h=[],y=0;y<this.difficulty.trees;y++){var p=new d(this.ctx);this.tree=p,h.push(this.tree)}this.trees=h,this.draw=this.draw.bind(this),this.clickModalStart=this.clickModalStart.bind(this),this.stopGame=this.stopGame.bind(this),this.setupControls()}var e,o,r;return e=t,(o=[{key:"setupControls",value:function(){var t=this,e=document.getElementById("easy-button");this.easyButton=e;var o=document.getElementById("medium-button");this.mediumButton=o;var r=document.getElementById("hard-button");this.hardButton=r,this.easyButton.addEventListener("click",(function(){t.difficulty=D})),this.mediumButton.addEventListener("click",(function(){t.difficulty=I})),this.hardButton.addEventListener("click",(function(){t.difficulty=B})),this.startModal=document.getElementById("modal"),this.startModal.onclick=this.clickModalStart.bind(this)}},{key:"clickModalStart",value:function(t){t.preventDefault(),this.score=0,this.frisbees=3,this.gameOver=!1,this.startModal.classList.remove("open-modal"),this.startModal.classList.add("close-modal"),this.startModal.onclick=function(t){return t.preventDefault()},this.draw()}},{key:"stopGame",value:function(){this.gameOver&&(this.frisbee.frisbeeMove.dx=1,this.player.resetCorgi(),this.startModal.innerHTML="Time to go home for today! <br><br> <i class='fas fa-paw'></i> <br>Click to fast-forward to tomorrow and play again!",this.startModal.classList.remove("close-modal"),this.startModal.classList.add("open-modal"),this.ctx.clearRect(0,0,900,600),this.startModal.onclick=this.clickModalStart.bind(this))}},{key:"drawTrees",value:function(){for(var t=0;t<this.difficulty.trees;t++)this.trees[t].drawObstacle()}},{key:"drawDogs",value:function(){for(var t=0;t<this.difficulty.dogs;t++){var e=this.dogs[t];e.drawObstacle(),e.randomMove()}}},{key:"draw",value:function(){this.ctx.clearRect(0,0,900,600),this.game=requestAnimationFrame(this.draw),this.frisbee.drawFrisbee(),this.drawTrees(),this.drawDogs(),this.player.drawCorgi(),this.drawScore(),this.drawLives(),this.drawMode(),this.didCollide(),this.lostFrisbee(),this.stopGame(),0===this.frisbees&&(this.gameOver=!0)}},{key:"drawScore",value:function(){this.ctx.font="20px Wendy One",this.ctx.fillStyle="black",this.ctx.fillText("Score:  "+this.score,20,25)}},{key:"drawLives",value:function(){this.ctx.font="20px Wendy One",this.ctx.fillStyle="black",this.ctx.fillText("Frisbees Left:  "+this.frisbees,120,25)}},{key:"drawMode",value:function(){var t="Hard";t=this.difficulty===D?"Easy":this.difficulty===I?"Medium":"Hard",this.ctx.font="20px Wendy One",this.ctx.fillStyle="black",this.ctx.fillText("Difficulty:   "+t,680,25)}},{key:"lostFrisbee",value:function(){this.frisbee.frisbeePos.x>905&&(this.frisbees--,this.frisbee.reset(),this.draw)}},{key:"didCollide",value:function(){this.frisbeeCollision()&&(this.score++,this.frisbee.reset(),this.draw),this.obstacleCollision()&&(this.gameOver=!0)}},{key:"obstacleCollision",value:function(){for(var t=0;t<this.trees.length;t++)if(this.player.mousePos.x>this.trees[t].xPos-40&&this.player.mousePos.x<this.trees[t].xPos+40&&this.player.mousePos.y>this.trees[t].yPos-40&&this.player.mousePos.y<this.trees[t].yPos+40)return!0;for(var e=0;e<this.dogs.length;e++)if(this.player.mousePos.x>this.dogs[e].xPos-40&&this.player.mousePos.x<this.dogs[e].xPos+40&&this.player.mousePos.y>this.dogs[e].yPos-40&&this.player.mousePos.y<this.dogs[e].yPos+40)return!0}},{key:"frisbeeCollision",value:function(){if(this.player.mousePos.x>this.frisbee.frisbeePos.x-80&&this.player.mousePos.x<this.frisbee.frisbeePos.x+30&&this.player.mousePos.y>this.frisbee.frisbeePos.y-80&&this.player.mousePos.y<this.frisbee.frisbeePos.y+30)return!0}}])&&L(e.prototype,o),r&&L(e,r),t}();o(0);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas-dog-park"),e=t.getContext("2d");new F(e,t)}))}]);
//# sourceMappingURL=main.js.map