(function(){"use strict";var e={4944:function(e,t,i){var r=i(9242),n=i(3396);function s(e,t,i,r,s,o){const a=(0,n.up)("EditProductsComponent");return(0,n.wg)(),(0,n.j4)(a)}var o=i(7139);const a={class:"viewport"},d={class:"background-image"},c={class:"content"},l={class:"text"};function u(e,t,i,s,u,p){const g=(0,n.up)("NavigationBar"),v=(0,n.up)("DeleteProduct"),_=(0,n.up)("CreateProduct"),y=(0,n.up)("WebsiteFooter");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(g),(0,n._)("div",d,[(0,n._)("div",c,[(0,n.Wm)(r.uT,null,{default:(0,n.w5)((()=>[(0,n._)("div",l,(0,o.zw)(u.title),1)])),_:1})])]),"DeleteProduct"==u.component?((0,n.wg)(),(0,n.j4)(v,{key:0})):((0,n.wg)(),(0,n.j4)(_,{key:1})),(0,n.Wm)(y)])}var p=i(9840),g=i(3097);const v=e=>((0,n.dD)("data-v-367d83f6"),e=e(),(0,n.Cn)(),e),_={class:"top-container"},y={key:0,class:"product-details"},h={class:"product-details-1"},m={class:"product"},f=v((()=>(0,n._)("div",{class:"product-title"}," Product Name ",-1))),w={class:"product-input"},D={class:"product"},P=v((()=>(0,n._)("div",{class:"product-title"}," Product Price (RM) ",-1))),b={class:"product-input"},I={class:"product-images"},O={class:"product-image-1"},C=v((()=>(0,n._)("div",{class:"product-title"}," Image 1 ",-1))),k={class:"product-input-file"},Z={class:"product-image-2"},x=v((()=>(0,n._)("div",{class:"product-title"}," Image 2 ",-1))),U={class:"product-input-file"},N={class:"product-image-3"},$=v((()=>(0,n._)("div",{class:"product-title"}," Image 3 ",-1))),j={class:"product-input-file"},V={class:"product-description"},z=v((()=>(0,n._)("div",{class:"product-description-title"}," Product Description ",-1))),S={class:"product-description-input"},Y={class:"buttons-1"},W=v((()=>(0,n._)("div",{class:"previous-button"}," Previous Step ",-1))),E={key:1,class:"product-category"},F={class:"product-details-1"},H={class:"product"},M=v((()=>(0,n._)("div",{class:"product-title"}," Category ",-1))),A={class:"product-input"},K=["value"],T={class:"product-details-1"},B={class:"product"},R=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 1 ",-1))),q={class:"product-input"},G={class:"product"},J=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 2 ",-1))),L={class:"product-input"},Q={class:"product"},X=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 3 ",-1))),ee={class:"product-input"},te={class:"product-details-1"},ie={class:"product"},re=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 4 ",-1))),ne={class:"product-input"},se={class:"product"},oe=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 5 ",-1))),ae={class:"product-input"},de={class:"product"},ce=v((()=>(0,n._)("div",{class:"product-title"}," Ingredient 6 ",-1))),le={class:"product-input"},ue={class:"buttons-2"};function pe(e,t,i,s,a,d){const c=(0,n.up)("DisplayOverlay");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",_,[(0,n._)("div",{class:(0,o.C_)(1==a.step?"product-details-top-active":"product-details-top")}," 1. Product Details ",2),(0,n._)("div",{class:(0,o.C_)(2==a.step?"category-ingredients-top-active":"category-ingredients-top")}," 2. Category & Ingredients ",2)]),1==a.step?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("div",h,[(0,n._)("div",m,[f,(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.productName=e)},null,512),[[r.nr,a.productName]])])]),(0,n._)("div",D,[P,(0,n._)("div",b,[(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=e=>a.productPrice=e)},null,512),[[r.nr,a.productPrice]])])])]),(0,n._)("div",I,[(0,n._)("div",O,[C,(0,n._)("div",k,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[2]||(t[2]=e=>d.uploadImage1()),ref:"image1"},null,544)])]),(0,n._)("div",Z,[x,(0,n._)("div",U,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[3]||(t[3]=e=>d.uploadImage2()),ref:"image2"},null,544)])]),(0,n._)("div",N,[$,(0,n._)("div",j,[(0,n._)("input",{type:"file",name:"image",accept:"image/*",onChange:t[4]||(t[4]=e=>d.uploadImage3()),ref:"image3"},null,544)])])]),(0,n._)("div",V,[z,(0,n._)("div",S,[(0,n.wy)((0,n._)("textarea",{cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>a.productDesc=e)},null,512),[[r.nr,a.productDesc]])])]),(0,n._)("div",Y,[W,(0,n._)("div",{class:"next-button",onClick:t[6]||(t[6]=e=>d.nextStep())}," Next Step ")])])):((0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("div",F,[(0,n._)("div",H,[M,(0,n._)("div",A,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[7]||(t[7]=e=>a.category=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.category_name,key:t},(0,o.zw)(e.category_name),9,K)))),128))],512),[[r.bM,a.category]])])])]),(0,n._)("div",T,[(0,n._)("div",B,[R,(0,n._)("div",q,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>a.ingredient1=e)},null,512),[[r.nr,a.ingredient1]])])]),(0,n._)("div",G,[J,(0,n._)("div",L,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[9]||(t[9]=e=>a.ingredient2=e)},null,512),[[r.nr,a.ingredient2]])])]),(0,n._)("div",Q,[X,(0,n._)("div",ee,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[10]||(t[10]=e=>a.ingredient3=e)},null,512),[[r.nr,a.ingredient3]])])])]),(0,n._)("div",te,[(0,n._)("div",ie,[re,(0,n._)("div",ne,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[11]||(t[11]=e=>a.ingredient4=e)},null,512),[[r.nr,a.ingredient4]])])]),(0,n._)("div",se,[oe,(0,n._)("div",ae,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[12]||(t[12]=e=>a.ingredient5=e)},null,512),[[r.nr,a.ingredient5]])])]),(0,n._)("div",de,[ce,(0,n._)("div",le,[(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[13]||(t[13]=e=>a.ingredient6=e)},null,512),[[r.nr,a.ingredient6]])])])]),(0,n._)("div",ue,[(0,n._)("div",{class:"previous-button",onClick:t[14]||(t[14]=e=>a.step=1)}," Previous Step "),(0,n._)("div",{class:"finish-button",onClick:t[15]||(t[15]=e=>d.finish())}," Finish ")])])),(0,n.Wm)(c,{ref:"overlay"},null,512)],64)}i(7658);var ge=i(9354),ve=i(1541),_e={components:{DisplayOverlay:ve.Z},async mounted(){this.categories=await ge.Z.showAllCategories()},data(){return{productName:"",productPrice:"",productDesc:"",image1:null,image2:null,image3:null,categories:null,category:"",ingredient1:"",ingredient2:"",ingredient3:"",ingredient4:"",ingredient5:"",ingredient6:"",step:1}},methods:{uploadImage1(){this.image1=this.$refs.image1.files[0]},uploadImage2(){this.image2=this.$refs.image2.files[0]},uploadImage3(){this.image3=this.$refs.image3.files[0]},async createProduct(){let e=new FormData;e.append("productName",this.productName),e.append("productDesc",this.productDesc),e.append("productPrice",this.productPrice),e.append("productCategory",this.category),e.append("image",this.image1),e.append("image",this.image2),e.append("image",this.image3);var t=[];t.push(this.ingredient1),""!=this.ingredient2&&t.push(this.ingredient2),""!=this.ingredient3&&t.push(this.ingredient3),""!=this.ingredient4&&t.push(this.ingredient4),""!=this.ingredient5&&t.push(this.ingredient5),""!=this.ingredient6&&t.push(this.ingredient6);var i=await ge.Z.createProduct(e);await ge.Z.createIngredients({productID:i.product_id,ingredientName:t})},nextStep(){""!=this.productName&&""!=this.productDesc&&""!=this.productPrice&&null!=this.image1&&null!=this.image2&&null!=this.image3?this.step=2:this.$refs.overlay.openErrorOverlay("Please enter everything")},async finish(){""!=this.category&&""!=this.ingredient1?(await this.createProduct(),this.step=1,this.productName="",this.productDesc="",this.productPrice="",this.image1=null,this.image2=null,this.image3=null,this.category="",this.ingredient1="",this.ingredient2="",this.ingredient3="",this.ingredient4="",this.ingredient5="",this.ingredient6="",this.$refs.overlay.openOverlay("Successfully created.")):this.$refs.overlay.openErrorOverlay("Please enter everything")}}},ye=i(89);const he=(0,ye.Z)(_e,[["render",pe],["__scopeId","data-v-367d83f6"]]);var me=he;const fe=e=>((0,n.dD)("data-v-7ded515c"),e=e(),(0,n.Cn)(),e),we={class:"top-container"},De={class:"category-dropdown"},Pe=fe((()=>(0,n._)("div",{class:"category-title"}," Category ",-1))),be={class:"category-input"},Ie=["value"],Oe={class:"product-dropdown"},Ce=fe((()=>(0,n._)("div",{class:"product-title"}," Product ",-1))),ke={class:"product-input"},Ze=["value"],xe={key:0,class:"bot-container"},Ue={class:"product-details"},Ne={class:"image-container"},$e=["src"],je={class:"product-information"},Ve={class:"product-top"},ze={class:"product-name"},Se={class:"product-price"},Ye={class:"product-description"},We={class:"ingredients"},Ee=fe((()=>(0,n._)("div",{class:"ingredients-title"},"Ingredients:",-1))),Fe={class:"ingredients-content"},He={class:"delete-overlay",ref:"deleteOverlay"},Me={class:"delete-container"},Ae=fe((()=>(0,n._)("div",{class:"delete-text"}," Are you sure you want to delete this product? ",-1))),Ke={class:"delete-buttons"};function Te(e,t,i,s,a,d){const c=(0,n.up)("DisplayOverlay");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[(0,n._)("div",we,[(0,n._)("div",De,[Pe,(0,n._)("div",be,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.category=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.categories,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.category_name,key:t},(0,o.zw)(e.category_name),9,Ie)))),128))],512),[[r.bM,a.category]])])]),(0,n._)("div",Oe,[Ce,(0,n._)("div",ke,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.productID=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.products,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.product_id,key:t},(0,o.zw)(e.product_id)+" - "+(0,o.zw)(e.product_name),9,Ze)))),128))],512),[[r.bM,a.productID]])])])]),null!=a.product?((0,n.wg)(),(0,n.iD)("div",xe,[(0,n._)("div",Ue,[(0,n._)("div",Ne,[(0,n._)("img",{src:d.getImgUrl(a.product.image_name1)},null,8,$e)]),(0,n._)("div",je,[(0,n._)("div",Ve,[(0,n._)("div",ze,(0,o.zw)(a.product.product_name),1),(0,n._)("div",Se,"RM "+(0,o.zw)(a.product.product_price),1)]),(0,n._)("div",Ye,(0,o.zw)(a.product.product_description),1),(0,n._)("div",We,[Ee,(0,n._)("ul",Fe,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.ingredients,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},(0,o.zw)(e.ingredient_name),1)))),128))])])])]),(0,n._)("div",{class:"delete-button",onClick:t[2]||(t[2]=e=>d.openDeleteOverlay())}," Delete ")])):(0,n.kq)("",!0)]),(0,n._)("div",He,[(0,n._)("div",Me,[Ae,(0,n._)("div",Ke,[(0,n._)("div",{class:"yes-button",onClick:t[3]||(t[3]=e=>d.deleteProduct())}," Yes "),(0,n._)("div",{class:"no-button",onClick:t[4]||(t[4]=e=>d.closeDeleteOverlay())}," No ")])])],512),(0,n.Wm)(c,{ref:"overlay"},null,512)],64)}var Be={components:{DisplayOverlay:ve.Z},async mounted(){this.categories=await ge.Z.showAllCategories(),this.products=await ge.Z.showAllProducts()},data(){return{categories:[],category:"",products:[],productID:"",product:null,ingredients:null}},methods:{getImgUrl(e){return i(1883)("./"+e)},openDeleteOverlay(){this.$refs.deleteOverlay.style.display="block"},closeDeleteOverlay(){this.$refs.deleteOverlay.style.display="none"},async deleteProduct(){try{await ge.Z.deleteProduct({productID:this.productID}),this.rerender(),this.$refs.deleteOverlay.style.display="none",this.$refs.overlay.openOverlay("Item is deleted")}catch{this.$refs.deleteOverlay.style.display="none",this.$refs.overlay.openErrorOverlay("Item cannot be deleted")}},async rerender(){this.category="",this.productID="",this.product=null,this.products=await ge.Z.showAllProducts()}},watch:{async category(e){for(let i=0;i<this.categories.length;i++)if(this.categories[i].category_name==e){var t=this.categories[i].category_id;break}this.products=await ge.Z.showProducts(t)},async productID(e){this.product=await ge.Z.showProduct(e),this.ingredients=await ge.Z.showIngredients(e)}}};const Re=(0,ye.Z)(Be,[["render",Te],["__scopeId","data-v-7ded515c"]]);var qe=Re,Ge={components:{NavigationBar:p.Z,WebsiteFooter:g.Z,CreateProduct:me,DeleteProduct:qe},mounted(){this.component=this.$storage.getStorageSync("editProducts"),"CreateProduct"==this.component?this.title="Create Product":this.title="Delete Product"},data(){return{component:null,title:null}}};const Je=(0,ye.Z)(Ge,[["render",u],["__scopeId","data-v-5c8db531"]]);var Le=Je,Qe={components:{EditProductsComponent:Le}};const Xe=(0,ye.Z)(Qe,[["render",s]]);var et=Xe,tt=i(6400);r.ri(et).use(tt.ZP).mount("#app")}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,r,n,s){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],s=e[l][2];for(var a=!0,d=0;d<r.length;d++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](r[d])}))?r.splice(d--,1):(a=!1,s<o&&(o=s));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[r,n,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.j=455}(),function(){i.p="/FYP2022/"}(),function(){var e={455:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],a=r[1],d=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(d)var l=d(i)}for(t&&t(r);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(l)},r=self["webpackChunkfirst_project"]=self["webpackChunkfirst_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=i.O(void 0,[998,64],(function(){return i(4944)}));r=i.O(r)})();
//# sourceMappingURL=editProducts.1d17c95b.js.map