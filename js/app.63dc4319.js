(function(e){function t(t){for(var i,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/my-page/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04cc":function(e,t,n){e.exports=n.p+"img/js.fbefa2e5.png"},"1f87":function(e,t,n){e.exports=n.p+"img/html.4fffb1de.png"},"20ff":function(e,t,n){e.exports=n.p+"img/webpack.f5fb7112.png"},"2c83":function(e,t,n){e.exports=n.p+"img/bootstrap.eda8a37b.png"},3390:function(e,t,n){e.exports=n.p+"img/vue.807c9566.png"},5226:function(e,t,n){e.exports=n.p+"img/caesar-glitched.c6d58663.gif"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("7faf"),n("2877")),o={},c=Object(r["a"])(o,a,s,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"fade"},on:{"after-leave":e.pageLeaved}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.page,expression:"visibility.page"}],staticClass:"section container introSection",on:{wheel:e.wheelHandler,swipe:e.swipeHandler}},[i("transition",{attrs:{name:"fade-slow",appear:""},on:{"after-appear":e.caesarAppeared}},[i("div",{staticClass:"logos"},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.state.caesarGlitching,expression:"state.caesarGlitching"}],staticClass:"logos__logo",attrs:{src:n("5226")}}),i("img",{directives:[{name:"show",rawName:"v-show",value:!e.state.caesarGlitching,expression:"!state.caesarGlitching"}],staticClass:"logos__logo",attrs:{src:n("a680")}})])]),i("transition",{attrs:{name:"fade-slow"},on:{"after-enter":e.scrollIconEntered}},[e.visibility.scrollIcon?i("div",{staticClass:"container container--column align-center justify-center scrollAdvise"},[i("div",{staticClass:"container scrollAdvise__inner align-center justify-center"},[i("img",{staticClass:"scrollAdvise__icon",attrs:{src:n("ef80")}}),i("transition",{attrs:{name:"slide-fade"},on:{"after-enter":e.scrollTextEntered}},[e.visibility.scrollIconText?i("p",{staticClass:"text scrollAdvise__text"},[e._v(" "+e._s(e.scrollText)+" ")]):e._e()])],1)]):e._e()])],1)])},p=[],f=n("9029"),h={data:function(){return{isMobile:f["isMobile"]}},created:function(){console.log(this.isMobile)}},g={name:"Intro",mixins:[h],data:function(){return{scrollText:"",state:{caesarGlitching:!0,mayScroll:!1},visibility:{page:!0,scrollIcon:!1,scrollIconText:!1}}},created:function(){this.scrollText=f["isMobile"]?"Swipe":"Scroll down"},methods:{scrollIconEntered:function(){this.visibility.scrollIconText=!0},scrollTextEntered:function(){this.state.mayScroll=!0},caesarAppeared:function(){this.visibility.scrollIcon=!0,this.state.caesarGlitching=!1},pageLeaved:function(){this.$router.push({name:"greeting"})},switchOffPage:function(){for(var e in this.visibility)this.visibility[e]=!1},wheelHandler:function(e){var t=e.deltaY<0?"up":"down";this.state.mayScroll&&("down"==t?(this.visibility.page=!1,this.state.mayScroll=!1):this.state.mayScroll=!1)},swipeHandler:function(){this.scrollText="fdsf",console.log("swipe")}}},v=g,m=(n("91d1"),Object(r["a"])(v,d,p,!1,null,"3f7b70ff",null)),b=m.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade",appear:""},on:{"after-appear":e.pageAppeared,"after-leave":e.pageLeaved}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visibility.page,expression:"visibility.page"}],staticClass:"section container",on:{wheel:e.wheelHandler}},[n("div",{staticClass:"section__label"},[n("p",{staticClass:"text text--subheading"},[e._v(" 01. ———— Я ")])]),n("div",{staticClass:"container container--row align-center justify-center aboutWall"},[n("div",{staticClass:"container align-center aboutWall__descriptionContainer"},[n("p",{staticClass:"text text--test"},[e._v(" Тут я хотел бы заметить, что Цезарь не просто так на главной ебалом тогрует. Водяная вода, сказки про компанию ")])]),n("div",{staticClass:"container antraksLogoContainer"},[n("svg",{staticClass:"antraksLogo",attrs:{version:"1.1",id:"Слой_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1100 1000"}},[n("path",{staticClass:"st0",attrs:{d:"M575.5,374.5"}}),n("polyline",{staticClass:"st0",attrs:{points:"215.13,999.79 215.34,999.5 215.5,999.5 721.5,297.5 "}}),n("polyline",{staticClass:"st0",attrs:{points:"722,0.5 791.5,-0.5 937.5,-0.5 936.5,650.5 "}}),n("polygon",{staticClass:"st0",attrs:{points:"976.5,650.5 827.5,792.5 681.5,650.5 721.5,650.5 721.5,297.5 215.34,999.5 -0.5,999.5 721.5,0.5 \n\t936.5,0.5 936.5,650.5 "}}),n("polygon",{staticClass:"st0",attrs:{points:"1000,864 678.51,864 594,999 915.49,999 "}})])])])])])},w=[],x={name:"About",data:function(){return{state:{mayScroll:!1},visibility:{page:!0}}},methods:{pageAppeared:function(){this.state.mayScroll=!0},pageLeaved:function(){this.$router.push({name:"stack"})},wheelHandler:function(e){var t=e.deltaY<0?"up":"down";this.state.mayScroll&&("down"==t?(this.visibility.page=!1,this.state.mayScroll=!1):this.state.mayScroll=!1)}}},_=x,H=(n("8abd"),Object(r["a"])(_,y,w,!1,null,"5cb5c26d",null)),S=H.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade-greeting",appear:""},on:{"after-appear":e.pageAppeared,"after-leave":e.pageLeaved}},[e.visibility.page?n("div",{staticClass:"section container"},[n("div",{staticClass:"container container--column align-center justify-center"},[n("h2",{staticClass:"text text--heading"},[e._v(" Hi, I am Roman ")])])]):e._e()])},C=[],j={name:"Greeting",data:function(){return{visibility:{page:!0}}},methods:{pageAppeared:function(){this.visibility.page=!1},pageLeaved:function(){this.$router.push({name:"about"})}}},O=j,A=(n("f57e"),Object(r["a"])(O,k,C,!1,null,"08e0efee",null)),E=A.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"section container align-center justify-center"},[n("div",{staticClass:"section__label"},[n("p",{staticClass:"text text--subheading"},[e._v("02. ———— Стэк.")])]),n("div",{staticClass:"container container--row align-center justify-center nowrap slides"},[n("transition",{attrs:{name:"fade",appear:""}},[e.visibility.backgroundLogo?n("div",{staticClass:"backgroundLogo container align-center justify-center"},[n("img",{staticClass:"backgroundLogo__logo",attrs:{src:e.itemImage,alt:""}})]):e._e()]),e._l(e.hatches,(function(t){return n("Hatch",{key:t.id,attrs:{selected:t.isSelected,hovered:t.isHovered,title:t.value},on:{"hatch-entered":e.hatchEntered},nativeOn:{click:function(n){return e.clickHatchHandler(t)},mouseover:function(n){return e.hoverHatchHandler(t)},mouseleave:function(n){return e.unhoverHatchHandler(t)}}})}))],2)])])},T=[],I=(n("9911"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide",class:{"slide--hovered":e.hovered,"slide--selected":e.selected}},[n("transition",{attrs:{name:"appear",appear:""},on:{"after-enter":e.hatchEntered}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],staticClass:"slide__hatch"})]),n("transition",{attrs:{name:"slide-fade-hatch",appear:""}},[e.selected?n("div",{staticClass:"slide__title"},[n("span",{staticClass:"text text--bold"},[e._v(e._s(e.title))])]):e._e()])],1)}),M=[],$={name:"Hatch",data:function(){return{isVisible:!1}},props:{hovered:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},title:{type:String,default:""}},mounted:function(){var e=this;setTimeout((function(){e.isVisible=!0}),this.getRandomArbitrary(20,1800))},methods:{getRandomArbitrary:function(e,t){return Math.random()*(t-e)+e},hatchEntered:function(){this.$emit("hatch-entered")}}},P=$,G=(n("ca70"),Object(r["a"])(P,I,M,!1,null,"e2977522",null)),N=G.exports,V={name:"Stack",data:function(){return{selectedImage:"",seltectedHatch:null,state:{hatchesAmount:0,hatchesLoadedAmount:0},visibility:{backgroundLogo:!0},hatches:[{id:0,isHovered:!1,isSelected:!1,value:"HTML",link:"html.png"},{id:1,isHovered:!1,isSelected:!1,value:"CSS",link:"css.png"},{id:2,isHovered:!1,isSelected:!1,value:"JS",link:"js.png"},{id:3,isHovered:!1,isSelected:!1,value:"VUE",link:"vue.png"},{id:4,isHovered:!1,isSelected:!1,value:"STYLUS",link:"stylus.png"},{id:5,isHovered:!1,isSelected:!1,value:"GIT",link:"git.png"},{id:6,isHovered:!1,isSelected:!1,value:"WEBPACK",link:"webpack.png"},{id:7,isHovered:!1,isSelected:!1,value:"GULP",link:"gulp.png"},{id:8,isHovered:!1,isSelected:!1,value:"VUETIFY",link:"vuetify.png"},{id:9,isHovered:!1,isSelected:!1,value:"JQUERY",link:"jquery.png"},{id:10,isHovered:!1,isSelected:!1,value:"V-NATIVE",link:"vuenative.png"},{id:11,isHovered:!1,isSelected:!1,value:"NODE",link:"node.png"},{id:12,isHovered:!1,isSelected:!1,value:"C#",link:"csharp.png"}]}},components:{Hatch:N},created:function(){this.state.hatchesAmount=this.hatches.length},methods:{clickHatchHandler:function(e){var t=this;this.seltectedHatch!=e&&(this.unselectAllhatches(),this.seltectedHatch=e,this.selectedImage=e.link,e.isSelected=!0,this.visibility.backgroundLogo=!1,setTimeout((function(){t.visibility.backgroundLogo=!0}),200))},unselectAllhatches:function(){this.hatches.forEach((function(e){e.isSelected=!1}))},hoverHatchHandler:function(e){e.isHovered=!0},unhoverHatchHandler:function(e){e.isHovered=!1},hatchEntered:function(){this.state.hatchesLoadedAmount++}},watch:{state:{deep:!0,handler:function(e){var t=this;e.hatchesLoadedAmount==this.state.hatchesAmount&&(this.hatches[6].isHovered=!0,setTimeout((function(){t.hatches[6].isHovered=!1,t.clickHatchHandler(t.hatches[6])}),500))}}},computed:{itemImage:function(){if(this.selectedImage){var e=this.selectedImage.toLowerCase();return n("5d88")("./".concat(e))}}}},U=V,q=(n("9047"),Object(r["a"])(U,L,T,!1,null,"efe451e0",null)),Y=q.exports;i["a"].use(u["a"]);var B=[{path:"/",name:"intro",component:b},{path:"/greeting",name:"greeting",component:E},{path:"/about",name:"about",component:S},{path:"/stack",name:"stack",component:Y}],J=new u["a"]({base:"/my-page/",routes:B}),R=J,D=n("2f62");i["a"].use(D["a"]);var W=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),F=n("0086"),K=n.n(F);i["a"].use(K.a),i["a"].config.productionTip=!1,new i["a"]({router:R,store:W,render:function(e){return e(l)}}).$mount("#app")},"588e":function(e,t,n){},"5d88":function(e,t,n){var i={"./bootstrap.png":"2c83","./csharp.png":"dfa2","./css.png":"c37b","./git.png":"ce40","./gulp.png":"b6ee","./html.png":"1f87","./jquery.png":"9022","./js.png":"04cc","./mysql.png":"ad33","./node.png":"dced","./react.png":"e8ee","./stylus.png":"c03b","./vue.png":"3390","./vuenative.png":"7194","./vuetify.png":"7bca","./webpack.png":"20ff"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="5d88"},7194:function(e,t,n){e.exports=n.p+"img/vuenative.fe5127f8.png"},"7bca":function(e,t,n){e.exports=n.p+"img/vuetify.3d2446e3.png"},"7c54":function(e,t,n){},"7faf":function(e,t,n){"use strict";n("b8ff")},"8abd":function(e,t,n){"use strict";n("e966")},9022:function(e,t,n){e.exports=n.p+"img/jquery.3a5cb045.png"},9047:function(e,t,n){"use strict";n("7c54")},"91d1":function(e,t,n){"use strict";n("9696")},9502:function(e,t,n){},9696:function(e,t,n){},a680:function(e,t,n){e.exports=n.p+"img/caesar_non_glitched.8109558f.png"},ad33:function(e,t,n){e.exports=n.p+"img/mysql.65a5c4c6.png"},b6ee:function(e,t,n){e.exports=n.p+"img/gulp.b706c388.png"},b8ff:function(e,t,n){},c03b:function(e,t,n){e.exports=n.p+"img/stylus.9864b98f.png"},c37b:function(e,t,n){e.exports=n.p+"img/css.5810693e.png"},ca70:function(e,t,n){"use strict";n("9502")},ce40:function(e,t,n){e.exports=n.p+"img/git.061bb842.png"},dced:function(e,t,n){e.exports=n.p+"img/node.b900265d.png"},dfa2:function(e,t,n){e.exports=n.p+"img/csharp.76b468da.png"},e8ee:function(e,t,n){e.exports=n.p+"img/react.1f644180.png"},e966:function(e,t,n){},ef80:function(e,t,n){e.exports=n.p+"img/scroll.2e0605ec.gif"},f57e:function(e,t,n){"use strict";n("588e")}});
//# sourceMappingURL=app.63dc4319.js.map