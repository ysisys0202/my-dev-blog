(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{64822:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[category]/[slug]",function(){return t(28588)}])},28588:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return nZ},default:function(){return nC}});var r={};t.r(r),t.d(r,{MDXContext:function(){return j},MDXProvider:function(){return P},useMDXComponents:function(){return N},withMDXComponents:function(){return G}});var i=t(82729),o=t(35944),l=t(70917),a=t(33050),c=t(19046),u=t(55441),d=t(41664),s=t.n(d),p=t(59752),f=t(38452),m=t(41204),h=t(67294),g=t(7303);function b(){let n=(0,i._)(['\n    &::after {\n      content: ":";\n      margin: 0 4px;\n    }\n  ']);return b=function(){return n},n}let v={label:(0,l.iv)(b())};var x=n=>{let{color:e=g.O9.white,label:t,value:r,className:i="",css:l}=n;return(0,o.BX)("div",{...i&&{className:i},css:l,children:[(0,o.tZ)(f.default,{variant:"body2",element:"span",color:e,css:v.label,children:t}),(0,o.tZ)(f.default,{variant:"body2",element:"span",color:e,className:"value",children:r})]})};function w(){let n=(0,i._)(["\n    padding-bottom: 48px;\n  "]);return w=function(){return n},n}function y(){let n=(0,i._)(["\n    margin-bottom: 24px;\n    width: 100%;\n    height: 240px;\n    object-fit: cover;\n  "]);return y=function(){return n},n}function _(){let n=(0,i._)(["\n    margin-top: 8px;\n  "]);return _=function(){return n},n}function k(){let n=(0,i._)(["\n    margin-top: 4px;\n  "]);return k=function(){return n},n}function Z(){let n=(0,i._)(["\n    margin-top: 4px;\n  "]);return Z=function(){return n},n}let C={self:(0,l.iv)(w()),headerImage:(0,l.iv)(y()),title:(0,l.iv)(_()),subTitle:(0,l.iv)(k()),postInfo:(0,l.iv)(Z())};var E=n=>{let{title:e,subTitle:t,createdAt:r,headerImage:i,categoryName:l}=n,a=new Date(r).toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"});return(0,o.tZ)("header",{css:C.self,children:(0,o.BX)("div",{children:[(0,o.tZ)(s(),{href:"/posts/".concat(l),children:(0,o.tZ)(m.Z,{variant:"outlined",borderColor:p.Q.primary,textColor:p.Q.primary,size:"sm",children:l})}),(0,o.tZ)(f.default,{variant:"h1",element:"h1",color:p.Q.primary,css:C.title,children:e}),t&&(0,o.tZ)(f.default,{variant:"subtitle1",element:"p",color:p.Q.primary,css:C.subTitle,children:t}),(0,o.tZ)(x,{label:"최종 수정일",value:a,color:p.Q.tertiary,css:C.postInfo})]})})},Q=t(5152),I=t.n(Q);let B=n=>n.trim().replace(RegExp("[^\\p{L}\\s-]","gu"),"").replace(/\s+/g,"-").toLowerCase(),D=n=>{let e=n.split("\n"),t=e.filter(n=>"#"===n[0]).map(n=>{let e=n.split(" ");return{level:e[0].length,title:e.slice(1).join(" "),id:B(e.slice(1).join(" "))}});return t};var z=n=>{let[e,t]=(0,h.useState)([]);return(0,h.useEffect)(()=>{t(D(n))},[]),{TOC:e}},X=t(13570);function M(){let n=(0,i._)(["\n  word-break: keep-all;\n  p {\n    white-space: pre-wrap;\n  }\n  del {\n    font-size: 14px;\n    color: ",";\n  }\n  table {\n    background-color: ",";\n    thead {\n      border-bottom: 2px solid ",";\n    }\n    th,\n    td {\n      padding: 10px 16px;\n      border: 1px solid ",';\n    }\n  }\n  a {\n    text-decoration: underline;\n    &::after {\n      content: "↗️";\n      font-size: 0.6em;\n    }\n  }\n  ol {\n    list-style: decimal;\n  }\n  ul {\n    list-style: disc;\n  }\n  li {\n    margin-left: 16px;\n    &:not(:first-of-type) {\n      margin-top: 8px;\n    }\n  }\n  blockquote {\n    position: relative;\n    padding: 12px 24px;\n    background-color: ',";\n    font-size: ",";\n    @media "," {\n      font-size: ",';\n    }\n    &::before {\n      content: "";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 4px;\n      height: 100%;\n      background-color: ',";\n    }\n  }\n"]);return M=function(){return n},n}let T=(0,l.iv)(M(),p.Q.tertiary,p.Q.backgroundGlobal,p.Q.border,p.Q.border,p.Q.backgroundElement,X.c.size.sm,u.B.md,X.c.size.md,p.Q.primary);var S=t(32746);let j=h.createContext({});function G(n){return function(e){let t=N(e.components);return h.createElement(n,{...e,allComponents:t})}}function N(n){let e=h.useContext(j);return h.useMemo(()=>"function"==typeof n?n(e):{...e,...n},[e,n])}let O={};function P({components:n,children:e,disableParentContext:t}){let r;return r=t?"function"==typeof n?n({}):n||O:N(n),h.createElement(j.Provider,{value:r},e)}function R({compiledSource:n,frontmatter:e,scope:t,components:i={},lazy:o}){let[l,a]=(0,h.useState)(!o||"undefined"==typeof window);(0,h.useEffect)(()=>{if(o){let n=window.requestIdleCallback(()=>{a(!0)});return()=>window.cancelIdleCallback(n)}},[]);let c=(0,h.useMemo)(()=>{let i=Object.assign({opts:{...r,...S.jsxRuntime}},{frontmatter:e},t),o=Object.keys(i),l=Object.values(i),a=Reflect.construct(Function,o.concat(`${n}`));return a.apply(a,l).default},[t,n]);if(!l)return h.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=h.createElement(P,{components:i},h.createElement(c,null));return o?h.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(n){var e=Date.now();return setTimeout(function(){n({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(n){clearTimeout(n)});let q=I()(()=>t.e(237).then(t.bind(t,74237)),{loadableGenerated:{webpack:()=>[74237]}}),A=I()(()=>Promise.resolve().then(t.bind(t,38452)),{loadableGenerated:{webpack:()=>[38452]}}),L=I()(()=>t.e(711).then(t.bind(t,33711)),{loadableGenerated:{webpack:()=>[33711]}}),H=I()(()=>Promise.all([t.e(675),t.e(814)]).then(t.bind(t,79814)),{loadableGenerated:{webpack:()=>[79814]}}),W=I()(()=>Promise.all([t.e(181),t.e(703)]).then(t.bind(t,92703)),{loadableGenerated:{webpack:()=>[92703]}}),Y=I()(()=>t.e(925).then(t.bind(t,11925)),{loadableGenerated:{webpack:()=>[11925]}});I()(()=>t.e(675).then(t.t.bind(t,25675,23)),{loadableGenerated:{webpack:()=>[25675]}});let F=I()(()=>t.e(307).then(t.bind(t,89307)),{loadableGenerated:{webpack:()=>[89307]}});var K=n=>{let{postData:e,mdx:t}=n,{compiledSource:r}=t,{content:i,...l}=e;return(0,o.tZ)("div",{css:T,children:(0,o.tZ)(R,{compiledSource:r,scope:{...l},components:{h2:n=>{let{children:e,...t}=n;return(0,o.tZ)(A,{variant:"h3",element:"h2",color:p.Q.primary,id:B(e),...t,children:e})},h3:n=>{let{children:e,...t}=n;return(0,o.tZ)(A,{variant:"h4",element:"h3",color:p.Q.primary,id:B(e),...t,children:e})},h4:n=>{let{children:e,...t}=n;return(0,o.tZ)(A,{variant:"subtitle1",element:"h4",color:p.Q.primary,id:B(e),...t,children:e})},code:n=>{let{children:e,className:t}=n,r=null==t?void 0:t.split("-")[1];return(0,o.tZ)(W,{language:r||"javascript",children:e})},Callout:n=>{let{children:e,...t}=n,r="p"===e.type?e.props.children:e;return(0,o.tZ)(Y,{...t,children:r})},PostImage:H,Spacing:q,HighlightText:L,YoutubePlayer:F},frontmatter:{...l}})})};function $(){let n=(0,i._)(["\n    margin-top: 24px;\n    @media "," {\n      margin-top: 32px;\n    }\n  "]);return $=function(){return n},n}let J={self:(0,l.iv)($(),u.B.md)};var U=n=>{let{postData:e,mdx:t}=n,{title:r,createdAt:i,subTitle:l,categoryName:a}=e;return(0,o.BX)("article",{css:J.self,children:[(0,o.tZ)(E,{title:r,createdAt:i,subTitle:l,categoryName:a}),(0,o.tZ)(K,{mdx:t,postData:e})]})},V=t(24986),nn=t(85893);function ne({id:n,host:e,repo:r,repoId:i,category:o,categoryId:l,mapping:a,term:c,strict:u,reactionsEnabled:d,emitMetadata:s,inputPosition:p,theme:f,lang:m,loading:g}){let[b,v]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{b||(t.e(355).then(t.bind(t,44355)),v(!0))},[]),b?(0,nn.jsx)("giscus-widget",{id:n,host:e,repo:r,repoid:i,category:o,categoryid:l,mapping:a,term:c,strict:u,reactionsenabled:d,emitmetadata:s,inputposition:p,theme:f,lang:m,loading:g}):null}function nt(){let n=(0,i._)(["\n    margin-top: 80px;\n  "]);return nt=function(){return n},n}let nr={self:(0,l.iv)(nt())};var ni=()=>{let{colorTheme:n}=(0,V.Z)();return(0,o.tZ)("div",{css:nr.self,id:"post-comments-wrapper",children:(0,o.tZ)(ne,{id:"post-comments",repo:"ysisys0202/dev-blog-comment",repoId:"R_kgDOMo_Zbg",category:"Announcements",categoryId:"DIC_kwDOMo_Zbs4Ch9uk",mapping:"pathname",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"dark"===n?"noborder_gray":"light_high_contrast",lang:"ko",loading:"lazy"})})},no=t(59015),nl=(n,e)=>{let t=null;return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];t||(t=setTimeout(()=>{n(...i),t=null},e))}};function na(){let n=(0,i._)(["\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    color: ",';\n    font-weight: 400;\n\n    &::after {\n      content: "";\n    }\n    &:hover,\n    &.is-active {\n      color: ',';\n      font-weight: 600;\n      &::after {\n        content: "\uD83D\uDC40";\n        transform: translateY(4px);\n      }\n    }\n    &.is-active {\n      button {\n        &::after {\n          left: 0;\n          right: auto;\n          width: 100%;\n          transition: width 50ms ease-in-out;\n        }\n      }\n    }\n  ']);return na=function(){return n},n}function nc(){let n=(0,i._)(['\n    position: relative;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    &::after {\n      content: "";\n      position: absolute;\n      right: 0;\n      bottom: 0;\n      width: 0;\n      height: 2px;\n      background-color: ',";\n      transition: width 200ms ease-in-out;\n    }\n  "]);return nc=function(){return n},n}function nu(){let n=(0,i._)(["\n      font-size: 16px;\n      margin-top: 8px;\n    "]);return nu=function(){return n},n}function nd(){let n=(0,i._)(["\n      padding-left: 8px;\n      font-size: 15px;\n    "]);return nd=function(){return n},n}function ns(){let n=(0,i._)(["\n      padding-left: 16px;\n      font-size: 14px;\n    "]);return ns=function(){return n},n}function np(){let n=(0,i._)(["\n      padding-left: 24px;\n      font-size: 13px;\n    "]);return np=function(){return n},n}let nf={self:(0,l.iv)(na(),p.Q.tertiary,p.Q.primary),button:(0,l.iv)(nc(),p.Q.secondary),level:{2:(0,l.iv)(nu()),3:(0,l.iv)(nd()),4:(0,l.iv)(ns()),5:(0,l.iv)(np())}};var nm=n=>{let{heading:e,isActive:t}=n,{title:r,id:i,level:l}=e,a=[nf.self,nf.level[l]],c=n=>{let e=document.querySelector("#post-container #".concat(n));if(!e)return;let t=e.getBoundingClientRect().top+scrollY-no.fy-nb;scrollTo({top:t,behavior:"smooth"})};return(0,o.tZ)("li",{css:a,className:t?"is-active":"",children:(0,o.tZ)("button",{type:"button",css:nf.button,onClick:()=>{c(i)},children:r})})};function nh(){let n=(0,i._)(["\n    position: fixed;\n    top: ","px;\n    right: 0;\n    width: 20%;\n    min-width: 230px;\n    height: calc(100dvh - ","px);\n    border-left: 1px solid ",";\n  "]);return nh=function(){return n},n}function ng(){let n=(0,i._)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, calc(-70% - ","px));\n    width: calc(100% - 48px);\n    margin-top: 1em;\n  "]);return ng=function(){return n},n}let nb=40,nv={self:(0,l.iv)(nh(),no.fy,no.fy,p.Q.border),toc:(0,l.iv)(ng(),no.fy)};var nx=n=>{let{TOC:e}=n,[t,r]=(0,h.useState)(""),i=nl(()=>{let n=document.querySelectorAll("#post-container h2, h3, h4");null==n||n.forEach(n=>{let e=n.getBoundingClientRect().top-no.fy-nb;e<=0&&r(n.id)})},200);return(0,h.useEffect)(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),(0,o.tZ)("nav",{css:nv.self,children:(0,o.BX)("div",{css:nv.toc,children:[(0,o.tZ)(f.default,{variant:"subtitle1",element:"strong",children:"목차"}),(0,o.tZ)("ol",{children:e.map(n=>(0,o.tZ)(nm,{heading:n,isActive:t===n.id},n.id))})]})})},nw=t(78909);function ny(){let n=(0,i._)(["\n    padding: 32px 24px 80px;\n    @media "," {\n      padding: 48px 24px 80px;\n      width: 80%;\n      max-width: calc(100% - 230px);\n    }\n    @media "," {\n      padding: 48px 56px 80px;\n      max-width: 860px;\n    }\n  "]);return ny=function(){return n},n}function n_(){let n=(0,i._)(["\n    margin-top: 48px;\n    font-size: 14px;\n    color: ",";\n    text-align: center;\n    a {\n      text-decoration: underline;\n    }\n    @media "," {\n      margin-top: 120px;\n    }\n  "]);return n_=function(){return n},n}let nk={self:(0,l.iv)(ny(),u.B.md,u.B.lg),feedback:(0,l.iv)(n_(),p.Q.tertiary,u.B.md)};var nZ=!0,nC=n=>{let{postData:e,mdx:t}=n,r=!(0,nw.Z)(u.B.md),{TOC:i}=z(e.content);return(0,o.BX)(c.Z,{children:[(0,o.tZ)(a.Z,{title:e.title,description:e.createdAt,ogImage:e.thumbnail,keywords:e.keywords}),(0,o.BX)("div",{id:"post-container",css:nk.self,children:[(0,o.tZ)(U,{postData:e,mdx:t}),(0,o.BX)("p",{css:nk.feedback,children:["게시글의 오류 지적, 내용 보충, 질문 등의 피드백은 언제나 환영입니다.",(0,o.tZ)("br",{}),"아래 댓글창 혹은",""," ",(0,o.tZ)("a",{href:"mailto:ysisys0202@gmail.com",children:"ysisys0202@gmail.com"}),"으로 남겨주세요."]}),(0,o.tZ)(ni,{})]}),!r&&(0,o.tZ)(nx,{TOC:i})]})}},32746:function(n,e,t){n.exports.jsxRuntime=t(85893)}},function(n){n.O(0,[664,473,774,888,179],function(){return n(n.s=64822)}),_N_E=n.O()}]);