(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),o=t.n(c),r=(t(13),t(1));function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:" "},"About")))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},e.switch))))}function s(e){var a=function(){console.log("Button Was Click"+o);var e=o.toItalicCase();m(e)},t=Object(n.useState)(),c=Object(r.a)(t,2),o=c[0],m=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",null,l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:o,onChange:function(e){console.log("Value Change"),m(e.target.value)},id:"mybox",rows:"8"})),l.a.createElement("button",{className:"btn btn-danger mx-2",onClick:function(){console.log("Uppercase was clicked");var e=o.toUpperCase();m(e)}}," Convert To Upercase"),l.a.createElement("button",{className:"btn btn-success mx-2",onClick:function(){console.log("Button Was Click"+o);var e=o.toLowerCase();m(e)}}," Convert To Lowercase"),l.a.createElement("button",{className:"btn btn-info mx-2",onClick:function(e){console.log("Button Was CLick"+o);var a=o.toClear();m(a)}}," Clear Text"),l.a.createElement("button",{className:"btn btn-dark mx-2",onClick:a},"Convert to Italic"),l.a.createElement("button",{className:"btn btn-secondary mx-2",onClick:a},"Convert to Bold"),l.a.createElement("button",{className:"btn btn-warning mx-2",onClick:a},"Remove Extra Space")),l.a.createElement("div",{className:"container my-4"},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("h2",null,"Preview Your Text"),l.a.createElement("p",null,o)))}var i=function(){var e=Object(n.useState)("light"),a=Object(r.a)(e,2),t=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtil",mode:t,toggleMode:function(){"light"===t?(c("dark"),document.body.style.backgroundColor="gray"):(c("light"),document.body.style.backgroundColor="white")},switch:"Enble Dark Mode"}),l.a.createElement("div",{className:"container my-4"},l.a.createElement(s,{heading:"Enter Text To Anlayz"})))},u=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,16)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,o=a.getTTFB;t(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},4:function(e,a,t){e.exports=t(15)}},[[4,3,2]]]);
//# sourceMappingURL=main.86eb6d63.chunk.js.map