(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{448:function(t,e,n){"use strict";n.r(e);n(69);var l=n(0),c=n(449),r=Object(l.d)({name:"SliderService",components:{Flicking:c.a},setup:function(){var t=Object(l.m)(),e=Object(l.l)({circular:!0,align:"center",inputType:["touch","mouse"]}),n=Object(l.m)(null);return Object(l.j)((function(){void 0!==t.value&&t.value.panelCount>0&&(n.value=window.setInterval((function(){var e;null===(e=t.value)||void 0===e||e.next()}),5e3))})),Object(l.i)((function(){"number"==typeof n.value&&clearInterval(n.value)})),{flickingEl:t,options:e}}}),v=n(33),component=Object(v.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Flicking",{ref:"flickingEl",attrs:{options:t.options}},[n("div",{staticClass:"services__list-item"},[n("a",{staticClass:"services__list-item-link"},[t._v("Производство ‒ 3D и CNC")])]),t._v(" "),n("div",{staticClass:"services__list-item"},[n("a",{staticClass:"services__list-item-link"},[t._v("Мастер-классы и обучение")])]),t._v(" "),n("div",{staticClass:"services__list-item"},[n("a",{staticClass:"services__list-item-link"},[t._v("Коворкинг")])]),t._v(" "),n("div",{staticClass:"services__list-item"},[n("a",{staticClass:"services__list-item-link"},[t._v("Юридический адрес и доступ в интернет")])])])}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"content"},[l("img",{staticClass:"main-img",attrs:{src:n(277),width:"600",height:"400",alt:"Изделие из дерева в Ясень Пень"}}),t._v(" "),l("div",{staticClass:"wrapper content__wrapper"},[l("h2",[t._v("Творческая мастерская и коворкинг")]),t._v(" "),l("p",[t._v("Мы поможем Вам воплотить в жизнь самые смелые творческие идеи.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content"},[n("div",{staticClass:"wrapper content__wrapper"},[n("h2",[t._v("О нас")]),t._v(" "),n("p",[t._v("\n        Нам нравится наша работа и люди, которые к нам приходят;)\n      ")]),t._v(" "),n("p",[t._v("\n        Получается, мы работаем над своими идеями и помогаем продумать и реализовать ваши!\n      ")])])])}],c=n(0),r=n(448),v=Object(c.d)({name:"Home",components:{SliderServices:r.default},setup:function(){return{title:Object(c.m)("Главная страница")}},head:function(){return{title:"".concat(this.title," - Ясен Пень")}}}),_=n(33),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main home"},[n("h1",{staticClass:"visually-hidden"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t._m(0),t._v(" "),n("section",{staticClass:"content services"},[n("div",{staticClass:"wrapper content__wrapper"},[n("h2",[t._v("Услуги")]),t._v(" "),n("div",{staticClass:"content__slider-wrapper"},[n("SliderServices")],1)])]),t._v(" "),t._m(1)])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{SliderServices:n(448).default})}}]);