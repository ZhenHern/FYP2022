(function(){"use strict";var t={1598:function(t,e,a){var r=a(9242),n=a(3396);function s(t,e,a,r,s,i){const o=(0,n.up)("OrdersPageComponent");return(0,n.wg)(),(0,n.j4)(o)}var i=a(7139);const o=t=>((0,n.dD)("data-v-12bac9ca"),t=t(),(0,n.Cn)(),t),l={class:"viewport"},c={class:"background-image"},d={class:"content"},u=o((()=>(0,n._)("div",{class:"text"}," Orders ",-1))),v={class:"top-container"},p={class:"status-dropdown"},f=o((()=>(0,n._)("div",{class:"status-title"}," Order Status ",-1))),m={class:"status-input"},h=o((()=>(0,n._)("option",{value:"Preparing"},"Preparing",-1))),y=o((()=>(0,n._)("option",{value:"Collect"},"To Collect",-1))),_=o((()=>(0,n._)("option",{value:"Completed"},"Completed",-1))),w=o((()=>(0,n._)("option",{value:"Cancelled"},"Cancelled",-1))),g=[h,y,_,w],b={class:"order-dropdown"},O=o((()=>(0,n._)("div",{class:"order-title"}," Order ",-1))),C={class:"order-input"},D=["value"],k={key:0,class:"order-container"},I={class:"order-top-container"},Z=(0,n.uE)('<div class="order-id-name-title" data-v-12bac9ca><div class="order-id-title" data-v-12bac9ca> Order ID: 5 </div><div class="order-name-title" data-v-12bac9ca> Ordered by: Zhen Hern </div></div><div class="table-head" data-v-12bac9ca><div class="item-head" data-v-12bac9ca></div><div class="name-head" data-v-12bac9ca>Item</div><div class="quantity-head" data-v-12bac9ca>Quantity</div><div class="price-head" data-v-12bac9ca>Price</div></div>',2),P={key:0,class:"loading"},S=o((()=>(0,n._)("i",{class:"fas fa-spinner fa-spin"},null,-1))),j=[S],q={key:1,class:"table-content"},x={class:"item-image"},U=["src"],W={class:"item-name"},$={class:"item-quantity"},z={class:"item-price"},F={class:"order-bot-container"},N={class:"change-status"},T=o((()=>(0,n._)("div",{class:"view-orders-button"}," Change Status: ",-1))),A={class:"status-input"},M=o((()=>(0,n._)("option",{value:"Preparing"},"Preparing",-1))),Y=o((()=>(0,n._)("option",{value:"Collect"},"To Collect",-1))),E=o((()=>(0,n._)("option",{value:"Completed"},"Completed",-1))),H=o((()=>(0,n._)("option",{value:"Cancelled"},"Cancelled",-1))),V=[M,Y,E,H],B={class:"done-button-container"},K={class:"confirm-overlay",ref:"confirmOverlay"},Q={class:"confirm-container"},G=o((()=>(0,n._)("div",{class:"confirm-text"}," Are you sure you want to change the status? ",-1))),J={class:"confirm-buttons"};function L(t,e,a,s,o,h){const y=(0,n.up)("NavigationBar"),_=(0,n.up)("DisplayOverlay"),w=(0,n.up)("WebsiteFooter");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(y),(0,n._)("div",c,[(0,n._)("div",d,[(0,n.Wm)(r.uT,null,{default:(0,n.w5)((()=>[u])),_:1})])]),(0,n._)("div",null,[(0,n._)("div",v,[(0,n._)("div",p,[f,(0,n._)("div",m,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.status=t)},g,512),[[r.bM,o.status]])])]),(0,n._)("div",b,[O,(0,n._)("div",C,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.orderID=t)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.allOrders,((t,e)=>((0,n.wg)(),(0,n.iD)("option",{value:t.item_cart_id,key:e},(0,i.zw)(t.item_cart_id)+" - "+(0,i.zw)(o.user.first_name),9,D)))),128))],512),[[r.bM,o.orderID]])])])]),null!=o.orderID?((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("div",I,[Z,o.loading?((0,n.wg)(),(0,n.iD)("div",P,j)):((0,n.wg)(),(0,n.iD)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.items,((t,e)=>((0,n.wg)(),(0,n.iD)("div",{class:"order-item",key:e},[(0,n._)("div",x,[(0,n._)("img",{src:h.getImgUrl(t.productImage)},null,8,U)]),(0,n._)("div",W,(0,i.zw)(t.productName),1),(0,n._)("div",$,(0,i.zw)(t.quantity),1),(0,n._)("div",z,(0,i.zw)(t.price),1)])))),128))]))]),(0,n._)("div",F,[(0,n._)("div",N,[T,(0,n._)("div",A,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.newStatus=t)},V,512),[[r.bM,o.newStatus]])])]),(0,n._)("div",B,[(0,n._)("div",{class:"done-button",onClick:e[3]||(e[3]=t=>h.openConfirmOverlay())}," Done ")])])])):(0,n.kq)("",!0),(0,n._)("div",K,[(0,n._)("div",Q,[G,(0,n._)("div",J,[(0,n._)("div",{class:"yes-button",onClick:e[4]||(e[4]=t=>h.changeStatus())}," Yes "),(0,n._)("div",{class:"no-button",onClick:e[5]||(e[5]=t=>h.closeConfirmOverlay())}," No ")])])],512),(0,n.Wm)(_,{ref:"overlay"},null,512)]),(0,n.Wm)(w)])}a(7658);var R=a(7717),X=a(3560),tt=a(1541),et=a(1689),at=a(2557),rt=a(9354),nt={components:{NavigationBar:R.Z,WebsiteFooter:X.Z,DisplayOverlay:tt.Z},async mounted(){this.allOrders=await et.Z.showAllPaidOrders(),this.user=await at.Z.showCurrentUser(1)},data(){return{allOrders:null,order:null,user:"",status:"",newStatus:"",orderID:null,items:[],loading:0}},methods:{getImgUrl(t){return"https://54.253.165.56/images/"+t},openConfirmOverlay(){this.$refs.confirmOverlay.style.display="block"},closeConfirmOverlay(){this.$refs.confirmOverlay.style.display="none"},async changeStatus(){try{await et.Z.changeStatus({itemCartID:this.orderID,status:this.newStatus}),this.rerender(),this.$refs.confirmOverlay.style.display="none",this.$refs.overlay.openOverlay("Status is changed")}catch{this.$refs.confirmOverlay.style.display="none",this.$refs.overlay.openErrorOverlay("Fail to change status")}},async rerender(){this.status="",this.orderID=null,this.order=null,this.allOrders=await et.Z.showAllPaidOrders()}},watch:{async status(t){this.allOrders=await et.Z.showStatusOrders(t)},async orderID(t){this.loading=1,this.items=[],this.order=await et.Z.showOrder(t);var e=await et.Z.showAllItems(t);for(let r=0;r<e.length;r++){var a=await rt.Z.showProduct(e[r].product_id);this.items.push({productImage:a.image_name1,productName:a.product_name,quantity:e[r].quantity,price:a.product_price})}this.newStatus=this.order.status,this.loading=0},newStatus(t){this.newStatus=t}}},st=a(89);const it=(0,st.Z)(nt,[["render",L],["__scopeId","data-v-12bac9ca"]]);var ot=it,lt={components:{OrdersPageComponent:ot}};const ct=(0,st.Z)(lt,[["render",s]]);var dt=ct,ut=a(6400);r.ri(dt).use(ut.ZP).mount("#app")}},e={};function a(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,r,n,s){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],n=t[d][1],s=t[d][2];for(var o=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(o=!1,s<i&&(i=s));if(o){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[r,n,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.j=486}(),function(){a.p="/FYP2022/"}(),function(){var t={486:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,s,i=r[0],o=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var d=l(a)}for(e&&e(r);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(d)},r=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998,64],(function(){return a(1598)}));r=a.O(r)})();
//# sourceMappingURL=orders.a3b26bd2.js.map