(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{226:function(e,n,a){},228:function(e,n,a){},230:function(e,n,a){},237:function(e,n,a){"use strict";a.r(n);var t=a(15),i=a(16),l=a(18),o=a(17),r=a(19),c=a(0),u=a.n(c),s=a(226),m=a.n(s),d=a(5),p=a(228),f=a.n(p),h=a(23),g=a(230),v=a.n(g),b=a(83),y=a(81),w=function(e){var n=null,a=[v.a.inputpass,v.a.inputemail];switch(e.invalid&&e.isTouched&&a.push(v.a.Invalid),e.elementType){case"input":n=u.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;default:n=null}return u.a.createElement(h.a,null,u.a.createElement("span",{className:v.a.welcome},u.a.createElement(y.e,{className:v.a.welcomeIcon})),u.a.createElement(b.c,{className:v.a.loginIcon}),u.a.createElement("span",{className:v.a.inputfocus}),n,u.a.createElement(b.b,{className:v.a.loginKey}),u.a.createElement("span",{className:v.a.inputfocuspass}))},E=a(24),j=a(20),O=a(1),N=a(91),k=function(e){function n(){var e,a;Object(t.a)(this,n);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(n)).call.apply(e,[this].concat(r)))).state={loginForm:{email:{elementType:"input",elementConfig:{placeholder:"Your email",type:"email"},value:"",validation:{required:!0,contains:"@"},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{placeholder:"Your password",type:"password"},value:"",validation:{required:!0,minLength:5},valid:!1,touched:!1}},formValid:!1},a.inputChangeHandler=function(e,n){n.preventDefault();var t=Object(d.a)({},a.state.loginForm),i=Object(d.a)({},t[e]);i.value=n.target.value,i.valid=a.checkValidity(i.value,i.validation),t[e]=i,i.touched=!0;var l=!0;for(var o in t)l=t[o].valid&&l;a.setState({loginForm:t,formValid:l})},a.submitHandler=function(e){if(e.preventDefault(),a.props.loading)return u.a.createElement(N.Loader,{className:f.a.loader,type:"Puff",color:"#fff",height:"200",width:"200"});setTimeout(function(){a.props.onAuthFetch(a.state.loginForm.email.value,a.state.loginForm.password.value),a.setState(function(e){return e.loginForm.email.value="",e.loginForm.password.value=""})},1e3),setTimeout(function(){window.location.href="http://localhost:3000/"},1500)},a}return Object(r.a)(n,e),Object(i.a)(n,[{key:"checkValidity",value:function(e,n){var a=!0;return n.required&&(a=""!==e.trim()&&a),n.minLength&&(a=e.length>=n.minLength&&a),n.contains&&(a=e.includes(n.contains)&&a),a}},{key:"render",value:function(){var e=this,n=[];for(var a in this.state.loginForm)n.push({id:a,config:this.state.loginForm[a]});return u.a.createElement(h.a,null,u.a.createElement("div",{className:f.a.LoginComp},u.a.createElement("form",{className:f.a.LoginForm,onSubmit:this.submitHandler},u.a.createElement("h2",{className:f.a.loginHeader},"Login"),n.map(function(n){return u.a.createElement(w,{isTouched:n.config.touched,invalid:!n.config.valid,key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,changed:function(a){return e.inputChangeHandler(n.id,a)}})}),u.a.createElement("button",{disabled:!this.state.formValid,className:f.a.loginbtn},u.a.createElement("span",{className:f.a.loginspan},null!==this.props.token?"Loagout":"Login")))))}}]),n}(c.Component),C=Object(j.b)(function(e){return{token:e.auth.token,loading:e.auth.loading,error:e.auth.error}},function(e){return{onAuthFetch:function(n,a){return e(E.a(n,a))}}})(Object(O.f)(k)),F=function(e){function n(){return Object(t.a)(this,n),Object(l.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(r.a)(n,e),Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return e.children!==n.children}},{key:"render",value:function(){return u.a.createElement("div",{className:m.a.Login},u.a.createElement(C,null))}}]),n}(c.Component);n.default=F}}]);
//# sourceMappingURL=13.ebb06bb8.chunk.js.map