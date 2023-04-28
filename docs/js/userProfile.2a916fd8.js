(function(){"use strict";var t={1450:function(t,e,s){var i=s(9242),r=s(3396);function a(t,e,s,i,a,o){const n=(0,r.up)("UserProfileComponent");return(0,r.wg)(),(0,r.j4)(n)}const o={class:"viewport"},n={class:"container"};function l(t,e,s,i,a,l){const d=(0,r.up)("NavigationBar"),c=(0,r.up)("UserProfileMenu"),h=(0,r.up)("WebsiteFooter");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(d,{ref:"navbar"},null,512),(0,r._)("div",n,[(0,r.Wm)(c,{onComponent:e[0]||(e[0]=t=>a.currentTabComponent=t),ref:"menu"},null,512),((0,r.wg)(),(0,r.j4)((0,r.LL)(a.currentTabComponent),{onSave:l.rerenderMenu},null,40,["onSave"]))]),(0,r.Wm)(h)])}var d=s(484),c=s(7139);const h=t=>((0,r.dD)("data-v-2f8fa732"),t=t(),(0,r.Cn)(),t),u={key:0,class:"menu-container"},w={class:"username"},m={class:"menu-buttons"},p=h((()=>(0,r._)("i",{class:"fa fa-user","aria-hidden":"true"},null,-1))),v=h((()=>(0,r._)("div",{class:"buttons-title"}," My Account ",-1))),y=[p,v],f={class:"account-dropdown",ref:"account"},g=h((()=>(0,r._)("i",{class:"fa fa-shopping-bag","aria-hidden":"true"},null,-1))),_=h((()=>(0,r._)("div",{class:"buttons-title"}," My Purchases ",-1))),C=[g,_];function P(t,e,s,i,a,o){return a.renderComponent?((0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",w,(0,c.zw)(a.firstName),1),(0,r._)("div",m,[(0,r._)("div",{class:"button",onClick:e[0]||(e[0]=t=>o.showAccountDropdown())},y),(0,r._)("div",f,[(0,r._)("div",{class:(0,c.C_)("MyProfile"===a.component?"account-dropdown-content-active":"account-dropdown-content"),onClick:e[1]||(e[1]=t=>o.changeComponent("MyProfile"))}," Profile ",2),(0,r._)("i",{class:(0,c.C_)("MyProfile"===a.component?"a fa-regular fa-edit":"fa-regular fa-edit"),onClick:e[2]||(e[2]=t=>o.changeComponent("MyProfile"))},null,2),(0,r._)("div",{class:(0,c.C_)("ChangePassword"===a.component?"account-dropdown-content-active":"account-dropdown-content"),onClick:e[3]||(e[3]=t=>o.changeComponent("ChangePassword")),"data-test":"change-password"}," Change Password ",2),(0,r._)("i",{class:(0,c.C_)("ChangePassword"===a.component?"a fa-solid fa-key":"fa-solid fa-key"),onClick:e[4]||(e[4]=t=>o.changeComponent("ChangePassword"))},null,2)],512),(0,r._)("div",{class:(0,c.C_)("MyPurchases"==a.component?"button-active":"button"),onClick:e[5]||(e[5]=t=>o.changeComponent("MyPurchases"))},C,2)])])):(0,r.kq)("",!0)}var b=s(2557),k={async mounted(){this.component=this.$storage.getStorageSync("userProfile"),this.currentUserID=this.$storage.getStorageSync("loginID");var t=await b.Z.showCurrentUser(this.currentUserID);this.firstName=t.first_name},data(){return{currentUserID:null,firstName:null,component:"",renderComponent:!0}},methods:{showAccountDropdown(){this.showTab="account"},changeComponent(t){this.component=t,this.$emit("component",t),this.$storage.setStorageSync("userProfile",this.component)},async forceRerender(){var t=await b.Z.showCurrentUser(this.currentUserID);this.firstName=t.first_name}},watch:{showTab(t){"account"==t?(this.$refs.account.style.visibility="visible",this.$refs.account.style.opacity="100%",this.$refs.account.style.height="fit-content"):(this.$refs.account.style.visibility="hidden",this.$refs.account.style.opacity="0%",this.$refs.account.style.height="0px")}}},D=s(89);const A=(0,D.Z)(k,[["render",P],["__scopeId","data-v-2f8fa732"]]);var T=A;const V=t=>((0,r.dD)("data-v-12f9f2f6"),t=t(),(0,r.Cn)(),t),N={class:"main-container"},U=V((()=>(0,r._)("div",{class:"header"},[(0,r._)("div",{class:"title"},"My Profile"),(0,r.Uk)(" Manage and protect your account ")],-1))),O={class:"form"},L={class:"row-container"},I=V((()=>(0,r._)("div",{class:"label"}," Email ",-1))),S={class:"email-input"},$={class:"row-container"},Z=V((()=>(0,r._)("div",{class:"label"}," First Name ",-1))),M={class:"error-text"},E={class:"row-container"},x=V((()=>(0,r._)("div",{class:"label"}," Last Name ",-1))),F={class:"error-text"},H={class:"row-container"},q=V((()=>(0,r._)("div",{class:"label"}," Date of birth ",-1))),j={class:"error-text"},z={class:"save-button-container"};function Y(t,e,s,a,o,n){const l=(0,r.up)("DisplayOverlay");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{ref:"overlay"},null,512),(0,r._)("div",N,[U,(0,r._)("div",O,[(0,r._)("div",L,[I,(0,r._)("div",S,(0,c.zw)(o.email),1)]),(0,r._)("div",$,[Z,(0,r._)("div",{class:(0,c.C_)(o.firstNameValidity?"name-input":"error")},[(0,r.wy)((0,r._)("input",{type:"placeholder","onUpdate:modelValue":e[0]||(e[0]=t=>o.firstName=t),"data-test":"first-name-input"},null,512),[[i.nr,o.firstName]])],2)]),(0,r.wy)((0,r._)("div",M,"First name cannot be empty.",512),[[i.F8,!o.firstNameValidity]]),(0,r._)("div",E,[x,(0,r._)("div",{class:(0,c.C_)(o.lastNameValidity?"name-input":"error")},[(0,r.wy)((0,r._)("input",{type:"placeholder","onUpdate:modelValue":e[1]||(e[1]=t=>o.lastName=t),"data-test":"last-name-input"},null,512),[[i.nr,o.lastName]])],2)]),(0,r.wy)((0,r._)("div",F,"Last name cannot be empty.",512),[[i.F8,!o.lastNameValidity]]),(0,r._)("div",H,[q,(0,r._)("div",{class:(0,c.C_)(o.birthdayValidity?"name-input":"error")},[(0,r.wy)((0,r._)("input",{type:"date",max:"9999-12-31","onUpdate:modelValue":e[2]||(e[2]=t=>o.birthday=t),"data-test":"birthday-input"},null,512),[[i.nr,o.birthday]])],2)]),(0,r.wy)((0,r._)("div",j,"Date of birth cannot be empty.",512),[[i.F8,!o.birthdayValidity]])]),(0,r._)("div",z,[(0,r._)("div",{class:"save-button",onClick:e[3]||(e[3]=t=>n.checkValidity()),"data-test":"save-button"},"Save")])])],64)}var W=s(4042),R={async mounted(){this.currentUserID=this.$storage.getStorageSync("loginID");var t=await b.Z.showCurrentAccount(this.currentUserID);this.email=t.email;var e=await b.Z.showCurrentUser(this.currentUserID);this.firstName=e.first_name,this.lastName=e.last_name,this.birthday=e.birthday},components:{DisplayOverlay:W.Z},data(){return{currentUserID:null,email:null,firstName:null,lastName:null,birthday:null,firstNameValidity:!0,lastNameValidity:!0,birthdayValidity:!0}},methods:{checkValidity(){""===this.firstName&&(this.firstNameValidity=!1),""===this.lastName&&(this.lastNameValidity=!1),""===this.birthday&&(this.birthdayValidity=!1),this.firstNameValidity&&this.lastNameValidity&&this.birthdayValidity&&this.saveProfile()},async saveProfile(){var t=await b.Z.saveProfile({loginID:this.currentUserID,firstName:this.firstName,lastName:this.lastName,birthday:this.birthday});"Profile Saved"==t.data?(this.$refs.overlay.openOverlay("Profile saved"),this.$emit("save")):this.$refs.overlay.openErrorOverlay("Fail to save profile")}},watch:{firstName(){this.firstNameValidity=!0},lastName(){this.lastNameValidity=!0},birthday(){this.birthdayValidity=!0}}};const B=(0,D.Z)(R,[["render",Y],["__scopeId","data-v-12f9f2f6"]]);var K=B;const X=t=>((0,r.dD)("data-v-73bf8c5c"),t=t(),(0,r.Cn)(),t),G={class:"main-container"},J=X((()=>(0,r._)("div",{class:"header"},[(0,r._)("div",{class:"title"},"Change Password"),(0,r.Uk)(" For your account's security, do not share your password with anyone else ")],-1))),Q={class:"form"},tt={class:"row-container"},et=X((()=>(0,r._)("div",{class:"label"}," Current Password ",-1))),st=["type"],it={class:"toggle-hide"},rt={class:"error-text"},at={class:"row-container"},ot=X((()=>(0,r._)("div",{class:"label"}," New Password ",-1))),nt=["type"],lt={class:"toggle-hide"},dt={class:"error-text"},ct={class:"row-container"},ht=X((()=>(0,r._)("div",{class:"label"}," Confirm Password ",-1))),ut=["type"],wt={class:"toggle-hide"},mt={class:"error-text"},pt={class:"confirm-button-container"};function vt(t,e,s,a,o,n){const l=(0,r.up)("DisplayOverlay");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{ref:"overlay"},null,512),(0,r._)("div",G,[J,(0,r._)("div",Q,[(0,r._)("div",tt,[et,(0,r._)("div",{class:(0,c.C_)(o.currentPasswordValidity?"input":"error")},[(0,r.wy)((0,r._)("input",{type:o.hideCurrentPassword?"password":"placeholder","onUpdate:modelValue":e[0]||(e[0]=t=>o.currentPassword=t),"data-test":"current-password"},null,8,st),[[i.YZ,o.currentPassword]]),(0,r._)("div",it,[o.hideCurrentPassword?((0,r.wg)(),(0,r.iD)("i",{key:0,class:"fa-solid fa-eye",onClick:e[1]||(e[1]=t=>n.toggleHideCurrentPassword())})):((0,r.wg)(),(0,r.iD)("i",{key:1,class:"fa-solid fa-eye-slash",onClick:e[2]||(e[2]=t=>n.toggleHideCurrentPassword())}))])],2)]),(0,r.wy)((0,r._)("div",rt,"Password should at least contain 8 characters.",512),[[i.F8,!o.currentPasswordValidity]]),(0,r._)("div",at,[ot,(0,r._)("div",{class:(0,c.C_)(o.newPasswordValidity?"input":"error")},[(0,r.wy)((0,r._)("input",{type:o.hideNewPassword?"password":"placeholder","onUpdate:modelValue":e[3]||(e[3]=t=>o.newPassword=t),"data-test":"new-password"},null,8,nt),[[i.YZ,o.newPassword]]),(0,r._)("div",lt,[o.hideNewPassword?((0,r.wg)(),(0,r.iD)("i",{key:0,class:"fa-solid fa-eye",onClick:e[4]||(e[4]=t=>n.toggleHideNewPassword())})):((0,r.wg)(),(0,r.iD)("i",{key:1,class:"fa-solid fa-eye-slash",onClick:e[5]||(e[5]=t=>n.toggleHideNewPassword())}))])],2)]),(0,r.wy)((0,r._)("div",dt,"Password should at least contain 8 characters, one uppercase and one lowercase characters, one number and one symbol.",512),[[i.F8,!o.newPasswordValidity]]),(0,r._)("div",ct,[ht,(0,r._)("div",{class:(0,c.C_)(o.confirmPasswordValidity?"input":"error")},[(0,r.wy)((0,r._)("input",{type:o.hideConfirmPassword?"password":"placeholder","onUpdate:modelValue":e[6]||(e[6]=t=>o.confirmPassword=t),"data-test":"confirm-password"},null,8,ut),[[i.YZ,o.confirmPassword]]),(0,r._)("div",wt,[o.hideConfirmPassword?((0,r.wg)(),(0,r.iD)("i",{key:0,class:"fa-solid fa-eye",onClick:e[7]||(e[7]=t=>n.toggleHideConfirmPassword())})):((0,r.wg)(),(0,r.iD)("i",{key:1,class:"fa-solid fa-eye-slash",onClick:e[8]||(e[8]=t=>n.toggleHideConfirmPassword())}))])],2)]),(0,r.wy)((0,r._)("div",mt,"Password entered is different.",512),[[i.F8,!o.confirmPasswordValidity]])]),(0,r._)("div",pt,[(0,r._)("div",{class:"confirm-button",onClick:e[9]||(e[9]=t=>n.checkValidity()),"data-test":"confirm-button"},"Confirm")])])],64)}var yt={components:{DisplayOverlay:W.Z},data(){return{currentPassword:"",newPassword:"",confirmPassword:"",hideCurrentPassword:!0,hideNewPassword:!0,hideConfirmPassword:!0,currentPasswordValidity:!0,newPasswordValidity:!0,confirmPasswordValidity:!0}},methods:{toggleHideCurrentPassword(){this.hideCurrentPassword=!this.hideCurrentPassword},toggleHideNewPassword(){this.hideNewPassword=!this.hideNewPassword},toggleHideConfirmPassword(){this.hideConfirmPassword=!this.hideConfirmPassword},checkValidity(){this.currentPassword.length<8&&(this.currentPasswordValidity=!1),(this.newPassword.length<8||!/\d/.test(this.newPassword)||!/[ `!@`[`#$%^&*()_+\-={};':"\\|\],.<>`/`?~]/.test(this.newPassword)||this.newPassword===this.newPassword.toUpperCase()||this.newPassword===this.newPassword.toLowerCase())&&(this.newPasswordValidity=!1),this.confirmPassword!=this.newPassword?this.confirmPasswordValidity=!1:this.confirmPasswordValidity=!0,this.currentPasswordValidity&&this.newPasswordValidity&&this.confirmPasswordValidity&&this.changePassword()},async changePassword(){var t=await b.Z.showCurrentAccount(this.$storage.getStorageSync("loginID"));t.password==this.currentPassword?(await b.Z.changePassword({loginID:t.login_id,password:this.newPassword}),this.$refs.overlay.openOverlay("Password changed")):this.$refs.overlay.openErrorOverlay("Incorrect password"),this.currentPassword="",this.newPassword="",this.confirmPassword=""}},watch:{currentPassword(){this.currentPasswordValidity=!0},newPassword(){this.newPasswordValidity=!0},confirmPassword(){this.confirmPasswordValidity=!0}}};const ft=(0,D.Z)(yt,[["render",vt],["__scopeId","data-v-73bf8c5c"]]);var gt=ft,_t=s.p+"img/order.2bd689fa.png";const Ct=t=>((0,r.dD)("data-v-1655b6b1"),t=t(),(0,r.Cn)(),t),Pt={class:"main-container"},bt={class:"navigation-header"},kt={class:"navigation-container"},Dt=Ct((()=>(0,r._)("i",{class:"fa-solid fa-caret-down"},null,-1))),At={class:"dropdown-selections",ref:"dropdown"},Tt={key:0,class:"loading"},Vt=Ct((()=>(0,r._)("i",{class:"fas fa-spinner fa-spin"},null,-1))),Nt=[Vt],Ut={key:1,class:"order-list",ref:"scrollComponent"},Ot={class:"top-container"},Lt={class:"order-title"},It={class:"order-id"},St={class:"order-status"},$t={key:0,class:"prepared"},Zt=Ct((()=>(0,r._)("i",{class:"fa-solid fa-clipboard-check"},null,-1))),Mt={key:1,class:"cancelled"},Et=Ct((()=>(0,r._)("i",{class:"fa-solid fa-circle-exclamation"},null,-1))),xt={key:2,class:"prepared"},Ft=Ct((()=>(0,r._)("i",{class:"fa-solid fa-store"},null,-1))),Ht={key:3,class:"preparing"},qt=Ct((()=>(0,r._)("i",{class:"fa-solid fa-spinner"},null,-1))),jt={class:"order-content"},zt={class:"product-image"},Yt=["src"],Wt={class:"name-quantity"},Rt={class:"name"},Bt={class:"quantity"},Kt={class:"price"},Xt={class:"bottom-container"},Gt={class:"subtotal"},Jt={key:2,class:"empty-list"},Qt=Ct((()=>(0,r._)("img",{src:_t,alt:""},null,-1))),te=Ct((()=>(0,r._)("div",{class:"text"},"Please place your orders first.",-1))),ee=[Qt,te];function se(t,e,s,i,a,o){return(0,r.wg)(),(0,r.iD)("div",Pt,[(0,r._)("div",bt,[(0,r._)("div",{class:(0,c.C_)("All"==a.showing?"navigation-button-active":"navigation-button"),onClick:e[0]||(e[0]=t=>o.showAll())},"All",2),(0,r._)("div",{class:(0,c.C_)("Preparing"==a.showing?"navigation-button-active":"navigation-button"),onClick:e[1]||(e[1]=t=>o.showPreparing())},"Preparing",2),(0,r._)("div",{class:(0,c.C_)("To Collect"==a.showing?"navigation-button-active":"navigation-button"),onClick:e[2]||(e[2]=t=>o.showToCollect())},"To Collect",2),(0,r._)("div",{class:(0,c.C_)("Completed"==a.showing?"navigation-button-active":"navigation-button"),onClick:e[3]||(e[3]=t=>o.showCompleted())},"Completed",2),(0,r._)("div",{class:(0,c.C_)("Cancelled"==a.showing?"navigation-button-active":"navigation-button"),onClick:e[4]||(e[4]=t=>o.showCancelled())},"Cancelled",2)]),(0,r._)("div",kt,[(0,r._)("div",{class:"navigation-dropdown",onClick:e[10]||(e[10]=t=>o.toggleDropdown())},[(0,r.Uk)((0,c.zw)(a.showing)+" ",1),Dt,(0,r._)("div",At,[(0,r._)("div",{class:"selection",onClick:e[5]||(e[5]=t=>o.showAll())},"All"),(0,r._)("div",{class:"selection",onClick:e[6]||(e[6]=t=>o.showPreparing())},"Preparing"),(0,r._)("div",{class:"selection",onClick:e[7]||(e[7]=t=>o.showToCollect())},"To Collect"),(0,r._)("div",{class:"selection",onClick:e[8]||(e[8]=t=>o.showCompleted())},"Completed"),(0,r._)("div",{class:"selection",onClick:e[9]||(e[9]=t=>o.showCancelled())},"Cancelled")],512)])]),a.loading?((0,r.wg)(),(0,r.iD)("div",Tt,Nt)):a.loading||0==a.itemList.length?((0,r.wg)(),(0,r.iD)("div",Jt,ee)):((0,r.wg)(),(0,r.iD)("div",Ut,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.itemsArray,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"order-item",key:e},[(0,r._)("div",Ot,[(0,r._)("div",Lt,[(0,r._)("div",It,"Order ID: "+(0,c.zw)(t.item_list_id),1),(0,r._)("div",St,["Completed"==t.status?((0,r.wg)(),(0,r.iD)("div",$t,[Zt,(0,r.Uk)(" Order is completed ")])):"Cancelled"==t.status?((0,r.wg)(),(0,r.iD)("div",Mt,[Et,(0,r.Uk)(" Order is cancelled ")])):"Collect"==t.status?((0,r.wg)(),(0,r.iD)("div",xt,[Ft,(0,r.Uk)(" Order is ready for collection ")])):"Preparing"==t.status?((0,r.wg)(),(0,r.iD)("div",Ht,[qt,(0,r.Uk)(" Preparing order ")])):(0,r.kq)("",!0)])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.findItems(t.item_list_id),((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"order-container",key:e},[(0,r._)("div",jt,[(0,r._)("div",zt,[(0,r._)("img",{src:o.getImgUrl(t.image_name1)},null,8,Yt)]),(0,r._)("div",Wt,[(0,r._)("div",Rt,(0,c.zw)(t.product_name),1),(0,r._)("div",Bt,"x"+(0,c.zw)(t.quantity),1)])]),(0,r._)("div",Kt,"RM "+(0,c.zw)(t.product_price),1)])))),128))]),(0,r._)("div",Xt,[(0,r._)("div",Gt,[(0,r.Uk)("Subtotal: "),(0,r._)("span",null,(0,c.zw)(t.subtotal.toFixed(2)),1)])])])))),128))],512))])}s(7658);var ie=s(1689),re=s(9354),ae={async mounted(){window.onbeforeunload=function(){window.scrollTo(0,0)},window.addEventListener("scroll",this.handleScroll),this.currentUserID=this.$storage.getStorageSync("loginID"),this.paidOrders=await ie.Z.showPaidOrders(this.currentUserID),"SequelizeDatabaseError"!=this.paidOrders.name&&(this.itemList=this.paidOrders),await this.pushArray(),this.loading=!1},data(){return{showing:"All",currentUserID:null,paidOrders:[],itemList:[],itemsArray:[],items:[],products:[],testImage:null,orderCount:3,loading:!0}},methods:{getImgUrl(t){return"https://54.253.165.56/images/"+t},async getAllItems(t){var e=await ie.Z.showAllItems(t);return e},findItems(t){for(let e=0;e<this.itemsArray.length;e++)if(t==this.itemsArray[e].item_list_id)return this.itemsArray[e].items},async pushArray(){var t=[],e=3;this.itemList.length<e&&(e=this.itemList.length);for(let r=0;r<e;r++){var s=0;this.products=[],this.items=await this.getAllItems(this.itemList[r].item_cart_id);for(let t=0;t<this.items.length;t++){var i=await re.Z.showProduct(this.items[t].product_id);this.products.push({product_id:i.product_id,product_name:i.product_name,product_price:i.product_price,quantity:this.items[t].quantity,image_name1:i.image_name1}),s+=i.product_price*this.items[t].quantity}t.push({item_list_id:this.itemList[r].item_cart_id,status:this.itemList[r].status,items:this.products,subtotal:s})}this.itemsArray=t},async showAll(){this.loading=!0,this.showing="All",this.itemList=this.paidOrders,await this.pushArray(),this.loading=!1},async showPreparing(){this.loading=!0,this.showing="Preparing",this.itemList=[];for(let t=0;t<this.paidOrders.length;t++)"Preparing"==this.paidOrders[t].status&&this.itemList.push(this.paidOrders[t]);await this.pushArray(),this.loading=!1},async showToCollect(){this.loading=!0,this.showing="To Collect",this.itemList=[];for(let t=0;t<this.paidOrders.length;t++)"Collect"==this.paidOrders[t].status&&this.itemList.push(this.paidOrders[t]);await this.pushArray(),this.loading=!1},async showCompleted(){this.loading=!0,this.showing="Completed",this.itemList=[];for(let t=0;t<this.paidOrders.length;t++)"Completed"==this.paidOrders[t].status&&this.itemList.push(this.paidOrders[t]);await this.pushArray(),this.loading=!1},async showCancelled(){this.loading=!0,this.showing="Cancelled",this.itemList=[];for(let t=0;t<this.paidOrders.length;t++)"Cancelled"==this.paidOrders[t].status&&this.itemList.push(this.paidOrders[t]);await this.pushArray(),this.loading=!1},toggleDropdown(){"block"==this.$refs.dropdown.style.display?this.$refs.dropdown.style.display="none":this.$refs.dropdown.style.display="block"},handleScroll(){document.getElementsByClassName("container")[0].offsetHeight<=window.innerHeight+document.documentElement.scrollTop&&this.loadMore()},async loadMore(){if(window.removeEventListener("scroll",this.handleScroll),this.orderCount-this.itemList.length<3){var t=0;t=this.orderCount<this.itemList.length?3:this.orderCount-this.itemList.length;for(let i=this.orderCount;i<this.orderCount+t;i++){var e=0;this.products=[],this.items=await this.getAllItems(this.itemList[i].item_cart_id);for(let t=0;t<this.items.length;t++){var s=await re.Z.showProduct(this.items[t].product_id);this.products.push({product_id:s.product_id,product_name:s.product_name,product_price:s.product_price,quantity:this.items[t].quantity,image_name1:s.image_name1}),e+=s.product_price*this.items[t].quantity}this.itemsArray.push({item_list_id:this.itemList[i].item_cart_id,status:this.itemList[i].status,items:this.products,subtotal:e})}this.orderCount+=3,window.addEventListener("scroll",this.handleScroll)}}}};const oe=(0,D.Z)(ae,[["render",se],["__scopeId","data-v-1655b6b1"]]);var ne=oe,le=s(9777),de={components:{NavigationBar:d.Z,UserProfileMenu:T,MyProfile:K,ChangePassword:gt,MyPurchases:ne,WebsiteFooter:le.Z},beforeCreate(){void 0==this.$storage.getStorageSync("loginID")&&(window.location.href="index")},beforeMount(){void 0!=this.$storage.getStorageSync("loginID")&&this.activeteActivityTracker()},beforeUnmount(){window.removeEventListener("mousemove",this.userActivityThrottler),window.removeEventListener("scroll",this.userActivityThrottler),window.removeEventListener("keydown",this.userActivityThrottler),window.removeEventListener("resize",this.userActivityThrottler),clearTimeout(this.userActivityTimeout),clearTimeout(this.userActivityThrottlerTimeout)},mounted(){this.currentTabComponent=this.$storage.getStorageSync("userProfile")},data(){return{currentTabComponent:"",save:0,userActivityTimeout:null,userActivityThrottlerTimeout:null}},methods:{rerenderMenu(){this.$refs.menu.forceRerender(),this.$refs.navbar.forceRerender()},activeteActivityTracker(){window.addEventListener("mousemove",this.resetUserActivityTimeout),window.addEventListener("scroll",this.resetUserActivityTimeout),window.addEventListener("keydown",this.resetUserActivityTimeout),window.addEventListener("resize",this.resetUserActivityTimeout)},resetUserActivityTimeout(){clearTimeout(this.userActivityTimeout),this.userActivityTimeout=setTimeout((()=>{this.inactiveUserAction()}),9e5)},userActivityThrottler(){this.userActivityThrottlerTimeout||(this.userActivityThrottlerTimeout=setTimeout((()=>{this.resetUserActivityTimeout(),clearTimeout(this.userActivityThrottlerTimeout),this.userActivityThrottlerTimeout=null}),1e3))},inactiveUserAction(){console.log("EXPIRED LIAO"),this.$storage.clearStorageSync("loginID"),this.$storage.clearStorageSync("userProfile")}}};const ce=(0,D.Z)(de,[["render",l],["__scopeId","data-v-5cc37965"]]);var he=ce,ue={components:{UserProfileComponent:he}};const we=(0,D.Z)(ue,[["render",a]]);var me=we,pe=s(6400);i.ri(me).use(pe.ZP).mount("#app")}},e={};function s(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,i,r,a){if(!i){var o=1/0;for(c=0;c<t.length;c++){i=t[c][0],r=t[c][1],a=t[c][2];for(var n=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(n=!1,a<o&&(o=a));if(n){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[i,r,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.j=873}(),function(){s.p="/FYP2022/"}(),function(){var t={873:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],n=i[1],l=i[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(l)var c=l(s)}for(e&&e(i);d<o.length;d++)a=o[d],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(c)},i=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998,64],(function(){return s(1450)}));i=s.O(i)})();
//# sourceMappingURL=userProfile.2a916fd8.js.map