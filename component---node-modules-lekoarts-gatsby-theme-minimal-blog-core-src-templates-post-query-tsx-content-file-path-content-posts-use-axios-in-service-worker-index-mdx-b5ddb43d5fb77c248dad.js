"use strict";(self.webpackChunkhimanshupatil_dev=self.webpackChunkhimanshupatil_dev||[]).push([[209],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var a=n(7294),A=n(8733),r=n(795),i=n(1714),l=n(6799),c=n(8871);var o=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,A.tZ)(i.Z,null,(0,A.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,A.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,A.tZ)("time",null,t.date),t.tags&&(0,A.tZ)(a.Fragment,null," — ",(0,A.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,A.tZ)("span",null,t.timeToRead," min read")),(0,A.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,A.tZ)(o,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,A.tZ)(c.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),A=n(7294),r=n(1883),i=n(3494),l=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,a.tZ)(A.Fragment,null,t.map(((e,t)=>(0,a.tZ)(A.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),A=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:l="",children:c=null,canonicalUrl:o=""}=e;const s=(0,r.Z)(),{siteTitle:m,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:u,author:h,siteLanguage:E}=s,b={title:t?t+" | "+m:p,description:n||d,url:""+g+(i||""),image:""+g+(l||u)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:E}),a.createElement("title",null,b.title),a.createElement("meta",{name:"description",content:b.description}),a.createElement("meta",{name:"image",content:b.image}),a.createElement("meta",{property:"og:title",content:b.title}),a.createElement("meta",{property:"og:url",content:b.url}),a.createElement("meta",{property:"og:description",content:b.description}),a.createElement("meta",{property:"og:image",content:b.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:b.title}),a.createElement("meta",{name:"twitter:url",content:b.url}),a.createElement("meta",{name:"twitter:description",content:b.description}),a.createElement("meta",{name:"twitter:image",content:b.image}),a.createElement("meta",{name:"twitter:image:alt",content:b.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,A.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,A.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,A.withPrefix)("/apple-touch-icon.png")}),o?a.createElement("link",{rel:"canonical",href:o}):null,c)}},6117:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.F},default:function(){return c}});var a=n(7294),A=n(1151);function r(e){const t=Object.assign({span:"span",p:"p",a:"a",code:"code",pre:"pre"},(0,A.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/2gAMAwEAAhADEAAAAcRlQ0iZWC//xAAYEAACAwAAAAAAAAAAAAAAAAABEQACIP/aAAgBAQABBQKsCRx//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERAv/aAAgBAwEBPwF5pD//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIREv/aAAgBAgEBPwFSo0j/xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMUFh/9oACAEBAAE/IVSdb0Nm770i4RSlP//aAAwDAQACAAMAAAAQtB//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ECP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/EFLIPA//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMXFRYf/aAAgBAQABPxDQetEAEFDFs9QNoI+IRpd5+xd1d6I5aHs//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Potions Class"\n        title=""\n        src="/static/ca429bd7135cbc83d96b9da1eb5da17e/18e3b/jj-ying-8bghKxNU1j0-unsplash.jpg"\n        srcset="/static/ca429bd7135cbc83d96b9da1eb5da17e/46946/jj-ying-8bghKxNU1j0-unsplash.jpg 240w,\n/static/ca429bd7135cbc83d96b9da1eb5da17e/55489/jj-ying-8bghKxNU1j0-unsplash.jpg 480w,\n/static/ca429bd7135cbc83d96b9da1eb5da17e/18e3b/jj-ying-8bghKxNU1j0-unsplash.jpg 960w,\n/static/ca429bd7135cbc83d96b9da1eb5da17e/60e21/jj-ying-8bghKxNU1j0-unsplash.jpg 1440w,\n/static/ca429bd7135cbc83d96b9da1eb5da17e/69b48/jj-ying-8bghKxNU1j0-unsplash.jpg 1920w,\n/static/ca429bd7135cbc83d96b9da1eb5da17e/c2cc8/jj-ying-8bghKxNU1j0-unsplash.jpg 4032w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement("div",{style:{display:"flex",justifyContent:"center"}},a.createElement(t.p,null,"Photo by "),a.createElement("a",{href:"https://unsplash.com/@jjying?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},a.createElement(t.p,null,"JJ Ying")),a.createElement(t.p,null," on "),a.createElement("a",{href:"https://unsplash.com/s/photos/network?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},a.createElement(t.p,null,"Unsplash"))),"\n",a.createElement(t.p,null,"Axios has become the go to use http library for javascript.\r\nUnder the hood axios uses ",a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," for browser environment and ",a.createElement("a",{href:"http://nodejs.org/api/http.html"},"\r\nhttp")," for nodejs to make http network request."),"\n",a.createElement(t.p,null,"While this all works perfectly it fails to work in service worker.\r\nWith chromium enforcing manifest version 3 for extension, Background pages are replaced by service workers.\r\nSo use of axios in service worker is not possible. To overcome this\r\nyou can pass custom adapter to axios to override XMLHttpRequest/http."),"\n",a.createElement(t.p,null,"In this case we can use fetch api to make http request. There is an NPM package ",a.createElement(t.a,{href:"google.com"},a.createElement(t.code,null,"@vespaiach/axios-fetch-adapter")),"\r\nwhich is a fetch adapter for axios."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"npm install @vespaiach/axios-fetch-adapter\n")),"\n",a.createElement(t.p,null,"Then add it to axios config."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-js"},"import fetchAdapter from '@vespaiach/axios-fetch-adapter';\r\nconst instance = axios.create({\r\n  adapter: fetchAdapter\r\n  ....\r\n});\n")),"\n",a.createElement(t.p,null,"Voila! it works!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,A.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},l=n(4765);function c(e){return a.createElement(l.Z,e,a.createElement(i,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-use-axios-in-service-worker-index-mdx-b5ddb43d5fb77c248dad.js.map