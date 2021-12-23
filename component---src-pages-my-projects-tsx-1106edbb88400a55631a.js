"use strict";(self.webpackChunkby_the_marina_theme=self.webpackChunkby_the_marina_theme||[]).push([[507],{5616:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(4942),a=r(3366),i=r(7462),o=r(7294),c=r(5505),s=r(9408),l=r(7761),p=r(8348),d=r(8416);function m(e){return(0,d.Z)("MuiContainer",e)}(0,r(2194).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var u=r(9240),h=r(5893),f=["className","component","disableGutters","fixed","maxWidth"],g=(0,p.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,u.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),b=o.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiContainer"}),n=r.className,o=r.component,p=void 0===o?"div":o,d=r.disableGutters,b=void 0!==d&&d,x=r.fixed,v=void 0!==x&&x,j=r.maxWidth,y=void 0===j?"lg":j,Z=(0,a.Z)(r,f),E=(0,i.Z)({},r,{component:p,disableGutters:b,fixed:v,maxWidth:y}),w=function(e){var t=e.classes,r=e.fixed,n=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,u.Z)(String(a))),r&&"fixed",n&&"disableGutters"]};return(0,s.Z)(i,m,t)}(E);return(0,h.jsx)(g,(0,i.Z)({as:p,ownerState:E,className:(0,c.Z)(w.root,n),ref:t},Z))}))},7192:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(5616),i=r(1489);function o(e){var t=e.headerImage,r=e.imageCaption,o=e.children;return n.createElement(n.Fragment,null,n.createElement(i.Z,{imageSrc:t,imageAltTitle:"",imageCaption:r}),n.createElement(a.Z,{maxWidth:"lg"},o))}},1489:function(e,t,r){var n=r(4942),a=r(7294),i=r(6449),o=r(9211),c=r(9308),s=r(4667),l=r(3657);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.imageSrc,r=e.imageCaption,n=e.imageOverlayText,p=(0,s.e)().isMobileView,m=(0,i.Z)(),u="dark"===m.palette.mode;return a.createElement(o.Z,{display:"flex",flexDirection:"column"},a.createElement(o.Z,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:p?"100px":"300px",sx:{backgroundImage:"url("+t+")",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},!p&&a.createElement(c.Z,{sx:d({color:l.ix,fontFamily:"Dawning of a New Day",fontWeight:"bold",fontSize:"80px",textShadow:"2px 2px "+m.palette.primary.main,textAlign:"center"},!u&&{color:l.Sn})},n)),a.createElement(o.Z,{mt:.5,display:"flex",justifyContent:"flex-end",pr:1},a.createElement(c.Z,Object.assign({variant:"caption",color:u?"primary":m.palette.primary.dark},p?{sx:[!u&&{background:"rgba(255,255,255,0.5)"},{fontWeight:"bold",textAlign:p?"right":"center"}]}:{sx:[!u&&{background:"rgba(255,255,255,0.5)"},{fontWeight:"bold"}]}),r)))}},1165:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(7294),a=r(6449),i=r(9308),o=r(6190),c=r(5616),s=r(8953),l=r(9211),p=r.p+"static/header_purple-flower-1de0013108bf80839458c209553e2627.jpg",d=r(7192),m=r(4667);var u=function(e){var t=e.projectName,r=e.projectDescription,o=e.endNote,c=((0,m.e)().isMobileView,(0,a.Z)());return c.palette.mode,n.createElement(l.Z,{sx:{p:1,width:"100%",border:"1px solid "+c.palette.primary.light,borderRadius:4}},n.createElement(i.Z,{variant:"h4",sx:{mb:1}},t),n.createElement(i.Z,{display:"inline",sx:{fontWeight:"bold"}},"Project Info:"," "),n.createElement(i.Z,{display:"inline"},r),o&&n.createElement(l.Z,{mt:1},n.createElement(i.Z,{display:"inline",sx:{fontWeight:"bold"}},o)))};function h(){(0,a.Z)();var e,t,r,m=[{type:"Other Project",projectName:"Harvey Mudd Wellness Greenhouse",projectDescription:'The Mudd Wellness Greenhouse, or "Mudd Greenhouse" was a space on campus\n      to provide students access to tools, supplies, and storage for all\n      gardening-related activities. I helped design and raised money ($2500)\n      to build this community greenhouse, oversaw construction and set-up of\n      the space including purchasing supplies, and stocked interior with\n      furnishings including gardening tools, chairs, shelves, gardening books,\n      and a potting station.',endNote:"RIP after a large windstorm in Spring 2020. :("},{type:"Major Project",projectName:"Groover Web App",projectDescription:'Groover is a web app that generate music recommendations based on\n      your favorite song\'s lyrical content. This project was developed\n      during "CS121: Software Development" at Harvey Mudd College in\n      Spring 2019.',additionalInfo:n.createElement(i.Z,null,"**To watch a demo:**"," ",n.createElement(o.Z,{href:"https://sienaguerrero.com/static/downloads/Groover-Demo.mp4"},"click here"),"**To visit the Github repo:**"," ",n.createElement(o.Z,{href:"https://github.com/sienaguerrero/groover"},"click here"))},{type:"Major Project",projectName:"Hippokampus",projectDescription:"Hippokampus is an electron app that holds information pertaining to the users contacts and preferences",endNote:"Private Personal Project ;)"},{type:"Minor Project",projectName:"Cuarenta",projectDescription:'Java program based on the card game "Cuarenta" (the national card\n        game of Ecuador).',additionalInfo:n.createElement(i.Z,null,"**To visit the Github repo:**"," ",n.createElement(o.Z,{href:"https://github.com/sienaguerrero/cuarenta"},"click here"))},{type:"Minor Project",projectName:"Climate Change Data Visualization Site",projectDescription:'Climate change data visualization website made using graphs from\n      Bokeh, an interactive visualization library for Python. This\n      project was developed as part of a group final project during\n      "CS35: Computer Science for Insight" at Harvey Mudd College in\n      Spring 2017.',additionalInfo:n.createElement(i.Z,null,"**To visit the Github repo:**"," ",n.createElement(o.Z,{href:"https://github.com/sienaguerrero/cs35-final-project"},"click here"))},{type:"Academic Writing",projectName:"Human Data Science Ethics Paper",projectDescription:"A policy memo on socially-assistive robots detailing core issues,\n      moral approaches, current contexts, and recommendations for future\n      use of this technology. Written at the end of Fall 2018.",additionalInfo:n.createElement(i.Z,null,"**To read the paper:**"," ",n.createElement(o.Z,{href:"https://sienaguerrero.com/downloads/HDSE-policy-memo-social-robots.pdf"},"click here"))},{type:"Academic Writing",projectName:"Science, Technology, and Society Paper",projectDescription:'A reflection paper on trash innovation, and hope during the\n      Anthropocene entitled: "Trash, Hope, and the Anthropocene".',additionalInfo:n.createElement(i.Z,null,"**To read the paper:**"," ",n.createElement(o.Z,{href:"https://sienaguerrero.com/downloads/sts-reflection-trash-hope.pdf"},"click here"))}];return n.createElement(d.Z,{headerImage:p,imageCaption:"Flowering succulent in Newbury Park, CA during Summer 2018."},n.createElement(c.Z,{maxWidth:"lg"},n.createElement(s.Z,{variant:"outlined",sx:{my:1,p:1}},n.createElement(i.Z,{variant:"h3",sx:{mb:1}},"Major Projects"),n.createElement(l.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},null===(e=m.filter((function(e){return"Major Project"===e.type})))||void 0===e?void 0:e.map((function(e){var t=e.projectName,r=e.projectDescription,a=e.endNote;return n.createElement(l.Z,{p:1,flex:1},n.createElement(u,{projectName:t,projectDescription:r,endNote:a}))})))),n.createElement(s.Z,{variant:"outlined",sx:{my:1,p:1}},n.createElement(i.Z,{variant:"h3",sx:{mb:1}},"Minor Projects"),n.createElement(l.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},null===(t=m.filter((function(e){return"Minor Project"===e.type})))||void 0===t?void 0:t.map((function(e){var t=e.projectName,r=e.projectDescription,a=e.endNote;return n.createElement(l.Z,{p:1,flex:1},n.createElement(u,{projectName:t,projectDescription:r,endNote:a}))})))),n.createElement(s.Z,{variant:"outlined",sx:{my:1,p:1}},n.createElement(i.Z,{variant:"h3",sx:{mb:1}},"Other Projects"),n.createElement(l.Z,{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},null===(r=m.filter((function(e){return"Academic Writing"===e.type||"Other Project"===e.type})))||void 0===r?void 0:r.map((function(e){var t=e.projectName,r=e.projectDescription,a=e.endNote;return n.createElement(l.Z,{p:1,flex:1},n.createElement(u,{projectName:t,projectDescription:r,endNote:a}))}))))))}}}]);
//# sourceMappingURL=component---src-pages-my-projects-tsx-1106edbb88400a55631a.js.map