(this.webpackJsonpbooqedtest=this.webpackJsonpbooqedtest||[]).push([[0],{143:function(t,e,a){t.exports=a(279)},279:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(31),c=a.n(s),o=a(16),i=a.n(o),u=a(23),l=a(25),h=a(26),p=a(28),m=a(27),v=(a(149),a(124)),d=a.n(v).a.create({baseURL:"https://api.github.com"}),k=a(290),f=(a(95),function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={term:""},t.onFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.term,1)},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement(k.a,{as:"h1"},r.a.createElement("span",{className:"search-text text-green"},"Le Github Candidate ",r.a.createElement("span",{className:"text-orange"},"Analyzer"))),r.a.createElement("input",{value:this.state.term,onChange:function(e){return t.setState({term:e.target.value})},type:"text"}))))}}]),a}(r.a.Component)),b=a(286),w=a(288),E=a(287),S=a(40),g=function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){switch(this.props.currentStatus){case!0:return r.a.createElement(S.a,{name:"checkmark",color:"green"});case!1:return r.a.createElement(S.a,{name:"close",color:"red"});default:return r.a.createElement(S.a,{disabled:!0,name:"checkmark"})}}}]),a}(r.a.Component),C=function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={knowsJavaScript:null,knowsReact:null,knowsReactNative:null,usesTests:null,networkError:!1,buttonColor:"orange"},t.onButtonClick=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.reactCheck();case 2:return e.next=4,t.reactNativeCheck();case 4:return e.next=6,t.javaScriptCheck();case 6:return e.next=8,t.testsUsageCheck();case 8:return e.next=10,t.buttonColorUpdate();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(h.a)(a,[{key:"reactCheck",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/search/code",{params:{q:"".concat("import React from 'react';","+user:").concat(this.props.candidate.login)}});case 3:(e=t.sent).data&&(e.data.total_count>1?this.setState({knowsReact:!0,knowsJavaScript:!0}):this.setState({knowsReact:!1})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState({networkError:!0});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"reactNativeCheck",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/search/code",{params:{q:"".concat("react-native","+user:").concat(this.props.candidate.login)}});case 3:(e=t.sent).data&&(e.data.total_count>1?this.setState({knowsReactNative:!0,knowsJavaScript:!0}):this.setState({knowsReactNative:!1})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState({networkError:!0});case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"javaScriptCheck",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.state.knowsJavaScript){t.next=11;break}return t.prev=1,t.next=4,d.get("/search/code",{params:{q:"".concat("() =>","+user:").concat(this.props.candidate.login)}});case 4:(e=t.sent).data&&(e.data.total_count>1?this.setState({knowsJavaScript:!0}):this.setState({knowsJavaScript:!1})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.setState({networkError:!0});case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"testsUsageCheck",value:function(){var t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.knowsJavaScript){t.next=13;break}return t.prev=1,t.next=4,d.get("/search/code",{params:{q:"".concat("shallow","+user:").concat(this.props.candidate.login)}});case 4:(e=t.sent).data&&(e.data.total_count>1?this.setState({usesTests:!0}):this.setState({usesTests:!1})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.setState({networkError:!0});case 11:t.next=14;break;case 13:this.state.networkError||this.setState({usesTests:!1});case 14:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"buttonColorUpdate",value:function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.state.knowsJavaScript&&this.state.knowsReact&&this.state.knowsReactNative&&this.state.usesTests?this.setState({buttonColor:"green"}):this.state.knowsJavaScript||this.state.knowsReact||this.state.knowsReactNative||this.state.usesTests?this.setState({buttonColor:"yellow"}):this.setState({buttonColor:"red"});case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.props.candidate,e=t.avatar_url,a=t.login,n=t.html_url;return r.a.createElement(b.a,null,r.a.createElement(b.a.Image,{size:"tiny",src:e}),r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a),this.state.networkError?r.a.createElement("span",{className:"text-red"},"\xa0(Error: couldn't load data)"):null),r.a.createElement(w.a,{celled:!0,structured:!0},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,"JavaScript"),r.a.createElement(w.a.Cell,null,"React"),r.a.createElement(w.a.Cell,null,"React Native"),r.a.createElement(w.a.Cell,null,"Uses Tests")),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsJavaScript})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsReact})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsReactNative})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.usesTests})))))),r.a.createElement(E.a,{color:this.state.buttonColor,onClick:this.onButtonClick},"Analyze"))}}]),a}(r.a.Component),y=function(t){var e=t.candidates.map((function(t){return r.a.createElement(C,{key:t.id,candidate:t})}));return r.a.createElement(b.a.Group,null,e)},x=a(284),j=a(289),O=a(285),R=function(t){Object(p.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={candidates:[],loading:!1,pageNumber:1,pageAmount:0,searchTerm:""},t.onSearchSubmit=function(){var e=Object(u.a)(i.a.mark((function e(a,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,searchTerm:a,pageNumber:n}),e.prev=1,e.next=4,d.get("/search/users",{params:{q:a,page:n}});case 4:(r=e.sent).data&&t.setState({candidates:r.data.items,loading:!1,pageAmount:Math.round(r.data.total_count/30)}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1}),alert("Couldn't connect to Github API! Try again later");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),t}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(f,{onSubmit:this.onSearchSubmit}),this.state.loading?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(O.a,{inverted:!0},"Loading Profiles")):r.a.createElement(y,{candidates:this.state.candidates}))}}]),a}(r.a.Component);c.a.render(r.a.createElement(R,null),document.querySelector("#root"))},95:function(t,e,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.10a5de25.chunk.js.map