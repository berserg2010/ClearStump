(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{146:function(e,t,n){"use strict";n.r(t);var o=n(46),r=n(197),l=Object(o.b)({name:"HeaderComponent",components:{Menu:r.default},setup:function(){var e=Object(o.g)(!1);return{menuIsOpen:e,menuButtonHandler:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.value=t&&!e.value}}}}),d=l,m=n(34),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"wrapper header__wrapper"},[n("div",{staticClass:"logo"},[n("NuxtLink",{attrs:{to:"/"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v(" Ясен Пень ")])],1),e._v(" "),n("Menu",{attrs:{"menu-is-open":e.menuIsOpen,"menu-button-handler":e.menuButtonHandler}}),e._v(" "),n("button",{staticClass:"menu_button",class:{"menu_button--close":!e.menuIsOpen,"menu_button--open":e.menuIsOpen},attrs:{type:"button"},on:{click:e.menuButtonHandler}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Menu:n(197).default,Header:n(146).default})},197:function(e,t,n){"use strict";n.r(t);var o=n(46),r=Object(o.b)({name:"MenuComponent",props:{menuIsOpen:{type:Boolean,default:!1},menuButtonHandler:{type:Function,required:!0}}}),l=n(34),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu",class:{"menu--open":e.menuIsOpen,"menu--close":!e.menuIsOpen}},[n("ul",[n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"about"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v(" О нас ")])],1),e._v(" "),n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"gallery"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v(" Галерея ")])],1),e._v(" "),n("li",{staticClass:"menu_item"},[n("NuxtLink",{attrs:{to:"contacts"},nativeOn:{click:function(t){return e.menuButtonHandler(!1)}}},[e._v(" Контакты ")])],1)])])}),[],!1,null,null,null);t.default=component.exports},201:function(e,t,n){"use strict";var o=n(2),r=n(279),l=n.n(r),d=n(280),m=n.n(d);o.default.use(l.a,{locale:m.a})},283:function(e,t,n){"use strict";var o=n(0),r=n(146),l=Object(o.d)({name:"DefaultLayout",components:{Header:r.default}}),d=n(34),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Header:n(146).default})},298:function(e,t,n){e.exports=n.p+"img/studio_session_022.d3a31a7.jpg"},300:function(e,t,n){n(301),n(302),e.exports=n(305)},359:function(e,t,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(145).default)("77e2bb21",content,!0,{sourceMap:!1})},360:function(e,t,n){var o=n(103),r=n(361),l=n(243),d=n(298),m=n(362),c=o(!1);c.i(r);var f=l(d),x=l(m);c.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}pre,code,kbd,samp{font-family:monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}.fade-enter-active,.fade-leave-active{transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}.header{position:fixed;top:0;left:0;height:64px;width:100%;background-color:#223843;box-shadow:0 10px 10px 0 rgba(34,56,67,.3);z-index:5}.header .wrapper{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:end;align-items:center;gap:16px;max-width:1240px;height:100%;padding:0 22px}.header .header__wrapper{justify-content:space-between}.header .logo a{white-space:nowrap;color:#eff1f3;font-weight:bold;font-size:24px;text-decoration:none;font-family:"Days One",sans-serif}@media screen and (min-width: 1240px){.header .header__wrapper{margin:0 auto}}.menu{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:right;align-items:center;flex-grow:2;gap:16px;margin-right:64px;height:100%;max-width:max-content;z-index:6}.menu ul{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:right;align-items:center;margin:0;padding:0;max-width:max-content;background-color:#223843;list-style:none;border-bottom-left-radius:4px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.menu .menu_item{box-sizing:border-box;border-top-style:solid;border-top-width:1px;border-top-color:#062736}.menu a{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:start;align-items:center;min-height:64px;min-width:50vw;padding:0 24px;box-sizing:border-box;color:#eff1f3;text-decoration:none}.menu a:hover{text-decoration:underline}.menu.menu--open,.menu.menu--close{position:absolute;top:64px;right:0;display:flex;flex-direction:column;margin:0}.menu.menu--open{visibility:visible;opacity:1;animation:fadein .2s}.menu.menu--close{visibility:hidden;opacity:0;animation:fadeout .2s}.menu_button{position:relative;display:block;width:48px;height:48px;padding:0;background-color:inherit;box-sizing:border-box;border:none;cursor:pointer}.menu_button--close::before,.menu_button--close::after,.menu_button--open::before,.menu_button--open::after{position:absolute;width:36px;box-sizing:border-box;content:""}.menu_button--close::before{height:2px;background-color:#eff1f3;transform:translate(-18px, -1px)}.menu_button--close::after{height:24px;border-style:solid;border-color:#eff1f3;border-width:0;border-top-width:2px;border-bottom-width:2px;transform:translate(-18px, -12px)}.menu_button--open::before,.menu_button--open::after{height:2px;background-color:#eff1f3}.menu_button--open::before{transform:translate(-18px, -1px) rotate(45deg)}.menu_button--open::after{transform:translate(-18px, -1px) rotate(-45deg)}@media screen and (min-width: 600px){.menu{display:flex}.menu ul{flex-direction:row;box-shadow:none}.menu .menu_item{border-top-width:0}.menu a{min-width:max-content}.menu.menu--open,.menu.menu--close{visibility:visible;opacity:1;position:relative;top:0;flex-direction:row}.menu_button{display:none}}.main{height:100vh}.main .main-img{position:absolute;top:calc(10% + 150px);left:calc(10% - 300px);border-radius:40px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.main .content{position:relative;padding-left:32px;padding-right:32px;color:#223843;font-family:Roboto,sans-serif}.main .wrapper{max-width:1240px;padding-top:96px;padding-bottom:48px}.main h1,.main h2{margin:0;margin-bottom:32px;padding:0;font-weight:bold;font-size:24px;text-transform:uppercase}.main p,.main dl{position:relative;font-size:18px}.home{overflow-x:hidden;scroll-snap-type:y mandatory}.home .content{scroll-snap-align:start;height:100vh;overflow:hidden}.home .content__slider-wrapper{display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:center;align-items:center;height:60vh}@media screen and (min-width: 1240px){.main .content__wrapper{margin:0 auto}}@media screen and (max-width: 600px){.main .main-img{top:40vh}}.contacts__item{margin-bottom:48px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:#223843}.contacts__item:last-child{margin-bottom:0}.gallery-items{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:flex-start;gap:40px;margin:0;padding:0}.gallery-items .gallery-col{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:center;gap:40px;min-width:296px;max-width:536px}.gallery-items .gallery__image-wrapper{position:relative;height:100%;min-width:296px;max-width:536px;opacity:1}.gallery-items .gallery__image-wrapper .gallery-item{display:block;min-width:296px;max-width:536px;border-radius:40px;box-shadow:0 10px 10px 0 rgba(34,56,67,.3)}.gallery-items .gallery__image-wrapper .gallery__image-description{position:absolute;bottom:0;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;height:80px;width:100%;font-family:"Days One",serif;font-weight:normal;font-size:24px;color:#eff1f3;border-bottom-left-radius:40px;border-bottom-right-radius:40px;background:linear-gradient(to top, rgba(34, 56, 67, 0.9) 60%, rgba(34, 56, 67, 0))}.gallery-items .gallery__image-wrapper .gallery__image-description span{text-align:center}.flicking-viewport{width:296px;height:100%}.services__list-item{display:block;width:264px;height:50vh;max-height:360px;margin:0 16px}.services__list-item-link{display:flex;flex-wrap:nowrap;flex-direction:row;justify-content:center;align-items:center;width:100%;height:100%;padding:16px;box-sizing:border-box;color:inherit;font-family:"Days One",sans-serif;font-weight:normal;font-size:22px;text-align:center;text-decoration:none;background-image:url('+f+');background-position:right bottom;border:0 solid #000;box-shadow:0 10px 10px 0 rgba(34,56,67,.3);border-radius:40px}@media screen and (min-width: 905px){.flicking-viewport{width:904px}}@font-face{font-family:"Days One";font-style:normal;font-weight:normal;font-display:swap;src:url('+x+') format("truetype")}body{min-width:360px;background-color:#eff1f3;font-family:"Days One",serif;font-weight:normal;font-size:16px;line-height:1.5}p{margin:0;margin-bottom:16px}.fade-in{animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadeout{from{visibility:visible;opacity:1}to{visibility:hidden;opacity:0}}.visually-hidden:not(:focus):not(:active){position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}',""]),e.exports=c},362:function(e,t,n){e.exports=n.p+"fonts/DaysOne-Regular.b34debd.ttf"}},[[300,9,2,10]]]);