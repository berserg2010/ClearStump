(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t);var o=n(46),r=n(194),l=Object(o.a)({name:"Header",components:{Menu:r.default},setup:function(){var e=Object(o.c)(!1);return{menuIsOpen:e,menuButtonHandler:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.value=t&&!e.value}}}}),d=l,c=n(33),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"wrapper header__wrapper"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"/"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v("\n        Ясен Пень\n      ")])],1),e._v(" "),n("Menu",{attrs:{"menu-is-open":e.menuIsOpen,"menu-button-handler":e.menuButtonHandler}}),e._v(" "),n("button",{staticClass:"menu_button ",class:{"menu_button--close":!e.menuIsOpen,"menu_button--open":e.menuIsOpen},attrs:{type:"button"},on:{click:e.menuButtonHandler}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Menu:n(194).default,Header:n(140).default})},194:function(e,t,n){"use strict";n.r(t);var o=n(46),r=Object(o.a)({name:"Menu",props:{menuIsOpen:{type:Boolean,default:!1},menuButtonHandler:{type:Function,required:!0}}}),l=n(33),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu",class:{"menu--open":e.menuIsOpen,"menu--close":!e.menuIsOpen}},[n("ul",[n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"about"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v("\n        О нас\n      ")])],1),e._v(" "),n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"gallery"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v("\n        Галерея\n      ")])],1),e._v(" "),n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"contacts"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v("\n        Контакты\n      ")])],1)])])}),[],!1,null,null,null);t.default=component.exports},198:function(e,t,n){"use strict";var o=n(1),r=n(272),l=n.n(r),d=n(273),c=n.n(d);o.default.use(l.a,{locale:c.a})},276:function(e,t,n){"use strict";var o=n(0),r=n(140),l=Object(o.d)({components:{Header:r.default}}),d=n(33),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(140).default})},277:function(e,t,n){e.exports=n.p+"img/studio_session_022.d3a31a7.jpg"},278:function(e,t,n){n(279),n(280),e.exports=n(283)},322:function(e,t,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(139).default)("12ba2d00",content,!0,{sourceMap:!1})},323:function(e,t,n){var o=n(127),r=n(237),l=n(277),d=n(324),c=o(!1),m=r(l),f=r(d);c.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */.flicking-viewport{position:relative;overflow:hidden}.flicking-camera{width:100%;height:100%;display:flex;position:relative;flex-direction:row;z-index:1}.flicking-camera>*{flex-shrink:0}.flicking-viewport.vertical{display:inline-flex}.flicking-viewport.vertical>.flicking-camera{display:inline-flex;flex-direction:column}.flicking-viewport.flicking-hidden .flicking-camera>*{visibility:hidden}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.header{position:fixed;top:0;left:0;height:64px;width:100%;background-color:#223843;box-shadow:0 10px 10px 0 rgba(34,56,67,.3);z-index:5}.header .wrapper{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:end;align-items:center;grid-gap:16px;gap:16px;max-width:1240px;height:100%;padding:0 22px}.header .header__wrapper{justify-content:space-between}.header .logo a{white-space:nowrap;color:#eff1f3;font-weight:700;font-size:24px;text-decoration:none;font-family:"Days One",sans-serif}@media screen and (min-width:1240px){.header .header__wrapper{margin:0 auto}}.menu{flex-direction:row;flex-grow:2;grid-gap:16px;gap:16px;margin-right:64px;height:100%;z-index:6}.menu,.menu ul{display:flex;flex-wrap:nowrap;justify-content:right;align-items:center;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}.menu ul{flex-direction:column;margin:0;padding:0;background-color:#223843;list-style:none;border-bottom-left-radius:4px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.menu .menu_item{box-sizing:border-box;border-top:1px solid #062736}.menu a{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:start;align-items:center;min-height:64px;min-width:50vw;padding:0 24px;box-sizing:border-box;color:#eff1f3;text-decoration:none}.menu a:hover{text-decoration:underline}.menu.menu--close,.menu.menu--open{position:absolute;top:64px;right:0;display:flex;flex-direction:column;margin:0}.menu.menu--open{visibility:visible;opacity:1;-webkit-animation:fadein .2s;animation:fadein .2s}.menu.menu--close{visibility:hidden;opacity:0;-webkit-animation:fadeout .2s;animation:fadeout .2s}.menu_button{position:relative;display:block;width:48px;height:48px;padding:0;background-color:inherit;box-sizing:border-box;border:none;cursor:pointer}.menu_button--close:after,.menu_button--close:before,.menu_button--open:after,.menu_button--open:before{position:absolute;width:36px;box-sizing:border-box;content:""}.menu_button--close:before{height:2px;background-color:#eff1f3;transform:translate(-18px,-1px)}.menu_button--close:after{height:24px;border-color:#eff1f3;border-style:solid;border-width:2px 0;transform:translate(-18px,-12px)}.menu_button--open:after,.menu_button--open:before{height:2px;background-color:#eff1f3}.menu_button--open:before{transform:translate(-18px,-1px) rotate(45deg)}.menu_button--open:after{transform:translate(-18px,-1px) rotate(-45deg)}@media screen and (min-width:600px){.menu{display:flex}.menu ul{flex-direction:row;box-shadow:none}.menu .menu_item{border-top-width:0}.menu a{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content}.menu.menu--close,.menu.menu--open{visibility:visible;opacity:1;position:relative;top:0;flex-direction:row}.menu_button{display:none}}.main{height:100vh}.main .main-img{position:absolute;top:calc(10% + 150px);left:calc(10% - 300px);border-radius:40px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.main .content{position:relative;padding-left:32px;padding-right:32px;color:#223843;font-family:Roboto,sans-serif}.main .wrapper{max-width:1240px;padding-top:96px}.main h1,.main h2{margin:0 0 32px;padding:0;font-weight:700;font-size:24px;text-transform:uppercase}.main dl,.main p{position:relative;font-size:18px}.home{overflow-x:scroll;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.home .content{scroll-snap-align:start;height:100vh;overflow:hidden}.home .content__slider-wrapper{display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:center;align-items:center;height:60vh}@media screen and (min-width:1240px){.main .content__wrapper{margin:0 auto}}@media screen and (max-width:600px){.main .main-img{top:40vh}}.contacts__item{margin-bottom:48px;border-bottom:1px solid #223843}.gallery-items{display:flex;flex-wrap:wrap;flex-direction:column;justify-content:space-between;align-items:start;margin-top:40px;margin-bottom:60px}.gallery-items .gallery-item{display:block;margin-bottom:40px;border-radius:40px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.horizontal-photo,.vertical-photo{width:100%}@media screen and (min-width:700px){.gallery-items{flex-direction:row}.vertical-photo{width:20%}.horizontal-photo{width:30%}}.flicking-viewport{width:296px;height:100%}.services__list-item{display:block;width:264px;height:50vh;max-height:360px;margin:0 16px}.services__list-item-link{display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:center;align-items:center;width:100%;height:100%;padding:16px;box-sizing:border-box;color:inherit;font-family:"Days One",sans-serif;font-weight:400;font-size:22px;text-align:center;text-decoration:none;background-image:url('+m+');background-position:100% 100%;border:0 solid #000;box-shadow:0 10px 10px 0 rgba(34,56,67,.3);border-radius:40px}@media screen and (min-width:905px){.flicking-viewport{width:904px}}@font-face{font-family:"Days One";font-style:normal;font-weight:400;font-display:swap;src:url('+f+') format("truetype")}body{min-width:360px;background-color:#eff1f3;font-family:"Days One",serif;font-weight:400;font-size:16px;line-height:1.5}p{margin:0 0 16px}@-webkit-keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes fadein{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeout{0%{visibility:visible;opacity:1}to{visibility:hidden;opacity:0}}@keyframes fadeout{0%{visibility:visible;opacity:1}to{visibility:hidden;opacity:0}}.visually-hidden:not(:focus):not(:active){position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}',""]),e.exports=c},324:function(e,t,n){e.exports=n.p+"fonts/DaysOne-Regular.b34debd.ttf"}},[[278,8,2,9]]]);