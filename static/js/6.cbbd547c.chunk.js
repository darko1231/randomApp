(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{111:function(e,t,a){},113:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(16),c=a(18),u=a(17),i=a(19),s=a(0),r=a.n(s),l=a(111),d=a.n(l),m=a(113),p=a.n(m),f=function(e){return r.a.createElement("div",{className:p.a.YoutubeComp},r.a.createElement("iframe",{title:"Youtube",className:p.a.dare,src:e.url,allowFullScreen:"allowfullscreen",allow:"autoplay",frameBorder:"0"}))},b=a(83),y=a(7),h=a.n(y),k=a(1),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={fetchedVideos:[],youtubeExist:!1},a.clicking=function(){a.props.history.goBack()},a.care=function(e){h.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat("a1e70815ed514d294dc936b2f74a2ef3","&language=pt-BR&append_to_response=credits,release_dates,videos")).then(function(e){var t=[],n=e;n.data.videos.results.map(function(e){return n.youtube=e}),n.youtubeFull="https://www.youtube.com/embed/"+n.youtube.key,t.push(n),a.setState({fetchedVideos:t,youtubeExist:!t[0].data.video})}).catch(function(e){console.log(e)})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.youtubeExist!==t.youtubeExist}},{key:"componentDidMount",value:function(){this.care(this.props.match.params.imdId)}},{key:"render",value:function(){var e=this;return this.state.youtubeExist?r.a.createElement("div",{onClick:function(){return e.clicking()},className:d.a.Youtube},this.state.fetchedVideos.map(function(e){return r.a.createElement(f,{key:e,url:e.youtubeFull})}),r.a.createElement(b.a,{onClick:function(){return e.clicking.bind(e)},className:d.a.icon})):r.a.createElement("div",{onClick:function(){return e.clicking()},className:d.a.Youtube},r.a.createElement("p",{className:d.a.youtubeNotExisting},"404",r.a.createElement("span",{className:d.a.youtspan},"Your youtube link does not exist. Please visit our site.")),r.a.createElement(b.a,{onClick:function(){return e.clicking.bind(e)},className:d.a.icon}))}}]),t}(s.Component);t.default=Object(k.f)(v)}}]);
//# sourceMappingURL=6.cbbd547c.chunk.js.map