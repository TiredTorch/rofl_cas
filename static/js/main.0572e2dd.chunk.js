(this.webpackJsonprofl_cas=this.webpackJsonprofl_cas||[]).push([[0],{20:function(t,e,s){},21:function(t,e,s){},22:function(t,e,s){},24:function(t,e,s){},25:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},28:function(t,e,s){},29:function(t,e,s){},30:function(t,e,s){},31:function(t,e,s){},32:function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),i=s(15),n=s.n(i),l=(s(20),s(9)),o=s(2),r=(s(21),s(22),s(0)),d=function(t){return Object(r.jsxs)("div",{className:"Navbar__item",children:[Object(r.jsx)(l.b,{to:t.src,children:Object(r.jsx)("img",{src:t.pic,alt:t.alt})}),Object(r.jsx)("div",{className:"popUp",children:t.act})]})},p=s.p+"static/media/logo.97e14820.png",u=s.p+"static/media/cards.23a14b58.png",j=s.p+"static/media/slot.13db66d5.png",m=s.p+"static/media/ball.b6b79222.png",h=s.p+"static/media/coming.539cf090.png",b=function(){return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)(d,{src:"/rofl_cas",act:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e",pic:p,alt:"main"}),Object(r.jsx)(d,{src:"/bj",act:"\u0411\u043b\u0435\u043a\u0434\u0436\u0435\u043a",pic:u,alt:"bj"}),Object(r.jsx)(d,{src:"/slots",act:"\u0421\u043b\u043e\u0442\u044b",pic:j,alt:"slots"}),Object(r.jsx)(d,{src:"/ball",act:"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f",pic:m,alt:"prediction"}),Object(r.jsx)(d,{src:"/rofl_cas",act:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",pic:h,alt:"soon"})]})},f=s(4),v=s(5),O=s(7),x=s(6),g=(s(24),s(25),function(t){return Object(r.jsxs)("div",{className:"MainPopUpItem",children:[Object(r.jsx)("h3",{children:t.gamename}),Object(r.jsx)("p",{children:t.gamedesct})]})}),k=function(t){Object(O.a)(s,t);var e=Object(x.a)(s);function s(t){var a;return Object(f.a)(this,s),(a=e.call(this,t)).state={PopUp:"PopUp hidden"},a}return Object(v.a)(s,[{key:"togglePopUp",value:function(){var t="PopUp hidden"===this.state.PopUp?"PopUp show":"PopUp hidden";this.setState({PopUp:t})}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"Main",children:[Object(r.jsxs)("div",{className:"greetings",children:[Object(r.jsx)("h2",{children:"\u0420\u043e\u0444\u043b\u0430\u043d \u041a\u0430\u0437\u0438\u043d\u044b\u0447"}),Object(r.jsx)("p",{children:"\u041b\u0443\u0447\u0448\u0435\u0435 \u043a\u0430\u0437\u0438\u043d\u043e \u0432 \u0421\u041d\u0413"}),Object(r.jsx)("button",{onClick:this.togglePopUp.bind(this),children:"\u041d\u0430\u0447\u0430\u0442\u044c"})]}),Object(r.jsxs)("div",{className:this.state.PopUp,children:[Object(r.jsx)("h2",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0418\u0433\u0440"}),Object(r.jsx)("p",{children:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0438 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)(g,{gamename:"\u0411\u043b\u0435\u043a\u0434\u0436\u0435\u043a",gamedesct:"\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 21 \u043e\u0434\u043d\u043e \u043e\u0447\u043a\u043e \u0441\u0447\u0438\u0442\u0430\u044f \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u044b \u043a\u0430\u0440\u0442"}),Object(r.jsx)(g,{gamename:"\u0421\u043b\u043e\u0442\u044b",gamedesct:"\u0412\u044b\u0431\u0435\u0439\u0442\u0435 2 \u0438\u043b\u0438 3 \u0440\u0438\u0441\u0443\u043d\u043a\u0430 \u043f\u043e\u0434\u0440\u044f\u0434"}),Object(r.jsx)(g,{gamename:"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u044f",gamedesct:"\u0414\u0443\u043c\u0430\u0439\u0442\u0435 \u043e \u0441\u0432\u043e\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0435 \u0438 \u0442\u0440\u044f\u0441\u0438\u0442\u0435 \u0448\u0430\u0440 \u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430"}),Object(r.jsx)(g,{gamename:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435",gamedesct:"lorem ipsum dolor"})]}),Object(r.jsx)("button",{onClick:this.togglePopUp.bind(this),children:"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u043a\u0443"})]})]})}}]),s}(a.Component),P=s(14),C=s(12),U=(s(26),s(27),function(t){return Object(r.jsx)("div",{className:"Card",style:{top:"".concat(t.top,"vh"),left:"".concat(t.left,"vw"),background:"url(".concat(t.bg,") no-repeat"),backgroundSize:"10vw 30vh"}})}),N=s.p+"static/media/six.2a00c292.png",S=s.p+"static/media/seven.988a0b9f.png",T=s.p+"static/media/eight.eaf543b9.png",w=s.p+"static/media/nine.1041424a.png",E=s.p+"static/media/ten.fbc4a99e.png",A=s.p+"static/media/jack.dd9fc94b.png",y=s.p+"static/media/queen.5da0bf52.png",M=s.p+"static/media/king.9991a67c.png",_=s.p+"static/media/ace.9d98f4bc.png",B=function(t){Object(O.a)(s,t);var e=Object(x.a)(s);function s(t){var a;return Object(f.a)(this,s),(a=e.call(this,t)).cards=[{value:6,pic:N},{value:7,pic:S},{value:8,pic:T},{value:9,pic:w},{value:10,pic:E},{value:2,pic:A},{value:3,pic:y},{value:4,pic:M},{value:11,pic:_}],a.startBJ=function(){document.getElementsByClassName("enough")[0].style.display="flex",a.takeCard(!0),setTimeout((function(){a.takeCard(!1)}),500),setTimeout((function(){a.takeCard(!0)}),1e3),setTimeout((function(){a.checkPoints(!1)}),1500)},a.takeCard=function(t){var e=Math.floor(9*Math.random());if(t){var s=15+5*a.state.userPos;a.setState({userCards:[].concat(Object(P.a)(a.state.userCards),[Object(r.jsx)(U,{top:"60",left:s,bg:a.cards[e].pic})])}),a.setState({userPos:a.state.userPos+1,userPoints:a.state.userPoints+a.cards[e].value})}else{var c=60-5*a.state.dillerPos;a.setState({dillerCards:[].concat(Object(P.a)(a.state.dillerCards),[Object(r.jsx)(U,{top:"10",left:c,bg:a.cards[e].pic})])}),a.setState({dillerPos:a.state.dillerPos+1,dillerPoints:a.state.dillerPoints+a.cards[e].value})}setTimeout((function(){a.checkPoints(!1)}),500)},a.togglePopUp=function(){var t="PopUp Active"===a.state.popUpActive?"PopUp notActive":"PopUp Active";a.setState({popUpActive:t})},a.enemyTurn=function(){a.state.dillerPoints<17&&(a.takeCard(!1),setTimeout((function(){a.enemyTurn()}),300))},a.checkPoints=function(t){a.state.userPoints>21?a.finishBJ("\u0423 \u0432\u0430\u0441 \u043f\u0435\u0440\u0435\u0431\u043e\u0440!","\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"):t&&(document.getElementsByClassName("enough")[0].style.display="none",a.enemyTurn(),setTimeout((function(){a.state.dillerPoints>21?a.finishBJ("\u0423 \u0434\u0438\u043b\u043b\u0435\u0440\u0430 \u043f\u0435\u0440\u0435\u0431\u043e\u0440!","\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"):a.state.dillerPoints>a.state.userPoints?a.finishBJ("\u0423 \u0434\u0438\u043b\u043b\u0435\u0440\u0430 \u0431\u043e\u043b\u044c\u0448\u0435!","\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"):a.state.dillerPoints===a.state.userPoints?a.finishBJ("\u041d\u0438\u0447\u044c\u044f!","\u0411\u0430\u043d\u043a \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430"):a.finishBJ("\u0423 \u0432\u0430\u0441 \u0431\u043e\u043b\u044c\u0448\u0435!","\u0412\u044b \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u043d\u043e\u0432\u0430")}),2e3))},a.finishBJ=function(t,e){console.log("fdfgfd"),a.setState({popUpTitle:t,popUpDescription:e}),a.setState({userPoints:0,dillerPoints:0,userCardAmount:0,dillerCardAmount:0,dillerPos:0,userPos:0,userCards:[],dillerCards:[]}),a.togglePopUp()},a.state={userPoints:0,dillerPoints:0,userCardAmount:0,dillerCardAmount:0,dillerPos:0,userPos:0,userCards:[],dillerCards:[],popUpActive:"PopUp Active",popUpTitle:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0411\u043b\u0435\u043a\u0434\u0436\u0435\u043a",popUpDescription:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0430\u0432\u043a\u0443 \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c"},a.takeCard=a.takeCard.bind(Object(C.a)(a)),a}return Object(v.a)(s,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{className:"BJ",children:[this.state.dillerCards,this.state.userCards,Object(r.jsx)("div",{className:"deck",onClick:function(){return t.takeCard(!0)},children:"\u0415\u0449\u0451"}),Object(r.jsx)("div",{className:"enough",onClick:function(){return t.checkPoints(!0)},children:"\u0425\u0432\u0430\u0442\u0438\u0442"}),Object(r.jsxs)("div",{className:this.state.popUpActive,children:[Object(r.jsx)("h2",{children:this.state.popUpTitle}),Object(r.jsx)("p",{children:this.state.popUpDescription}),Object(r.jsx)("a",{onClick:function(){t.togglePopUp(),t.startBJ()},children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0442\u0430\u0432\u043a\u0443"}),Object(r.jsx)(l.b,{to:"/rofl_cas",children:"\u0412 \u043c\u0435\u043d\u044e"}),Object(r.jsx)("input",{type:"text"})]})]})}}]),s}(a.Component),J=(s(28),s(29),function(t){Object(O.a)(s,t);var e=Object(x.a)(s);function s(t){return Object(f.a)(this,s),e.call(this,t)}return Object(v.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:this.props.windowStatus,children:Object(r.jsx)("img",{src:this.props.val,alt:"slotItem"})})}}]),s}(a.Component)),W=function(t){Object(O.a)(s,t);var e=Object(x.a)(s);function s(t){var a;return Object(f.a)(this,s),(a=e.call(this,t)).elems=["http://placekitten.com/200/400","http://placekitten.com/300/400","http://placekitten.com/1000/1000","http://placekitten.com/500/300","http://placekitten.com/600/300"],a.startSlots=function(){a.setState({logValue:"\u0421\u0442\u0430\u0432\u043a\u0430 \u043f\u0440\u0438\u043d\u044f\u0442\u0430"}),a.toggleWindows(),setTimeout((function(){a.fillTempElems()}),500),setTimeout((function(){a.fillTempElems()}),1e3),setTimeout((function(){a.fillTempElems()}),1500),setTimeout((function(){a.toggleWindows(),a.givePoints()}),3e3)},a.fillTempElems=function(){for(var t=[0,0,0],e=0;e<a.state.tempElems.length;e++){var s=a.elems[Math.floor(Math.random()*a.elems.length)];t[e]=s}a.setState({tempElems:t})},a.givePoints=function(){a.state.tempElems[0]===a.state.tempElems[1]&&a.state.tempElems[2]===a.state.tempElems[1]?a.setState({logValue:"3 \u0432 \u0440\u044f\u0434! \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 40$."}):a.state.tempElems[0]===a.state.tempElems[1]||a.state.tempElems[2]===a.state.tempElems[1]?a.setState({logValue:"2 \u0432 \u0440\u044f\u0434! \u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 30$."}):a.setState({logValue:"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438! \u0421\u0442\u0430\u0432\u043a\u0430 20$."})},a.toggleWindows=function(){var t="Window notWorked"===a.state.Machine?"Window Worked":"Window notWorked",e=""===a.state.butt?"hidden":"";a.setState({Machine:t,butt:e})},a.state={Machine:"Window notWorked",butt:"",logValue:"\u0421\u0442\u0430\u0432\u043a\u0430 = 20$",tempElems:["http://placekitten.com/100/300","http://placekitten.com/100/300","http://placekitten.com/100/300"]},a}return Object(v.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"Slots",children:Object(r.jsxs)("div",{className:"Machine",children:[Object(r.jsx)(J,{windowStatus:this.state.Machine,val:this.state.tempElems[0]}),Object(r.jsx)(J,{windowStatus:this.state.Machine,val:this.state.tempElems[1]}),Object(r.jsx)(J,{windowStatus:this.state.Machine,val:this.state.tempElems[2]}),Object(r.jsx)("div",{className:"bid",children:this.state.logValue}),Object(r.jsx)("button",{className:this.state.butt,onClick:this.startSlots,children:"\u041a\u0440\u0443\u0442\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442"})]})})}}]),s}(a.Component),V=(s(30),function(t){Object(O.a)(s,t);var e=Object(x.a)(s);function s(t){var a;return Object(f.a)(this,s),(a=e.call(this,t)).advices=["\u0414\u0430","\u041d\u0435\u0442","\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e"],a.shake=function(){var t="ball__area"===a.state.shake?"ball__area shake":"ball__area",e={see:"ballTextArea"===a.state.advice.see?"ballTextArea see":"ballTextArea",text:""};a.setState({advice:e}),a.setState({shake:t})},a.showAdvice=function(){var t={see:a.state.advice.see,text:a.advices[Math.floor(Math.random()*a.advices.length)]};a.setState({advice:t})},a.state={shake:"ball__area",advice:{see:"ballTextArea see",text:"\u0417\u0430\u0433\u0430\u0434\u0430\u0439"}},a}return Object(v.a)(s,[{key:"render",value:function(){var t=this;return Object(r.jsx)("div",{className:"Ball",children:Object(r.jsx)("div",{className:this.state.shake,onClick:function(){t.shake(),setTimeout((function(){t.shake(),t.showAdvice()}),1e3)},children:Object(r.jsx)("div",{className:this.state.advice.see,children:this.state.advice.text})})})}}]),s}(a.Component));s(31);var $=function(){return Object(r.jsxs)(l.a,{className:"App",children:[Object(r.jsx)(b,{}),Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/rofl_cas",element:Object(r.jsx)(k,{})}),Object(r.jsx)(o.a,{path:"/bj",element:Object(r.jsx)(B,{})}),Object(r.jsx)(o.a,{path:"/slots",element:Object(r.jsx)(W,{})}),Object(r.jsx)(o.a,{path:"/ball",element:Object(r.jsx)(V,{})})]})]})};n.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)($,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0572e2dd.chunk.js.map