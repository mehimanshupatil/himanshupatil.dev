(self.webpackChunkhimanshupatil_dev=self.webpackChunkhimanshupatil_dev||[]).push([[351],{795:function(e,t,n){"use strict";n.d(t,{W2:function(){return Z},X6:function(){return y},kC:function(){return b},rU:function(){return x},xu:function(){return p},xv:function(){return v}});var o=n(5260),r=n(917),a=n(7294),i=n(3431);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=["__themeKey","__css","variant","css","sx","as"],g=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","m","mt","mr","mb","ml","mx","my","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","p","pt","pr","pb","pl","px","py","color","backgroundColor","bg","opacity"],f=function(e){return g.includes(e)},p=(0,a.forwardRef)((function(e,t){var n=(0,o.u)(),a=e,s=a.__themeKey,f=void 0===s?"variants":s,p=a.__css,b=a.variant,m=a.css,h=a.sx,x=a.as,v=void 0===x?"div":x,y=c(a,d),k=(0,i.iv)(p)(n),w=(0,i.U2)(n,f+"."+b)||(0,i.U2)(n,b),Z=w&&(0,i.iv)(w)(n),S=(0,i.iv)(h)(n),E=(0,i.iv)(function(e){for(var t,n={},o=u(g);!(t=o()).done;){var r=t.value;n[r]=e[r]}return n}(y))(n),j=[{boxSizing:"border-box",margin:0,minWidth:0},k,Z,S,E,m];return g.forEach((function(e){delete y[e]})),(0,r.tZ)(v,l({ref:t,css:j},y))})),b=a.forwardRef((function(e,t){return a.createElement(p,l({ref:t},e,{sx:l({display:"flex"},e.sx)}))})),m=function(e){return function(t){var n={};for(var o in t)e(o||"")&&(n[o]=t[o]);return n}},h=/^m[trblxy]?$/;m((function(e){return h.test(e)})),m((function(e){return!h.test(e)}));var x=a.forwardRef((function(e,t){return a.createElement(p,l({ref:t,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),v=a.forwardRef((function(e,t){return a.createElement(p,l({as:"span",ref:t,variant:"default"},e,{__themeKey:"text"}))})),y=a.forwardRef((function(e,t){return a.createElement(p,l({ref:t,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),k=["size"],w=a.forwardRef((function(e,t){var n=e.size,o=void 0===n?24:n,r=l({xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"currentcolor"},c(e,k));return a.createElement(p,l({ref:t,as:"svg"},r))}));w.displayName="SVG";m(f),m((function(e){return!f(e)}));var Z=a.forwardRef((function(e,t){return a.createElement(p,l({ref:t,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))}))},1714:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var o=n(917),r=n(8733),a=n(3431),i=n(795),l=n(1151),c=n(7294),s=n(4443),u=n(6197),d=n(1563);var g=e=>{const{clipboard:t}=window.navigator;if(!t||"function"!=typeof t.writeText){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly","true"),t.setAttribute("contenteditable","true"),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select();const n=document.createRange(),o=window.getSelection();return null==o||o.removeAllRanges(),null==o||o.addRange(n),t.setSelectionRange(0,t.value.length),document.execCommand("copy"),document.body.removeChild(t),Promise.resolve(!0)}return t.writeText(e)},f=n(8170);var p=e=>{let{content:t,duration:n=5e3,fileName:o="",trim:a=!1}=e;const{0:i,1:l}=(0,c.useState)(!1),s=i?(o?o+" ":"")+"copied to clipboard":(o?o+": ":"")+"copy code to clipboard";return(0,r.tZ)("button",{type:"button",name:s,disabled:i,className:"code-copy-button",sx:{variant:"copyButton"},onClick:async()=>{await g(a?t.trim():t),l(!0),await(e=>new Promise((t=>{setTimeout(t,e)})))(n),l(!1)}},i?"Copied":"Copy",(0,r.tZ)("span",{sx:f.j,"aria-roledescription":"status"},s))},b=n(3494),m=n(4415);var h=e=>{let{codeString:t,withLineNumbers:n=!1,title:o="",className:r,highlight:a=""}=e;const{showLineNumbers:i,showCopyButton:l}=(0,b.Z)(),[g]=(0,u.If)(),f="dark"===g,h=(0,s.G3)(r),x=(0,s.om)(a),v=n||i;return c.createElement(d.y$,{code:t,language:h,theme:f?m.$_:m.Wb},(e=>{let{className:n,tokens:r,getLineProps:a,getTokenProps:i}=e;return c.createElement(c.Fragment,null,c.createElement("div",{className:"gatsby-highlight","data-language":h},o&&c.createElement("div",{className:"code-title"},c.createElement("div",null,o)),c.createElement("pre",{className:n,"data-linenumber":v},l&&c.createElement(p,{content:t,fileName:o}),c.createElement("code",{className:"code-content language-"+h},r.map(((e,t)=>{const n=a({line:e,key:t});return x(t)&&(n.className=n.className+" highlight-line",n.style={...n.style,backgroundColor:"var(--theme-ui-colors-highlightLineBg)"}),c.createElement("div",n,v&&c.createElement("span",{className:"line-number-style"},t+1),e.map(((e,t)=>c.createElement("span",i({token:e,key:t})))))}))))))}))},x=n(5221);var v={Text:e=>c.createElement(i.xv,e),Title:e=>c.createElement(x.Z,e),pre:e=>{const t=(0,s.uX)(e);return t?c.createElement(h,t):c.createElement("pre",e)}};const y={position:"relative",width:"24px",height:"24px",borderRadius:"50%",transition:"all 0.45s ease","&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",transition:"transform 0.45s ease",borderRadius:"50%"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",transition:"all 0.35s ease",boxShadow:e=>"0 -23px 0 "+(0,a.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,a.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,a.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,a.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,a.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,a.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,a.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,a.U2)(e,"colors.toggleIcon")}},k={opacity:.65,position:"relative",borderRadius:"4px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}},w=()=>(0,r.tZ)("button",{type:"button",sx:k,"aria-label":"Color mode toggle"},(0,r.tZ)("div",{sx:{...y,transform:"scale(0.55)","&:before":{...y["&:before"],opacity:0},"&:after":{...y["&:after"],transform:"scale(0)"}}})),Z=e=>{let{children:t,fallback:n}=e;const[o,a]=c.useState(!1);return c.useEffect((()=>{a(!0)}),[]),o?(0,r.tZ)(c.Fragment,null,t):n?(0,r.tZ)(c.Fragment,null,n):null};var S=()=>{const[e,t]=(0,u.If)(),n="dark"===e;return(0,r.tZ)(Z,{fallback:(0,r.tZ)(w,null)},(0,r.tZ)("button",{onClick:()=>{const e=n?"light":"dark";t(e),document.documentElement.classList.value="theme-ui-"+e},type:"button","aria-label":n?"Activate Light Mode":"Activate Dark Mode",title:n?"Activate Light Mode":"Activate Dark Mode",sx:k},(0,r.tZ)("div",{sx:{...y,border:e=>n?"4px solid "+(0,a.U2)(e,"colors.toggleIcon"):"none",backgroundColor:n?"toggleIcon":"transparent",transform:n?"scale(0.55)":"scale(1)",overflow:n?"visible":"hidden",boxShadow:e=>n?"none":"inset 8px -8px 0px 0px "+(0,a.U2)(e,"colors.toggleIcon"),"&:before":{...y["&:before"],border:e=>n?"2px solid "+(0,a.U2)(e,"colors.toggleIcon"):"none",transform:n?"translate(14px, -14px)":"translate(0, 0)",opacity:n?0:1},"&:after":{...y["&:after"],transform:n?"scale(1)":"scale(0)"}}})))},E=n(1883),j=n(9706);var C=e=>{let{nav:t}=e;const{basePath:n}=(0,b.Z)();return(0,r.tZ)(c.Fragment,null,t&&t.length>0&&(0,r.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((e=>(0,r.tZ)(E.Link,{activeClassName:"active",key:e.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,j.Z)("/"+n+"/"+e.slug)},e.title)))))},A=n(4232);var I=()=>{const{siteTitle:e}=(0,A.Z)(),{basePath:t}=(0,b.Z)();return(0,r.tZ)(E.Link,{to:(0,j.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,r.tZ)("div",{sx:{my:0,fontWeight:"semibold",fontSize:[3,4]}},e))};var U=()=>{const{externalLinks:e}=(0,b.Z)();return(0,r.tZ)(c.Fragment,null,e&&e.length>0&&(0,r.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((e=>(0,r.tZ)(i.rU,{key:e.url,href:e.url},e.name)))))};var z=()=>{const{navigation:e}=(0,b.Z)();return(0,r.tZ)("header",{sx:{mb:[5,6]}},(0,r.tZ)(i.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,r.tZ)(I,null),(0,r.tZ)(S,null)),(0,r.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,r.tZ)(C,{nav:e}),(0,r.tZ)(U,null)))};var L=()=>{const{siteTitle:e}=(0,A.Z)();return(0,r.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,r.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,r.tZ)("div",null,(0,r.tZ)(i.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,r.tZ)(i.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))};var N={".prism-code":{fontSize:[1,1,2],webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language='none'], .gatsby-highlight[data-language='']":{".code-content":{pt:"1rem"}},".code-content":{padding:"2rem 1rem 1rem 1rem",color:"plain-color",backgroundColor:"plain-backgroundColor"},".token":{display:"inline-block"},"p > code, li > code":{bg:"muted",color:"heading",px:2,py:1,borderRadius:"4px",fontSize:"0.95em"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",borderRadius:"4px",overflow:"hidden",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 4px 4px",color:"black",fontSize:"12px",letterSpacing:"0.035rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",fontFamily:"body",fontWeight:600},'pre[class~="language-golang"]:before, pre[class~="language-go"]:before':{content:'"go"',background:"#79d4fd",color:"black"},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"muted"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:"muted",color:"text",fontSize:1,px:3,py:2,fontFamily:"body"},".token-line":{pr:3},".highlight-line":{borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".footnotes":{borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:"divide",pt:2,mt:5,overflow:"auto",".sr-only":f.j}};const R={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}};var O=e=>{let{children:t,...n}=e;return(0,r.tZ)("a",Object.assign({},n,{sx:R,href:"#skip-nav","data-skip-link":"true"}),t)};var _=e=>{let{children:t,className:n=""}=e;return(0,r.tZ)(l.Zo,{components:v},(0,r.tZ)(o.xB,{styles:e=>({"*":{boxSizing:"inherit"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,a.U2)(e,"colors.text"),color:(0,a.U2)(e,"colors.background")}})}),(0,r.tZ)(O,null,"Skip to content"),(0,r.tZ)(i.W2,null,(0,r.tZ)(z,null),(0,r.tZ)(i.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:{...N},className:n},t),(0,r.tZ)(L,null)))}},5221:function(e,t,n){"use strict";var o=n(8733),r=n(795);t.Z=e=>{let{text:t,children:n,as:a="h2",className:i=""}=e;return(0,o.tZ)("div",{sx:{justifyContent:"space-between",alignItems:"center",borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:"divide",pb:3,mb:4,flexFlow:"wrap",boxSizing:"border-box",display:"flex"}},(0,o.tZ)(r.xu,{as:a,sx:{fontWeight:"medium",fontSize:[3,4],fontFamily:"heading",lineHeight:"heading",color:"heading"},className:i},t),n?(0,o.tZ)("div",{sx:{color:"secondary",a:{variant:"links.secondary"}}},n):null)}},3494:function(e,t,n){"use strict";var o=n(1883);t.Z=()=>(0,o.useStaticQuery)("3090400250").minimalBlogConfig},4232:function(e,t,n){"use strict";var o=n(1883);t.Z=()=>(0,o.useStaticQuery)("2421966660").site.siteMetadata},8170:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});const o={border:0,clip:"rect(0, 0, 0, 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}},9706:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}},5683:function(e,t,n){var o=1/0,r="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\ud800-\\udfff",c="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",d="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",g="['’]",f="["+d+"]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",b="\\d+",m="["+c+"]",h="["+s+"]",x="[^"+l+d+b+c+s+u+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",k="["+u+"]",w="(?:"+h+"|"+x+")",Z="(?:"+k+"|"+x+")",S="(?:['’](?:d|ll|m|re|s|t|ve))?",E="(?:['’](?:D|LL|M|RE|S|T|VE))?",j="(?:"+p+"|\\ud83c[\\udffb-\\udfff])"+"?",C="[\\ufe0e\\ufe0f]?",A=C+j+("(?:\\u200d(?:"+["[^"+l+"]",v,y].join("|")+")"+C+j+")*"),I="(?:"+[m,v,y].join("|")+")"+A,U=RegExp(g,"g"),z=RegExp(p,"g"),L=RegExp([k+"?"+h+"+"+S+"(?="+[f,k,"$"].join("|")+")",Z+"+"+E+"(?="+[f,k+w,"$"].join("|")+")",k+"?"+w+"+"+S,k+"+"+E,b,I].join("|"),"g"),N=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,R="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,O="object"==typeof self&&self&&self.Object===Object&&self,_=R||O||Function("return this")();var T,F=(T={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==T?void 0:T[e]});var W=Object.prototype.toString,B=_.Symbol,D=B?B.prototype:void 0,G=D?D.toString:void 0;function K(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&W.call(e)==r}(e))return G?G.call(e):"";var t=e+"";return"0"==t&&1/e==-o?"-0":t}function M(e){return null==e?"":K(e)}var P,H=(P=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,o){var r=-1,a=e?e.length:0;for(o&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=M(e),void 0===(t=n?void 0:t)?function(e){return N.test(e)}(e)?function(e){return e.match(L)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=M(e))&&e.replace(i,F).replace(z,"")}(e).replace(U,"")),P,"")});e.exports=H},8733:function(e,t,n){"use strict";n.d(t,{tZ:function(){return o}});var o=n(2396).tZ},4443:function(e,t,n){"use strict";n.d(t,{G3:function(){return r},GL:function(){return o},om:function(){return i},uX:function(){return a}});var o=n(5683),r=(e="")=>e.split("language-").pop(),a=e=>{if(e?.children?.props){let{children:t,className:n="",...o}=e.children.props,r=n.match(/language-([\0-\uFFFF]*)/);return{codeString:t.trim(),className:n,language:null!==r?r[1]:"",...o}}},i=e=>{if(!e)return()=>!1;let t=e.split(",").map((e=>e.split("-").map((e=>parseInt(e,10)))));return e=>{let n=e+1;return t.some((([e,t])=>t?n>=e&&n<=t:n===e))}}}}]);
//# sourceMappingURL=commons-2fc289a71ba81de2b597.js.map