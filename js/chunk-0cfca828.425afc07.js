(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cfca828"],{2532:function(t,e,s){"use strict";var i=s("23e7"),n=s("5a34"),a=s("1d80"),r=s("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(a(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,s){var i=s("861d"),n=s("c6b6"),a=s("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==n(t))}},"5a34":function(t,e,s){var i=s("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},6189:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper px-0"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],a=(s("7db0"),s("b64b"),s("caad"),s("2532"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t=this,e=this.ids.find((function(e){return e.id===t.selectedId})).id,s=document.getElementById(e);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var i=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),n=this.$refs.hContainer,a=s.offsetWidth*this.ids.length,r=i?s.offsetLeft-n.offsetLeft:s.offsetLeft,d=n.offsetWidth/s.offsetWidth;d>1&&a-r<n.offsetWidth&&(r=a-n.offsetWidth),this.scrollVal=1===this.ids.length?0:-r}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),r=a,d=(s("705c"),s("2877")),o=Object(d["a"])(r,i,n,!1,null,"78c19d28",null);e["a"]=o.exports},"705c":function(t,e,s){"use strict";s("fea5")},"7db0":function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").find,a=s("44d2"),r="find",d=!0;r in[]&&Array(1)[r]((function(){d=!1})),i({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},ab13:function(t,e,s){var i=s("b622"),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},ab14:function(t,e,s){"use strict";e["a"]={data:()=>({mainId:Math.floor(1e7*Math.random()),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((t,e)=>{const s=t.data&&t.data.attrs?t.data.attrs:[];return{id:this.mainId+e+1,elm:t.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(t=>t.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),a=s("df75"),r=s("d039"),d=r((function(){a(1)}));i({target:"Object",stat:!0,forced:d},{keys:function(t){return a(n(t))}})},c2c8:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pasos-b"},[s("div",{staticClass:"row flex-nowrap mx-0 pasos-b__header mb-4"},[s("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[s("div",{staticClass:"pasos-b__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("div",{staticClass:"col-8 col-sm px-0"},[s("div",{staticClass:"row mx-0 flex-nowrap pasos-b__header__items"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-header-"+(t.selected-1)}},t._l(t.elements,(function(e,i){return s("div",{key:"pb-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 pasos-b__header__item",class:t.itemClasses(e.id),attrs:{id:"pb-header-"+e.id}},[s("div",{staticClass:"pasos-b__header__item__line-container"},[s("div",{staticClass:"pasos-b__header__item__dot"},[s("span",{staticClass:"text-bold"},[t._v(t._s(i+1))]),s("i",{staticClass:"fas fa-check"})])]),s("div",{staticClass:"pasos-b__header__item__tittle px-2 text-small"},[t._v(t._s(e.titulo))])])})),0):t._e()],1)]),s("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[s("div",{staticClass:"pasos-b__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador?s("div",{staticClass:"indicador__container indicador--left"},[s("div",{staticClass:"indicador--click"})]):t._e()])])]),s("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?s("ScrollHorizontal",{attrs:{selectedId:"pb-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return s("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"pb-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"pb-content-"+t.id}})})),0):t._e(),s("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],a=s("ab14"),r=s("6189"),d={name:"PasosB",components:{ScrollHorizontal:r["a"]},mixins:[a["a"]],data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"pasos-b__header__item--active":t===this.selected},{"pasos-b__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},o=d,l=s("2877"),c=Object(l["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},caad:function(t,e,s){"use strict";var i=s("23e7"),n=s("4d64").includes,a=s("44d2");i({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d81d:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").map,a=s("1dde"),r=a("map");i({target:"Array",proto:!0,forced:!r},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},fea5:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0cfca828.425afc07.js.map