(window["webpackJsonppansy-place"]=window["webpackJsonppansy-place"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=(a(91),a(15)),i=a(13),s=a(16),u=a(17),p=a(18),m=a(156),d=a(158),h=a(159),g=a(160),b=a(124),f=a(24),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).logOutUser=function(e){e.preventDefault(),document.cookie="loggedIn=false;max-age=0*0",window.location.replace("/login"),console.log("\ud83d\udebd")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{position:"static",style:{backgroundColor:"green"}},r.a.createElement(d.a,null,r.a.createElement(h.a,{variant:"h6",style:{flexGrow:1}},r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/"},"Pansy Place")),r.a.createElement(g.a,{className:"nav"},r.a.createElement(b.a,{className:"nav-item"},r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/Availability"},"Availability")),r.a.createElement(b.a,{className:"nav-item"},"loggedIn=true"===document.cookie?r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/Admin"},"Admin"):null),r.a.createElement(b.a,{className:"nav-item"},"loggedIn=true"===document.cookie?r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/logout",onClick:this.logOutUser},"Logout"):r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/login"}," ","Login"," ")))))}}]),t}(n.Component),v=(a(97),a(2)),O=a(12),E=a(81),j=a.n(E),P=function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"masthead"},r.a.createElement("h2",null,"Quality Above Quantity"),r.a.createElement(f.b,{style:{textDecoration:"none"},to:"/Availability"},"View Current Availability")))},x=a(6),w=a(161),C=a(172),k=a(163);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleTextChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.login=function(e){e.preventDefault(),console.log("\ud83d\udcbe",a.state.username),document.cookie="loggedIn=true;max-age=60*1000",window.location.replace("/Availability")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{maxWidth:"sm"},r.a.createElement("form",{className:"login-form",onSubmit:this.login},r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.username,name:"username",label:"Username",type:"text"}),r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.password,name:"password",label:"Password",type:"password"}),r.a.createElement(k.a,{type:"submit",className:"login-button",variant:"contained",color:"primary"},"Login"))))}}]),t}(n.Component),A=a(30),_=a.n(A),N=a(45),T=a(164),I=a(165),U=a(166),q=a(167),W=a(168),z=a(82),V=a.n(z),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user_name:"",availability:[],plants:[],heading:"Current Availability"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(_.a.mark(function e(){var t,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("mounted \ud83c\udf35",this.state.availability),e.next=3,fetch("http://api.fotohut.org:42001/availability");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log("\ud83c\udf38\ud83e\udd8b",a),this.setState({availability:a}),console.log("\ud83c\udf44",this.state);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log("updated availability\u2600\ufe0f",this.state.availability)}},{key:"render",value:function(){return r.a.createElement(w.a,{maxWidth:"lg",fixed:!0},r.a.createElement("h2",{style:{textAlign:"center",fontSize:"50px"}},this.state.heading),r.a.createElement(T.a,null,r.a.createElement(I.a,null,r.a.createElement(U.a,null,r.a.createElement(q.a,null,"Plant Name - Variant"),r.a.createElement(q.a,null,"Color"),r.a.createElement(q.a,null,"# Available"),"loggedIn=true"===document.cookie?r.a.createElement(q.a,null,"Update"):null)),r.a.createElement(W.a,null,this.state.availability.map(function(e,t){return r.a.createElement(U.a,{key:e.crop_id},r.a.createElement(q.a,null,e.plant_name," - ",e.plant_variant),r.a.createElement(q.a,null,e.plant_color),(document.cookie,r.a.createElement(q.a,null,e.available_quantity)),"loggedIn=true"===document.cookie?r.a.createElement(q.a,null,r.a.createElement(f.b,{to:"/UpdateCrop/"+e.crop_id},r.a.createElement(V.a,{style:{color:"green"}}))):null)}))))}}]),t}(n.Component),B=a(4),M=a(173),G=a(170),J=a(46),Q=a.n(J);function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var $="http://api.fotohut.org:42001/plants",F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTextChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault();var t={plant_name:a.state.addPlantName,plant_variant:a.state.addPlantVariant,plant_color:a.state.addPlantColor};console.log("\ud83d\ude80\ud83e\uddb7",t,$),Q()({method:"POST",url:$,timeout:9e3,data:t,headers:{"Content-Type":"application/json"}}).then(setTimeout(function(){console.log("\ud83c\udf0d")},800))},a.state={user_name:"",crop:[],plants:[],updatePlants:"",addPlantName:"",addPlantVariant:"",addPlantColor:"",heading:"Add Plants"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("\ud83c\udf3e",this.state.plants),r.a.createElement(w.a,{maxWidth:"lg",fixed:!0},r.a.createElement("h2",{style:{textAlign:"center",fontSize:"50px"}},this.state.heading),r.a.createElement(w.a,{maxWidth:"sm"},r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.addPlantName,name:"addPlantName",label:"Plant Name - Ex. Pansy",type:"text"}),r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.addPlantVariant,name:"addPlantVariant",label:"Plant Variety - Ex. Delta",type:"text"}),r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.addPlantColor,name:"addPlantColor",label:"Plant Color - Ex. Pure White",type:"text"}),r.a.createElement(k.a,{type:"submit",className:"submit-button",variant:"contained",color:"primary"},"Add Plant"))))}}]),t}(n.Component),H=a(169),K=a(171);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Y="http://api.fotohut.org:42001/crops",Z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState({addPlantID:e.target.value}),console.log("\ud83c\udfc2",a.state.addPlantID)},a.handleTextChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault();var t={plant_id:a.state.addPlantID,available_quantity:a.state.updateCount};console.log("\ud83d\ude80\ud83e\uddb7",t,Y),Q()({method:"POST",url:Y,timeout:9e3,data:t,headers:{"Content-Type":"application/json"}}).then(setTimeout(function(){console.log("\ud83c\udf0d")},1e3))},a.state={user_name:"",crop:[],plants:[],updatePlants:"0",addPlantID:"",heading:"Add Plants to Crop List"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(_.a.mark(function e(){var t,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83c\udff9","http://api.fotohut.org:42001/plants"),console.log("mounted \ud83c\udf35",this.state.plants),e.next=4,fetch("http://api.fotohut.org:42001/plants");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log("\ud83c\udf38\ud83e\udd8b",a),this.setState({plants:a}),console.log("\ud83c\udf44",this.state);case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderOptions",value:function(){return this.state.plants.map(function(e,t){return console.log("\ud83c\udf55\ud83e\udd57",e),console.log("\ud83d\udc43",e.id),r.a.createElement(H.a,{label:"Select a Plant",value:e.id,key:t,name:e.plant_name},e.plant_name," ",e.plant_variant," - ",e.plant_color)})}},{key:"render",value:function(){return console.log("\ud83c\udf3e",this.state.plants),r.a.createElement(w.a,{maxWidth:"lg",fixed:!0},r.a.createElement("h2",{style:{textAlign:"center",fontSize:"50px"}},this.state.heading),r.a.createElement(w.a,{maxWidth:"sm"},r.a.createElement("form",{className:"login-form",onSubmit:this.handleSubmit},r.a.createElement(K.a,{className:"width50",value:this.state.addPlantID,onChange:this.handleChange},this.renderOptions()),r.a.createElement("h3",null,"Selected Plant ",this.state.addPlantID),r.a.createElement(C.a,{required:!0,onChange:this.handleTextChange,value:this.state.updateCount,name:"updateCount",label:"0",type:"text"}),r.a.createElement(k.a,{type:"submit",className:"submit-button",variant:"contained",color:"primary"},"Add Plant"))))}}]),t}(n.Component);function ee(e){return r.a.createElement(h.a,{component:"div",style:{padding:24}},e.children)}var te=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{position:"static",color:"default"},r.a.createElement(M.a,{value:t,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",scrollable:"true",scrollButtons:"auto"},r.a.createElement(G.a,{label:"Add Plant to Crop"}),r.a.createElement(G.a,{label:"Add Plant"}))),0===t&&r.a.createElement(ee,null,"Add Plant to Crop",r.a.createElement(Z,null)),1===t&&r.a.createElement(ee,null,"Add Plant",r.a.createElement(F,null)))}}]),t}(r.a.Component),ae=Object(B.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var re="http://api.fotohut.org:42001/crops/",oe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleTextChange=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state);t[e.target.name]=e.target.value,a.setState(t)},a.handleSubmit=function(e){e.preventDefault();var t={available_quantity:a.state.updateCount};console.log("\ud83d\ude80\ud83e\uddb7",t,URL),Q()({method:"PUT",url:URL,timeout:9e3,data:t,headers:{"Content-Type":"application/json"}}).then(setTimeout(function(){console.log("World!"),window.location.replace("/Availability")},1e3))},a.state={user_name:"",crop:[],plants:[],updateCount:"",heading:"Update Crop"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(_.a.mark(function e(){var t,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\ud83c\udff9",re),re+=this.props.match.params.id,console.log("\ud83e\ude83",this.props.match.params,re),console.log("mounted \ud83c\udf35",this.state.crop),e.next=6,fetch(re);case 6:return t=e.sent,e.next=9,t.json();case 9:a=e.sent,console.log("\ud83c\udf38\ud83e\udd8b",a),this.setState({crop:a}),console.log("\ud83c\udf44",this.state);case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log("updated Crop \u2600\ufe0f",this.state.crop)}},{key:"render",value:function(){var e=this,t=this.props.match.params.id;return console.log("\ud83c\udf3e",this.state.crop),r.a.createElement(w.a,{maxWidth:"lg",fixed:!0},r.a.createElement("h2",{style:{textAlign:"center",fontSize:"50px"}},this.state.heading," - ",t),this.state.crop.map(function(t,a){return r.a.createElement(w.a,{maxWidth:"sm",key:a},r.a.createElement("h4",{style:{textAlign:"center",fontSize:"30px"}},t.plant_name," - ",t.plant_variant),r.a.createElement("h3",{style:{textAlign:"center",fontSize:"40px"}},t.plant_color),r.a.createElement("h5",{style:{textAlign:"center",fontSize:"20px"}},t.available_quantity),r.a.createElement("form",{className:"login-form",onSubmit:e.handleSubmit},r.a.createElement(C.a,{required:!0,onChange:e.handleTextChange,value:e.state.updateCount,name:"updateCount",label:t.available_quantity,type:"text"}),r.a.createElement(k.a,{type:"submit",className:"submit-button",variant:"contained",color:"primary"},"Update Availability")))}))}}]),t}(n.Component),le=function(e){var t=e.component,a=Object(v.a)(e,["component"]);return console.log("\ud83d\udca4",a),r.a.createElement(O.b,Object.assign({},a,{render:function(e){return!0===function(){var e=j.a.parse(document.cookie);return console.log("\ud83c\udf6a",e),!!e.loggedIn}()?r.a.createElement(t,e):r.a.createElement(O.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ce=function(){return r.a.createElement(O.d,null,r.a.createElement(O.b,{exact:!0,path:"/",component:P}),r.a.createElement(O.b,{exact:!0,path:"/Availability",component:L}),r.a.createElement(O.b,{exact:!0,path:"/login",component:S}),r.a.createElement(le,{path:"/Admin",component:ae}),r.a.createElement(le,{path:"/UpdateCrop/:id",component:oe}))};var ie=function(){return console.log("\ud83c\udf08"),r.a.createElement(f.a,null,r.a.createElement(y,null),r.a.createElement(ce,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(118).config(),l.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(122)},91:function(e,t,a){},97:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.d5129367.chunk.js.map