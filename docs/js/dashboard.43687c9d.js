(function(){"use strict";var e={5866:function(e,t,r){var n=r(9242),o=r(3396);function s(e,t,r,n,s,a){const i=(0,o.up)("DashboardComponent");return(0,o.wg)(),(0,o.j4)(i)}var a=r(7139);const i=e=>((0,o.dD)("data-v-9bf6f824"),e=e(),(0,o.Cn)(),e),l={class:"viewport"},d={class:"background-image"},u={class:"content"},c=i((()=>(0,o._)("div",{class:"text"}," Dashboard ",-1))),v={class:"main-container"},h={class:"main-wrapper"},g={class:"left-container"},p={class:"number-container"},f={class:"order-stats"},m=i((()=>(0,o._)("div",{class:"total-order"}," Total Orders ",-1))),_={class:"total-number"},b=i((()=>(0,o._)("div",{class:"pending-order"}," Pending ",-1))),w={class:"pending-number"},y=i((()=>(0,o._)("div",{class:"cancelled-order"}," Cancelled ",-1))),M={class:"cancelled-number"},P=i((()=>(0,o._)("div",{class:"completed-order"}," Completed ",-1))),O={class:"completed-number"},C={class:"latest-order-container"},k={class:"latest-order-top-container"},A=(0,o.uE)('<div class="latest-order-title" data-v-9bf6f824> Latest Order </div><div class="table-head" data-v-9bf6f824><div class="item-head" data-v-9bf6f824></div><div class="name-head" data-v-9bf6f824>Item</div><div class="quantity-head" data-v-9bf6f824>Quantity</div><div class="price-head" data-v-9bf6f824>Price</div></div>',2),D={key:0,class:"loading"},F=i((()=>(0,o._)("i",{class:"fas fa-spinner fa-spin"},null,-1))),j=[F],R={key:1,class:"table-content"},T={class:"item-image"},U=["src"],W={class:"item-name"},Z={class:"item-quantity"},J={class:"item-price"},z={class:"view-orders"},x={class:"right-container"},I={class:"total-revenue-container"},N=i((()=>(0,o._)("div",{class:"total-revenue-title"},"Total Revenue :",-1))),S={class:"total-revenue-value"},Y={class:"goals"},q={class:"goals-top-container"},E=i((()=>(0,o._)("div",{class:"goals-title"},"Goals and Overview",-1))),L={class:"months-dropdown"},B={class:"months-title"},G=i((()=>(0,o._)("i",{class:"fa-solid fa-chevron-down"},null,-1))),H={class:"months-dropdown-content",ref:"monthsDropdown"},K=["onClick"],V={class:"goals-content"},Q={class:"revenue-title"},$={class:"revenue-bar"},X={class:"order-title"},ee={class:"order-bar"},te=i((()=>(0,o._)("div",{class:"edit-goals"},[(0,o._)("div",{class:"edit-goals-button"},[(0,o._)("i",{class:"fa-solid fa-pencil"}),(0,o.Uk)(" Edit Goals ")])],-1))),re={class:"edit-container"},ne=i((()=>(0,o._)("i",{class:"fa-solid fa-chevron-right"},null,-1))),oe=i((()=>(0,o._)("i",{class:"fa-solid fa-chevron-right"},null,-1))),se=i((()=>(0,o._)("div",{class:"edit-vouchers"},[(0,o.Uk)(" Edit Vouchers "),(0,o._)("i",{class:"fa-solid fa-chevron-right"})],-1)));function ae(e,t,r,s,i,F){const ae=(0,o.up)("NavigationBar"),ie=(0,o.up)("vue3-autocounter"),le=(0,o.up)("WebsiteFooter");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(ae),(0,o._)("div",d,[(0,o._)("div",u,[(0,o.Wm)(n.uT,null,{default:(0,o.w5)((()=>[c])),_:1})])]),(0,o._)("div",v,[(0,o._)("div",h,[(0,o._)("div",g,[(0,o._)("div",p,[(0,o._)("ul",f,[(0,o._)("li",null,[m,(0,o._)("div",_,[(0,o.Wm)(ie,{startAmount:0,endAmount:i.totalOrder,duration:2},null,8,["endAmount"])])]),(0,o._)("li",null,[b,(0,o._)("div",w,[(0,o.Wm)(ie,{startAmount:0,endAmount:i.totalPending,duration:2},null,8,["endAmount"])])]),(0,o._)("li",null,[y,(0,o._)("div",M,[(0,o.Wm)(ie,{startAmount:0,endAmount:i.totalCancelled,duration:2},null,8,["endAmount"])])]),(0,o._)("li",null,[P,(0,o._)("div",O,[(0,o.Wm)(ie,{startAmount:0,endAmount:i.totalCompleted,duration:2},null,8,["endAmount"])])])])]),(0,o._)("div",C,[(0,o._)("div",k,[A,i.loading?((0,o.wg)(),(0,o.iD)("div",D,j)):((0,o.wg)(),(0,o.iD)("div",R,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.latestOrder,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"order-item",key:t},[(0,o._)("div",T,[(0,o._)("img",{src:F.getImgUrl(e.productImage)},null,8,U)]),(0,o._)("div",W,(0,a.zw)(e.productName),1),(0,o._)("div",Z,(0,a.zw)(e.quantity),1),(0,o._)("div",J,(0,a.zw)(e.price),1)])))),128))]))]),(0,o._)("div",z,[(0,o._)("div",{class:"view-orders-button",onClick:t[0]||(t[0]=e=>F.goToOrders())}," View All Orders ")])])]),(0,o._)("div",x,[(0,o._)("div",I,[N,(0,o._)("div",S,[(0,o.Uk)(" RM "),(0,o.Wm)(ie,{RM:"",startAmount:0,endAmount:i.totalRevenue,duration:2,decimals:2},null,8,["endAmount"])])]),(0,o._)("div",Y,[(0,o._)("div",q,[E,(0,o._)("div",L,[(0,o._)("div",B,[(0,o.Uk)((0,a.zw)(i.displayMonth)+" ",1),G]),(0,o._)("ul",H,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.previousMonths,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t,onClick:t=>F.changeMonth(e)},(0,a.zw)(e),9,K)))),128)),(0,o._)("li",{onClick:t[1]||(t[1]=e=>F.changeMonth(i.currentMonth))},(0,a.zw)(i.currentMonth),1)],512)])]),(0,o._)("div",V,[(0,o._)("div",Q,[(0,o.Uk)(" Revenue "),(0,o._)("div",null,"RM "+(0,a.zw)(i.revenue)+" / RM 10000",1)]),(0,o._)("div",$,[(0,o._)("div",{class:"revenue-progression",style:(0,a.j5)({width:i.revenueProgression+"%"})},null,4)]),(0,o._)("div",X,[(0,o.Uk)(" Order "),(0,o._)("div",null,(0,a.zw)(i.order)+" / 30",1)]),(0,o._)("div",ee,[(0,o._)("div",{class:"order-progression",style:(0,a.j5)({width:i.orderProgression+"%"})},null,4)])]),te]),(0,o._)("div",re,[(0,o._)("div",{class:"edit-products",onClick:t[2]||(t[2]=e=>F.goToProduct("CreateProduct"))},[(0,o.Uk)(" Create Products "),ne]),(0,o._)("div",{class:"edit-products",onClick:t[3]||(t[3]=e=>F.goToProduct("DeleteProduct"))},[(0,o.Uk)(" Delete Products "),oe]),se])])])]),(0,o.Wm)(le)])}r(7658);var ie=r(8254),le=r(3097),de=r(1689),ue=r(9354),ce={components:{NavigationBar:ie.Z,WebsiteFooter:le.Z},async mounted(){var e=await de.Z.showAllPaidOrders();this.totalOrder=e.length,this.calculatePending(e),this.calculateCancelled(e),this.calculateCompleted(e),this.calculateRevenue(e),this.getLatestOrder(e),this.getCurrentMonth(),this.getPreviousMonths()},data(){return{loading:!0,totalOrder:0,totalPending:0,totalCancelled:0,totalCompleted:0,totalRevenue:0,latestSubtotal:0,revenue:0,order:0,orderProgression:0,revenueProgression:0,latestOrder:[],currentMonth:"",displayMonth:"",previousMonths:[]}},methods:{goToOrders(){window.location.href="orders"},goToProduct(e){this.$storage.setStorageSync("editProducts",e),window.location.href="editProducts"},calculatePending(e){var t=0;for(let r=0;r<e.length;r++)"Preparing"==e[r].status&&(t+=1);this.totalPending=t},calculateCancelled(e){var t=0;for(let r=0;r<e.length;r++)"Cancelled"==e[r].status&&(t+=1);this.totalCancelled=t},calculateCompleted(e){var t=0;for(let r=0;r<e.length;r++)"Completed"==e[r].status&&(t+=1);this.totalCompleted=t},calculateRevenue(e){var t=0;for(let r=0;r<e.length;r++)t+=parseFloat(e[r].subtotal);this.totalRevenue=t},async getLatestOrder(e){var t=e[0].item_cart_id;this.latestSubtotal=e[0].subtotal;var r=await de.Z.showAllItems(t);for(let o=0;o<r.length;o++){var n=await ue.Z.showProduct(r[o].product_id);this.latestOrder.push({productImage:n.image_name1,productName:n.product_name,quantity:r[o].quantity,price:n.product_price})}this.loading=!1},getImgUrl(e){return"https://13.211.124.167/images/"+e},getCurrentMonth(){const e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date;this.currentMonth=e[t.getMonth()]+" "+t.getFullYear(),this.displayMonth=this.currentMonth},getPreviousMonths(){const e=["January","February","March","April","May","June","July","August","September","October","November","December"],t=new Date;var r,n=t.getFullYear(),o=11;for(let s=1;s<12;s++)t.getMonth()-s<0?(n=t.getFullYear()-1,r=e[o],this.previousMonths.push(r+" "+n),o-=1):(r=e[t.getMonth()-s],this.previousMonths.push(r+" "+n));this.previousMonths=this.previousMonths.reverse()},changeMonth(e){this.displayMonth=e},calculateProgression(){this.revenue>1e4?this.revenueProgression=100:this.revenueProgression=this.revenue/1e4*100,this.order>30?this.orderProgression=100:this.orderProgression=this.order/30*100}},watch:{async displayMonth(e){this.revenue=0;const t=["January","February","March","April","May","June","July","August","September","October","November","December"];var r=e.split(/(\s+)/),n=t.indexOf(r[0])+1,o=r[2],s=await de.Z.showMonthOrders(n,o);this.order=s.length;for(let a=0;a<s.length;a++)this.revenue+=parseFloat(s[a].subtotal);this.revenue=this.revenue.toFixed(2),this.calculateProgression()}}},ve=r(89);const he=(0,ve.Z)(ce,[["render",ae],["__scopeId","data-v-9bf6f824"]]);var ge=he,pe={components:{DashboardComponent:ge}};const fe=(0,ve.Z)(pe,[["render",s]]);var me=fe,_e=r(6400),be=r(4405);n.ri(me).component("vue3-autocounter",be.Z).use(_e.ZP).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,s){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],s=e[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<a&&(a=s));if(i){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[n,o,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.j=966}(),function(){r.p="/FYP2022/"}(),function(){var e={966:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,a=n[0],i=n[1],l=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r)}for(t&&t(n);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},n=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998,64],(function(){return r(5866)}));n=r.O(n)})();
//# sourceMappingURL=dashboard.43687c9d.js.map