(this["webpackJsonpcovid-19-info-webapp-hk"]=this["webpackJsonpcovid-19-info-webapp-hk"]||[]).push([[0],{113:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),c=t.n(r),l=(t(86),t(87),t(18)),s=t(42),i=t(43),h=t(51),m=t(44),u=t(52),d=t(45),f=t.n(d),p=t(10),b=t.n(p),v=t(115),g=t(116),k=t(155),C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(m.a)(a).call(this,e))).globalonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.globallabels},colors:["#ff0000","#33cc33","#000000","#FF8C00"]}),series:[{name:"\u78ba\u8a3a\u4eba\u6578",data:t.globalconfirmCase},{name:"\u51fa\u9662\u4eba\u6578",data:t.globalrecover},{name:"\u6b7b\u4ea1\u4eba\u6578",data:t.globaldeath},{name:"\u73fe\u6709\u78ba\u8a3a",data:t.globalactivecasesfin}]})},t.hkonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.hklabels},colors:["#ff0000","#33cc33","#000000","#FF8C00"]}),series:[{name:"\u78ba\u8a3a\u4eba\u6578",data:t.hkcomfirmCase},{name:"\u51fa\u9662\u4eba\u6578",data:t.hkrecover},{name:"\u6b7b\u4ea1\u4eba\u6578",data:t.hkdeath},{name:"\u73fe\u6709\u78ba\u8a3a",data:t.hkactivecasesfin}]})},t.cnonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.globallabels},colors:["#ff0000","#33cc33","#000000","#FF8C00"]}),series:[{name:"\u78ba\u8a3a\u4eba\u6578",data:t.cnconfirmCase},{name:"\u51fa\u9662\u4eba\u6578",data:t.cnrecover},{name:"\u6b7b\u4ea1\u4eba\u6578",data:t.cndeath},{name:"\u73fe\u6709\u78ba\u8a3a",data:t.cnactivecasesfin}]})},t.state={options:{chart:{id:"line",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:600}},dropShadow:{enabled:!0,top:0,left:0,blur:3,opacity:.1}},xaxis:{categories:[]}},series:[{name:"",data:[]}]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.all([b.a.get("https://r3psfad7i6.execute-api.ap-southeast-1.amazonaws.com/Prod/figure"),b.a.get("https://api.n-cov.info/worldcomfirm"),b.a.get("https://api.n-cov.info/worlddeath"),b.a.get("https://api.n-cov.info/worldRecover")]).then(b.a.spread((function(a,t,n,o){var r=a.data.data,c=t.data.data,s=n.data.data,i=o.data.data;e.hklabels=[],e.hkcomfirmCase=[],e.hkfulfillReportingCriteria=[],e.hkinvestigation=[],e.hkrecover=[],e.hkdeath=[],e.globalconfirmCase=[],e.globaldeath=[],e.globalrecover=[],e.globallabels=[],e.cnconfirmCase=[],e.cnrecover=[],e.cndeath=[],e.hkactivecases1=[],e.hkactivecasesfin=[],e.cnactivecases1=[],e.cnactivecasesfin=[],e.globalactivecases1=[],e.globalactivecasesfin=[];var h=function(e){return Object.values(e).reduce((function(e,a){return e+a}))};r.map((function(a){return e.hklabels.push(a.updateDate),e.hkcomfirmCase.push(a.comfirmCase),e.hkrecover.push(a.recover),e.hkdeath.push(a.death),!0})),Object.values(c).map((function(a){return e.globalconfirmCase.push(h(a)),e.cnconfirmCase.push(a.China),!0})),Object.keys(c).map((function(a){return e.globallabels.push(a),!0})),Object.values(s).map((function(a){return e.globaldeath.push(h(a)),e.cndeath.push(a.China),!0})),Object.values(i).map((function(a){return e.globalrecover.push(h(a)),e.cnrecover.push(a.China),!0}));for(var m=0;m<=e.hkdeath.length-1;m++)e.hkactivecases1.push(e.hkcomfirmCase[m]-e.hkdeath[m]);for(var u=0;u<=e.hkrecover.length-1;u++)e.hkactivecasesfin.push(e.hkactivecases1[u]-e.hkrecover[u]);for(var d=0;d<=e.cndeath.length-1;d++)e.cnactivecases1.push(e.cnconfirmCase[d]-e.cndeath[d]);for(var f=0;f<=e.cnrecover.length-1;f++)e.cnactivecasesfin.push(e.cnactivecases1[f]-e.cnrecover[f]);for(var p=0;p<=e.globaldeath.length-1;p++)e.globalactivecases1.push(e.globalconfirmCase[p]-e.globaldeath[p]);for(var b=0;b<=e.globalrecover.length-1;b++)e.globalactivecasesfin.push(e.globalactivecases1[b]-e.globalrecover[b]);e.setState({options:Object(l.a)({},e.state.options,{xaxis:{categories:e.hklabels},colors:["#ff0000","#33cc33","#000000","#FF8C00"]}),series:[{name:"\u78ba\u8a3a\u4eba\u6578",data:e.hkcomfirmCase},{name:"\u51fa\u9662\u4eba\u6578",data:e.hkrecover},{name:"\u6b7b\u4ea1\u4eba\u6578",data:e.hkdeath},{name:"\u73fe\u6709\u78ba\u8a3a",data:e.hkactivecasesfin}]})})))}},{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("h1",null,"\u7d2f\u7a4d\u500b\u6848"),o.a.createElement("div",null,o.a.createElement(k.a,{variant:"contained",color:"primary","aria-label":"outlined primary button group"},o.a.createElement(g.a,{onClick:this.hkonClick},"\u9999\u6e2f"),o.a.createElement(g.a,{onClick:this.cnonClick},"\u4e2d\u570b"),o.a.createElement(g.a,{onClick:this.globalonClick},"\u5168\u7403"))),o.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"line",height:"350"}))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(h.a)(this,Object(m.a)(a).call(this,e))).globalonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.globallabels},colors:["#ff0000","#33cc33","#000000"]}),series:[{name:"\u65b0\u589e\u78ba\u8a3a",data:t.globalnewconfirmCase},{name:"\u65b0\u589e\u51fa\u9662",data:t.globalnewrecover},{name:"\u65b0\u589e\u6b7b\u4ea1",data:t.globalnewdeath}]})},t.hkonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.hklabels},colors:["#ff0000","#33cc33","#000000"]}),series:[{name:"\u65b0\u589e\u78ba\u8a3a",data:t.hknewcomfirmCase},{name:"\u65b0\u589e\u51fa\u9662",data:t.hknewrecover},{name:"\u65b0\u589e\u6b7b\u4ea1",data:t.hknewdeath}]})},t.cnonClick=function(){t.setState({options:Object(l.a)({},t.state.options,{xaxis:{categories:t.globallabels},colors:["#ff0000","#33cc33","#000000"]}),series:[{name:"\u65b0\u589e\u78ba\u8a3a",data:t.cnnewconfirmCase},{name:"\u65b0\u589e\u51fa\u9662",data:t.cnnewrecover},{name:"\u65b0\u589e\u6b7b\u4ea1",data:t.cnnewdeath}]})},t.state={options:{chart:{id:"line",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:600}},dropShadow:{enabled:!0,top:0,left:0,blur:3,opacity:.1}},xaxis:{categories:[]}},series:[{name:"",data:[]}]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.all([b.a.get("https://r3psfad7i6.execute-api.ap-southeast-1.amazonaws.com/Prod/figure"),b.a.get("https://api.n-cov.info/worldcomfirm"),b.a.get("https://api.n-cov.info/worlddeath"),b.a.get("https://api.n-cov.info/worldRecover")]).then(b.a.spread((function(a,t,n,o){var r=a.data.data,c=t.data.data,s=n.data.data,i=o.data.data;e.hklabels=[],e.hkcomfirmCase=[],e.hkfulfillReportingCriteria=[],e.hkinvestigation=[],e.hkrecover=[],e.hkdeath=[],e.globalconfirmCase=[],e.globaldeath=[],e.globalrecover=[],e.globallabels=[],e.cnconfirmCase=[],e.cnrecover=[],e.cndeath=[],e.hknewcomfirmCase=[],e.hknewdeath=[],e.hknewrecover=[],e.cnnewconfirmCase=[],e.cnnewdeath=[],e.cnnewrecover=[],e.globalnewconfirmCase=[],e.globalnewdeath=[],e.globalnewrecover=[],e.hkyestcomfirmCase=[],e.hkyestdeath=[],e.hkyestrecover=[],e.cnyestconfirmCase=[],e.cnyestwdeath=[],e.cnyestrecover=[],e.globalyestconfirmCase=[],e.globalyestdeath=[],e.globalyestrecover=[];var h=function(e){return Object.values(e).reduce((function(e,a){return e+a}))};r.map((function(a){return e.hklabels.push(a.updateDate),e.hkcomfirmCase.push(a.comfirmCase),e.hkrecover.push(a.recover),e.hkdeath.push(a.death),!0})),Object.values(c).map((function(a){return e.globalconfirmCase.push(h(a)),e.cnconfirmCase.push(a.China),!0})),Object.keys(c).map((function(a){return e.globallabels.push(a),!0})),Object.values(s).map((function(a){return e.globaldeath.push(h(a)),e.cndeath.push(a.China),!0})),Object.values(i).map((function(a){return e.globalrecover.push(h(a)),e.cnrecover.push(a.China),!0})),e.hkyestcomfirmCase=e.hkcomfirmCase.slice(),e.hkyestcomfirmCase.unshift(0),e.hkyestcomfirmCase.pop();for(var m=0;m<=e.hkyestcomfirmCase.length-1;m++)e.hknewcomfirmCase.push(e.hkcomfirmCase[m]-e.hkyestcomfirmCase[m]);e.hkyestrecover=e.hkrecover.slice(),e.hkyestrecover.unshift(0),e.hkyestrecover.pop();for(var u=0;u<=e.hkyestrecover.length-1;u++)e.hknewrecover.push(e.hkrecover[u]-e.hkyestrecover[u]);e.hkyestdeath=e.hkdeath.slice(),e.hkyestdeath.unshift(0),e.hkyestdeath.pop();for(var d=0;d<=e.hkyestdeath.length-1;d++)e.hknewdeath.push(e.hkdeath[d]-e.hkyestdeath[d]);e.cnyestconfirmCase=e.cnconfirmCase.slice(),e.cnyestconfirmCase.unshift(0),e.cnyestconfirmCase.pop();for(var f=0;f<=e.cnyestconfirmCase.length-1;f++)e.cnnewconfirmCase.push(e.cnconfirmCase[f]-e.cnyestconfirmCase[f]);e.cnyestrecover=e.cnrecover.slice(),e.cnyestrecover.unshift(0),e.cnyestrecover.pop();for(var p=0;p<=e.cnyestrecover.length-1;p++)e.cnnewrecover.push(e.cnrecover[p]-e.cnyestrecover[p]);e.cnyestdeath=e.cndeath.slice(),e.cnyestdeath.unshift(0),e.cnyestdeath.pop();for(var b=0;b<=e.cnyestdeath.length-1;b++)e.cnnewdeath.push(e.cndeath[b]-e.cnyestdeath[b]);e.globalyestconfirmCase=e.globalconfirmCase.slice(),e.globalyestconfirmCase.unshift(0),e.globalyestconfirmCase.pop();for(var v=0;v<=e.globalyestconfirmCase.length-1;v++)e.globalnewconfirmCase.push(e.globalconfirmCase[v]-e.globalyestconfirmCase[v]);e.globalyestrecover=e.globalrecover.slice(),e.globalyestrecover.unshift(0),e.globalyestrecover.pop();for(var g=0;g<=e.globalyestrecover.length-1;g++)e.globalnewrecover.push(e.globalrecover[g]-e.globalyestrecover[g]);e.globalyestdeath=e.globaldeath.slice(),e.globalyestdeath.unshift(0),e.globalyestdeath.pop();for(var k=0;k<=e.globalyestdeath.length-1;k++)e.globalnewdeath.push(e.globaldeath[k]-e.globalyestdeath[k]);e.setState({options:Object(l.a)({},e.state.options,{xaxis:{categories:e.hklabels},colors:["#ff0000","#33cc33","#000000"]}),series:[{name:"\u65b0\u589e\u78ba\u8a3a",data:e.hknewcomfirmCase},{name:"\u65b0\u589e\u51fa\u9662",data:e.hknewrecover},{name:"\u65b0\u589e\u6b7b\u4ea1",data:e.hknewdeath}]})})))}},{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("h1",null,"\u6bcf\u65e5\u65b0\u589e\u500b\u6848"),o.a.createElement("div",null,o.a.createElement(k.a,{variant:"contained",color:"primary","aria-label":"outlined primary button group"},o.a.createElement(g.a,{onClick:this.hkonClick},"\u9999\u6e2f"),o.a.createElement(g.a,{onClick:this.cnonClick},"\u4e2d\u570b"),o.a.createElement(g.a,{onClick:this.globalonClick},"\u5168\u7403"))),o.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"line",height:"350"}))}}]),a}(n.Component),E=t(24),w=t(4),j=t(158),O=t(160),x=t(162),F=t(156),S=t(159),B=t(161),D=t(157),A=t(39),G=t.n(A),T=t(40),U=t.n(T),z=t(117),R=Object(w.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:21}}}))(F.a),H=Object(w.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(D.a),K=Object(j.a)({table:{minWidth:100}}),N=function(e){var a=K(),t=Object(n.useState)({}),r=Object(E.a)(t,2),c=r[0],l=r[1],s=Object(n.useState)({}),i=Object(E.a)(s,2),h=i[0],m=i[1];return Object(n.useEffect)((function(){b.a.get("https://r3psfad7i6.execute-api.ap-southeast-1.amazonaws.com/Prod/figure").then((function(e){var a=e.data.data.pop(),t=e.data.data.pop(-2);l(a),m(t)}))}),[]),o.a.createElement(v.a,null,o.a.createElement("h1",null,"\u6700\u65b0\u6578\u64da"),o.a.createElement(S.a,{component:v.a},o.a.createElement(O.a,{className:a.table,"aria-label":"customized table"},o.a.createElement(B.a,null,o.a.createElement(D.a,null,o.a.createElement(R,{align:"center",style:{backgroundColor:"#CC1E1E",color:"white"}},"\u7d2f\u7a4d\u78ba\u8a3a"),o.a.createElement(R,{align:"center",style:{backgroundColor:"#F23A3B",color:"white"}},"\u73fe\u6709\u78ba\u8a3a"),o.a.createElement(R,{align:"center",style:{backgroundColor:"#178B50",color:"white"}},"\u7d2f\u7a4d\u51fa\u9662"),o.a.createElement(R,{align:"center",style:{backgroundColor:"#4E5A65",color:"white"}},"\u7d2f\u7a4d\u6b7b\u4ea1"))),o.a.createElement(x.a,null,o.a.createElement(H,null,o.a.createElement(R,{align:"center",style:{backgroundColor:"#FDF1F1",color:"#CC1E1E"}},c.comfirmCase),o.a.createElement(R,{align:"center",style:{backgroundColor:"#FDF1F1",color:"#F23A3B"}},c.comfirmCase-c.recover-c.death),o.a.createElement(R,{align:"center",style:{backgroundColor:"#F1F8F4",color:"#178B50"}},c.recover),o.a.createElement(R,{align:"center",style:{backgroundColor:"#F3F6F8",color:"#4E5A65"}},c.death)),o.a.createElement(H,null,o.a.createElement(R,{align:"center",style:{color:"#CC1E1E"}},c.comfirmCase-h.comfirmCase>0?o.a.createElement(z.a,null,o.a.createElement(G.a,null),c.comfirmCase-h.comfirmCase):c.comfirmCase-h.comfirmCase===0?o.a.createElement(z.a,null,"-"):o.a.createElement(z.a,null,o.a.createElement(U.a,null)," ",c.comfirmCase-h.comfirmCase)),o.a.createElement(R,{align:"center",style:{color:"#F23A3B"}},c.comfirmCase-c.recover-c.death-(h.comfirmCase-h.recover-h.death)>0?o.a.createElement(z.a,null,o.a.createElement(G.a,null),c.comfirmCase-c.recover-c.death-(h.comfirmCase-h.recover-h.death)):c.comfirmCase-c.recover-c.death-(h.comfirmCase-h.recover-h.death)===0?o.a.createElement(z.a,null,"-"):o.a.createElement(z.a,null,o.a.createElement(U.a,null)," ",c.comfirmCase-c.recover-c.death-(h.comfirmCase-h.recover-h.death))),o.a.createElement(R,{align:"center",style:{color:"#178B50"}},c.recover-h.recover>0?o.a.createElement(z.a,null,o.a.createElement(G.a,null),c.recover-h.recover):c.recover-h.recover===0?o.a.createElement(z.a,null,"-"):o.a.createElement(z.a,null,o.a.createElement(U.a,null)," ",c.recover-h.recover)),o.a.createElement(R,{align:"center",style:{color:"#4E5A65"}},c.death-h.death>0?o.a.createElement(z.a,null,o.a.createElement(G.a,null),c.death-h.death):c.death-h.death===0?o.a.createElement(z.a,null,"-"):o.a.createElement(z.a,null,o.a.createElement(U.a,null)," ",c.death-h.death)))))))},W=t(163),M=t(164),P=t(165),J=t(70),I=t.n(J),$=t(71),q=t.n($),L=t(172),Q=t(171),V=t(173),X=t(166),Y=t(167),Z=t(168),_=t(169),ee=t(73),ae=t.n(ee),te=t(74),ne=t.n(te),oe=t(75),re=t.n(oe),ce=Object(j.a)((function(e){return{root:{width:"101%",flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,display:"flex",justifyContent:"center"}}})),le=function(e){var a=ce(),t=o.a.useState({drawer:!1}),n=Object(E.a)(t,2),r=n[0],c=n[1],l=function(e){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c({drawer:e})}},s=o.a.useState(null),i=Object(E.a)(s,2),h=i[0],m=i[1],u=function(){m(null)};return o.a.createElement("div",{className:a.root},o.a.createElement(W.a,null,o.a.createElement(M.a,null,o.a.createElement(P.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu",onClick:l(!0)},o.a.createElement(I.a,null)),o.a.createElement(z.a,{variant:"h6",className:a.title},o.a.createElement(X.a,{href:"/",color:"inherit"},"\u6b66\u6f22\u80ba\u708e\u5be6\u6642\u8cc7\u6599\u5eab")),o.a.createElement(g.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)}},o.a.createElement(q.a,null)))),o.a.createElement(L.a,{open:r.drawer,onClose:l(!1)}),o.a.createElement(Q.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:u},o.a.createElement(V.a,{onClick:u},o.a.createElement(Y.a,{url:"iamon9"},o.a.createElement(ae.a,null)," WhatsApp")),o.a.createElement(V.a,{onClick:u},o.a.createElement(Z.a,{url:"iamon9"},o.a.createElement(ne.a,null),"Facebook")),o.a.createElement(V.a,{onClick:u},o.a.createElement(_.a,{url:"iamon9"},o.a.createElement(re.a,null),"Telegram"))))};function se(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){b.a.all([b.a.get("https://api.n-cov.info/figure"),b.a.get("https://api.n-cov.info/worldcomfirm")]).then(b.a.spread((function(e,a){var t=e.data.data,n=a.data.data,o=t.pop().updateDate,c=t.pop().updateTime,l=Object.keys(n).pop();r({HKUpdateDate:o,HKUpdateTime:c,HKUpdateFull:"".concat(o," ").concat(c),GlobalUpdateDate:l})})))}),[]),o.a.createElement(v.a,null,o.a.createElement("p",{style:{color:"grey"}},"\u6578\u64da\u6bcf\u7d0424\u5c0f\u6642\u66f4\u65b0\u4e00\u6b21"),o.a.createElement("p",{style:{color:"grey"}},"\u9999\u6e2f\u6578\u64da\u7d71\u8a08\u622a\u81f3 ",t.HKUpdateFull),o.a.createElement("p",{style:{color:"grey"}},"\u4e2d\u570b\u53ca\u570b\u969b\u6578\u64da\u7d71\u8a08\u622a\u81f3 ",t.GlobalUpdateDate))}var ie={padding:10,backgroundColor:"#fff"},he={paddingTop:40,backgroundColor:"#fff"};var me=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(le,null),o.a.createElement("div",{style:ie},o.a.createElement("div",{style:he},o.a.createElement(se,null)),o.a.createElement(N,null),o.a.createElement(C,null),o.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,a,t){e.exports=t(113)},86:function(e,a,t){},87:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.8c4daa75.chunk.js.map