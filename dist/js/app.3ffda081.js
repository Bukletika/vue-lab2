(function(){"use strict";var t={4413:function(t,e,n){var o=n(9242),i=n(3396),r=n(7139);const l={class:"container column"},a={class:"container"},c={key:0,class:"loader"},s={key:1,class:"card"},u=(0,i._)("h2",null,"Комментарии",-1),p={class:"list"},d=["innerHTML"];function m(t,e,n,o,m,f){const v=(0,i.up)("app-form"),h=(0,i.up)("app-card");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",l,[(0,i.Wm)(v,{options:m.blockOptions,choiceOption:f.choiceDefaultOption,onSubmitForm:f.setResumeBlock},null,8,["options","choiceOption","onSubmitForm"]),(0,i.Wm)(h,{content:m.resume},null,8,["content"])]),(0,i._)("div",a,[(0,i._)("p",null,[(0,i._)("button",{class:"btn primary",onClick:e[0]||(e[0]=(...t)=>f.loadComments&&f.loadComments(...t))},"Загрузить комментарии")]),m.loading?((0,i.wg)(),(0,i.iD)("div",c)):(0,i.kq)("",!0),m.comments.length>0?((0,i.wg)(),(0,i.iD)("div",s,[u,(0,i._)("ul",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.comments,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"list-item",key:`my-${t.id}`},[(0,i._)("div",null,[(0,i._)("p",null,[(0,i._)("strong",null,(0,r.zw)(t.email),1)]),(0,i._)("small",{innerHTML:t.body},null,8,d)])])))),128))])])):(0,i.kq)("",!0)])],64)}n(7658);var f=n(70);const v={class:"form-control"},h=(0,i._)("label",{for:"type"},"Тип блока",-1),g=["value"],b={class:"form-control"},y=(0,i._)("label",{for:"value"},"Значение",-1);function w(t,e,n,l,a,c){const s=(0,i.up)("app-button");return(0,i.wg)(),(0,i.iD)("form",{class:"card card-w30",onSubmit:e[2]||(e[2]=(0,o.iM)(((...t)=>c.createResumeBlock&&c.createResumeBlock(...t)),["prevent"]))},[(0,i._)("div",v,[h,(0,i.wy)((0,i._)("select",{id:"type","onUpdate:modelValue":e[0]||(e[0]=t=>a.choiceDefaultOption=t)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.options,((t,e)=>((0,i.wg)(),(0,i.iD)("option",{value:t.optionType,key:`option-${e}`},(0,r.zw)(t.optionValue),9,g)))),128))],512),[[o.bM,a.choiceDefaultOption]])]),(0,i._)("div",b,[y,(0,i.wy)((0,i._)("textarea",{id:"value",rows:"3","onUpdate:modelValue":e[1]||(e[1]=t=>a.textArea=t)},null,512),[[o.nr,a.textArea]])]),(0,i.Wm)(s,{disabled:c.isBtnDisabled},null,8,["disabled"])],32)}const k={class:"btn primary"};function D(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("button",k,"Добавить")}var O={},_=n(89);const x=(0,_.Z)(O,[["render",D]]);var T=x,A={emits:["submitForm"],data(){return{textArea:"",choiceDefaultOption:this.choiceOption}},props:{options:Array,choiceOption:String},methods:{createResumeBlock(t){if(this.isBtnDisabled)return!1;this.$emit("submitForm",this.choiceDefaultOption,this.textArea),this.textArea="",this.choiceDefaultOption=this.options[0].optionType}},components:{AppButton:T},computed:{isBtnDisabled(){return this.textArea.length<=3}}};const j=(0,_.Z)(A,[["render",w]]);var C=j;const B={class:"card card-w70"},S={key:0},Z={key:1};function V(t,e,n,o,r,l){const a=(0,i.up)("app-card-title"),c=(0,i.up)("app-card-avatar"),s=(0,i.up)("app-card-subtitle"),u=(0,i.up)("app-card-text");return(0,i.wg)(),(0,i.iD)("div",B,[n.content.length>0?((0,i.wg)(),(0,i.iD)("div",S,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.content,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:`block-${e}`},["title"===t.blockType?((0,i.wg)(),(0,i.j4)(a,{key:0,title:t.content},null,8,["title"])):"avatar"===t.blockType?((0,i.wg)(),(0,i.j4)(c,{key:1,image:t.content},null,8,["image"])):"subtitle"===t.blockType?((0,i.wg)(),(0,i.j4)(s,{key:2,subtitle:t.content},null,8,["subtitle"])):((0,i.wg)(),(0,i.j4)(u,{key:3,text:t.content},null,8,["text"]))])))),128))])):((0,i.wg)(),(0,i.iD)("h3",Z,"Добавьте первый блок, чтобы увидеть результат"))])}function F(t,e,n,o,l,a){return(0,i.wg)(),(0,i.iD)("h1",null,(0,r.zw)(n.title),1)}var H={props:{title:{type:String,default:""}}};const z=(0,_.Z)(H,[["render",F]]);var M=z;const R={class:"avatar"},Y=["src"];function $(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("div",R,[(0,i._)("img",{src:n.image},null,8,Y)])}var K={props:{image:{type:String,default:""}}};const P=(0,_.Z)(K,[["render",$]]);var W=P;function q(t,e,n,o,l,a){return(0,i.wg)(),(0,i.iD)("h2",null,(0,r.zw)(n.subtitle),1)}var E={props:{subtitle:{type:String,default:""}}};const L=(0,_.Z)(E,[["render",q]]);var U=L;function G(t,e,n,o,l,a){return(0,i.wg)(),(0,i.iD)("p",null,(0,r.zw)(n.text),1)}var I={props:{text:{type:String,default:""}}};const J=(0,_.Z)(I,[["render",G]]);var N=J,Q={props:{content:{type:Array}},components:{AppCardTitle:M,AppCardAvatar:W,AppCardSubtitle:U,AppCardText:N}};const X=(0,_.Z)(Q,[["render",V]]);var tt=X,et={data(){return{blockOptions:[{optionType:"title",optionValue:"Заголовок"},{optionType:"subtitle",optionValue:"Подзаголовок"},{optionType:"avatar",optionValue:"Аватар"},{optionType:"text",optionValue:"Текст"}],resume:[],loading:!1,comments:[]}},methods:{setResumeBlock(t,e){this.resume.push({blockType:t,content:e})},async loadComments(){try{this.loading=!0;const{data:t}=await f.ZP.get("https://jsonplaceholder.typicode.com/comments?_limit=42.json");if(!t)throw new Error("Список комментариев пуст");this.comments=Object.keys(t).map((e=>({id:e,...t[e]}))),this.loading=!1}catch(t){this.alert={type:"danger",title:"Ошибка!",text:t.message},console.log(t.message),this.loading=!1}}},components:{AppForm:C,AppCard:tt},computed:{choiceDefaultOption(){return this.blockOptions[0].optionType}}};const nt=(0,_.Z)(et,[["render",m]]);var ot=nt;(0,o.ri)(ot).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var l=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],r=t[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,r<l&&(l=r));if(a){t.splice(u--,1);var s=i();void 0!==s&&(e=s)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,l=o[0],a=o[1],c=o[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(c)var u=c(n)}for(e&&e(o);s<l.length;s++)r=l[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkvue3_lab2"]=self["webpackChunkvue3_lab2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4413)}));o=n.O(o)})();
//# sourceMappingURL=app.3ffda081.js.map