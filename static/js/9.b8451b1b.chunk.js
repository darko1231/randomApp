(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{167:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){e.exports=a.p+"static/media/pexels-photo-908283.6cba59a6.jpeg"},239:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(16),i=a(18),r=a(17),c=a(19),s=a(0),l=a.n(s),u=a(23),m=a(167),p=a.n(m),v=a(169),g=a.n(v),d=a(110),h=a(171),f=a.n(h),k=Object(d.a)(function(e){return l.a.createElement(u.a,null,l.a.createElement("div",{className:g.a.moviecomp,onClick:e.clicked},l.a.createElement("div",{className:g.a.movieCompDetail,key:e.id,onClick:e.click,style:{backgroundImage:"url(".concat(e.image,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",opacity:"1",transition:"all .5s",backgroundPosition:"center",":hover":{backgroundImage:"url(".concat(f.a,")"),transition:"all .5s"}}},l.a.createElement("h2",{className:g.a.heading2},e.title),l.a.createElement("h3",{className:g.a.heading3},e.bioskop),l.a.createElement("div",{className:g.a.rating},l.a.createElement("i",{className:"icon far fa-star"},l.a.createElement("span",{className:g.a.number},e.rev))))))}),E=a(24),b=a(20),P=a(94),N=a(91),y=a.n(N),w=a(1),M=a(76),j=a.n(M),O=a(80),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={totalResults:432372,currentPage:1,selectedId:null},a.scrollPage=function(){O.animateScroll.scrollTo(1e3,{smooth:!0,duration:700})},a.nextPage=function(e){O.animateScroll.scrollTo("regular"===a.props.movie?1e3:0,{smooth:!0,duration:700}),setTimeout(function(){"regular"===a.props.movie?a.props.onMoviesFetch(e):"most-watched"===a.props.movie?a.props.onMoviesPopular(e):"upcoming-movies"===a.props.movie&&a.props.onMoviesUpcoming(e)},1e3),a.setState({currentPage:e})},a.dataHandler=function(e,t){a.setState({selectedId:e})},a.historyPush=function(e){O.animateScroll.scrollTo(-2e3,{smooth:!0,duration:700}),setTimeout(function(){a.props.history.push("/movie/"+e),a.props.history.location.hash=e},500)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.movie!==t.movie}},{key:"componentDidMount",value:function(){"most-watched"===this.props.movie?this.props.onMoviesPopular(1):"regular"===this.props.movie?this.props.onMoviesFetch(1):"new-movies"===this.props.movie?this.props.onMoviesLatest(1):"upcoming-movies"===this.props.movie&&this.props.onMoviesUpcoming(1),this.setState({totalResults:432372})}},{key:"render",value:function(){var e=this,t=l.a.createElement(y.a,{className:p.a.loader,type:"Audio",color:"#fff",height:200,width:200}),a=Math.floor(9.375);return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:p.a.movie},l.a.createElement("div",{className:p.a.correct},this.props.loading?t:null,this.props.movies.map(function(t,a){return l.a.createElement(j.a,{key:a,animateIn:"fadeIn",offset:100,duration:1,animateOnce:"regular"===e.props.movie},l.a.createElement(k,{click:function(){return e.historyPush(t.id)},clicked:function(){return e.dataHandler(t.id,t)},id:t.id,image:t.imageCreate,title:t.title,bioskop:"/ "+t.release_date,rev:t.vote_average}))}))),")",this.state.totalResults>16?l.a.createElement(P.a,{y:"regular"===this.props.movie?800:0,className:p.a.pag,pages:a,nextPage:this.nextPage.bind(this),currentPage:this.state.currentPage}):"",";"))}}]),t}(s.Component);t.default=Object(b.b)(function(e){return{movies:e.movie.movies,loading:e.movie.loading,error:e.movie.error}},function(e){return{onMoviesFetch:function(t){return e(E.d(t))},onMoviesPopular:function(t){return e(E.e(t))},onMoviesUpcoming:function(t){return e(E.f(t))}}})(Object(d.a)(Object(w.f)(x)))},94:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(95),r=a.n(i);t.a=function(e){for(var t=[],a=function(a){var n=e.currentPage===a?"".concat(r.a.selected):"";t.push(o.a.createElement("li",{key:a,className:"".concat(r.a.paginationitem," ").concat(n)},o.a.createElement("a",{href:function(){return!1},onClick:function(){return e.nextPage(a)},className:r.a.paginationlink},a)))},n=1;n<=e.pages+1;n++)a(n);return o.a.createElement("div",{className:r.a.paginationcontainer,"data-wow-duration":"0.5s"},o.a.createElement("ul",{className:r.a.pagination},e.currentPage>1?o.a.createElement("li",{className:r.a.paginationitem,onClick:function(){return e.nextPage(e.currentPage-1)}},o.a.createElement("a",{href:function(){return!1},className:r.a.paginationlink},"prev")):"",t,e.currentPage<e.pages+1?o.a.createElement("li",{className:r.a.paginationitem,onClick:function(){return e.nextPage(e.currentPage+1)}},o.a.createElement("a",{href:function(){return!1},className:r.a.paginationlink},"Next")):""))}},95:function(e,t,a){}}]);
//# sourceMappingURL=9.b8451b1b.chunk.js.map