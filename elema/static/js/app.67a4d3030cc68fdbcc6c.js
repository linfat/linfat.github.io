webpackJsonp([0],{0:function(t,s){},"2GCi":function(t,s){},"3yh0":function(t,s){},"6HuD":function(t,s){},"9Fno":function(t,s){},EMkt:function(t,s){},I6pY:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return console.log("star-"+this.size),"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return console.log(t),t}}},o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{staticClass:"starClass",class:t})}))},staticRenderFns:[]};var n=e("VU/8")(a,o,!1,function(t){e("2GCi")},"data-v-6cd2d541",null).exports,r={props:{seller:{type:Object}},components:{star:n},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},mounted:function(){},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"],console.log(this.classMap),console.log(this.seller.foodScore)}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-warpper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n   \t\t"+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n   \t")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),e("div",{staticClass:"supports-count",on:{click:function(s){t.showDetail()}}},[t.seller.supports?e("span",{staticClass:"count"},[t._v("\n   \t\t\t"+t._s(t.seller.supports.length)+"个\n   \t\t")]):t._e(),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.showDetail()}}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v("\n   \t  \t"+t._s(t.seller.bulletin)+"\n   \t  ")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.foodScore}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v("\n\t   \t\t\t\t\t"+t._s(t.seller.bulletin)+"\n\t   \t\t\t\t")])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:function(s){t.hideDetail()}}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var l=e("VU/8")(r,c,!1,function(t){e("3yh0")},"data-v-32641f3f",null).exports,d=(e("6HuD"),{components:{"v-header":l},data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("https://wd7517823586mbplep.wilddogio.com/seller.json").then(function(s){s.ok&&(t.seller=s.body,console.log(t.seller))})}}),u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item   "},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item  "},[e("router-link",{attrs:{to:"/rating"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("div",{staticClass:"content"}),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var v=e("VU/8")(d,u,!1,function(t){e("QhxJ")},"data-v-988debba",null).exports,p=e("GQaK"),h={props:{food:{type:Object}},methods:{cartAdd:function(){this.food.count?this.food.count++:i.a.set(this.food,"count",1)},cartReduce:function(){this.food.count--}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){t.cartReduce()}}},[e("i",{staticClass:"icon-remove_circle_outline"})])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))])]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){t.cartAdd()}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]};var _=e("VU/8")(h,f,!1,function(t){e("lj45")},"data-v-4076b822",null).exports,C={props:{deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},selectFoods:{type:Array,default:function(){return[{price:10,count:1},{price:100,count:7}]}}},data:function(){return{fold:!0}},components:{cartcontrol:_},methods:{toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"起送":this.minPrice-this.totalPrice>0?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去节算"},payClass:function(){return this.minPrice-this.totalPrice>0?"no-enough":this.totalPrice-this.minPrice>=0?"enough":void 0},listSHow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new p.a(t.$refs.shopcartList,{click:!0})}),s}}},m={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logn-wrapper"},[e("div",{staticClass:"logn",class:{highLight:t.totalCount}},[e("i",{staticClass:"icon-shopping_cart"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{highLight:t.totalPrice}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另所需配送费"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),t._v(" "),e("transition",{attrs:{name:"fade1"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listSHow,expression:"listSHow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"shopcartList",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.count*s.price))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1)},staticRenderFns:[]};var g={components:{shopCart:e("VU/8")(C,m,!1,function(t){e("OprY")},"data-v-9a217812",null).exports,cartcontrol:_},props:{seller:{type:Object}},data:function(){return{goods:[],heightList:[],scrollY:0}},methods:{selectMenu:function(t){var s=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodScroll.scrollToElement(s,300)},_foodScroll:function(){var t=this;this.menuScroll=new p.a(this.$refs.menuWrapper,{click:!0}),this.foodScroll=new p.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),s=0;this.heightList.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.heightList.push(s)}}},computed:{currentIndex:function(){for(var t=0;t<this.heightList.length;t++){var s=this.heightList[t],e=this.heightList[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){for(var t=[],s=0;s<this.goods.length;s++)return this.goods[s].foods.forEach(function(s){s.count>0&&t.push(s)}),t}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("https://wd7517823586mbplep.wilddogio.com/goods.json").then(function(s){200==s.status&&(t.goods=s.body,console.log(t.goods),console.log(t.goods[0].foods),t.$nextTick(function(){t._foodScroll(),t._calculateHeight()}))})}},w={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item",class:{current:t.currentIndex==i},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n \t\t\t"+t._s(s.name))])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item"},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[t._v("￥"+t._s(s.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])])}))])}))]),t._v(" "),e("shopCart",{attrs:{"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice,selectFoods:t.selectFoods}})],1)},staticRenderFns:[]};var y=e("VU/8")(g,w,!1,function(t){e("EMkt")},"data-v-a12e3e42",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"rating"},[s("h1",[this._v("i am a rating")])])}]};var x=e("VU/8")({},b,!1,function(t){e("I6pY")},"data-v-ca73cdf4",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"seller"},[s("h1",[this._v("i am a seller")])])}]};var P=e("VU/8")({},k,!1,function(t){e("9Fno")},"data-v-10506236",null).exports,E=e("8+8L"),$=e("/ocq");i.a.use($.a),i.a.use(E.a);var F=new $.a({mode:"history",routes:[{path:"/header",component:l},{path:"/goods",component:y},{path:"/seller",component:P},{path:"/rating",component:x}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:F,resource:E.a,components:{App:v},template:"<App/>"})},OprY:function(t,s){},QhxJ:function(t,s){},lj45:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.67a4d3030cc68fdbcc6c.js.map