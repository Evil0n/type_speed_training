(this.webpackJsonpunipage_testcase=this.webpackJsonpunipage_testcase||[]).push([[0],{15:function(e,t,n){e.exports={Layout:"App_Layout__PvsOC",Header:"App_Header__GaTBK",Content:"App_Content__LFMSe",Text:"App_Text__DCud9",Text__success:"App_Text__success__30f0-",Text__pointer:"App_Text__pointer__1r_np",Text__pointer_error:"App_Text__pointer_error__2fnJT"}},85:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n.n(s),r=n(26),u=n.n(r),i=n(39),o=n(20),j=n(15),b=n.n(j),l=n(3),O=n.n(l),_=n(90),f=n(93),x=n(89),d=n(91),p=n(92),h=n(88),g=n(7),v=_.a.Content,m=_.a.Header,T=_.a.Footer;var C=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)(0),u=Object(o.a)(r,2),j=u[0],l=u[1],C=Object(s.useState)(!0),k=Object(o.a)(C,2),M=k[0],S=k[1],w=Object(s.useState)(0),y=Object(o.a)(w,2),F=y[0],L=y[1],A=Object(s.useState)([]),E=Object(o.a)(A,2),N=E[0],H=E[1],I=Object(s.useState)(!1),B=Object(o.a)(I,2),J=B[0],P=B[1],D=Object(s.useMemo)((function(){return n.slice(0,j)}),[n,j]),G=Object(s.useMemo)((function(){return n[j]}),[n,j]),K=Object(s.useMemo)((function(){return n.slice(j+1,n.length)}),[n,j]),q=Object(s.useMemo)((function(){var e=[b.a.Text__pointer];return M||e.push(b.a.Text__pointer_error),O()(e)}),[M]),z=Object(s.useMemo)((function(){var e=F||1;return(D.length/e*60).toFixed(0)}),[F,D]),Q=Object(s.useMemo)((function(){return(100*(1-N.length/n.length)).toFixed(1)}),[N,n]),R=Object(s.useCallback)((function(e){1===e.key.length&&l((function(t){var c=e.key===n[t];return S(c),c?++t:(H((function(e){return Object(i.a)(new Set([].concat(Object(i.a)(e),[t])))})),t)}))}),[l,n]),U=Object(s.useCallback)((function(){clearInterval(c),window.removeEventListener("keydown",R),P(!1)}),[R,P]),V=Object(s.useCallback)((function(){U(),l(0),S(!0),H([]),L(0)}),[U,l,S,H,L]),W=Object(s.useCallback)((function(){U(),P(!0),c=setInterval((function(){L((function(e){return++e}))}),1e3),window.addEventListener("keydown",R)}),[U,R,P]),X=Object(s.useMemo)((function(){return J?U:W}),[W,U,J]),Y=Object(s.useMemo)((function(){return J?"\u041f\u0430\u0443\u0437\u0430":"\u0421\u0442\u0430\u0440\u0442"}),[J]);return Object(s.useEffect)((function(){j>=n.length&&U(),console.log(j,n.length)}),[n,U,j]),Object(s.useEffect)((function(){return function(){return U()}}),[]),Object(s.useEffect)((function(){fetch("https://fish-text.ru/get").then((function(e){return e.json()})).then((function(e){a(e.text)}))}),[]),Object(g.jsxs)(_.a,{className:b.a.Layout,children:[Object(g.jsx)(m,{children:Object(g.jsx)("h1",{className:b.a.Header,children:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u043f\u0435\u0447\u0430\u0442\u0438"})}),Object(g.jsx)(v,{className:b.a.Content,children:Object(g.jsxs)(f.b,{direction:"vertical",children:[Object(g.jsxs)("div",{className:b.a.Text,children:[Object(g.jsx)("span",{className:b.a.Text__success,children:D}),Object(g.jsx)("span",{className:q,children:G}),Object(g.jsx)("span",{children:K})]}),Object(g.jsxs)(f.b,{children:[Object(g.jsx)(x.a,{onClick:X,children:Y}),Object(g.jsx)(x.a,{onClick:V,children:"\u0421\u0442\u043e\u043f"})]}),Object(g.jsxs)(d.a,{gutter:16,children:[Object(g.jsx)(p.a,{span:12,children:Object(g.jsx)(h.a,{title:"\u041f\u0440\u043e\u0448\u043b\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",value:F,suffix:"\u0441\u0435\u043a"})}),Object(g.jsx)(p.a,{span:12,children:Object(g.jsx)(h.a,{title:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0439 \u043f\u0435\u0447\u0430\u0442\u0438",value:z,suffix:"\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 \u043c\u0438\u043d\u0443\u0442\u0443"})}),Object(g.jsx)(p.a,{span:24,style:{marginTop:32},children:Object(g.jsx)(h.a,{title:"\u0410\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c",value:Q,suffix:"%"})})]})]})}),Object(g.jsx)(T,{children:"Evil0n \xa9 2021"})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(84);u.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),k()}},[[85,1,2]]]);
//# sourceMappingURL=main.06df6391.chunk.js.map