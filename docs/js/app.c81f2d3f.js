(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],u=0,f=[];u<s.length;u++)o=s[u],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5a66eb6e"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"6ef58134"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(e),l=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/i-konva-demo/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00bd":function(e,t,n){"use strict";var r=n("e9c6"),o=n.n(r);o.a},"18bb":function(e,t,n){"use strict";var r=n("abd8"),o=n.n(r);o.a},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("router-view"),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"issue",attrs:{hidden:""}},[n("p",[e._v("未解決問題")]),n("ol",[n("li",[e._v(" 重新繪製不成功：會同時出現兩個圖 ")]),n("li",[e._v(" 無法針對形狀使用本地圖像如："),n("code",[e._v("@/assets/image.jpg")])]),n("li",[n("del",[e._v("How to draw half circle?")]),e._v(" Use "),n("code",[e._v("v-wedge")]),e._v(", with "),n("code",[e._v("rotation: 180")])]),n("li",[e._v(" Konva 無法監聽鍵盤事件 ")])])])}],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/vuekonva"}},[e._v("Vue Konva")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/ghouse"}},[e._v("Greatest house")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/simon"}},[e._v("Simon game")]),e._v(" |\n")],1)},s=[],c={name:"navbar"},l=c,u=(n("cfa4"),n("2877")),f=Object(u["a"])(l,i,s,!1,null,null,null);f.options.__file="navbar.vue";var h=f.exports,v={components:{navbar:h}},d=v,g=(n("5c0b"),Object(u["a"])(d,o,a,!1,null,null,null));g.options.__file="App.vue";var _=g.exports,m=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to Vue Konva app"}})],1)},y=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("div",[n("v-stage",{staticClass:"red-circle",attrs:{config:e.$store.state.canvas_measure}},[n("v-layer",[n("v-circle",{attrs:{config:e.configCircle}}),n("v-text",{ref:"ktext",attrs:{config:{x:60,y:50,fontSize:108,text:"K",fill:"white"}}}),e._l(e.rect_conf,function(e,t){return n("v-rect",{key:t,attrs:{config:e}})}),n("v-star",{attrs:{config:{x:600,y:150,numPoints:3,innerRadius:70,outerRadius:70,fill:"red"}}}),n("v-star",{attrs:{config:{x:600,y:150,numPoints:3,innerRadius:50,outerRadius:50,fill:"red",stroke:"white",strokeWidth:4}}}),n("v-star",{attrs:{config:{x:600,y:150,numPoints:3,innerRadius:48,outerRadius:48,fill:"white",stroke:"red",strokeWidth:4}}}),n("v-text",{ref:"ktext",attrs:{config:{x:564,y:116,fontSize:72,text:"萬",fill:"red"}}})],2)],1)],1)])},x=[],k={name:"HelloWorld",props:{msg:String},data:function(){return{configKonva:{width:200,height:200},configCircle:{x:100,y:100,radius:70,fill:"green",stroke:"black",strokeWidth:2},rect_conf:[{x:300,y:50,width:100,height:100,fill:"blue",rotation:45,opacity:.9},{x:350,y:50,width:100,height:100,fill:"red",rotation:45,opacity:.8}],samsung:{c:{x:800,y:130,radius:{x:180,y:60},fill:"#034EA2"},t:{x:625,y:97,text:"SAMSUNG",fontSize:70,fill:"white"}},star_conf:{x:600,y:150,numPoints:3,innerRadius:70,outerRadius:70,fill:"red",stroke:"black",strokeWidth:4}}},computed:{img_conf:function(){var e=new Image;return e.src="../assets/logo.png",console.log(e),{x:600,y:120,image:e}}}},w=k,S=(n("e719"),Object(u["a"])(w,b,x,!1,null,"b5c6ff94",null));S.options.__file="HelloWorld.vue";var $=S.exports,T={name:"home",components:{HelloWorld:$}},P=T,q=Object(u["a"])(P,p,y,!1,null,null,null);q.options.__file="Home.vue";var j=q.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-stage",{staticClass:"cc",attrs:{config:e.$store.state.canvas_measure}},[n("v-layer",{ref:"layer"},[e._l(e.wedges,function(t,r){return n("v-wedge",{key:r,attrs:{config:t},on:{click:function(n){e.chose_text(t.data_ref)},mouseover:function(t){e.cursor_change("pointer")},mouseout:function(t){e.cursor_change("default")}}})}),n("v-text",{ref:"questiontext_ref",attrs:{config:e.questiontext_conf}}),n("v-text",{ref:"helptext_ref",attrs:{config:e.helptext}})],2),n("v-layer",{ref:"central_clearbtn_layer"},[n("v-circle",{attrs:{config:{x:100,y:100,radius:40,fill:"navy",stroke:"#ddd",strokeWidth:4}}}),n("v-text",{attrs:{config:{x:65,y:90,text:"Simon",fontSize:24,fill:"white"}}})],1),n("v-layer",{ref:"clearbtn_layer"},[n("v-ellipse",{attrs:{config:e.btn_conf},on:{click:function(t){e.clear_text()},mouseover:function(t){e.cursor_change("pointer")},mouseout:function(t){e.cursor_change("default")}}}),n("v-text",{ref:"btntxt_ref",attrs:{config:e.btntxt_conf},on:{click:function(t){e.clear_text()},mouseover:function(t){e.cursor_change("pointer")},mouseout:function(t){e.cursor_change("default")}}})],1)],1),e._m(0)],1)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Simon_(game)"}},[e._v("Simon game")])])}],E={name:"simon",data:function(){return{wedges:[{x:100,y:100,radius:80,angle:90,fill:"rgba(255,0,0,1)",stroke:"#111",strokeWidth:1,rotation:180,data_ref:"red"},{x:100,y:100,radius:80,angle:90,fill:"rgba(0,255,0,1)",stroke:"#111",strokeWidth:1,rotation:270,data_ref:"green"},{x:100,y:100,radius:80,angle:90,fill:"rgba(0,0,255,1)",stroke:"#111",strokeWidth:1,rotation:0,data_ref:"blue"},{x:100,y:100,radius:80,angle:90,fill:"rgba(255,255,0,1)",stroke:"#111",strokeWidth:1,rotation:90,data_ref:"yellow"}],choosen_text:"You choosed: ",choosen_array:[],helptext:{x:90,y:240,text:"You choosed: ",fontSize:24,fontFamily:"Calibri",fill:"white"},questiontext_conf:{x:200,y:50,text:"Let's choose: ",fontSize:24,fontFamily:"Calibri",fill:"black"},btntxt_conf:{x:270,y:140,text:"Clear",fontSize:24,fontFamily:"Calibri",fill:"black"},btn_conf:{x:300,y:150,radius:{x:100,y:50},fill:"aqua",stroke:"black",strokeWidth:1},questiontext_array:[]}},computed:{all_colour:function(){var e=[];return this.wedges.map(function(t){return e.push(t.data_ref)}),e}},mounted:function(){this.add_question_ingame()},methods:{add_question_ingame:function(){var e=function(e){return Math.floor(Math.random()*Math.floor(e))},t=this.all_colour[e(this.all_colour.length)];this.questiontext_array.push(t),this.render_questiontext()},chose_text:function(e){this.choosen_array.push(e);var t=this.choosen_array.length-1,n=this.choosen_array[t]===this.questiontext_array[t];n?(t===this.questiontext_array.length-1&&(this.clear_choosen(),this.add_question_ingame()),this.render_helptext()):(alert("Game over: Choose wrong!"),this.clear_text())},render_helptext:function(){var e="You choosed: ";this.choosen_array.map(function(t){return e+=t+", "}),this.choosen_text=e,this.render_text({refered_element:"helptext_ref",input_text:this.choosen_text})},render_questiontext:function(){var e="Let's choose: ";this.questiontext_array.map(function(t){return e+=t+", "}),this.render_text({refered_element:"questiontext_ref",input_text:e})},clear_text:function(){this.clear_choosen(),this.clear_question()},clear_choosen:function(){this.choosen_array=[],this.render_helptext()},clear_question:function(){this.questiontext_array=[],this.add_question_ingame()},render_text:function(e){var t=e.refered_element,n=e.input_text,r=this.$refs[t];r.getStage().setText(n),this.$refs.layer.getStage().draw()},cursor_change:function(e){document.body.style.cursor=e}}},M=E,O=Object(u["a"])(M,W,C,!1,null,null,null);O.options.__file="SSS.vue";var A=O.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-stage",{ref:"currentstage",attrs:{config:e.$store.state.canvas_measure}},[n("v-layer",{ref:"imgs"},[n("v-image",{attrs:{config:e.configImg}}),n("v-image",{attrs:{config:e.logo_ing}})],1)],1)],1)},R=[],H={name:"proto3",data:function(){return{tableset:{sceneFunc:function(e){e.beginPath(),e.moveTo(500,50),e.lineTo(800,50),e.lineTo(1e3,200),e.lineTo(300,200),e.closePath(),e.fillStrokeShape(this)}},background_image:new Image(100,100),ant_ing:new Image(100,100)}},computed:{configImg:function(){return{x:200,y:40,image:this.background_image,width:200,height:200}},logo_ing:function(){return{x:600,y:40,image:this.ant_ing,width:200,height:200}}},created:function(){this.background_image.src="https://konvajs.github.io/assets/lion.png",this.ant_ing.src="@/assets/apple.jpg"}},I=H,z=Object(u["a"])(I,F,R,!1,null,null,null);z.options.__file="Bkgimg.vue";var K=z.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-container"},[n("div",[n("v-stage",{ref:"stageref",staticClass:"red-circle",attrs:{config:e.$store.state.canvas_measure}},[n("v-layer",{ref:"rect1reflayer"},[n("v-rect",{ref:"rect1ref",attrs:{config:e.rect1}})],1),n("v-layer",{ref:"circle1reflayer"},[n("v-circle",{ref:"circle1ref",attrs:{config:e.circle2}}),n("v-circle",{ref:"circle1ref",attrs:{config:e.circle1},on:{dragend:e.c1detect}})],1)],1),n("p",{directives:[{name:"show",rawName:"v-show",value:e.connected,expression:"connected"}]},[e._v(" Connected ")])],1),e._m(0),n("div",{staticClass:"proto2"},[n("v-stage",{ref:"currentstage",attrs:{config:{width:1200,height:400}}},[n("v-layer",{ref:"ajaxtable"},[n("v-shape",{attrs:{config:e.tableset}})],1),n("v-layer",e._l(e.bets,function(t,r){return n("v-circle",{key:r,attrs:{config:{x:e.got_pos(r),y:100,radius:60,fill:"blue"}}})})),n("v-layer",e._l(e.bets,function(t,r){return n("v-circle",{key:r,ref:t.ref,refInFor:!0,attrs:{config:{x:e.got_pos(r),y:100,radius:40,fill:t.colour,draggable:!0},"data-money":t.money,"data-idx":r},on:{dragend:function(n){e.reset_circle(t.ref)}}})}))],1),n("p",[e._v(" Drag to table, then reset to original pos. ")])],1)])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" To get shape, you need to "),n("a",{attrs:{href:"https://vuejs.org/v2/api/#ref"}},[e._v("assgin reference instance")]),e._v(",\n        then use "),n("a",{attrs:{href:"http://rafaelescala.com/vue-konva-doc/#api"}},[e._v("getStage()")]),e._v(" function.\n        ")])])}],N={name:"proto1",data:function(){return{kinit:{width:100,height:100},circle1:{x:100,y:100,radius:40,fill:"red",draggable:!0},circle2:{x:100,y:100,radius:60,fill:"yellow"},rect1:{x:500,y:100,width:400,height:250,stroke:"black",strokeWidth:2},connected:!1,table:{width:400,height:200},tableset:{sceneFunc:function(e){e.beginPath(),e.moveTo(200,50),e.lineTo(300,50),e.lineTo(400,200),e.lineTo(100,200),e.closePath(),e.fillStrokeShape(this)},fill:"#00D2FF"},bets:[{money:5,colour:"red",ref:"bet5ref"},{money:15,colour:"green",ref:"bet15ref"},{money:25,colour:"aqua",ref:"bet25ref"},{money:35,colour:"yellow",ref:"bet35ref"},{money:45,colour:"pink",ref:"bet45ref"}]}},mounted:function(){this.init_canvas()},methods:{init_canvas:function(){var e=document.querySelector(".c-container").clientWidth;this.kinit={width:e,height:e/3}},c1detect:function(){var e=this.$refs,t=e.rect1reflayer.getStage(),n=e.stageref.getStage().getPointerPosition(),r=e.circle1ref.getStage(),o=n.y>0&&n.y<document.querySelector(".c-container").clientWidth/3,a=n.x>0&&n.y<document.querySelector(".c-container").clientWidth;this.connected=null!==t.getIntersection(n),a&&o||(r.x(100),r.y(100),r.draw())},got_pos:function(e){return 500+130*e},reset_circle:function(e){var t=this.$refs[e][0].getStage(),n=t.VueComponent.$el.dataset,r=this.$refs.currentstage.getStage().getPointerPosition();null!==this.$refs.ajaxtable.getStage().getIntersection(r)&&alert(n.money+" dollar was sent"),t.x(this.got_pos(parseInt(n.idx,10))),t.y(100),t.draw(),this.$refs.rect1reflayer.getStage().draw()}}},L=N,V=(n("18bb"),Object(u["a"])(L,B,D,!1,null,"a3563f20",null));V.options.__file="Akamaru.vue";var G=V.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-stage",{ref:"stage",attrs:{config:{width:400,height:200}}},[n("v-layer",{ref:"layer"},[n("v-regular-polygon",{ref:"hexagon",attrs:{config:{x:200,y:100,sides:6,radius:20,fill:"red",stroke:"black",strokeWidth:4}}})],1)],1),n("v-stage",{ref:"stage2",attrs:{config:{width:300,height:200}}},[n("v-layer",{ref:"layer2"},[n("v-regular-polygon",{attrs:{config:{x:80,y:120,sides:3,radius:80,fill:"#00D2FF",stroke:"black",strokeWidth:4}},on:{mousemove:e.handleMouseMove,mouseout:e.handleMouseOut}}),n("v-text",{ref:"text",attrs:{config:{x:10,y:10,fontFamily:"Calibri",fontSize:24,text:"",fill:"black"}}})],1)],1)],1)},Y=[],U=n("faaf"),X=n.n(U),Q={name:"proto4",mounted:function(){var e=this,t=100,n=5e3,r=e.$refs.stage.getStage().getWidth()/2,o=new X.a.Animation(function(o){e.$refs.hexagon.getStage().setX(t*Math.sin(2*o.time*Math.PI/n)+r)},e.$refs.layer.getStage());o.start()},methods:{writeMessage:function(e){this.$refs.text.getStage().setText(e),this.$refs.layer2.getStage().draw()},handleMouseOut:function(){this.writeMessage("Mouseout triangle")},handleMouseMove:function(){var e=this.$refs.stage2.getStage().getPointerPosition(),t=e.x-190,n=e.y-40;this.writeMessage("x: "+t+", y: "+n)}}},Z=Q,ee=Object(u["a"])(Z,J,Y,!1,null,null,null);ee.options.__file="Animate.vue";var te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-stage",{attrs:{config:e.$store.state.canvas_measure}},[n("v-layer",{ref:"yane"},[n("v-text-path",{attrs:{config:e.tp_conf}}),n("v-rect",{attrs:{config:e.entou_conf}}),n("v-shape",{attrs:{config:e.yane_conf}})],1),n("v-layer",{ref:"kabe"},[n("v-rect",{attrs:{config:e.kabe_conf}}),e._l(e.windows_conf,function(e,t){return n("v-circle",{key:t,attrs:{config:e}})}),n("v-wedge",{attrs:{config:e.door_window_conf}}),n("v-rect",{attrs:{config:e.door_conf}})],2),n("v-layer",{ref:"tsuchi"})],1),e._m(0)],1)},re=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" Reference of "),n("code",[e._v("v-text-path")]),e._v(": "),n("a",{attrs:{target:"_blank",href:"https://hellopoetry.com/poem/2609113/house-of-broken-dreams/"}},[e._v(" House of Broken Dreams ")])])}],oe={name:"ghouse",data:function(){return{dhouse_conf:{sceneFunc:function(e){e.beginPath(),e.moveTo(150,50),e.lineTo(300,50),e.quadraticCurveTo(220,100,300,170),e.lineTo(150,170),e.quadraticCurveTo(220,100,150,50),e.closePath(),e.fillStrokeShape(this)},fill:"#FF23AA",stroke:"black",strokeWidth:1},yane_conf:{sceneFunc:function(e){e.beginPath(),e.moveTo(500,50),e.lineTo(600,50),e.lineTo(700,100),e.lineTo(400,100),e.closePath(),e.fillStrokeShape(this)},fill:"#AAD200"},entou_conf:{x:500,y:10,width:30,height:100,fill:"grey"},kabe_conf:{x:400,y:100,width:300,height:100,fill:"#AA0012"},windows_conf:[{x:500,y:130,radius:10,fill:"aqua"},{x:600,y:130,radius:10,fill:"aqua"}],door_window_conf:{x:550,y:150,radius:12,angle:180,fill:"white",rotation:180,data_ref:"red"},door_conf:{x:538,y:150,width:24,height:50,fill:"white"},arc_conf:{x:200,y:100,innerRadius:40,outerRadius:80,fill:"red",stroke:"black",strokeWidth:5,angle:60,rotationDeg:-120},tp_conf:{x:10,y:30,fill:"#333",fontSize:16,fontFamily:"Arial",text:"This two-story building made out of bricks is a place that shouldn't...",data:"M5,12 C0,0 10,150 120,100 S350,120 390,50"}}}},ae=oe,ie=Object(u["a"])(ae,ne,re,!1,null,null,null);ie.options.__file="GreatestHouse.vue";var se=ie.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vka"},[n("h1",[e._v(" Vue-Konva ")]),n("ul",[n("li",[e._v(" 前面說過 "),n("router-link",{attrs:{to:"/about"}},[e._v("Vue + Konva == vue-konva")])],1),n("li",[e._v("\n                你可以使用 HTML 的語法，來撰寫 Konva 的元件：\n                "),n("v-stage",{attrs:{config:{width:100,height:100}}},[n("v-layer",[n("v-rect",{attrs:{config:{width:100,height:100,fill:"black"}}}),n("v-circle",{attrs:{config:{x:50,y:50,radius:40,fill:"navy",stroke:"white",strokeWidth:4}}}),n("v-star",{attrs:{config:{x:50,y:50,numPoints:5,innerRadius:10,outerRadius:30,fill:"red"}}})],1)],1),n("pre",[e._v("<v-stage v-bind:config=\"{ width:100, height:100 }\">\n    <v-layer>\n        <v-rect v-bind:config=\"{\n            width: 100,\n            height: 100,\n            fill: 'black',\n        }\" />\n        <v-circle v-bind:config=\"{\n            x:50,\n            y:50,\n            radius: 40,\n            fill: 'navy',\n            stroke: 'white',\n            strokeWidth: 4\n        }\" />\n        <v-star v-bind:config=\"{\n            x: 50,\n            y: 50,\n            numPoints: 5,\n            innerRadius: 10,\n            outerRadius: 30,\n            fill: 'red',\n        }\" />\n    </v-layer>\n</v-stage> ")])],1),e._m(0),e._m(1)])])},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v("\n                使用 "),n("a",{attrs:{target:"_blank",href:"https://vuejs.org/v2/api/#ref"}},[e._v("ref")]),e._v(" 屬性來參照形狀。 "),n("br"),e._v("\n                例如聲明 "),n("code",[e._v('<v-star ref="foobar">')]),e._v(" 的話，就可以在 JavaScript 這麼參照： "),n("code",[e._v("this.$refs.foobar")]),e._v("。 "),n("br"),e._v("\n                這樣一來，就可以在必要時，透過 "),n("code",[e._v("getStage()")]),e._v(" 動用需要的形狀內建函式了。\n            ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(" 形狀支援還不夠完整，但也足夠撰寫一些基本形狀：\n                "),n("ul",[n("li",[e._v("v-rect: 四方形")]),n("li",[e._v("v-circle: 圓形")]),n("li",[e._v("v-ellipse: 扇形")]),n("li",[e._v("v-line: 線")]),n("li",[e._v("v-image: 圖片")]),n("li",[e._v("v-text: 文字")]),n("li",[e._v("v-text-path: 裝飾文字")]),n("li",[e._v("v-star: 星形")]),n("li",[e._v("v-regular-polygon: 多邊形")])])])}],ue={name:"vuekonva"},fe=ue,he=(n("00bd"),Object(u["a"])(fe,ce,le,!1,null,"bcc525d0",null));he.options.__file="vka.vue";var ve=he.exports;r["a"].use(m["a"]);var de=new m["a"]({routes:[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/proto1",name:"proto1",component:G},{path:"/proto3",name:"proto3",component:K},{path:"/ghouse",name:"ghouse",component:se},{path:"/proto4",name:"proto4",component:te},{path:"/simon",name:"simon",component:A},{path:"/vuekonva",name:"vuekonva",component:ve}]}),ge=n("2f62");r["a"].use(ge["a"]);var _e=new ge["a"].Store({state:{canvas_measure:{width:1200,height:400}},mutations:{},actions:{}}),me=n("347b"),pe=n.n(me);r["a"].use(pe.a),r["a"].config.productionTip=!1,new r["a"]({router:de,store:_e,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),o=n.n(r);o.a},a77c:function(e,t,n){},abd8:function(e,t,n){},bc58:function(e,t,n){},cfa4:function(e,t,n){"use strict";var r=n("bc58"),o=n.n(r);o.a},e719:function(e,t,n){"use strict";var r=n("a77c"),o=n.n(r);o.a},e9c6:function(e,t,n){}});
//# sourceMappingURL=app.c81f2d3f.js.map