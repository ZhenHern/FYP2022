(function(){"use strict";var t={3601:function(t,o,e){var r=e(9242),n=e(3396);function i(t,o,e,r,i,s){const c=(0,n.up)("LandingPageComponent");return(0,n.wg)(),(0,n.j4)(c)}var s=e(7139);const c=t=>((0,n.dD)("data-v-113906ae"),t=t(),(0,n.Cn)(),t),a={class:"viewport"},u={class:"background-image"},l={class:"content"},d=c((()=>(0,n._)("div",{class:"text"}," Home ",-1))),p=c((()=>(0,n._)("div",{class:"latest-product-top-container"},[(0,n._)("div",{class:"latest-product-title"}," Latest Bakery Products "),(0,n._)("div",{class:"latest-product-content"}," Check some of our best products and feel the great passion for food ")],-1))),f={class:"product-grid"},v=["src"],h={class:"product-content"},g=c((()=>(0,n._)("br",null,null,-1))),w={class:"product-hover"},_=["onClick"],m=c((()=>(0,n._)("br",null,null,-1))),D={class:"more-products"},b=c((()=>(0,n._)("div",{class:"voucher-wrapper"},[(0,n._)("div",{class:"voucher-content"},[(0,n._)("div",{class:"voucher-text-1"}," Satisfy your sweet tooth with our bakery vouchers "),(0,n._)("div",{class:"voucher-text-2"}," The perfect gift for any dessert lover! "),(0,n._)("div",{class:"voucher-button"},[(0,n._)("div",{class:"more-products-button"}," View Vouchers ")])])],-1)));function k(t,o,e,i,c,k){const y=(0,n.up)("NavigationBar"),P=(0,n.up)("ProductDetail"),j=(0,n.up)("WebsiteFooter");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(y),(0,n._)("div",u,[(0,n._)("div",l,[(0,n.Wm)(r.uT,null,{default:(0,n.w5)((()=>[d])),_:1})])]),(0,n.Wm)(r.uT,{name:c.slideDirection},{default:(0,n.w5)((()=>[c.showDetails?((0,n.wg)(),(0,n.j4)(P,{key:1,onCheckDetails:k.checkDetails,productID:c.productID},null,8,["onCheckDetails","productID"])):((0,n.wg)(),(0,n.iD)("div",{key:0,class:"landing-page","on:checkDetails":o[1]||(o[1]=(...t)=>k.checkDetails&&k.checkDetails(...t))},[p,(0,n._)("div",f,[(0,n.Wm)(r.W3,{name:"list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.products,((t,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"grid-item",key:o},[(0,n._)("img",{src:k.getImgUrl(t.image_name1)},null,8,v),(0,n._)("div",h,[(0,n.Uk)((0,s.zw)(t.product_name)+" ",1),g,(0,n.Uk)(),(0,n._)("span",null,"RM "+(0,s.zw)(t.product_price),1)]),(0,n._)("div",w,[(0,n._)("i",{class:"fa fa-search","aria-hidden":"true",onClick:o=>k.goToDetails(t.product_id,"slide-right")},null,8,_),m])])))),128))])),_:1})]),(0,n._)("div",D,[(0,n._)("div",{class:"more-products-button",onClick:o[0]||(o[0]=t=>k.goToProduct())}," More Products ")]),b],32))])),_:1},8,["name"]),(0,n.Wm)(j)])}var y=e(5268),P=e(8979),j=e(3097),C=e(9354),O={components:{NavigationBar:y.Z,ProductDetail:P.Z,WebsiteFooter:j.Z},async mounted(){var t=await C.Z.showLatestProducts();this.products=t.slice(0,8)},data(){return{showDetails:!1,products:null,productID:null,slideDirection:"slide-right"}},methods:{getImgUrl(t){return e(1883)("./"+t)},goToDetails(t,o){this.productID=t,this.showDetails=!0,this.slideDirection=o,window.scrollTo({top:295,behavior:"smooth"})},checkDetails({productID:t,showDetails:o,slideDirection:e}){this.productID=t,this.showDetails=o,this.slideDirection=e,window.scrollTo({top:295,behavior:"smooth"})},goToProduct(){window.location.href="products"}}},T=e(89);const I=(0,T.Z)(O,[["render",k],["__scopeId","data-v-113906ae"]]);var W=I,x={components:{LandingPageComponent:W}};const Z=(0,T.Z)(x,[["render",i]]);var F=Z,L=e(6400);r.ri(F).use(L.ZP).mount("#app")}},o={};function e(r){var n=o[r];if(void 0!==n)return n.exports;var i=o[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(o,r,n,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],n=t[l][1],i=t[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&i||s>=i)&&Object.keys(e.O).every((function(t){return e.O[t](r[a])}))?r.splice(a--,1):(c=!1,i<s&&(s=i));if(c){t.splice(l--,1);var u=n();void 0!==u&&(o=u)}}return o}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,n,i]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.j=826}(),function(){e.p="/FYP2022/"}(),function(){var t={826:0};e.O.j=function(o){return 0===t[o]};var o=function(o,r){var n,i,s=r[0],c=r[1],a=r[2],u=0;if(s.some((function(o){return 0!==t[o]}))){for(n in c)e.o(c,n)&&(e.m[n]=c[n]);if(a)var l=a(e)}for(o&&o(r);u<s.length;u++)i=s[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(l)},r=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998,64],(function(){return e(3601)}));r=e.O(r)})();
//# sourceMappingURL=index.4da711a2.js.map