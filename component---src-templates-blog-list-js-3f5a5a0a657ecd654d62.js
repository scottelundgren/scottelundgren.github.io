(self.webpackChunkscottelundgren_github_io=self.webpackChunkscottelundgren_github_io||[]).push([[544],{6179:function(e,t,a){"use strict";var n=a(7294),r=a(5414),l=a(5444);function i(e){var t=e.description,a=e.lang,i=e.meta,s=e.title,o=(0,l.K2)("63159454").site,c=t||o.siteMetadata.description;return n.createElement(r.Z,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{name:"msapplication-TileColor",content:"#2b5797"},{property:"og:description",content:c},{property:"og:title",content:s},{property:"og:type",content:"website"},{name:"theme-color",content:"#ffffff"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i),link:[{rel:"apple-touch-icon",href:"/apple-touch-icon.png",sizes:"180x180"},{rel:"icon",href:"/favicon-32x32.png",sizes:"32x32",type:"image/png"},{rel:"icon",href:"/favicon-16x16.png",sizes:"16x16",type:"image/png"},{rel:"manifest",href:"/site.webmanifest"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}].concat()})}i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},5166:function(e,t,a){"use strict";a.r(t);var n=a(3552),r=a(7294),l=a(5397),i=a(6179),s=a(5444),o=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,n=this.props.pageContext,o=n.currentPage,c=n.numPages,m=1===o,p=o===c,g=o-1==1?"/":(o-1).toString(),u=(o+1).toString();return r.createElement(l.Z,null,r.createElement(i.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),r.createElement("div",{className:"content-box clearfix"},a.map((function(e){var t=e.node;return r.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&r.createElement(s.rU,{to:t.fields.slug,className:"post-thumbnail",style:{backgroundImage:"url("+t.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src+")"}}),r.createElement("div",{className:"post-content"},r.createElement("h2",{className:"post-title"},r.createElement(s.rU,{to:t.fields.slug},t.frontmatter.title)),r.createElement("p",null,t.excerpt),r.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),r.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})),r.createElement("div",{className:"container"},r.createElement("nav",{className:"pagination",role:"navigation"},r.createElement("ul",null,!m&&r.createElement("p",null,r.createElement(s.rU,{to:g,rel:"prev",className:"newer-posts"},"← Previous Page")),r.createElement("p",null,r.createElement("span",{className:"page-number"},"Page ",o," of ",c)),!p&&r.createElement("p",null,r.createElement(s.rU,{to:u,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(r.Component);t.default=o}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-3f5a5a0a657ecd654d62.js.map