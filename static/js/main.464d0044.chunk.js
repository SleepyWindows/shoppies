(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{15:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var i=n(0),s=n(1),o=n.n(s),a=n(9),c=n.n(a),r=(n(15),n(6)),l=n(2),u=n(3),h=n(5),d=n(4),m=function(t){return Object(i.jsxs)("div",{id:"search-bar-container",children:[Object(i.jsx)("h1",{id:"search-bar-header",children:"OMDB Database"}),Object(i.jsx)("div",{id:"search-input-box",children:Object(i.jsx)("input",{class:"search-input",showNoResults:!1,placeholder:"Search Movies...",onChange:function(e){t.updateSearchTerms(e.target)}})})]})},j=function(t){var e,n;return Object(i.jsxs)("div",{class:"result-container",children:[Object(i.jsxs)("div",{class:"result-content",children:[Object(i.jsx)("img",{class:"result-image",src:t.result.Poster}),Object(i.jsx)("h1",{class:"result-title",children:t.result.Title}),Object(i.jsx)("h1",{class:"result-year",children:t.result.Year})]}),(e=t.result,n=t.nominations,-1!==n.indexOf(e)?Object(i.jsx)("button",{class:"result-disabled-btn",disabled:!0,children:"Nominate"}):Object(i.jsx)("button",{class:"result-active-btn",disabled:!1,onClick:function(e){t.nominate(t.result)},children:"Nominate"}))]})};n(16).config();var b=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={searchTerms:null,results:[]},t.fetchSearchResults=function(){fetch("https://www.omdbapi.com/?apikey=7af78bf8&type=movie&s=".concat(t.state.searchTerms,"&page=1")).then((function(t){return t.json()})).then((function(e){"False"==e.Response?console.log(e.Error):t.setState({results:e.Search})}))},t.updateSearchTerms=function(e){t.setState({searchTerms:e.value},(function(){t.fetchSearchResults()}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)(m,{searchTerms:this.state.searchTerms,updateSearchTerms:this.updateSearchTerms}),Object(i.jsx)("div",{id:"search-result-parent",children:this.state.results.map((function(e,n){return Object(i.jsx)(j,{result:e,nominations:t.props.nominations,nominate:t.props.nominate},n)}))})]})}}]),n}(o.a.Component),f=function(t){return Object(i.jsxs)("div",{class:"nomination-container",children:[Object(i.jsx)("div",{class:"nomination-img-container",children:Object(i.jsx)("img",{src:t.result.Poster,alt:"Movie Poster"})}),Object(i.jsx)("button",{class:"nomination-remove-btn",onClick:function(){t.removeNomination(t.result)},children:"Remove"})]})},O=function(t){return Object(i.jsxs)("div",{class:"nomination-list-container",children:[Object(i.jsx)("p",{id:"nomination-list-header",children:"Your Nominations"}),t.nominations.map((function(e){return Object(i.jsx)(f,{result:e,nominations:t.nominations,removeNomination:t.removeNomination})}))]})},v=n.p+"static/media/banner-03.6600e5a8.png",p=(n(19),function(t){return console.log(t),Object(i.jsx)("div",{class:"banner-wrapper",children:Object(i.jsxs)("div",{id:"finished-banner",children:[Object(i.jsx)("h1",{id:"finished-text",children:"Finished!"}),Object(i.jsx)("div",{id:"finished-nominations",children:t.nominations.map((function(e){return Object(i.jsx)(f,{result:e,removeNomination:t.removeNomination})}))})]})})}),x=n.p+"static/media/symbol-01.78652249.png",g=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={results:null,isLoading:!0,nominations:[],searchTerms:"Love",toggle:!1,finishedVisible:!1},t.toggle=function(){t.setState({toggle:!t.state.toggle})},t.nominate=function(e){4===t.state.nominations.length?t.setState((function(t){return{finishedVisible:!0,nominations:[].concat(Object(r.a)(t.nominations),[e])}})):5===t.state.nominations.length?console.log("No additional nominations allowed"):t.setState((function(t){return{nominations:[].concat(Object(r.a)(t.nominations),[e])}}))},t.removeNomination=function(e){var n=Object(r.a)(t.state.nominations),i=n.indexOf(e);-1!==i&&(n.splice(i,1),t.setState({nominations:n,finishedVisible:!1}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{children:this.state.isLoading?Object(i.jsx)("div",{children:Object(i.jsx)("p",{id:"loading-text",children:"Loading"})}):Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{id:"selection-list-btn",onClick:function(){t.toggle()},children:Object(i.jsx)("img",{id:"selection-symbol",src:x})}),Object(i.jsx)("img",{src:v,id:"banner"}),this.state.finishedVisible?Object(i.jsx)(p,{nominations:this.state.nominations,removeNomination:this.removeNomination}):null,Object(i.jsx)(b,{nominate:this.nominate,nominations:this.state.nominations,fetchSearchResults:this.fetchSearchResults}),this.state.toggle?Object(i.jsx)(O,{removeNomination:this.removeNomination,nominations:this.state.nominations}):null]})})}},{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.setState({isLoading:!t.state.isLoading})}),2e3)}}]),n}(o.a.Component),S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),o(t),a(t)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),S()}},[[20,1,2]]]);
//# sourceMappingURL=main.464d0044.chunk.js.map