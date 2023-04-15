(function(){"use strict";var t={7626:function(t,e,i){var r=i(9242),o=i(3396);function n(t,e,i,r,n,a){const c=(0,o.up)("ProductComponent");return(0,o.wg)(),(0,o.j4)(c)}const a={class:"viewport"};function c(t,e,i,r,n,c){const s=(0,o.up)("NavigationBar"),u=(0,o.up)("ProductContent"),l=(0,o.up)("WebsiteFooter");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(s),(0,o.Wm)(u),(0,o.Wm)(l)])}var s=i(7717),u=i(7139);const l={class:"background-image"},d={class:"content"},g={class:"text"};function h(t,e,i,n,a,c){const s=(0,o.up)("ProductGrid"),h=(0,o.up)("ProductDetail");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",l,[(0,o._)("div",d,[(0,o.Wm)(r.uT,null,{default:(0,o.w5)((()=>[(0,o._)("div",g,(0,u.zw)(a.productCategory),1)])),_:1})])]),(0,o.Wm)(r.uT,{name:a.slideDirection},{default:(0,o.w5)((()=>[a.showDetails?((0,o.wg)(),(0,o.j4)(h,{key:1,onCheckDetails:c.checkDetails,productID:a.productID},null,8,["onCheckDetails","productID"])):((0,o.wg)(),(0,o.j4)(s,{key:0,category:a.categoryID,onCheckDetails:c.checkDetails},null,8,["category","onCheckDetails"]))])),_:1},8,["name"])])}var v=i(9354);const y=t=>((0,o.dD)("data-v-734f95e2"),t=t(),(0,o.Cn)(),t),p={class:"main-container"},m={class:"product-grid"},w=["src"],f={class:"product-content"},D=y((()=>(0,o._)("br",null,null,-1))),P={class:"product-hover"},k=["onClick"],_=y((()=>(0,o._)("br",null,null,-1))),C={class:"edit-quantity"},T=["onClick"],I=["onClick"],b={class:"add-to-cart"},A=["onClick"],O={key:0,class:"pagination"},S={key:0},U=["onClick"],j=["onClick"],q=["onClick"],E={key:1},Z={key:1,class:"pagination"},$=["onClick"];function z(t,e,i,n,a,c){const s=(0,o.up)("DisplayOverlay");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(s,{ref:"overlay"},null,512),(0,o._)("div",m,[(0,o.Wm)(r.W3,{name:"list"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.currentProducts,((e,i)=>((0,o.wg)(),(0,o.iD)("div",{class:"grid-item",key:i},[(0,o._)("img",{src:c.getImgUrl(e.image_name1)},null,8,w),(0,o._)("div",f,[(0,o.Uk)((0,u.zw)(e.product_name)+" ",1),D,(0,o.Uk)(),(0,o._)("span",null,"RM "+(0,u.zw)(e.product_price),1)]),(0,o._)("div",P,[(0,o._)("i",{class:"fa fa-search","aria-hidden":"true",onClick:i=>t.$emit("checkDetails",{productID:e.product_id,showDetails:!0,slideDirection:"slide-right"})},null,8,k),_,(0,o._)("span",null,"Quantity: "+(0,u.zw)(a.quantity[i]),1),(0,o._)("div",C,[(0,o._)("i",{class:"fa-solid fa-circle-minus",onClick:t=>c.minusQuantity(i)},null,8,T),(0,o._)("i",{class:"fa-solid fa-circle-plus",onClick:t=>c.addQuantity(i)},null,8,I)]),(0,o._)("div",b,[(0,o._)("div",{class:"add-button",onClick:t=>c.addCart(e.product_id,i)},"Add to Cart",8,A)])])])))),128))])),_:1})]),a.totalPage>=10?((0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",{class:(0,u.C_)(1==a.currentPage?"page-active":"page-button"),onClick:e[0]||(e[0]=t=>c.changePage(1))},"1",2),a.currentPage-1>=5?((0,o.wg)(),(0,o.iD)("div",S,"...")):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)([a.currentPage-1,a.currentPage,a.currentPage+1],((t,e)=>(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,u.C_)(a.currentPage==t?"page-active":"page-button"),key:e,onClick:e=>c.changePage(t)},(0,u.zw)(t),11,U)),[[r.F8,a.currentPage-1>=5&&a.totalPage-a.currentPage>=5]]))),128)),((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(6,((t,e)=>(0,o.wy)((0,o._)("div",{class:(0,u.C_)(a.currentPage==t+1?"page-active":"page-button"),key:e,onClick:e=>c.changePage(t+1)},(0,u.zw)(t+1),11,j),[[r.F8,a.currentPage-1<5]]))),64)),((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([6,5,4,3,2,1],((t,e)=>(0,o.wy)((0,o._)("div",{class:(0,u.C_)(a.currentPage==a.totalPage-t?"page-active":"page-button"),key:e,onClick:e=>c.changePage(a.totalPage-t)},(0,u.zw)(a.totalPage-t),11,q),[[r.F8,a.totalPage-a.currentPage<5]]))),64)),a.totalPage-a.currentPage>=5?((0,o.wg)(),(0,o.iD)("div",E,"...")):(0,o.kq)("",!0),(0,o._)("div",{class:(0,u.C_)(a.currentPage==a.totalPage?"page-active":"page-button"),onClick:e[1]||(e[1]=t=>c.changePage(a.totalPage))},(0,u.zw)(a.totalPage),3)])):((0,o.wg)(),(0,o.iD)("div",Z,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.totalPage,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,u.C_)(a.currentPage==t?"page-active":"page-button"),key:e,onClick:e=>c.changePage(t)},(0,u.zw)(t),11,$)))),128))]))])}i(7658);var W=i(1689),L=i(1541),F={components:{DisplayOverlay:L.Z},async mounted(){this.currentUserID=this.$storage.getStorageSync("loginID"),this.categoryID=this.$storage.getStorageSync("categoryID"),this.products=await v.Z.showProducts(this.categoryID);for(var t=0;t<Object.keys(this.products).length;t++)this.quantity.push(0);this.currentProducts=this.products.slice(8*(this.currentPage-1),8*(this.currentPage-1)+8),this.totalPage=Math.ceil(Object.keys(this.products).length/8)},data(){return{quantity:[],totalPage:null,products:null,currentProducts:null,currentPage:1,currentUserID:null,categoryID:null}},watch:{currentPage(t){this.currentProducts=this.products.slice(8*(t-1),8*(t-1)+8)}},methods:{getImgUrl(t){return"https://54.253.165.56/images/"+t},minusQuantity(t){0!==this.quantity[t]&&(this.quantity[t]-=1)},addQuantity(t){this.quantity[t]+=1},changePage(t){this.currentPage=t,window.scrollTo({top:295,behavior:"smooth"})},async addCart(t,e){void 0==this.$storage.getStorageSync("loginID")?this.$refs.overlay.openErrorOverlay("Please login first"):0!=this.quantity[e]&&(await W.Z.addToCart({userID:this.currentUserID,productID:t,quantity:this.quantity[e]}),this.$refs.overlay.openOverlay("Added into cart")),this.quantity[e]=0}}},Y=i(89);const x=(0,Y.Z)(F,[["render",z],["__scopeId","data-v-734f95e2"]]);var H=x,K=i(1196),Q={async mounted(){this.categoryID=this.$storage.getStorageSync("categoryID");var t=null;t=await v.Z.showCategory(this.categoryID),this.productCategory=t.category_name,this.categoryID=this.$storage.getStorageSync("categoryID")},components:{ProductGrid:H,ProductDetail:K.Z},data(){return{slideDirection:"slide-right",showDetails:!1,productID:null,productCategoryID:null,productCategory:null,categoryID:1}},methods:{checkDetails({productID:t,showDetails:e,slideDirection:i}){this.productID=t,this.showDetails=e,this.slideDirection=i,window.scrollTo({top:295,behavior:"smooth"})}}};const M=(0,Y.Z)(Q,[["render",h],["__scopeId","data-v-ad6a4fb8"]]);var B=M,G=i(3560),N={components:{NavigationBar:s.Z,ProductContent:B,WebsiteFooter:G.Z},beforeMount(){void 0!=this.$storage.getStorageSync("loginID")&&this.activeteActivityTracker()},beforeUnmount(){window.removeEventListener("mousemove",this.userActivityThrottler),window.removeEventListener("scroll",this.userActivityThrottler),window.removeEventListener("keydown",this.userActivityThrottler),window.removeEventListener("resize",this.userActivityThrottler),clearTimeout(this.userActivityTimeout),clearTimeout(this.userActivityThrottlerTimeout)},mounted(){this.activeCategory=this.$storage.getStorageSync("categoryID")},data(){return{userActivityTimeout:null,userActivityThrottlerTimeout:null}},methods:{activeteActivityTracker(){window.addEventListener("mousemove",this.resetUserActivityTimeout),window.addEventListener("scroll",this.resetUserActivityTimeout),window.addEventListener("keydown",this.resetUserActivityTimeout),window.addEventListener("resize",this.resetUserActivityTimeout)},resetUserActivityTimeout(){clearTimeout(this.userActivityTimeout),this.userActivityTimeout=setTimeout((()=>{this.inactiveUserAction()}),9e5)},userActivityThrottler(){this.userActivityThrottlerTimeout||(this.userActivityThrottlerTimeout=setTimeout((()=>{this.resetUserActivityTimeout(),clearTimeout(this.userActivityThrottlerTimeout),this.userActivityThrottlerTimeout=null}),1e3))},inactiveUserAction(){console.log("EXPIRED LIAO"),this.$storage.clearStorageSync("loginID"),this.$storage.clearStorageSync("userProfile")}}};const R=(0,Y.Z)(N,[["render",c],["__scopeId","data-v-67f7d6bf"]]);var X=R,J={components:{ProductComponent:X}};const V=(0,Y.Z)(J,[["render",n]]);var tt=V,et=i(6400);r.ri(tt).use(et.ZP).mount("#app")}},e={};function i(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,r,o,n){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],n=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((function(t){return i.O[t](r[s])}))?r.splice(s--,1):(c=!1,n<a&&(a=n));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[r,o,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.j=893}(),function(){i.p="/FYP2022/"}(),function(){var t={893:0};i.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(s)var l=s(i)}for(e&&e(r);u<a.length;u++)n=a[u],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(l)},r=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998,64],(function(){return i(7626)}));r=i.O(r)})();
//# sourceMappingURL=products.df2ddc6f.js.map