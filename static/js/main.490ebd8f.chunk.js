(this.webpackJsonpdrag=this.webpackJsonpdrag||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/gif.15925492.gif"},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),i=(a(14),a(15),a(1)),o=a(4),s=a(5),m=a(8),u=a(7),d=function(e){var t=Object(n.useState)(e.data),a=Object(i.a)(t,2),c=a[0],l=(a[1],function(e){var t=[];return e.map((function(e,a){var n=e.recipe.digest[0].total;t.push([n,a])})),e[t.sort((function(e,t){return t[0]-e[0]}))[0][1]]}(c).recipe),o=function(e){var t=[];return e.map((function(e,a){var n=e.recipe.digest[0].total,r=e.recipe.totalNutrients.SUGAR.quantity;t.push([[n+r],a])})),e[t.sort((function(e,t){return e[0]-t[0]}))[0][1]]}(c).recipe;console.log(o);var s=function(e,t){var a=100*e/t;return Math.round(100-a)}(o.digest[0].total,l.digest[0].total),m={backgroundImage:"url("+o.image+")"},u={backgroundImage:"url("+l.image+")"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"pic",style:m}),r.a.createElement("p",null,"HEALTHY"),r.a.createElement("div",{className:"cardText"},r.a.createElement("h2",null,o.label),r.a.createElement("button",null,r.a.createElement("a",{href:o.url},"See the recipe!"))),r.a.createElement("div",{className:"clip"}," ",r.a.createElement("h5",null,"This recipe contains",r.a.createElement("span",null," ",s,"%")," less trans and saturated fats."),r.a.createElement("button",null,r.a.createElement("a",{href:o.url},"See the recipe!")))),r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"pic",style:u}),r.a.createElement("p",null,"CONFORT"),r.a.createElement("div",{className:"cardText"},r.a.createElement("h2",null,l.label),r.a.createElement("button",null,r.a.createElement("a",{href:l.url},"See the recipe!"))))))},h=function(){return r.a.createElement("div",{className:"error"},r.a.createElement("h1",null,"Sorry no recipes with that ingredient!"),r.a.createElement("h6",null,"Try again!"))};var p=function(e){var t=Object(n.useState)(e.items),a=Object(i.a)(t,2),c=a[0];return a[1],r.a.createElement("div",null,c.length<1&&r.a.createElement(h,null),c.length&&r.a.createElement(d,{data:c}))},f=a(6),E=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[],isLoaded:!1,active:!1,query:e.props.query},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.edamam.com/search?q=".concat(this.state.query,"&app_id=cff280d4&app_key=226923e5aa91136747a00f1610faf59d&from=0&to=10&calories=591-722&health=alcohol-free")).then((function(e){return e.json()})).then((function(t){e.setState({items:t.hits,isLoaded:!0,active:!0})}))}},{key:"handleClick",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"transitions"},r.a.createElement("div",{className:"app"}),r.a.createElement("div",{className:"dos"}),!this.state.isLoaded&&r.a.createElement("img",{className:"loading",src:E.a,alt:"gif"}),this.state.active&&r.a.createElement(p,{items:this.state.items}),this.state.isLoaded&&r.a.createElement("button",{onClick:this.props.action,id:"goBack"},"Go back!"))}}]),a}(n.Component);var b=function(e){return r.a.createElement("div",{className:"landing-container"},r.a.createElement("div",{className:"photo-container"}),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",null,r.a.createElement("h1",null,"What\u2019s for dinner tonight?"),r.a.createElement("p",null,"Type the main ingredient, we\u2019ll show you two options: a healthy recipe and a confort one."))))};var g=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!0),s=Object(i.a)(o,2),m=s[0],u=s[1];return Object(n.useRef)(),r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(b,null),c&&r.a.createElement(v,{action:function(){l(""),u(!0)},query:c}),m&&r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"c-checkbox",type:"checkbox",id:"checkbox"}),r.a.createElement("div",{className:"c-formContainer"},r.a.createElement("form",{className:"c-form",onSubmit:function(e){var t;(t=e).preventDefault(),l(t.target.username.value),u(!1)}},r.a.createElement("input",{className:"c-form__input",placeholder:"type here",type:"text",name:"username"}),r.a.createElement("label",{className:"c-form__buttonLabel",htmlFor:"checkbox"},r.a.createElement("button",{className:"c-form__button",type:"submit"},"Go!")),r.a.createElement("label",{class:"c-form__toggle",htmlFor:"checkbox","data-title":"Type!"})))))};var y=function(e){return r.a.createElement("div",{className:"app-body"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.490ebd8f.chunk.js.map