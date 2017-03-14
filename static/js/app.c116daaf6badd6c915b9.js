webpackJsonp([1,0],[function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=s(2),n=o(i),r=s(41),a=o(r),c=s(4),l=o(c),d=s(43),p=o(d),u=s(47),f=o(u),v=s(45),h=o(v),m=s(17),g=o(m);s(5),n.default.use(g.default),n.default.use(l.default);var x=n.default.extend(a.default),y=new l.default({linkActiveClass:"active"});y.map({"/goods":{component:p.default},"/seller":{component:f.default},"/ratings":{component:h.default}}),y.start(x,"#app"),y.go("/goods")},,,function(t,e,s){var o,i,n={};s(7),o=s(31),i=s(19),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports=' <div id=app> <v-header :seller=seller></v-header> <div class="tab border-1px"> <div class=tab-item> <a v-link="{path: \'/goods\'}">商品</a> </div> <div class=tab-item> <a v-link="{path: \'/ratings\'}">评论</a> </div> <div class=tab-item> <a v-link="{path: \'/seller\'}">商家</a> </div> </div> <router-view :seller=seller></router-view> </div> '},function(t,e){t.exports=' <div class=cartcontrol> <div class=cart-decrease v-show="food.count > 0" @click.stop.prevent=decreaseCart transition=move> <span class="inner icon-remove_circle_outline"></span> </div> <div class=cart-num v-show="food.count > 0">{{food.count}}</div> <div class="cart-add icon-add_circle" @click.stop.prevent=addCart></div> </div> '},function(t,e){t.exports=' <div v-show=showFlag class=food transition=move v-el:food> <div class=food-content> <div class=image-header> <img :src=food.image> <div class=back> <i class=icon-arrow_lift @click=hide></i> </div> </div> <div class=content> <h1 class=title> {{food.name}} </h1> <p class=detail> <span class=sell-count>月售{{food.sellCount}}份</span><span class=rating>好评率{{food.rating}}%</span> </p> <div class=price> <span class=now>¥{{food.price}}</span> <span class=old v-show=food.oldPrice>¥{{food.oldPrice}}</span> </div> <div class=cartcontrol-wrapper> <cartcontrol :food=food></cartcontrol> </div> <div class=buy v-show="!food.count || food.count === 0" @click=addFirst transition=fade>加入购物车</div> </div> <split v-show=food.info></split> <div class=food-info v-show=food.info> <h1 class=title> 商品介绍 </h1> <p class=text> {{food.info}} </p> </div> <split></split> <div class=rating> <h1 class=title> 商品评价 </h1> <ratingselect :select-type=selectType :only-content=onlyContent :desc=desc :ratings=food.ratings></ratingselect> <div class=rating-wrapper> <ul v-show="food.ratings && food.ratings.length"> <li v-for="rating in food.ratings" class=rating-item v-show=needShow(rating.rateType,rating.text)> <div class=user> <span class=username>{{rating.username}}</span> <img :src=rating.avatar class=avatar width=12 height=12> </div> <div class=time>{{rating.rateTime | formateDate}}</div> <p class=text> <span :class="{\'icon-thumb_up\':rating.rateType === 0,\'icon-thumb_down\':rating.rateType === 1}"></span><span class=detail>{{rating.text}}</span> </p> </li> </ul> <div class=no-rating v-show="!food.ratings || !food.ratings.length">暂无评论</div> </div> </div> </div> </div> '},function(t,e){t.exports=' <div class=goods> <div class=menu-wrapper v-el:menu-wrapper> <ul> <li class=menu-item v-for="item in goods" :class="{current: currentIndex === $index}" @click=selectMenu($index,$event)> <span class="text border-1px"> <span v-show="item.type>0" class=icon :class=classMap[item.type]></span>{{item.name}} </span> </li> </ul> </div> <div class=foods-wrapper v-el:foods-wrapper> <ul> <li class="food-list food-list-hook" v-for="item in goods"> <h1 class=title>{{item.name}}</h1> <ul> <li class="food-item border-1px" v-for="food in item.foods" @click="selectFood(food, $event)"> <div class=icon> <img :src=food.icon :alt=food.name width=57 height=57> </div> <div class=content> <h2 class=name>{{food.name}}</h2> <p class=desc>{{food.description}}</p> <div class=extra> <span>月售{{food.sellCount}}</span> <span class=rating>好评率{{food.rating}}%</span> </div> <div class=price> <span class=now>¥{{food.price}}</span> <span class=old v-show=food.oldPrice>¥{{food.oldPrice}}</span> </div> <div class=cartcontrol-wrapper> <cartcontrol :food=food></cartcontrol> </div> </div> </li> </ul> </li> </ul> </div> <shopcart v-ref:shopcart :delivery-price=seller.deliveryPrice :min-price=seller.minPrice :selected-foods=selectedFoods></shopcart> <food :food=selectedFood v-ref:food></food> </div> '},function(t,e){t.exports=' <div class=header> <div class=content-wrapper> <div class=avatar> <img :src=seller.avatar :alt=seller.name width=64 height=64> </div> <div class=content> <div class=title> <span class=brand></span> <span class=name>{{seller.name}}</span> </div> <div class=description> {{seller.description}}/{{seller.deliveryTime}}分钟送达 </div> <div class=support v-if=seller.supports> <div class=icon :class=classMap[seller.supports[0].type]></div> <div class=support-detail> {{seller.supports[0].description}} </div> </div> </div> </div> <div class=count-wrapper> <div class=count v-if=seller.supports @click=showDetail> <span class=count-num>{{seller.supports.length}}个</span> <i class=icon-keyboard_arrow_right></i> </div> </div> <div class=notice-wrapper @click=showDetail> <span class=notice-icon></span> <span class=notice>{{seller.bulletin}}</span> <i class=icon-keyboard_arrow_right></i> </div> <div class=bground> <img :src=seller.avatar width=100% height=100% /> </div> <div class=detailShow v-show=detailShow transition=fade> <div class="detail-wrapper cf"> <div class=detail-main> <div class=name>{{seller.name}}</div> <div class=star-wrapper> <star :size=48 :score=seller.score></star> </div> <div class=title> <div class=line></div> <div class=info>优惠信息</div> <div class=line></div> </div> <ul class=supports v-if=seller.supports> <li class=supports-item v-for="item in seller.supports"> <span class=icon :class=classMap[seller.supports[$index].type]></span> <span class=supports-text>{{seller.supports[$index].description}}</span> </li> </ul> <div class=title> <div class=line></div> <div class=info>商家公告</div> <div class=line></div> </div> <div class=bulletin> <p class=bulletin-text>{{seller.bulletin}}</p> </div> </div> </div> <div class=detail-close @click=hideDetail> <i class=icon-close></i> </div> </div> </div> '},function(t,e){t.exports=" <div>i am ratings</div> "},function(t,e){t.exports=' <div class=ratingselect> <div class="rating-type border-1px"> <span class="block all" :class="{\'active\':selectType===2}" @click=select(2,$event)>{{desc.all}}<span class=count>{{ratings.length}}</span></span> <span class="block positive" :class="{\'active\':selectType===0}" @click=select(0,$event)>{{desc.positive}}<span class=count>{{positives.length}}</span></span> <span class="block negative" :class="{\'active\':selectType===1}" @click=select(1,$event)>{{desc.negative}}<span class=count>{{negatives.length}}</span></span> </div> <div class=switch :class="{\'on\': onlyContent}" @click=toggleContent> <span class=icon-check_circle></span> <span class=text>只显示有内容的评价</span> </div> </div> '},function(t,e){t.exports=" <div>i am seller</div> "},function(t,e){t.exports=' <div class=shopcart> <div class=content @click=toggleList> <div class=content-left> <div class=logo-wrapper> <div class=logo :class="{highlight: totalCount > 0}"> <i class=icon-shopping_cart :class="{highlight: totalCount > 0}"></i> </div> <div class=num v-show="totalCount > 0">{{totalCount}}</div> </div> <div class=price :class="{highlight: totalPrice > 0}">{{totalPrice}}元</div> <div class=desc>另需配送费¥{{deliveryPrice}}元</div> </div> <div class=content-right @click.stop.prevent=pay> <div class=pay :class=payClass> {{payDesc}} </div> </div> </div> <div class=ball-container> <div class=ball v-for="ball in balls" v-show=ball.show transition=drop> <div class="inner inner-hook"></div> </div> </div> <div class=shopcart-list v-show=listShow transition=fold> <div class=list-header> <h1 class=title>购物车</h1> <span class=empty @click=empty>清空</span> </div> <div class=list-content v-el:list-content> <ul> <li class=food v-for="food in selectedFoods"> <span class=name>{{food.name}}</span> <div class=price> ￥{{food.price*food.count}} </div> <div class=cartcontrol-wrapper> <cartcontrol :food=food></cartcontrol> </div> </li> </ul> </div> </div> </div> <div class=list-mask v-show=listShow transition=fade @click=toggleList></div> '},function(t,e){t.exports=" <div class=split></div> "},function(t,e){t.exports=' <div class=star :class=starType> <span class=star-item v-for="itemClass in itemClasses" :class=itemClass track-by=$index></span> </div> '},function(t,e){"use strict";function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,t.getFullYear()+"".substr(4-RegExp.$1.length)));var s={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in s)if(RegExp("("+i+")").test(e)){var n=s[i]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?n:o(n))}return e}function o(t){return("00"+t).substr(t.length)}Object.defineProperty(e,"__esModule",{value:!0}),e.formateDate=s},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(44),n=o(i),r=0;e.default={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(e){e=e.body,e.errno===r&&(t.seller=e.data)})},components:{"v-header":n.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),n=o(i);e.default={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:n.default.set(this.food,"count",1),this.$dispatch("cart.add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count&&this.food.count--}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),n=o(i),r=s(3),a=o(r),c=s(2),l=o(c),d=s(49),p=o(d),u=s(46),f=o(u),v=s(29),h=2;e.default={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:h,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=h,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.default(t.$els.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructor||(l.default.set(this.food,"count",1),this.$dispatch("cart.add",t.target))},needShow:function(t,e){return!(this.onlyContent&&!e)&&(this.selectType===h||this.selectType===t)}},events:{"ratingtype.select":function(t){var e=this;this.selectType=t,this.$nextTick(function(){e.scroll.refresh()})},"content.toggle":function(t){var e=this;this.onlyContent=t,this.$nextTick(function(){e.scroll.refresh()})}},filters:{formateDate:function(t){var e=new Date(t);return(0,v.formateDate)(e,"yyyy-MM-dd hh:mm")}},components:{cartcontrol:a.default,split:p.default,ratingselect:f.default}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),n=o(i),r=s(48),a=o(r),c=s(3),l=o(c),d=s(42),p=o(d),u=0;e.default={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){var t=this;this.$http.get("/api/goods").then(function(e){e=e.body,e.errno===u&&(t.goods=e.data,t.$nextTick(function(){t._initScroll(),t._caculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"]},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var e=this.listHeight[t],s=this.listHeight[t+1];if(!s||this.scrollY>=e&&this.scrollY<s)return t}return 0},selectedFoods:function(){var t=[];return this.goods.forEach(function(e){e.foods.forEach(function(e){e.count&&t.push(e)})}),t}},methods:{selectMenu:function(t,e){if(e._constructed){var s=this.$els.foodsWrapper.getElementsByClassName("food-list-hook"),o=s[t];this.foodsScroll.scrollToElement(o,300)}},selectFood:function(t,e){e._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.menuScroll=new n.default(this.$els.menuWrapper,{click:!0}),this.foodsScroll=new n.default(this.$els.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(e){t.scrollY=Math.abs(Math.round(e.y))})},_caculateHeight:function(){var t=this.$els.foodsWrapper.getElementsByClassName("food-list-hook"),e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var o=t[s].clientHeight;e+=o,this.listHeight.push(e)}},_drop:function(t){this.$refs.shopcart.drop(t)}},components:{shopcart:a.default,cartcontrol:l.default,food:p.default},events:{"cart.add":function(t){this._drop(t)}}}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(50),n=o(i);e.default={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=0,o=1,i=2;e.default={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:i},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter(function(t){return t.rateType===s})},negatives:function(){return this.ratings.filter(function(t){return t.rateType===o})}},methods:{select:function(t,e){e._constructor||(this.selectType=t,this.$dispatch("ratingtype.select",t))},toggleContent:function(t){t._constructor||(this.onlyContent=!this.onlyContent,this.$dispatch("content.toggle",this.onlyContent))}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),n=o(i),r=s(1),a=o(r);e.default={props:{selectedFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectedFoods.forEach(function(e){t+=e.price*e.count}),t},totalCount:function(){var t=0;return this.selectedFoods.forEach(function(e){t+=e.count}),t},payDesc:function(){if(0===this.totalPrice)return"￥"+this.minPrice+"元起送";if(this.totalPrice<this.minPrice){var t=0;return t=this.minPrice-this.totalPrice,"还差￥"+t+"元起送"}return"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var e=!this.fold;return e&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new a.default(t.$els.listContent,{click:!0})}),e}},methods:{drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return s.show=!0,s.el=t,void this.dropBalls.push(s)}},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectedFoods.forEach(function(t){t.count=0})},pay:function(){this.totalPrice<this.minPrice||window.alert("你需要支付"+this.totalPrice+"元")}},transitions:{drop:{beforeEnter:function(t){for(var e=this.balls.length;e--;){var s=this.balls[e];if(s.show){var o=s.el.getBoundingClientRect(),i=o.left-32,n=-(window.innerHeight-o.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.getElementsByClassName("inner-hook")[0];r.style.webkitTransform="translate3d("+i+"px,0,0)",r.style.transform="translate3d("+i+"px,0,0)"}}},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.display="",t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var e=this.dropBalls.shift();e&&(e.show=!1,t.style.display="none")}}},components:{cartcontrol:n.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=5,o="on",i="half",n="off";e.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,r=Math.floor(e),a=e%1!==0,c=0;c<r;c++)t.push(o);for(a&&t.push(i);t.length<s;)t.push(n);return t}}}},function(t,e,s){var o,i,n={};s(6),o=s(30),i=s(18),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(8),o=s(32),i=s(20),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(9),o=s(33),i=s(21),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(10),o=s(34),i=s(22),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(15),o=s(35),i=s(23),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(11),o=s(36),i=s(24),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(16),o=s(37),i=s(25),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(12),o=s(38),i=s(26),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(13),o=s(39),i=s(27),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e,s){var o,i,n={};s(14),o=s(40),i=s(28),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var r="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(r.template=i),r.computed||(r.computed={}),Object.keys(n).forEach(function(t){var e=n[t];r.computed[t]=function(){return e}})},function(t,e){}]);
//# sourceMappingURL=app.c116daaf6badd6c915b9.js.map