(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{222:function(e,a,t){},224:function(e,a,t){},241:function(e,a,t){"use strict";t.r(a);var r=t(15),n=t(16),o=t(18),i=t(17),s=t(19),c=t(0),p=t.n(c),d=t(222),l=t.n(d),u=t(224),m=t.n(u),h=t(23),k=t(83),g=function(e){return p.a.createElement(h.a,null,p.a.createElement("div",{className:m.a.SortedByComp},p.a.createElement("div",{className:m.a.SortedByDetail,onClick:e.clicked,key:e.id,style:{background:" linear-gradient(20deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0) 70%) no-repeat center bottom , url(".concat(e.image,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},p.a.createElement(k.d,{className:m.a.realicon})),p.a.createElement("span",{className:m.a.sale},"HD"),p.a.createElement("h3",{className:m.a.sortedHeaderc},p.a.createElement("span",{className:m.a.spanc},e.name))))},f=t(24),v=t(20),S=t(94),y=t(1),E=t(80),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={sorted:[{name:"Action"}],totalResults:5065,currentPage:1},t.clickedMovie=function(e){t.props.history.push("/movie/"+e)},t}return Object(s.a)(a,e),Object(n.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return e.onSorted!==a.onSorted&&e.sorted!==a.sorted&&e.daki!==a.daki}},{key:"componentDidMount",value:function(){"action"===this.props.daki?this.actionSearch():"horror"===this.props.daki?this.horrorSearch():"comedy"===this.props.daki?this.props.onSorted(1,35):"crime"===this.props.daki?this.props.onSorted(1,80):"fantasy"===this.props.daki?this.props.onSorted(1,10751):"romance"===this.props.daki?this.props.onSorted(1,10749):"adventure"===this.props.daki?this.props.onSorted(1,12):"drama"===this.props.daki&&this.props.onSorted(1,18)}},{key:"actionSearch",value:function(){this.props.onSorted(1,28)}},{key:"horrorSearch",value:function(){this.props.onSorted(1,27)}},{key:"nextPage",value:function(e){var a=this;E.animateScroll.scrollTo(-2e3,{smooth:!0,duration:700}),setTimeout(function(){"action"===a.props.daki?a.props.onSorted(e,28):"horror"===a.props.daki?a.props.onSorted(e,27):"comedy"===a.props.daki?a.props.onSorted(e,35):"crime"===a.props.daki?a.props.onSorted(e,80):"fantasy"===a.props.daki?a.props.onSorted(e,10751):"romance"===a.props.daki?a.props.onSorted(e,10749):"adventure"===a.props.daki?a.props.onSorted(e,12):"drama"===a.props.daki&&a.props.onSorted(e,18)},700),this.setState({currentPage:e})}},{key:"titleChange",value:function(){return"horror"===this.props.daki?"Horror":"action"===this.props.daki?"Action":"comedy"===this.props.daki?"Comedy":"crime"===this.props.daki?"Crime":"fantasy"===this.props.daki?"Fantasy":"romance"===this.props.daki?"Romance":"adventure"===this.props.daki?"Adventure":"drama"===this.props.daki?"Drama":void 0}},{key:"render",value:function(){var e=this,a=Math.floor(8.75);return p.a.createElement("div",{className:l.a.behind,key:this.props.id},p.a.createElement("h2",{className:l.a.hed},this.titleChange()),p.a.createElement("div",{className:l.a.SortedBy},this.props.sorted.map(function(a){return p.a.createElement(g,{key:a.id,clicked:function(){return e.clickedMovie(a.id)},id:a.id,hd:a.hd,name:a.title,image:a.imageCreate})})),this.state.totalResults>16?p.a.createElement(S.a,{className:l.a.pag,pages:a,nextPage:this.nextPage.bind(this),currentPage:this.state.currentPage}):"")}}]),a}(c.Component);a.default=Object(v.b)(function(e){return{sorted:e.sorted.sorted,loading:e.sorted.loading,error:e.sorted.error}},function(e){return{onSorted:function(a,t){return e(f.g(a,t))}}})(Object(y.f)(p.a.memo(b),[]))},94:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(95),i=t.n(o);a.a=function(e){for(var a=[],t=function(t){var r=e.currentPage===t?"".concat(i.a.selected):"";a.push(n.a.createElement("li",{key:t,className:"".concat(i.a.paginationitem," ").concat(r)},n.a.createElement("a",{href:function(){return!1},onClick:function(){return e.nextPage(t)},className:i.a.paginationlink},t)))},r=1;r<=e.pages+1;r++)t(r);return n.a.createElement("div",{className:i.a.paginationcontainer,"data-wow-duration":"0.5s"},n.a.createElement("ul",{className:i.a.pagination},e.currentPage>1?n.a.createElement("li",{className:i.a.paginationitem,onClick:function(){return e.nextPage(e.currentPage-1)}},n.a.createElement("a",{href:function(){return!1},className:i.a.paginationlink},"prev")):"",a,e.currentPage<e.pages+1?n.a.createElement("li",{className:i.a.paginationitem,onClick:function(){return e.nextPage(e.currentPage+1)}},n.a.createElement("a",{href:function(){return!1},className:i.a.paginationlink},"Next")):""))}},95:function(e,a,t){}}]);
//# sourceMappingURL=12.3d4ba81a.chunk.js.map