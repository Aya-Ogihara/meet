(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(13),c=n.n(o),s=(n(31),n(2)),i=n.n(s),l=n(8),u=n(4),d=n(7),h=n(6),f=n(5),p=(n(33),n(34),n(27)),v=n(14),m=n.n(v),b=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}}],j=n(9),g=n.n(j),w=n(25),O=function(e){var t=e.map((function(e){return e.location}));return Object(p.a)(new Set(t))},x=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e;window.history.pushState&&window.location.pathname?(e=window.location.protocol+"//"+window.location.host+window.location.pathname,window.history.pushState("","",e)):(e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e))},k=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://04nsfbykbc.execute-api.ap-southeast-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return g.a.done(),e.abrupt("return",b);case 4:if(navigator.onLine){e.next=10;break}return t=localStorage.getItem("lastEvents"),g.a.done(),console.log(w.nativeTouchData),console.log(t),e.abrupt("return",t?JSON.parse(t).events:[]);case 10:return e.next=12,N();case 12:if(!(n=e.sent)){e.next=22;break}return y(),a="https://04nsfbykbc.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-events/".concat(n),e.next=18,m.a.get(a);case 18:return(r=e.sent).data&&(o=O(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),g.a.done(),e.abrupt("return",r.data.events);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,x(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,m.a.get("https://04nsfbykbc.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&k(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=n(0),E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontSize:a.fontSize}},a.color=null,a.fontSize="14px",a}return Object(d.a)(n,[{key:"render",value:function(){return Object(T.jsx)("div",{className:"Alert",children:Object(T.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),W=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(E),Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(E),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,fontSize:"20px"}},a.color="orange",a}return n}(E),I=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.collapsed;return Object(T.jsxs)("div",{className:"event",children:[Object(T.jsx)("h2",{className:"event-summary",children:t.summary}),Object(T.jsxs)("p",{className:"event-location",children:["Location: ",t.location]}),Object(T.jsxs)("p",{className:"event-date event-time-zone",children:["Date: ",t.start.dateTime," (",t.start.timeZone," Time)"]}),Object(T.jsx)("button",{className:"toggle-btn",onClick:function(){return e.handleClick()},children:n?"More details":"Hide details"}),n?Object(T.jsx)("div",{className:"event-detail--hide"}):Object(T.jsxs)("div",{className:"event-detail--show",children:[Object(T.jsx)("h3",{className:"event-description-title",children:"Event description"}),Object(T.jsx)("p",{className:"event-description",children:t.description}),Object(T.jsx)("h4",{className:"event-organizer",children:"Organizer"}),Object(T.jsx)("p",{children:t.organizer.email})]})]})}}]),n}(a.Component),A=I,L=function(e){var t=e.events;return Object(T.jsx)("div",{className:"events-wrapper",children:Object(T.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(T.jsx)("li",{children:Object(T.jsx)(A,{event:e})},e.id)}))})})},M=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"There is no upcoming event in the city you entered. Please try another city."})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:"city-search",children:[Object(T.jsx)(W,{text:this.state.infoText}),Object(T.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search for a city"}),Object(T.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(T.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(T.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(T.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),q=M,z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{className:"number-of-events",children:[Object(T.jsx)("label",{children:"Number of Events to Display: "}),Object(T.jsx)("input",{type:"text",value:this.props.numberOfEvents,className:"number-of-event",onChange:function(t){return e.props.updateNumberOfEvents(t)}})]})}}]),n}(a.Component);n(54);var J=function(e){return e.showWelcomeScreen?Object(T.jsx)("div",{className:"WelcomeScreen",children:Object(T.jsxs)("div",{className:"body-wrapper",children:[Object(T.jsx)("h1",{children:"Welcome to the Meet app"}),Object(T.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(T.jsx)("div",{className:"button_cont",align:"center",children:Object(T.jsxs)("div",{class:"google-btn",children:[Object(T.jsx)("div",{class:"google-icon-wrapper",children:Object(T.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(T.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(T.jsx)("b",{children:"Sign in with google"})}),"Page 1"]})}),Object(T.jsx)("a",{href:"https://aya-ogihara.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]})}):null},U=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,selectedLocation:"all",errorInfo:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){S().then((function(a){var r=("all"===t?a:a.filter((function(e){return e.location===t}))).slice(0,n);e.setState({events:r,selectedLocation:t})}))},e.updateNumberOfEvents=function(){var t=Object(l.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((a=n.target.value)<0||a>=32)){t.next=6;break}return t.next=4,e.setState({errorInfo:"Please enter 1 - 32"});case 4:t.next=9;break;case 6:return t.next=8,e.setState({numberOfEvents:a,errorInfo:""});case 8:e.updateEvents(e.state.selectedLocation,e.state.numberOfEvents);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,x(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&S().then((function(e){o.mounted&&o.setState({events:e,locations:O(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)("h1",{className:"logo",children:"Meet App"}),Object(T.jsx)(q,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(T.jsx)(Z,{text:this.state.errorInfo}),Object(T.jsx)(z,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),navigator.onLine?Object(T.jsx)(C,{text:" "}):Object(T.jsx)(C,{text:"Warning: Your connection is offline"}),Object(T.jsx)(L,{events:this.state.events}),Object(T.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){N()}})]})}}]),n}(r.a.Component),R=U,D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(26).config("7402f2d6dd664d68b54d6fa52bb9a1ac").install(),c.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}()}},[[56,1,2]]]);
//# sourceMappingURL=main.2129b367.chunk.js.map