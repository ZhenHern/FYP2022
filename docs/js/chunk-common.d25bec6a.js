"use strict";(self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[]).push([[64],{2557:function(t,e,a){var s=a(6018);e["Z"]={checkEmail(t){return(0,s.Z)().post("api/users/checkEmail",t)},createAccount(t){return(0,s.Z)().post("api/users/createAccount",t)},resendVerification(t){return(0,s.Z)().post("api/users/resendVerificationEmail",t)},login(t){return(0,s.Z)().post("api/users/login",t)},saveProfile(t){return(0,s.Z)().post("api/users/saveProfile",t)},changePassword(t){return(0,s.Z)().post("api/users/changePassword",t)},async showCurrentAccount(t){var e;return await(0,s.Z)().get("api/users/showCurrentAccount/"+t).then((function(t){e=t.data})),e},async showCurrentUser(t){var e;return await(0,s.Z)().get("api/users/showCurrentUser/"+t).then((function(t){e=t.data})),e}}},6018:function(t,e,a){var s=a(70);e["Z"]=()=>s.ZP.create({baseURL:"https://13.211.124.167/"})},1689:function(t,e,a){var s=a(6018);e["Z"]={addToCart(t,e,a){return(0,s.Z)().post("api/itemCarts/addToCart",t,e,a)},addQuantity(t){return(0,s.Z)().post("api/itemCarts/addQuantity",t)},subtractQuantity(t){return(0,s.Z)().post("api/itemCarts/subtractQuantity",t)},removeItem(t){return(0,s.Z)().post("api/itemCarts/removeItem",t)},completeOrder(t){return(0,s.Z)().post("api/itemCarts/completeOrder",t)},changeStatus(t){return(0,s.Z)().post("api/itemCarts/changeStatus",t)},async getCurrentCart(t){var e;return await(0,s.Z)().get("api/itemCarts/getCurrentCart/"+t).then((function(t){e=t.data})),e},async showAllItems(t){var e;return await(0,s.Z)().get("api/itemCarts/showAllItems/"+t).then((function(t){e=t.data})),e},async showPaidOrders(t){var e;return await(0,s.Z)().get("api/itemCarts/showPaidOrders/"+t).then((function(t){e=t.data})),e},async showOrder(t){var e;return await(0,s.Z)().get("api/itemCarts/showOrder/"+t).then((function(t){e=t.data})),e},async showAllPaidOrders(){var t;return await(0,s.Z)().get("api/itemCarts/showAllPaidOrders").then((function(e){t=e.data})),t},async showStatusOrders(t){var e;return await(0,s.Z)().get("api/itemCarts/showStatusOrders/"+t).then((function(t){e=t.data})),e},async showMonthOrders(t,e){var a;return await(0,s.Z)().get("api/itemCarts/showMonthOrders/"+t+"&"+e).then((function(t){a=t.data})),a}}},9354:function(t,e,a){var s=a(6018);e["Z"]={async showProducts(t){var e;return await(0,s.Z)().get("api/products/showProducts/"+t).then((function(t){e=t.data})),e},async showProduct(t){var e;return await(0,s.Z)().get("api/products/showProduct/"+t).then((function(t){e=t.data})),e},async showAllProducts(){var t;return await(0,s.Z)().get("api/products/showAllProducts").then((function(e){t=e.data})),t},async showLatestProducts(){var t;return await(0,s.Z)().get("api/products/showLatestProducts").then((function(e){t=e.data})),t},async showAllCategories(){var t;return await(0,s.Z)().get("api/products/showAllCategories").then((function(e){t=e.data})),t},async showCategory(t){var e;return await(0,s.Z)().get("api/products/showCategory/"+t).then((function(t){e=t.data})),e},async showDetails(t){var e;return await(0,s.Z)().get("api/products/showDetails/"+t).then((function(t){e=t.data})),e},async showIngredients(t){var e;return await(0,s.Z)().get("api/products/showIngredients/"+t).then((function(t){e=t.data})),e},async createProduct(t){var e;return await(0,s.Z)().post("api/products/createProduct",t).then((function(t){e=t.data})),e},async createIngredients(t){var e;return await(0,s.Z)().post("api/products/createIngredients",t).then((function(t){e=t.data})),e},async deleteProduct(t){var e;return await(0,s.Z)().post("api/products/deleteProduct",t).then((function(t){e=t.data})),e}}},3097:function(t,e,a){a.d(e,{Z:function(){return H}});var s=a(3396),i=a(7139),r=a.p+"img/logo.196291a1.png";const o=t=>((0,s.dD)("data-v-58744319"),t=t(),(0,s.Cn)(),t),n={class:"main-footer"},l=(0,s.uE)('<div class="top-footer" data-v-58744319><div class="top-container" data-v-58744319><div class="about-container" data-v-58744319><div class="about-title" data-v-58744319>About</div><div class="about-content" data-v-58744319>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi doloribus quis veniam nesciunt ipsam impedit iste! Consequatur nihil amet recusandae maxime eveniet! Ipsam ad quidem aut!</div></div><div class="logo-image" data-v-58744319><img src="'+r+'" alt="" data-v-58744319></div><div class="newsletter-container" data-v-58744319><div class="newsletter-title" data-v-58744319>Newsletter</div><div class="newsletter-content" data-v-58744319>Subscribe to get regular updates for new stuff and events.</div><div class="newsletter-form" data-v-58744319><input type="text" placeholder="Email address *" data-v-58744319><div class="subscribe-button" data-v-58744319> Subscribe </div></div></div></div></div>',1),c={class:"bot-footer"},d={class:"bot-container"},u=(0,s.uE)('<div class="contact-container" data-v-58744319><div class="contact-title" data-v-58744319>Contact Us</div><div class="contact-content" data-v-58744319><div class="phone-number" data-v-58744319><div class="phone-icon" data-v-58744319><i class="fa fa-phone" aria-hidden="true" data-v-58744319></i></div><div class="phone-number-content" data-v-58744319> 016-9466650 </div></div><div class="address" data-v-58744319><div class="address-icon" data-v-58744319><i class="fa fa-map-marker-alt" aria-hidden="true" data-v-58744319></i></div><div class="address-content" data-v-58744319> 10, Jalan Setia Villa 1, Setia Eco Glades, 63000 Cyberjaya </div></div><div class="email" data-v-58744319><div class="email-icon" data-v-58744319><i class="fa fa-envelope" aria-hidden="true" data-v-58744319></i></div><div class="email-content" data-v-58744319> bakeryshopfyp@gmail.com </div></div><div class="link" data-v-58744319><div class="link-icon" data-v-58744319><i class="fa-solid fa-earth-americas" data-v-58744319></i></div><div class="link-content" data-v-58744319> www.bakeryshopfyp.com </div></div></div></div><div class="social-media-container" data-v-58744319><div class="button" data-v-58744319><i class="fab fa-facebook-f" data-v-58744319></i></div><div class="button" data-v-58744319><i class="fa-brands fa-twitter" data-v-58744319></i></div><div class="button" data-v-58744319><i class="fa-brands fa-instagram" data-v-58744319></i></div><div class="button" data-v-58744319><i class="fa-brands fa-youtube" data-v-58744319></i></div></div>',2),v={class:"opening-hours-container"},p=o((()=>(0,s._)("div",{class:"opening-hours-title"},"Opening Hours",-1))),h={class:"opening-hours-content"},g=o((()=>(0,s._)("div",{class:"day"},"Monday",-1))),w=o((()=>(0,s._)("div",{class:"time"},"09:00 - 19:00",-1))),y=[g,w],m=o((()=>(0,s._)("div",{class:"day"},"Tuesday",-1))),_=o((()=>(0,s._)("div",{class:"time"},"09:00 - 19:00",-1))),f=[m,_],k=o((()=>(0,s._)("div",{class:"day"},"Wednesday",-1))),C=o((()=>(0,s._)("div",{class:"time"},"Closed",-1))),D=[k,C],b=o((()=>(0,s._)("div",{class:"day"},"Thursday",-1))),P=o((()=>(0,s._)("div",{class:"time"},"09:00 - 19:00",-1))),I=[b,P],Z=o((()=>(0,s._)("div",{class:"day"},"Friday",-1))),S=o((()=>(0,s._)("div",{class:"time"},"09:00 - 19:00",-1))),U=[Z,S],T=o((()=>(0,s._)("div",{class:"day"},"Saturday",-1))),A=o((()=>(0,s._)("div",{class:"time"},"11:00 - 19:00",-1))),O=[T,A],$=o((()=>(0,s._)("div",{class:"day"},"Sunday",-1))),E=o((()=>(0,s._)("div",{class:"time"},"11:00 - 19:00",-1))),q=[$,E];function M(t,e,a,r,o,g){return(0,s.wg)(),(0,s.iD)("div",n,[l,(0,s._)("div",c,[(0,s._)("div",d,[u,(0,s._)("div",v,[p,(0,s._)("div",h,[(0,s._)("div",{class:(0,i.C_)(1==o.currentDay?"active":"normal-day")},y,2),(0,s._)("div",{class:(0,i.C_)(2==o.currentDay?"active":"normal-day")},f,2),(0,s._)("div",{class:(0,i.C_)(3==o.currentDay?"active":"normal-day")},D,2),(0,s._)("div",{class:(0,i.C_)(4==o.currentDay?"active":"normal-day")},I,2),(0,s._)("div",{class:(0,i.C_)(5==o.currentDay?"active":"normal-day")},U,2),(0,s._)("div",{class:(0,i.C_)(6==o.currentDay?"active":"normal-day")},O,2),(0,s._)("div",{class:(0,i.C_)(0==o.currentDay?"active":"normal-day")},q,2)])])])])])}var x={mounted(){var t=new Date;this.currentDay=t.getDay()},data(){return{currentDay:0}}},z=a(89);const N=(0,z.Z)(x,[["render",M],["__scopeId","data-v-58744319"]]);var H=N},8254:function(t,e,a){a.d(e,{Z:function(){return Wt}});var s=a(3396),i=a(7139);const r=t=>((0,s.dD)("data-v-9903ee12"),t=t(),(0,s.Cn)(),t),o={class:"wrapper"},n={class:"main-container"},l=r((()=>(0,s._)("i",{class:"fas fa-bars"},null,-1))),c=[l],d={class:"logo"},u={key:0,href:"dashboard",class:"logo"},v={key:1,href:"index",class:"logo"},p={key:0,class:"mid-container"},h={class:"owner-products"},g=r((()=>(0,s._)("div",{class:"product-title"},[(0,s.Uk)(" Edit "),(0,s._)("i",{class:"fa-solid fa-caret-down"})],-1))),w={class:"owner-products-dropdown"},y=r((()=>(0,s._)("li",null,"Edit Voucher",-1))),m={key:1,class:"mid-container"},_={class:"products"},f=r((()=>(0,s._)("div",{class:"product-title"},[(0,s.Uk)(" Products "),(0,s._)("i",{class:"fa-solid fa-caret-down"})],-1))),k={class:"products-dropdown"},C=["onClick"],D={class:"right-container"},b={key:0,class:"item-cart-logo"},P=r((()=>(0,s._)("i",{class:"fa-sharp fa-solid fa-cart-shopping"},null,-1))),I=[P],Z={key:3,class:"user"},S={class:"user-title"},U=r((()=>(0,s._)("i",{class:"fa fa-user","aria-hidden":"true"},null,-1))),T=r((()=>(0,s._)("i",{class:"fa-solid fa-chevron-down"},null,-1))),A={key:0,class:"user-dropdown"},O={key:1,class:"user-dropdown"},$={class:"responsive-menu",ref:"menu"},E={class:"top-container"},q=r((()=>(0,s._)("i",{class:"fa-solid fa-xmark"},null,-1))),M=[q],x={key:0,class:"menu-list"},z={class:"fa-solid fa-caret-down",ref:"arrowDown"},N={class:"fa-solid fa-caret-up",ref:"arrowUp"},H={class:"responsive-products-dropdown",ref:"productDropdown"},L=r((()=>(0,s._)("li",null,"Edit Voucher",-1))),Q={key:1},Y={class:"fa-solid fa-caret-down",ref:"userArrowDown"},R={class:"fa-solid fa-caret-up",ref:"userArrowUp"},j={class:"responsive-user-dropdown",ref:"userDropdown"},F={key:1,class:"menu-list"},K={class:"fa-solid fa-caret-down",ref:"arrowDown"},V={class:"fa-solid fa-caret-up",ref:"arrowUp"},B={class:"responsive-products-dropdown",ref:"productDropdown"},W=["onClick"],G={key:1},J={class:"fa-solid fa-caret-down",ref:"userArrowDown"},X={class:"fa-solid fa-caret-up",ref:"userArrowUp"},tt={class:"responsive-user-dropdown",ref:"userDropdown"};function et(t,e,a,r,l,P){const q=(0,s.up)("ItemCart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[(0,s._)("div",n,[(0,s._)("div",{class:"responsive-navbar",onClick:e[0]||(e[0]=t=>P.openMenuOverlay())},c),(0,s._)("div",d,[l.owner?((0,s.wg)(),(0,s.iD)("a",u,"Bakery Shop")):((0,s.wg)(),(0,s.iD)("a",v,"Bakery Shop"))]),l.owner?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("div",{class:"links",onClick:e[1]||(e[1]=t=>P.goToDashboard())},"Home"),(0,s._)("div",h,[g,(0,s._)("ul",w,[(0,s._)("li",{onClick:e[2]||(e[2]=t=>P.goToEdit("CreateProduct"))},"Create Product"),(0,s._)("li",{onClick:e[3]||(e[3]=t=>P.goToEdit("DeleteProduct"))},"Delete Product"),y])]),(0,s._)("div",{class:"links",onClick:e[4]||(e[4]=t=>P.goToOrders())},"Orders")])):0==l.owner?((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("div",{class:"links",onClick:e[5]||(e[5]=t=>P.goToHome())},"Home"),(0,s._)("div",_,[f,(0,s._)("ul",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.categories,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,onClick:e=>P.goToProduct(t.category_id)},(0,i.zw)(t.category_name),9,C)))),128))])]),(0,s._)("div",{class:"links",onClick:e[6]||(e[6]=t=>P.goToAboutUs())},"About Us")])):(0,s.kq)("",!0),(0,s._)("div",D,[l.owner?((0,s.wg)(),(0,s.iD)("div",b)):0==l.owner?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"item-cart-logo",onClick:e[7]||(e[7]=t=>P.openItemCart())},I)):(0,s.kq)("",!0),void 0===l.currentUserID?((0,s.wg)(),(0,s.iD)("div",{key:2,class:"login",onClick:e[8]||(e[8]=t=>P.login())}," LOGIN ")):((0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",S,[U,(0,s.Uk)(" "+(0,i.zw)(l.firstName)+" ",1),T]),0==l.owner?((0,s.wg)(),(0,s.iD)("ul",A,[(0,s._)("li",{onClick:e[9]||(e[9]=t=>P.goToAccount())},"My Profile"),(0,s._)("li",{onClick:e[10]||(e[10]=t=>P.goToPurchase())},"My Purchases"),(0,s._)("li",{onClick:e[11]||(e[11]=t=>P.logout())},"Logout")])):l.owner?((0,s.wg)(),(0,s.iD)("ul",O,[(0,s._)("li",{onClick:e[12]||(e[12]=t=>P.logout())},"Logout")])):(0,s.kq)("",!0)]))])]),(0,s.Wm)(q,{ref:"itemCart"},null,512)]),(0,s._)("div",$,[(0,s._)("div",E,[(0,s._)("div",{class:"close-button",onClick:e[13]||(e[13]=t=>P.closeMenuOverlay())},M)]),l.owner?((0,s.wg)(),(0,s.iD)("ul",x,[(0,s._)("li",{class:"responsive-selection",onClick:e[14]||(e[14]=t=>P.goToDashboard())},"Home"),(0,s._)("li",null,[(0,s._)("div",{class:"responsive-selection",onClick:e[15]||(e[15]=t=>P.toggleProductDropdown())},[(0,s.Uk)(" Edit "),(0,s._)("i",z,null,512),(0,s._)("i",N,null,512)]),(0,s._)("ul",H,[(0,s._)("li",{onClick:e[16]||(e[16]=t=>P.goToEdit("CreateProduct"))},"Create Product"),(0,s._)("li",{onClick:e[17]||(e[17]=t=>P.goToEdit("DeleteProduct"))},"Delete Product"),L],512)]),(0,s._)("li",{class:"responsive-selection",onClick:e[18]||(e[18]=t=>P.goToOrders())},"Orders"),void 0===l.currentUserID?((0,s.wg)(),(0,s.iD)("li",{key:0,class:"responsive-selection",onClick:e[19]||(e[19]=t=>P.login())},"Login")):((0,s.wg)(),(0,s.iD)("li",Q,[(0,s._)("div",{class:"responsive-selection",onClick:e[20]||(e[20]=t=>P.toggleUserDropdown())},[(0,s.Uk)((0,i.zw)(l.firstName)+" ",1),(0,s._)("i",Y,null,512),(0,s._)("i",R,null,512)]),(0,s._)("ul",j,[(0,s._)("li",{onClick:e[21]||(e[21]=t=>P.goToAccount())},"My Profile"),(0,s._)("li",{onClick:e[22]||(e[22]=t=>P.goToPurchase())},"My Purchases"),(0,s._)("li",{onClick:e[23]||(e[23]=t=>P.logout())},"Logout")],512)]))])):((0,s.wg)(),(0,s.iD)("ul",F,[(0,s._)("li",{class:"responsive-selection",onClick:e[24]||(e[24]=t=>P.goToHome())},"Home"),(0,s._)("li",null,[(0,s._)("div",{class:"responsive-selection",onClick:e[25]||(e[25]=t=>P.toggleProductDropdown())},[(0,s.Uk)(" Products "),(0,s._)("i",K,null,512),(0,s._)("i",V,null,512)]),(0,s._)("ul",B,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.categories,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e,onClick:e=>P.goToProduct(t.category_id)},(0,i.zw)(t.category_name),9,W)))),128))],512)]),(0,s._)("li",{class:"responsive-selection",onClick:e[26]||(e[26]=t=>P.goToAboutUs())},"About Us"),void 0===l.currentUserID?((0,s.wg)(),(0,s.iD)("li",{key:0,class:"responsive-selection",onClick:e[27]||(e[27]=t=>P.login())},"Login")):((0,s.wg)(),(0,s.iD)("li",G,[(0,s._)("div",{class:"responsive-selection",onClick:e[28]||(e[28]=t=>P.toggleUserDropdown())},[(0,s.Uk)((0,i.zw)(l.firstName)+" ",1),(0,s._)("i",J,null,512),(0,s._)("i",X,null,512)]),(0,s._)("ul",tt,[(0,s._)("li",{onClick:e[29]||(e[29]=t=>P.goToAccount())},"My Profile"),(0,s._)("li",{onClick:e[30]||(e[30]=t=>P.goToPurchase())},"My Purchases"),(0,s._)("li",{onClick:e[31]||(e[31]=t=>P.logout())},"Logout")],512)]))]))],512)],64)}var at=a(2557),st=a(9354);const it=t=>((0,s.dD)("data-v-2d8b0f16"),t=t(),(0,s.Cn)(),t),rt={class:"overlay",ref:"cart"},ot={key:0,class:"item-cart"},nt=it((()=>(0,s._)("div",{class:"header"},[(0,s._)("div",{class:"header-title"}," Item Cart ")],-1))),lt={class:"product-list"},ct={class:"responsive-table"},dt=it((()=>(0,s._)("tr",{class:"product-name-title"},[(0,s._)("th"),(0,s._)("th",null,"Product"),(0,s._)("th",null,"Price"),(0,s._)("th",null,"Qty"),(0,s._)("th",null,"Total")],-1))),ut={class:"product-image"},vt=["src"],pt={class:"minus"},ht=["onClick"],gt={class:"plus"},wt=["onClick"],yt={class:"cancel-item"},mt=["onClick"],_t={class:"checkout"},ft={class:"left-checkout"},kt={class:"subtotal"},Ct=it((()=>(0,s._)("div",{class:"tnc"},[(0,s._)("input",{type:"checkbox"}),(0,s.Uk)(" I agree to "),(0,s._)("span",null,"Terms & Condition")],-1)));function Dt(t,e,a,r,o,n){const l=(0,s.up)("PaypalComponent");return(0,s.wg)(),(0,s.iD)("div",rt,[o.showPaypal?((0,s.wg)(),(0,s.j4)(l,{key:1,onShowPaypal:e[2]||(e[2]=t=>n.returnItemCart()),subtotal:o.subtotal,itemCartID:o.currentItemCartID},null,8,["subtotal","itemCartID"])):((0,s.wg)(),(0,s.iD)("div",ot,[nt,(0,s._)("div",lt,[(0,s._)("div",ct,[(0,s._)("table",null,[dt,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.items,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,[(0,s._)("div",ut,[(0,s._)("img",{src:n.getImgUrl(o.products[e].image_name1)},null,8,vt)])]),(0,s._)("td",null,(0,i.zw)(o.products[e].product_name),1),(0,s._)("td",null,(0,i.zw)(o.products[e].product_price),1),(0,s._)("td",null,[(0,s._)("div",pt,[(0,s._)("i",{class:"fa fa-minus","aria-hidden":"true",onClick:e=>n.subtractQuantity(t.item_id)},null,8,ht)]),(0,s.Uk)(" "+(0,i.zw)(t.quantity)+" ",1),(0,s._)("div",gt,[(0,s._)("i",{class:"fa fa-plus","aria-hidden":"true",onClick:e=>n.addQuantity(t.item_id)},null,8,wt)])]),(0,s._)("td",null,[(0,s.Uk)(" RM "+(0,i.zw)(t.quantity*o.products[e].product_price)+" ",1),(0,s._)("div",yt,[(0,s._)("i",{class:"fa fa-times","aria-hidden":"true",onClick:e=>n.removeItem(t.item_id)},null,8,mt)])])])))),128))])])]),(0,s._)("div",_t,[(0,s._)("div",ft,[(0,s._)("div",kt,[(0,s.Uk)("Subtotal "),(0,s._)("span",null,(0,i.zw)(o.subtotal.toFixed(2)),1)]),Ct]),(0,s._)("div",{class:(0,i.C_)(o.checkoutEnabled?"checkout-button":"disabled-checkout-button"),onClick:e[0]||(e[0]=t=>n.goToPaypal()),ref:"checkout"},"Checkout",2),(0,s._)("div",{class:"close-button",onClick:e[1]||(e[1]=(...t)=>n.closeCart&&n.closeCart(...t))},"Close Cart")])]))],512)}a(7658);var bt=a(1689);const Pt=t=>((0,s.dD)("data-v-034d8f0c"),t=t(),(0,s.Cn)(),t),It={key:0,class:"payment-success-container"},Zt=Pt((()=>(0,s._)("div",{class:"tick-icon"},[(0,s._)("i",{class:"fa-solid fa-circle-check"})],-1))),St=Pt((()=>(0,s._)("div",{class:"title"}," Payment Successful! ",-1))),Ut=Pt((()=>(0,s._)("div",{class:"line"},[(0,s._)("hr")],-1))),Tt={class:"row-container"},At=Pt((()=>(0,s._)("div",null,"Order Number :",-1))),Ot={class:"row-container"},$t=Pt((()=>(0,s._)("div",null,"Amount Paid :",-1))),Et={class:"back"},qt={key:1,class:"main-container"},Mt=Pt((()=>(0,s._)("i",{class:"fa-solid fa-circle-chevron-left"},null,-1))),xt=[Mt],zt={class:"payment-container"},Nt={class:"paypal",ref:"paypal"};function Ht(t,e,a,r,o,n){return o.paid?((0,s.wg)(),(0,s.iD)("div",It,[Zt,St,Ut,(0,s._)("div",Tt,[At,(0,s._)("div",null,(0,i.zw)(a.itemCartID),1)]),(0,s._)("div",Ot,[$t,(0,s._)("div",null,"RM "+(0,i.zw)(a.subtotal),1)]),(0,s._)("div",Et,[(0,s._)("div",{class:"button",onClick:e[0]||(e[0]=t=>n.back())},"Back")])])):((0,s.wg)(),(0,s.iD)("div",qt,[(0,s._)("div",{class:"back-button",onClick:e[1]||(e[1]=t=>this.$emit("showPaypal"))},xt),(0,s._)("div",zt,[(0,s._)("div",Nt,null,512)])]))}var Lt={props:{subtotal:Number,itemCartID:Number},data(){return{paid:!1,product:{price:this.subtotal,description:"Payment for Bakery Shop FYP"},currentDateTime:null}},mounted(){const t=document.createElement("script");t.src="https://www.paypal.com/sdk/js?client-id=AZ1ovniRYhyPPiDBkLPX9Zq_eAan_-55r2L_Nna-A6_gcxemkO-DiqYGt9YA6Av5Ppeoy3LJcyV15omS&vault=true&buyer-country=MY&currency=MYR",t.addEventListener("load",this.setLoaded),document.body.appendChild(t)},methods:{back(){location.reload()},formatDateTime(){var t=new Date,e=""+(t.getMonth()+1),a=""+t.getDate(),s=t.getFullYear();e.length<2&&(e="0"+e),a.length<2&&(a="0"+a);var i=[s,e,a].join("-")+" "+[t.getHours(),t.getMinutes(),t.getSeconds()].join(":");this.currentDateTime=i},async completeOrder(){this.formatDateTime(),await bt.Z.completeOrder({itemCartID:this.itemCartID,subtotal:this.subtotal,orderedAt:this.currentDateTime})},setLoaded(){window.paypal.Buttons({style:{color:"silver"},createOrder:(t,e)=>e.order.create({purchase_units:[{description:this.product.description,amount:{value:this.product.price.toFixed(2)}}]}),onApprove:async(t,e)=>{await e.order.capture(),this.paid=!0,this.completeOrder()},onError:t=>{console.log(t)}}).render(this.$refs.paypal)}}},Qt=a(89);const Yt=(0,Qt.Z)(Lt,[["render",Ht],["__scopeId","data-v-034d8f0c"]]);var Rt=Yt,jt={components:{PaypalComponent:Rt},async mounted(){this.currentUserID=this.$storage.getStorageSync("loginID");var t=await bt.Z.getCurrentCart(this.currentUserID);this.currentItemCartID=t.item_cart_id,this.allProducts=await st.Z.showAllProducts(),this.updateCart()},data(){return{showItemCart:!1,currentUserID:null,currentItemCartID:null,items:[],allProducts:null,products:[],subtotal:0,showPaypal:!1,slideDirection:"slide-left",checkoutEnabled:null}},methods:{goToPaypal(){this.checkoutEnabled&&(this.showPaypal=!0)},returnItemCart(){this.showPaypal=!1},closeCart(){this.showItemCart=!1,document.body.style.overflow="auto"},getImgUrl(t){return"https://13.211.124.167/images/"+t},getProduct(t){setTimeout((()=>{if(null==this.products)this.getProduct(t);else for(let e=0;e<this.products.length;e++)if(this.products[e].product_id==t)return e}),500)},async addQuantity(t){await bt.Z.addQuantity({itemID:t}),await this.updateCart()},async subtractQuantity(t){await bt.Z.subtractQuantity({itemID:t}),await this.updateCart()},async removeItem(t){await bt.Z.removeItem({itemID:t}),await this.updateCart()},async updateCart(){this.checkoutEnabled=!0,this.items=await bt.Z.showAllItems(this.currentItemCartID),this.products=[];for(let t=0;t<this.items.length;t++)for(let e=0;e<this.allProducts.length;e++)this.allProducts[e].product_id==this.items[t].product_id&&this.products.push(this.allProducts[e]);0==this.items.length&&(this.checkoutEnabled=!1),this.calculateSubtotal()},calculateSubtotal(){this.subtotal=0;for(let t=0;t<this.items.length;t++)this.subtotal+=this.items[t].quantity*this.products[t].product_price;this.subtotal.toFixed(2)}},watch:{async showItemCart(t){0==t?(this.$refs.cart.style.opacity="0%",this.$refs.cart.style.visibility="hidden"):1==t&&(this.updateCart(),this.$refs.cart.style.opacity="100%",this.$refs.cart.style.visibility="visible")}}};const Ft=(0,Qt.Z)(jt,[["render",Dt],["__scopeId","data-v-2d8b0f16"]]);var Kt=Ft,Vt={components:{ItemCart:Kt},async mounted(){this.currentUserID=this.$storage.getStorageSync("loginID");var t=await at.Z.showCurrentAccount(this.currentUserID);void 0==this.currentUserID?this.owner=0:this.owner=t.owner;var e=await at.Z.showCurrentUser(this.currentUserID);this.firstName=e.first_name,this.categories=await st.Z.showAllCategories()},data(){return{firstName:"",currentUserID:void 0,productsToggle:!1,userToggle:!1,categories:[],owner:null,hihi:1}},methods:{openItemCart(){this.$refs.itemCart.showItemCart=!0,document.body.style.overflow="hidden"},openMenuOverlay(){this.$refs.menu.style.visibility="visible",this.$refs.menu.style.opacity="100%",document.body.style.overflow="hidden"},closeMenuOverlay(){this.$refs.menu.style.visibility="hidden",this.$refs.menu.style.opacity="0%",document.body.style.overflow="auto"},toggleProductDropdown(){this.productsToggle=!this.productsToggle,this.hihi+=1,this.productsToggle?(this.$refs.productDropdown.style.display="block",this.$refs.arrowUp.style.display="block",this.$refs.arrowDown.style.display="none"):(this.$refs.productDropdown.style.display="none",this.$refs.arrowUp.style.display="none",this.$refs.arrowDown.style.display="flex")},toggleUserDropdown(){this.userToggle=!this.userToggle,this.userToggle?(this.$refs.userDropdown.style.display="block",this.$refs.userArrowUp.style.display="block",this.$refs.userArrowDown.style.display="none"):(this.$refs.userDropdown.style.display="none",this.$refs.userArrowUp.style.display="none",this.$refs.userArrowDown.style.display="flex")},goToHome(){window.location.href="index"},goToProduct(t){this.$storage.setStorageSync("categoryID",t),window.location.href="products"},goToAboutUs(){window.location.href="aboutUs"},goToAccount(){this.$storage.setStorageSync("userProfile","MyProfile"),window.location.href="userProfile"},goToPurchase(){this.$storage.setStorageSync("userProfile","MyPurchases"),window.location.href="userProfile"},goToDashboard(){window.location.href="dashboard"},goToEdit(t){this.$storage.setStorageSync("editProducts",t),window.location.href="editProducts"},goToOrders(){window.location.href="orders"},login(){window.location.href="login"},logout(){this.$storage.removeStorageSync("loginID"),this.$storage.removeStorageSync("userProfile"),location.reload()},async forceRerender(){var t=await at.Z.showCurrentUser(this.currentUserID);this.firstName=t.first_name}}};const Bt=(0,Qt.Z)(Vt,[["render",et],["__scopeId","data-v-9903ee12"]]);var Wt=Bt},9568:function(t,e,a){a.d(e,{Z:function(){return J}});var s=a(3396),i=a(7139),r=a(9242);const o=t=>((0,s.dD)("data-v-19c699c9"),t=t(),(0,s.Cn)(),t),n={class:"container"},l={class:"details"},c={class:"back-button"},d={class:"top-container"},u={class:"information"},v={class:"top-information"},p={class:"name"},h={class:"price"},g=o((()=>(0,s._)("hr",null,null,-1))),w={class:"ingredients"},y={class:"ingredients-list"},m={class:"carousel"},_={class:"slide"},f=o((()=>(0,s._)("i",{class:"fa fa-arrow-left","aria-hidden":"true"},null,-1))),k=[f],C=["src"],D=o((()=>(0,s._)("i",{class:"fa fa-arrow-right","aria-hidden":"true"},null,-1))),b=[D],P={class:"slider"},I=["onClick"],Z=o((()=>(0,s._)("div",{class:"hover"},null,-1))),S=o((()=>(0,s._)("div",{class:"order-top-container"},[(0,s._)("div",{class:"order-title"},"Order Now")],-1))),U={class:"order-bottom-container"},T={class:"order-container"},A=["src"],O={class:"order-right-container"},$={class:"order-name-price"},E={class:"order-name"},q={class:"order-price"},M={class:"quantity-container"},x={class:"order-price-2"},z={class:"change-quantity"},N=o((()=>(0,s._)("i",{class:"fa-solid fa-minus"},null,-1))),H=[N],L={class:"quantity"},Q=o((()=>(0,s._)("i",{class:"fa-solid fa-plus"},null,-1))),Y=[Q],R={class:"order-button-container"};function j(t,e,a,o,f,D){const N=(0,s.up)("DisplayOverlay");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(N,{ref:"overlay"},null,512),(0,s._)("div",l,[(0,s._)("div",c,[(0,s._)("i",{class:"fa fa-chevron-circle-left","aria-hidden":"true",onClick:e[0]||(e[0]=e=>t.$emit("checkDetails",{showDetails:!1,slideDirection:"slide-left"}))})]),(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("div",v,[(0,s._)("div",p,(0,i.zw)(f.productName),1),(0,s._)("div",h," RM "+(0,i.zw)(f.productPrice),1)]),g,(0,s._)("div",null,[(0,s._)("p",null,(0,i.zw)(f.productDesc),1)]),(0,s._)("div",w,[(0,s.Uk)(" Ingredients: "),(0,s._)("div",y,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.productIngredients,((t,e)=>((0,s.wg)(),(0,s.iD)("li",{key:e},(0,i.zw)(t.ingredient_name),1)))),128))])])])]),(0,s._)("div",m,[(0,s._)("div",_,[(0,s._)("div",{class:"prev-button",onClick:e[1]||(e[1]=(...t)=>D.prevSlide&&D.prevSlide(...t))},k),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.image,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"images",key:e},[(0,s.Wm)(r.uT,{name:f.slideDirection},{default:(0,s.w5)((()=>[(0,s.wy)((0,s._)("img",{src:D.getImgUrl(e),alt:""},null,8,C),[[r.F8,e===f.currentSlide]])])),_:2},1032,["name"])])))),128)),(0,s._)("div",{class:"next-button",onClick:e[2]||(e[2]=(...t)=>D.nextSlide&&D.nextSlide(...t))},b),(0,s._)("div",P,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(3,((t,e)=>(0,s._)("div",{class:(0,i.C_)([e===f.currentSlide?"slider-button-active":"slider-button"]),key:e,onClick:t=>D.goSlide(e)},[(0,s._)("div",{class:(0,i.C_)({active:e===f.currentSlide})},null,2),Z],10,I))),64))])])])]),S,(0,s._)("div",U,[(0,s._)("div",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.image.slice(0,1),((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"order-image",key:e},[0===e?((0,s.wg)(),(0,s.iD)("img",{key:0,src:D.getImgUrl(e),alt:""},null,8,A)):(0,s.kq)("",!0)])))),128)),(0,s._)("div",O,[(0,s._)("div",$,[(0,s._)("div",E,(0,i.zw)(f.productName),1),(0,s._)("div",q," RM "+(0,i.zw)(f.productPrice),1)]),(0,s._)("div",M,[(0,s._)("div",x," RM "+(0,i.zw)(f.productPrice),1),(0,s._)("div",z,[(0,s._)("div",{class:"minus-quantity",onClick:e[3]||(e[3]=t=>D.minusQuantity())},H),(0,s._)("div",L,(0,i.zw)(f.quantity),1),(0,s._)("div",{class:"add-quantity",onClick:e[4]||(e[4]=t=>D.addQuantity())},Y)])])])])]),(0,s._)("div",R,[(0,s._)("div",{class:"order-button",onClick:e[5]||(e[5]=t=>D.addCart())}," Place Order ")])])])}var F=a(9354),K=a(1541),V=a(1689),B={props:{productID:Number},components:{DisplayOverlay:K.Z},async mounted(){var t=null,e=null;this.currentUserID=this.$storage.getStorageSync("loginID"),t=await F.Z.showDetails(this.productID),e=await F.Z.showIngredients(this.productID),this.productName=t.product_name,this.productPrice=t.product_price,this.productDesc=t.product_description,this.image=[t.image_name1,t.image_name2,t.image_name3],this.productIngredients=e},data(){return{image:[],currentSlide:0,slideDirection:null,productName:null,productPrice:null,productDesc:null,productIngredients:null,quantity:1,currentUserID:null}},methods:{getImgUrl(t){return"https://13.211.124.167/images/"+this.image[t]},prevSlide(){0!=this.currentSlide?(this.currentSlide-=1,this.slideDirection="slide-left"):(this.currentSlide=this.image.length-1,this.slideDirection="slide-right")},nextSlide(){this.currentSlide!=this.image.length-1?(this.currentSlide+=1,this.slideDirection="slide-right"):(this.currentSlide=0,this.slideDirection="slide-left")},goSlide(t){this.currentSlide=t,this.slideDirection="fade"},minusQuantity(){1!=this.quantity&&(this.quantity-=1)},addQuantity(){this.quantity+=1},async addCart(){void 0==this.$storage.getStorageSync("loginID")?this.$refs.overlay.openErrorOverlay("Please login first"):await V.Z.addToCart({userID:this.currentUserID,productID:this.productID,quantity:this.quantity}),this.quantity=1,this.$refs.overlay.openOverlay("Added into cart")}}},W=a(89);const G=(0,W.Z)(B,[["render",j],["__scopeId","data-v-19c699c9"]]);var J=G},1541:function(t,e,a){a.d(e,{Z:function(){return p}});var s=a(3396),i=a(7139);const r={class:"popup"},o={class:"popup-text"},n={key:0,class:"fa-regular fa-circle-check"},l={key:1,class:"fa-regular fa-circle-xmark"};function c(t,e,a,c,d,u){return(0,s.wg)(),(0,s.iD)("div",{class:"overlay",onClick:e[0]||(e[0]=t=>u.closeOverlay()),ref:"overlay"},[(0,s._)("div",r,[(0,s._)("div",o,[d.error?((0,s.wg)(),(0,s.iD)("i",l)):((0,s.wg)(),(0,s.iD)("i",n)),(0,s.Uk)(" "+(0,i.zw)(d.text),1)])])],512)}var d={data(){return{text:null,error:!1}},methods:{closeOverlay(){this.$refs.overlay.style.display="none"},openOverlay(t){this.error=!1,this.text=t,this.$refs.overlay.style.display="block"},openErrorOverlay(t){this.error=!0,this.text=t,this.$refs.overlay.style.display="block"}}},u=a(89);const v=(0,u.Z)(d,[["render",c],["__scopeId","data-v-f459d2c2"]]);var p=v}}]);
//# sourceMappingURL=chunk-common.d25bec6a.js.map