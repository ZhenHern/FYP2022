(function(){"use strict";var e={6960:function(e,t,i){var r=i(9242),n=i(3396);function s(e,t,i,r,s,o){const a=(0,n.up)("EditProductsComponent");return(0,n.wg)(),(0,n.j4)(a)}var o=i(7139);const a={class:"viewport"},d={class:"background-image"},c={class:"content"},l={class:"text"},u={class:"main-container"};function p(e,t,i,s,p,g){const v=(0,n.up)("NavigationBar"),_=(0,n.up)("DeleteProduct"),h=(0,n.up)("CreateProduct"),y=(0,n.up)("WebsiteFooter");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(v),(0,n._)("div",d,[(0,n._)("div",c,[(0,n.Wm)(r.uT,null,{default:(0,n.w5)((()=>[(0,n._)("div",l,(0,o.zw)(p.title),1)])),_:1})])]),(0,n._)("div",u,["DeleteProduct"==p.component?((0,n.wg)(),(0,n.j4)(_,{key:0})):((0,n.wg)(),(0,n.j4)(h,{key:1}))]),(0,n.Wm)(y)])}var g=i(8774),v=i(9777);const _=e=>((0,n.dD)("data-v-367d83f6"),e=e(),(0,n.Cn)(),e),h={class:"top-container"},y={key:0,class:"product-details"},m={class:"product-details-1"},f={class:"product"},w=_((()=>(0,n._)("div",{class:"product-title"}," Product Name ",-1))),D={class:"product-input"},P={class:"product"},b=_((()=>(0,n._)("div",{class:"product-title"}," Product Price (RM) ",-1))),I={class:"product-input"},O={class:"product-images"},C={class:"product-image-1"},k=_((()=>(0,n._)("div",{class:"product-title"}," Image 1 ",-1))),Z={class:"product-input-file"},x={class:"product-image-2"},U=_((()=>(0,n._)("div",{class:"product-title"}," Image 2 ",-1))),N={class:"product-input-file"},$={class:"product-image-3"},j=_((()=>(0,n._)("div",{class:"product-title"}," Image 3 ",-1))),V={class:"product-input-file"},z={class:"product-description"},S=_((()=>(0,n._)("div",{class:"product-description-title"}," Product Description ",-1))),Y={class:"product-description-input"},W={class:"buttons-1"},E=_((()=>(0,n._)("div",{class:"previous-button"}," Previous Step ",-1))),F={key:1,class:"product-category"},H={class:"product-details-1"},M={class:"product"},A=_((()=>(0,n._)("div",{class:"product-title"}," Category ",-1))),K={class:"product-input"},T=["value"],B={class:"product-details-1"},R={class:"product"},q=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 1 ",-1))),G={class:"product-input"},J={class:"product"},L=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 2 ",-1))),Q={class:"product-input"},X={class:"product"},ee=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 3 ",-1))),te={class:"product-input"},ie={class:"product-details-1"},re={class:"product"},ne=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 4 ",-1))),se={class:"product-input"},oe={class:"product"},ae=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 5 ",-1))),de={class:"product-input"},ce={class:"product"},le=_((()=>(0,n._)("div",{class:"product-title"}," Ingredient 6 ",-1))),ue={class:"product-input"},pe={class:"buttons-2"};function ge(e,t,i,s,a,d){const c=(0,n.up)("DisplayOverlay");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",h,[(0,n._)("div",{class:(0,o.C_)(1==a.step?"product-details-top-active":"product-details-top")}," 1. Product Details ",2),(0,n._)("div",{class:(0,o.C_)(2==a.step?"category-ingredients-top-active":"category-ingredients-top")}," 2. Category & Ingredients ",2)]),1==a.step?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",m,[(0,n._)("div",f,[w,(0,n._)("div",D,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.productName=e)},null,512),[[r.nr,a.productName]])])]),(0,n._)("div",P,[b,(0,n._)("div",I,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>a.productPrice=e)},null,512),[[r.nr,a.productPrice]])])])]),(0,n._)("div",O,[(0,n._)("div",C,[k,(0,n._)("div",Z,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[2]||(t[2]=e=>d.uploadImage1()),ref:"image1"},null,544)])]),(0,n._)("div",x,[U,(0,n._)("div",N,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[3]||(t[3]=e=>d.uploadImage2()),ref:"image2"},null,544)])]),(0,n._)("div",$,[j,(0,n._)("div",V,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[4]||(t[4]=e=>d.uploadImage3()),ref:"image3"},null,544)])])]),(0,n._)("div",z,[S,(0,n._)("div",Y,[(0,n.wy)((0,n._)("textarea",{cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>a.productDesc=e)},null,512),[[r.nr,a.productDesc]])])]),(0,n._)("div",W,[E,(0,n._)("div",{class:"next-button",onClick:t[6]||(t[6]=e=>d.nextStep())}," Next Step ")])])):((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("div",H,[(0,n._)("div",M,[A,(0,n._)("div",K,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>a.category=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.category_name,key:t},(0,o.zw)(e.category_name),9,T)))),128))],512),[[r.bM,a.category]])])])]),(0,n._)("div",B,[(0,n._)("div",R,[q,(0,n._)("div",G,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>a.ingredient1=e)},null,512),[[r.nr,a.ingredient1]])])]),(0,n._)("div",J,[L,(0,n._)("div",Q,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>a.ingredient2=e)},null,512),[[r.nr,a.ingredient2]])])]),(0,n._)("div",X,[ee,(0,n._)("div",te,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=e=>a.ingredient3=e)},null,512),[[r.nr,a.ingredient3]])])])]),(0,n._)("div",ie,[(0,n._)("div",re,[ne,(0,n._)("div",se,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>a.ingredient4=e)},null,512),[[r.nr,a.ingredient4]])])]),(0,n._)("div",oe,[ae,(0,n._)("div",de,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=e=>a.ingredient5=e)},null,512),[[r.nr,a.ingredient5]])])]),(0,n._)("div",ce,[le,(0,n._)("div",ue,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=e=>a.ingredient6=e)},null,512),[[r.nr,a.ingredient6]])])])]),(0,n._)("div",pe,[(0,n._)("div",{class:"previous-button",onClick:t[14]||(t[14]=e=>a.step=1)}," Previous Step "),(0,n._)("div",{class:"finish-button",onClick:t[15]||(t[15]=e=>d.finish())}," Finish ")])])),(0,n.Wm)(c,{ref:"overlay"},null,512)],64)}i(7658);var ve=i(9354),_e=i(1541),he={components:{DisplayOverlay:_e.Z},async mounted(){this.categories=await ve.Z.showAllCategories()},data(){return{productName:"",productPrice:"",productDesc:"",image1:null,image2:null,image3:null,categories:null,category:"",ingredient1:"",ingredient2:"",ingredient3:"",ingredient4:"",ingredient5:"",ingredient6:"",step:1}},methods:{uploadImage1(){this.image1=this.$refs.image1.files[0]},uploadImage2(){this.image2=this.$refs.image2.files[0]},uploadImage3(){this.image3=this.$refs.image3.files[0]},async createProduct(){let e=new FormData;e.append("productName",this.productName),e.append("productDesc",this.productDesc),e.append("productPrice",this.productPrice),e.append("productCategory",this.category),e.append("image",this.image1),e.append("image",this.image2),e.append("image",this.image3);var t=[];t.push(this.ingredient1),""!=this.ingredient2&&t.push(this.ingredient2),""!=this.ingredient3&&t.push(this.ingredient3),""!=this.ingredient4&&t.push(this.ingredient4),""!=this.ingredient5&&t.push(this.ingredient5),""!=this.ingredient6&&t.push(this.ingredient6);var i=await ve.Z.createProduct(e);await ve.Z.createIngredients({productID:i.product_id,ingredientName:t})},nextStep(){""!=this.productName&&""!=this.productDesc&&""!=this.productPrice&&null!=this.image1&&null!=this.image2&&null!=this.image3?this.step=2:this.$refs.overlay.openErrorOverlay("Please enter everything")},async finish(){""!=this.category&&""!=this.ingredient1?(await this.createProduct(),this.step=1,this.productName="",this.productDesc="",this.productPrice="",this.image1=null,this.image2=null,this.image3=null,this.category="",this.ingredient1="",this.ingredient2="",this.ingredient3="",this.ingredient4="",this.ingredient5="",this.ingredient6="",this.$refs.overlay.openOverlay("Successfully created.")):this.$refs.overlay.openErrorOverlay("Please enter everything")}}},ye=i(89);const me=(0,ye.Z)(he,[["render",ge],["__scopeId","data-v-367d83f6"]]);var fe=me;const we=e=>((0,n.dD)("data-v-f375ad7c"),e=e(),(0,n.Cn)(),e),De={class:"top-container"},Pe={class:"category-dropdown"},be=we((()=>(0,n._)("div",{class:"category-title"}," Category ",-1))),Ie={class:"category-input"},Oe=["value"],Ce={class:"product-dropdown"},ke=we((()=>(0,n._)("div",{class:"product-title"}," Product ",-1))),Ze={class:"product-input"},xe=["value"],Ue={key:0,class:"bot-container"},Ne={class:"product-details"},$e={class:"image-container"},je=["src"],Ve={class:"product-information"},ze={class:"product-top"},Se={class:"product-name"},Ye={class:"product-price"},We={class:"product-description"},Ee={class:"ingredients"},Fe=we((()=>(0,n._)("div",{class:"ingredients-title"},"Ingredients:",-1))),He={class:"ingredients-content"},Me={class:"delete-overlay",ref:"deleteOverlay"},Ae={class:"delete-container"},Ke=we((()=>(0,n._)("div",{class:"delete-text"}," Are you sure you want to delete this product? ",-1))),Te={class:"delete-buttons"};function Be(e,t,i,s,a,d){const c=(0,n.up)("DisplayOverlay");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("div",De,[(0,n._)("div",Pe,[be,(0,n._)("div",Ie,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.category=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.category_name,key:t},(0,o.zw)(e.category_name),9,Oe)))),128))],512),[[r.bM,a.category]])])]),(0,n._)("div",Ce,[ke,(0,n._)("div",Ze,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.productID=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.products,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.product_id,key:t},(0,o.zw)(e.product_id)+" - "+(0,o.zw)(e.product_name),9,xe)))),128))],512),[[r.bM,a.productID]])])])]),null!=a.product?((0,n.wg)(),(0,n.iD)("div",Ue,[(0,n._)("div",Ne,[(0,n._)("div",$e,[(0,n._)("img",{src:d.getImgUrl(a.product.image_name1)},null,8,je)]),(0,n._)("div",Ve,[(0,n._)("div",ze,[(0,n._)("div",Se,(0,o.zw)(a.product.product_name),1),(0,n._)("div",Ye,"RM "+(0,o.zw)(a.product.product_price),1)]),(0,n._)("div",We,(0,o.zw)(a.product.product_description),1),(0,n._)("div",Ee,[Fe,(0,n._)("ul",He,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.ingredients,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},(0,o.zw)(e.ingredient_name),1)))),128))])])])]),(0,n._)("div",{class:"delete-button",onClick:t[2]||(t[2]=e=>d.openDeleteOverlay())}," Delete ")])):(0,n.kq)("",!0)]),(0,n._)("div",Me,[(0,n._)("div",Ae,[Ke,(0,n._)("div",Te,[(0,n._)("div",{class:"yes-button",onClick:t[3]||(t[3]=e=>d.deleteProduct())}," Yes "),(0,n._)("div",{class:"no-button",onClick:t[4]||(t[4]=e=>d.closeDeleteOverlay())}," No ")])])],512),(0,n.Wm)(c,{ref:"overlay"},null,512)],64)}var Re={components:{DisplayOverlay:_e.Z},async mounted(){this.categories=await ve.Z.showAllCategories(),this.products=await ve.Z.showAllProducts()},data(){return{categories:[],category:"",products:[],productID:"",product:null,ingredients:null}},methods:{getImgUrl(e){return"https://54.253.165.56/images/"+e},openDeleteOverlay(){this.$refs.deleteOverlay.style.display="block"},closeDeleteOverlay(){this.$refs.deleteOverlay.style.display="none"},async deleteProduct(){try{await ve.Z.deleteProduct({productID:this.productID}),this.rerender(),this.$refs.deleteOverlay.style.display="none",this.$refs.overlay.openOverlay("Item is deleted")}catch{this.$refs.deleteOverlay.style.display="none",this.$refs.overlay.openErrorOverlay("Item cannot be deleted")}},async rerender(){this.category="",this.productID="",this.product=null,this.products=await ve.Z.showAllProducts()}},watch:{async category(e){for(let i=0;i<this.categories.length;i++)if(this.categories[i].category_name==e){var t=this.categories[i].category_id;break}this.products=await ve.Z.showProducts(t)},async productID(e){this.product=await ve.Z.showProduct(e),this.ingredients=await ve.Z.showIngredients(e)}}};const qe=(0,ye.Z)(Re,[["render",Be],["__scopeId","data-v-f375ad7c"]]);var Ge=qe,Je={components:{NavigationBar:g.Z,WebsiteFooter:v.Z,CreateProduct:fe,DeleteProduct:Ge},mounted(){this.component=this.$storage.getStorageSync("editProducts"),"CreateProduct"==this.component?this.title="Create Product":this.title="Delete Product"},data(){return{component:null,title:null}}};const Le=(0,ye.Z)(Je,[["render",p],["__scopeId","data-v-525cf939"]]);var Qe=Le,Xe={components:{EditProductsComponent:Qe}};const et=(0,ye.Z)(Xe,[["render",s]]);var tt=et,it=i(6400);r.ri(tt).use(it.ZP).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],s=e[l][2];for(var a=!0,d=0;d<r.length;d++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[d])}))?r.splice(d--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.j=455}(),function(){i.p="/FYP2022/"}(),function(){var e={455:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],d=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(d)var l=d(i)}for(t&&t(r);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(l)},r=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998,64],(function(){return i(6960)}));r=i.O(r)})();
//# sourceMappingURL=editProducts.90e08b29.js.map