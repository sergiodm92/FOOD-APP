(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},89:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(23),s=c.n(r),i=(c(58),c(4)),o=(c(59),c(10)),l=(c(60),c(1));var u=function(){return Object(l.jsxs)("div",{className:"background",children:[Object(l.jsx)("h1",{children:"Welcome to your recipe page"}),Object(l.jsx)("div",{className:"contenedor-botones",children:Object(l.jsx)(o.b,{className:"link",to:"/home",children:Object(l.jsxs)("button",{className:"boton seis",children:[Object(l.jsx)("span",{children:"Entry"}),Object(l.jsx)("svg",{children:Object(l.jsx)("rect",{x:"0",y:"0",fill:"none"})})]})})})]})},j=c(21),d=c(17),b=c(3),h=c(14),p=c(6),O=c(12),m=c(22),f=c(15),x=c.n(f),v=c(25),g=c.n(v),y=c.p+"static/media/recipe not found.5d0c1fb9.png",E="http://food-app-production-7505.up.railway.app/",N="GET_RECIPES_ID",S="GET_DIETS",C="GET_RECIPES_FOR_DIET";function I(){return function(e){x.a.get("".concat(E,"recipes")).then((function(t){return e({type:"GET_RECIPES",payload:t.data})}))}}function _(e){return function(t){x.a.get("".concat(E,"recipes?title=")+e).then((function(e){return t({type:"GET_RECIPES_NAME",payload:e.data})})).catch((function(){g()({title:"ERROR",text:"Recipe not found",icon:y,dangerMode:!0,buttons:"CLOSE"})}))}}var R=function(e){return{type:"SWICH_LOADING",payload:e}},P=(c(89),c(50)),T=c.n(P),w=c(49),M=c.n(w),D=(c(27),{title:"",score:"",healthScore:"",instructions:"",summary:"",image:"",diets:[],readyInMinutes:""}),k=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.diets})),c=Object(a.useState)(D),n=Object(h.a)(c,2),r=n[0],s=n[1],i=Object(a.useState)({}),u=Object(h.a)(i,2),f=u[0],v=u[1];Object(a.useEffect)((function(){e(function(){var e=Object(m.a)(Object(O.a)().mark((function e(t){var c;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(E,"types"));case 3:return c=e.sent,e.abrupt("return",t({type:S,payload:c.data}));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",t({type:S,payload:[]}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var y=function(e){v(function(e){var t={};return e.title||(t.title="title required"),e.summary||(t.summary="summary required"),e.instructions||(t.instructions="type an instruction"),/^([0-9])*$/.test(e.score)?(e.score<0||e.score>100)&&(t.score="spoonacularScore must be between 0 and 100"):t.score="Score is not a number",/^([0-9])*$/.test(e.healthScore)?(e.healthScore<0||e.healthScore>100)&&(t.healthScore="healthScore must be between 0 and 100"):t.healthScore="healthScore is not a number",/^([0-9])*$/.test(e.readyInMinutes)?(e.readyInMinutes<5||e.readyInMinutes>300)&&(t.readyInMinutes="Time must be between 5 and 300"):t.healthScore="Time is not a number",0===e.diets.length&&(t.diet="select at least one diet"),t}(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))),s(Object(b.a)(Object(b.a)({},r),{},Object(d.a)({},e.target.name,e.target.value)))},N=function(e){e.target.checked?(s(Object(b.a)(Object(b.a)({},r),{},{diets:[].concat(Object(j.a)(r.diets),[e.target.id])})),console.log(r.diets.title)):s(Object(b.a)(Object(b.a)({},r),{},{diets:Object(j.a)(r.diets).filter((function(t){return e.target.id!==t}))}))};return Object(l.jsxs)("div",{className:"form-main-container",children:[Object(l.jsx)(o.b,{to:"/home",className:"link",children:Object(l.jsx)("button",{className:"buttonhome",children:"Home"})}),Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{className:"form-div",children:[Object(l.jsxs)("div",{className:"form-items",children:[Object(l.jsx)("p",{className:"form-title",children:"Create your own recipe!"}),Object(l.jsxs)("p",{className:f.title?"danger":"pass",children:["\ud83d\udd3b",f.title]}),Object(l.jsx)("input",{type:"text",value:r.title,id:"title",name:"title",onChange:y,placeholder:"\ud83d\udcacTitle",className:"danger"&f.title}),Object(l.jsxs)("p",{className:f.score?"danger":"pass",children:["\ud83d\udd3b",f.score]}),Object(l.jsx)("input",{type:"text",value:r.score,id:"score",name:"score",onChange:y,placeholder:"\u2b50Score (0-100)",className:"danger"&f.score}),Object(l.jsxs)("p",{className:f.healthScore?"danger":"pass",children:["\ud83d\udd3b",f.healthScore]}),Object(l.jsx)("input",{type:"text",value:r.healthScore,id:"healthScore",name:"healthScore",onChange:y,placeholder:"\ud83c\udf4fHealthScore (0-100)",className:"danger"&f.healthScore}),Object(l.jsxs)("p",{className:f.readyInMinutes?"danger":"pass",children:["\ud83d\udd3b",f.readyInMinutes]}),Object(l.jsx)("input",{type:"text",value:r.readyInMinutes,id:"Time",name:"readyInMinutes",onChange:y,placeholder:"\ud83d\udd50Time(minutes)",className:"danger"&f.readyInMinutes}),Object(l.jsxs)("p",{className:f.summary?"danger":"pass",children:["\ud83d\udd3b",f.summary]}),Object(l.jsx)("textarea",{name:"summary",id:"summary",value:r.summary,onChange:y,placeholder:"\ud83e\uded5Summary",className:"danger"&f.summary}),Object(l.jsxs)("p",{className:f.instructions?"danger":"pass",children:["\ud83d\udd3b",f.instructions]}),Object(l.jsx)("textarea",{name:"instructions",id:"instructions",value:r.instructions,onChange:y,placeholder:"\ud83d\udcc4Instructions",className:"danger"&f.instructions}),Object(l.jsx)("input",{type:"text",value:r.image,id:"image",name:"image",onChange:y,placeholder:"\ud83d\udcacImage(only link)"})]}),Object(l.jsx)("div",{className:"diets-container",children:t.length>0&&t.map((function(e){return Object(l.jsxs)("label",{htmlFor:e.id.toLowerCase().replace(" ","").replace("-",""),className:"text-label",children:[Object(l.jsx)("input",{id:e.id.toLowerCase().replace(" ","").replace("-",""),type:"checkbox",name:e.title.toLowerCase().replace(" ","").replace("-",""),onChange:N}),Object(l.jsxs)("span",{class:"checkboxtext",children:[" ",e.title," "]})]})}))}),Object(l.jsxs)("div",{className:"form-buttons",children:[Object(l.jsxs)("button",{onClick:function(e){e.preventDefault(),s(D),v({})},className:"btn-reset",children:[" ",Object(l.jsx)(M.a,{})," "]}),Object(l.jsxs)("button",{onClick:function(t){var c;t.preventDefault(),!f.title&&r.title&&!f.score&&r.score&&!f.healthScore&&r.healthScore&&!f.instructions&&r.instructions&&!f.summary&&r.summary&&!f.readyInMinutes&&r.readyInMinutes&&r.diets.length?(e((c=r,function(){var e=Object(m.a)(Object(O.a)().mark((function e(t){var a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(E,"recipe"),c);case 3:return a=e.sent,e.abrupt("return",t({type:"CREATE_RECIPE",payload:a}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),g()({title:"Great!",text:"Recipe Created!",icon:"success",button:"Confirm"}),s(D)):g()({title:"Error",text:"Incorrect data, please try again!",icon:"warning",buttons:!0,dangerMode:!0})},className:"btn-create",children:[" ",Object(l.jsx)(T.a,{})," "]})]})]})})]})},G=c.p+"static/media/chef.a63deb79.png",L=(c(91),c(92),function(){return Object(l.jsx)("div",{className:"loadback"})});var A=function(e){var t=e.match.params.id,c=Object(p.b)(),n=Object(p.c)((function(e){return e.recipeById}));return Object(a.useEffect)((function(){c(function(e){return function(){var t=Object(m.a)(Object(O.a)().mark((function t(c){var a;return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get("".concat(E,"recipes/").concat(e));case 3:return a=t.sent,t.abrupt("return",c({type:N,payload:a.data}));case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",c({type:N,payload:[]}));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[c,t]),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"recipe-container",children:[Object(l.jsx)(o.b,{to:"/home",className:"link",children:Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"btn-search",children:"Home"})})}),n?Object(l.jsxs)("div",{className:"container-div",children:[Object(l.jsx)("div",{className:"divtitledetail",children:Object(l.jsx)("p",{className:"detail-title",children:n.title})}),Object(l.jsxs)("div",{className:"detail-container",children:[n.image?Object(l.jsx)("img",{src:n.image,alt:"not found1"}):Object(l.jsx)("img",{src:G,alt:"not found2"}),Object(l.jsxs)("div",{className:"detail-scores",children:[Object(l.jsx)("p",{className:"title",children:n.score&&"\u2b50Score: ".concat(n.score," Points")}),Object(l.jsx)("p",{className:"title",children:n.healthScore&&"\ud83c\udf4f HealthScore: ".concat(n.healthScore,"%")}),Object(l.jsxs)("p",{className:"title",children:["\ud83d\udd50 Time: ",n.readyInMinutes+" minutes"," "]})]}),Object(l.jsx)("div",{className:"detail-scores",children:n.diets&&n.diets.map((function(e){return Object(l.jsxs)("h5",{className:"h3",children:[" \ud83c\udf5c ",e," "]})}))}),Object(l.jsxs)("div",{className:"detail-recipe",children:[Object(l.jsx)("p",{children:n.summary&&"Summary:"}),Object(l.jsx)("div",{className:"detail-summary",children:Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:n.summary}})}),Object(l.jsx)("p",{children:n.instructions&&"Instructions:"}),Object(l.jsx)("div",{className:"detail-recipe",children:Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:n.instructions}})})]})]})]}):Object(l.jsx)(L,{children:" "})]})})},B=c(51),H=c(30),F=(c(93),function(e){for(var t=e.id,c=e.score,a=e.healthScore,n=e.image,r=e.title,s=e.diets,i=e.readyInMinutes,u=Object(p.b)(),j=[],d=[],b=[],h=[],f=10-Math.floor(c/10)-(c%10>0?1:0),v=10-Math.floor(a/10)-(a%10>0?1:0),g=0;g<Math.floor(c/10);g++)j.push(g);for(var y=0;y<Math.floor(a/10);y++)d.push(y);for(var N=0;N<f;N++)b.push(N);for(var S=0;S<v;S++)h.push(S);return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"divbutton",children:function(){if(t.toString().includes("-"))return Object(l.jsx)("button",{className:"buttonX",onClick:function(e){!function(e){e.preventDefault(),u(function(e){return function(){var t=Object(m.a)(Object(O.a)().mark((function t(c){return Object(O.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.delete("".concat(E,"recipe/").concat(e));case 3:if(!t.sent){t.next=6;break}return t.abrupt("return",c(I()));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}(e)},children:"x"})}()}),Object(l.jsxs)(o.b,{className:"link",to:"/recipes/".concat(t),children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("img",{src:n,alt:"not found"})}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("h6",{className:"titlec",children:r}),Object(l.jsx)("h4",{className:"card-diets",children:function(){var e=[];if(s){var t,c=Object(B.a)(s);try{for(c.s();!(t=c.n()).done;){var a=t.value;"object"===typeof a?e.push(a.title):e.push(a)}}catch(n){c.e(n)}finally{c.f()}}return e.length?e.join(","):"not found"}()})]}),Object(l.jsx)("div",{className:"card-stats",children:Object(l.jsxs)("div",{className:"stat2",children:[d.map((function(e){return Object(l.jsx)(H.b,{})})),a%10>0&&Object(l.jsx)(H.c,{}),h.map((function(e){return Object(l.jsx)(H.a,{})})),Object(l.jsxs)("p",{className:"text-stats",children:["  Health Score:  ",a]}),Object(l.jsxs)("p",{className:"text-stats",children:["\ud83d\udd50Time: ",i," minutes"]})]})})]})]})})});c(94);function V(e){for(var t=e.RecipesPerPag,c=e.allRecipes,a=e.pagination,n=e.CurrentPage,r=[],s=Math.ceil(c/t),i=1;i<=s;i++)r.push(i);return r.push(">"),n===s&&r.pop(),r.unshift("<"),1===n&&r.shift(),Object(l.jsx)("div",{className:"pagination2",children:r&&r.map((function(e){return Object(l.jsx)("div",{className:"number",children:Object(l.jsxs)("a",{onClick:function(){return a(e)},children:[e===n?Object(l.jsx)("p",{className:"currentNamber",children:e}):e," "]})},e)}))})}c(95);function W(){var e=Object(p.b)(),t=Object(a.useState)(""),c=Object(h.a)(t,2),n=c[0],r=c[1],s=Object(p.c)((function(e){return e.recipesByName}));return Object(l.jsxs)("div",{children:[Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0===s.length?e(R(!0)):e(R(!1)),e(_(n)),0===s.length?e(R(!0)):e(R(!1)),r("")},children:[Object(l.jsx)("input",{className:"input-search",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value),console.log(n)}(e)},type:"text",placeholder:"Search...",value:n}),Object(l.jsx)("button",{className:"btn-search",type:"submit",children:"\ud83d\udd0e"})]}),_(n)]})}function z(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.recipes})),c=Object(p.c)((function(e){return e.switchloading})),n=Object(a.useState)(1),r=Object(h.a)(n,2),s=r[0],i=r[1],u=Object(a.useState)(9),j=Object(h.a)(u,2),d=j[0],b=(j[1],s*d),f=b-d,v=t.slice(f,b),g=Object(a.useState)(""),y=Object(h.a)(g,2),N=(y[0],y[1]),S=Object(a.useState)(1),_=Object(h.a)(S,2),P=(_[0],_[1]);function T(t){var c;"All"===t.target.value?e(I()):e((c=t.target.value,function(){var e=Object(m.a)(Object(O.a)().mark((function e(t){var a;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(E,"types/").concat(c));case 3:return a=e.sent,e.abrupt("return",t({type:C,payload:a.data}));case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",t({type:C,payload:[]}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()))}function w(t){"all"===t.target.value?(t.preventDefault(),e(I())):"create"===t.target.value?(t.preventDefault(),e((function(e){x.a.get("".concat(E,"recipescreate")).then((function(t){return e({type:"GET_RECIPES_CREATE",payload:t.data})}))}))):"api"===t.target.value&&(t.preventDefault(),e((function(e){x.a.get("".concat(E,"recipesapi")).then((function(t){return e({type:"GET_RECIPES_API",payload:t.data})}))})))}return Object(a.useEffect)((function(){setTimeout((function(){e(I())}),2e3)}),[e]),Object(a.useEffect)((function(){i((function(e){return 1}))}),[t]),0===t.length?e(R(!0)):0!==t.length&&e(R(!1)),Object(l.jsxs)("div",{className:"wphome",children:[Object(l.jsxs)("div",{className:"upperbar",children:[Object(l.jsx)("div",{className:"divbuttonbar",children:Object(l.jsxs)("select",{className:"selec",onChange:function(t){return function(t){"default"===t.target.value?e(I()):(t.preventDefault(),e({type:"ORDER_RECIPE_BY_NAME",payload:t.target.value}),N("ordenado ".concat(t.target.value)),i((function(e){return 1})))}(t)},children:[Object(l.jsx)("option",{value:"default",children:"By name..."},"default"),Object(l.jsx)("option",{value:"az",children:"A-Z"},"az"),Object(l.jsx)("option",{value:"za",children:"Z-A"},"za")]})}),Object(l.jsx)("div",{className:"divbuttonbar",children:Object(l.jsxs)("select",{className:"selec",onChange:function(t){return function(t){"default"===t.target.value?e(I()):(t.preventDefault(),e({type:"ORDER_RECIPE_BY_HSCORE",payload:t.target.value}),P("ordenadopscore ".concat(t.target.value)),i((function(e){return 1})))}(t)},children:[Object(l.jsx)("option",{value:"default",children:"By score..."},"default"),Object(l.jsx)("option",{value:"best",children:"Best Score"},"best"),Object(l.jsx)("option",{value:"worst",children:"Worst Score"},"worst")]})}),Object(l.jsx)("div",{className:"createornotcreate",children:Object(l.jsxs)("select",{className:"selec",onChange:function(e){return w(e)},children:[Object(l.jsx)("option",{value:"all",children:"All"},"all"),Object(l.jsx)("option",{value:"create",children:"create"},"create"),Object(l.jsx)("option",{value:"api",children:"api"},"api")]})}),Object(l.jsx)("div",{className:"divbuttonbar",children:Object(l.jsxs)("select",{className:"selec",onChange:function(e){return T(e)},children:[Object(l.jsx)("option",{value:"All",children:"By diet..."},"All"),Object(l.jsx)("option",{value:"Gluten Free",children:"Gluten free"},"Gluten Free"),Object(l.jsx)("option",{value:"Ketogenic",children:"Ketogenic"},"Ketogenic"),Object(l.jsx)("option",{value:"Vegetarian",children:"Vegetarian"},"Vegetarian"),Object(l.jsx)("option",{value:"lacto ovo vegetarian",children:"lacto-Ovo-Vegetarian"},"lacto ovo vegetarian"),Object(l.jsx)("option",{value:"Vegan",children:"Vegan"},"Vegan"),Object(l.jsx)("option",{value:"Pescatarian",children:"Pescatarian"},"Pescatarian"),Object(l.jsx)("option",{value:"Paleo",children:"Paleo"},"Paleo"),Object(l.jsx)("option",{value:"Primal",children:"Primal"},"Primal"),Object(l.jsx)("option",{value:"fodmap friendly",children:"fodmap-friendly"},"fodmap friendly"),Object(l.jsx)("option",{value:"Whole 30",children:"Whole30"},"Whole 30")]})}),Object(l.jsx)("div",{className:"divbuttonbar",children:Object(l.jsx)("button",{className:"btn-search",onClick:function(t){!function(t){t.preventDefault(),e(I())}(t)},children:"Clean \ud83e\uddf9"})}),Object(l.jsx)("div",{className:"divbuttonbar",children:Object(l.jsx)(o.b,{to:"/recipe",className:"link",children:Object(l.jsx)("button",{className:"btn-search",children:"Create Recipe"})})}),Object(l.jsx)(W,{setCurrentPage:i})]}),Object(l.jsx)("div",{className:"divpag",children:!1!==c||Object(l.jsx)(V,{className:"pagination",RecipesPerPag:d,allRecipes:t.length,pagination:function(e){i("<"===e?s-1:">"===e?s+1:e)},CurrentPage:s})}),Object(l.jsx)("div",{className:"recipes-home",children:!0===c?Object(l.jsx)("div",{className:"loadd",children:Object(l.jsx)(L,{})}):v.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(F,{image:e.image,title:e.title,score:e.score,healthScore:e.healthScore,diets:e.diets,id:e.id,readyInMinutes:e.readyInMinutes})})}))})]})}var Y=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(i.a,{exact:!0,path:"/",component:u}),Object(l.jsx)(i.a,{exact:!0,path:"/home",component:z}),Object(l.jsx)(i.a,{exact:!0,path:"/recipe",component:k}),Object(l.jsx)(i.a,{exact:!0,path:"/recipes/:id",component:A})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,109)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))},X=c(29),$=c(52),q={recipes:[],recipesByName:[],recipeById:{},diets:[],dietTypes:[],switchloading:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RECIPES":case"GET_RECIPES_NAME":return Object(b.a)(Object(b.a)({},e),{},{recipes:t.payload});case"GET_RECIPES_ID":return Object(b.a)(Object(b.a)({},e),{},{recipeById:t.payload});case"GET_DIETS":return Object(b.a)(Object(b.a)({},e),{},{diets:t.payload});case"GET_RECIPES_FOR_DIET":return Object(b.a)(Object(b.a)({},e),{},{recipes:t.payload});case"ORDER_RECIPE_BY_NAME":"az"===t.payload?e.recipes.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:e.title.toLowerCase()<t.title.toLowerCase()?-1:0})):e.recipes.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?-1:e.title.toLowerCase()<t.title.toLowerCase()?1:0}));case"ORDER_RECIPE_BY_HSCORE":"worst"===t.payload?e.recipes.sort((function(e,t){return e.healthScore>t.healtScore?1:e.healthScore<t.healthScore?-1:0})):e.recipes.sort((function(e,t){return e.healthScore>t.healthScore?-1:e.healthScore<t.healthScore?1:0}));case"CREATE_RECIPES":return Object(b.a)({},e);case"GET_RECIPES_CREATE":case"GET_RECIPES_API":return Object(b.a)(Object(b.a)({},e),{},{recipes:t.payload});case"DELETE_RECIPES":return Object(b.a)({},e);case"SWICH_LOADING":return Object(b.a)(Object(b.a)({},e),{},{switchloading:t.payload});case"GET_DIET_TYPES":return Object(b.a)(Object(b.a)({},e),{},{dietTypes:t.payload});default:return e}},Z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.b,U=Object(X.c)(J,Z(Object(X.a)($.a)));s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(p.a,{store:U,children:Object(l.jsx)(Y,{})})})}),document.getElementById("root")),K()}},[[97,1,2]]]);
//# sourceMappingURL=main.5445f0ad.chunk.js.map