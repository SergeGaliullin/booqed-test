(this.webpackJsonpbooqedtest=this.webpackJsonpbooqedtest||[]).push([[0],{143:function(e,t,a){e.exports=a(279)},279:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),o=a(16),i=a.n(o),u=a(23),l=a(25),h=a(26),p=a(28),m=a(27),v=(a(149),a(124)),d=a.n(v).a.create({baseURL:"https://api.github.com",headers:{Authorization:"Token 1dc5aa9e8d06c1ade2befc9e443f3de9532d4937"}}),k=a(290),f=(a(95),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term,1)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement(k.a,{as:"h1"},r.a.createElement("span",{className:"search-text text-green"},"Le Github Candidate ",r.a.createElement("span",{className:"text-orange"},"Analyzer"))),r.a.createElement("input",{value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})},type:"text"}))))}}]),a}(r.a.Component)),b=a(286),w=a(288),S=a(287),E=a(40),g=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){switch(this.props.currentStatus){case!0:return r.a.createElement(E.a,{name:"checkmark",color:"green"});case!1:return r.a.createElement(E.a,{name:"close",color:"red"});default:return r.a.createElement(E.a,{disabled:!0,name:"checkmark"})}}}]),a}(r.a.Component),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={knowsJavaScript:null,knowsReact:null,knowsReactNative:null,usesTests:null,networkError:!1,buttonColor:"orange"},e.onButtonClick=function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.reactCheck();case 2:return t.next=4,e.reactNativeCheck();case 4:return t.next=6,e.javaScriptCheck();case 6:return t.next=8,e.testsUsageCheck();case 8:return t.next=10,e.buttonColorUpdate();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"reactCheck",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/search/code",{params:{q:"".concat("import React from 'react';","+user:").concat(this.props.candidate.login)}});case 3:(t=e.sent).data&&(t.data.total_count>1?this.setState({knowsReact:!0,knowsJavaScript:!0}):this.setState({knowsReact:!1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({networkError:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"reactNativeCheck",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/search/code",{params:{q:"".concat("react-native","+user:").concat(this.props.candidate.login)}});case 3:(t=e.sent).data&&(t.data.total_count>1?this.setState({knowsReactNative:!0,knowsJavaScript:!0}):this.setState({knowsReactNative:!1})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({networkError:!0});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"javaScriptCheck",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.knowsJavaScript){e.next=11;break}return e.prev=1,e.next=4,d.get("/search/code",{params:{q:"".concat("() =>","+user:").concat(this.props.candidate.login)}});case 4:(t=e.sent).data&&(t.data.total_count>1?this.setState({knowsJavaScript:!0}):this.setState({knowsJavaScript:!1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({networkError:!0});case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"testsUsageCheck",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.knowsJavaScript){e.next=13;break}return e.prev=1,e.next=4,d.get("/search/code",{params:{q:"".concat("shallow","+user:").concat(this.props.candidate.login)}});case 4:(t=e.sent).data&&(t.data.total_count>1?this.setState({usesTests:!0}):this.setState({usesTests:!1})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),this.setState({networkError:!0});case 11:e.next=14;break;case 13:this.state.networkError||this.setState({usesTests:!1});case 14:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"buttonColorUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.knowsJavaScript&&this.state.knowsReact&&this.state.knowsReactNative&&this.state.usesTests?this.setState({buttonColor:"green"}):this.state.knowsJavaScript||this.state.knowsReact||this.state.knowsReactNative||this.state.usesTests?this.setState({buttonColor:"yellow"}):this.setState({buttonColor:"red"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.candidate,t=e.avatar_url,a=e.login,n=e.html_url;return r.a.createElement(b.a,null,r.a.createElement(b.a.Image,{size:"tiny",src:t}),r.a.createElement(b.a.Content,null,r.a.createElement(b.a.Header,null,r.a.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener"},a)),r.a.createElement(w.a,{celled:!0,structured:!0},r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,"JavaScript"),r.a.createElement(w.a.Cell,null,"React"),r.a.createElement(w.a.Cell,null,"React Native"),r.a.createElement(w.a.Cell,null,"Uses Tests")),r.a.createElement(w.a.Row,null,r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsJavaScript})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsReact})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.knowsReactNative})),r.a.createElement(w.a.Cell,null,r.a.createElement(g,{currentStatus:this.state.usesTests})))))),r.a.createElement(S.a,{color:this.state.buttonColor,onClick:this.onButtonClick},"Analyze"))}}]),a}(r.a.Component),y=function(e){var t=e.candidates.map((function(e){return r.a.createElement(C,{key:e.id,candidate:e})}));return r.a.createElement(b.a.Group,null,t)},x=a(284),j=a(289),O=a(285),R=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={candidates:[],loading:!1,pageNumber:1,pageAmount:0,searchTerm:""},e.onSearchSubmit=function(){var t=Object(u.a)(i.a.mark((function t(a,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,searchTerm:a,pageNumber:n}),t.prev=1,t.next=4,d.get("/search/users",{params:{q:a,page:n}});case 4:(r=t.sent).data&&e.setState({candidates:r.data.items,loading:!1,pageAmount:Math.round(r.data.total_count/30)}),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,null,r.a.createElement(f,{onSubmit:this.onSearchSubmit}),this.state.loading?r.a.createElement(j.a,{active:!0,inverted:!0},r.a.createElement(O.a,{inverted:!0},"Loading Profiles")):r.a.createElement(y,{candidates:this.state.candidates}))}}]),a}(r.a.Component);s.a.render(r.a.createElement(R,null),document.querySelector("#root"))},95:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.d1882fc4.chunk.js.map