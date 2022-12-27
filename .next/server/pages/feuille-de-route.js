"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 8088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ feuille_de_route),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/page.tsx + 1 modules
var page = __webpack_require__(7209);
// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
// EXTERNAL MODULE: ./uiComponents/emoji/index.tsx
var emoji = __webpack_require__(9213);
;// CONCATENATED MODULE: ./components/roadmap/roadmap.tsx





const filter = (roadmap)=>{
    const filtered = [];
    const today = new Date();
    const currentYear = today.getFullYear();
    let yearCursor = -1;
    roadmap.forEach((elem)=>{
        if (elem.type === model/* RoadmapNodeType.YEAR */.VW.YEAR) {
            //@ts-ignore
            yearCursor = elem.what;
        }
        if (yearCursor >= currentYear) {
            filtered.push(elem);
        }
    });
    return filtered;
};
const Roadmap = ({ roadmap  })=>{
    const { 0: displayAll , 1: setDisplayAll  } = (0,external_react_.useState)(false);
    const r = displayAll ? roadmap : filter(roadmap);
    const onKeyDown = (keyEvent)=>{
        // toggle on Space or Enter
        if (keyEvent.keyCode === 13) {
            setDisplayAll(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "roadmap-wrapper",
        children: [
            !displayAll && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node ellipsis",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "roadmap-show-all layout-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        onKeyDown: (e)=>onKeyDown(e)
                        ,
                        role: "button",
                        tabIndex: 0,
                        onClick: ()=>setDisplayAll(true)
                        ,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                                label: "pass\xe9",
                                emoji: "\u231B\uFE0F"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                children: "Voir les \xe9v\xe9nements des ann\xe9es pr\xe9c\xe9dentes "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                                label: "pass\xe9",
                                emoji: "\u231B\uFE0F"
                            })
                        ]
                    })
                })
            }),
            r.map((item, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(roadmapNode, {
                    type: item.type,
                    what: item.what,
                    path: item.path
                }, idx)
            )
        ]
    });
};
/* harmony default export */ const roadmap_roadmap = (Roadmap);

// EXTERNAL MODULE: ./components/richReactMarkdown/index.tsx + 14 modules
var richReactMarkdown = __webpack_require__(5813);
;// CONCATENATED MODULE: ./components/roadmap/roadmapNode.tsx




const RoadmapNode = ({ type , what , path  })=>{
    switch(type){
        case model/* RoadmapNodeType.ELLIPSIS */.VW.ELLIPSIS:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node ellipsis"
            });
        case model/* RoadmapNodeType.MONTH */.VW.MONTH:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node month",
                children: what
            });
        case model/* RoadmapNodeType.YEAR */.VW.YEAR:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node year",
                children: what
            });
        case model/* RoadmapNodeType.ADD_API */.VW.ADD_API:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "date",
                    children: [
                        "Ajout au catalogue de l\u2019",
                        path ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: path,
                            children: [
                                "API ",
                                what
                            ]
                        }) : `API ${what}`
                    ]
                })
            });
        case model/* RoadmapNodeType.INFO */.VW.INFO:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "date content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "label info",
                            children: "Nouveaut\xe9"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown/* default */.Z, {
                            source: what
                        })
                    ]
                })
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "roadmap-node",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "date content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "label",
                            children: type
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown/* default */.Z, {
                            source: what
                        })
                    ]
                })
            });
    }
};
/* harmony default export */ const roadmapNode = (RoadmapNode);

;// CONCATENATED MODULE: ./components/roadmap/index.tsx




// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
;// CONCATENATED MODULE: ./pages/feuille-de-route.tsx








const Social = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "jsx-73c8761c502c89df",
                /*#__PURE__*/ children: "Pour suivre notre actualit\xe9, \xeatre au courant des nouvelles publications d\u2019API et des webinaires \xe0 venir, abonnez-vous \xe0 notre page linkedin ou suivez notre compte twitter :"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-73c8761c502c89df" + " " + "layout-center icons",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                        label: "par ici",
                        emoji: "\uD83D\uDC49"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/apigouv",
                        title: "Twitter",
                        className: "jsx-73c8761c502c89df",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: constants/* default.colors.blue */.Z.colors.blue,
                            className: "jsx-73c8761c502c89df",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M32,7.075c-1.175,0.525 -2.444,0.875 -3.769,1.031c1.356,-0.813 2.394,-2.1 2.887,-3.631c-1.269,0.75 -2.675,1.3 -4.169,1.594c-1.2,-1.275 -2.906,-2.069 -4.794,-2.069c-3.625,0 -6.563,2.938 -6.563,6.563c0,0.512 0.056,1.012 0.169,1.494c-5.456,-0.275 -10.294,-2.888 -13.531,-6.862c-0.563,0.969 -0.887,2.1 -0.887,3.3c0,2.275 1.156,4.287 2.919,5.463c-1.075,-0.031 -2.087,-0.331 -2.975,-0.819c0,0.025 0,0.056 0,0.081c0,3.181 2.263,5.838 5.269,6.437c-0.55,0.15 -1.131,0.231 -1.731,0.231c-0.425,0 -0.831,-0.044 -1.237,-0.119c0.838,2.606 3.263,4.506 6.131,4.563c-2.25,1.762 -5.075,2.813 -8.156,2.813c-0.531,0 -1.05,-0.031 -1.569,-0.094c2.913,1.869 6.362,2.95 10.069,2.95c12.075,0 18.681,-10.006 18.681,-18.681c0,-0.287 -0.006,-0.569 -0.019,-0.85c1.281,-0.919 2.394,-2.075 3.275,-3.394l0,-0.001Z",
                                className: "jsx-73c8761c502c89df"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/company/api-gouv-fr/",
                        title: "Linkedin",
                        className: "jsx-73c8761c502c89df",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 22 22",
                            fill: constants/* default.colors.blue */.Z.colors.blue,
                            className: "jsx-73c8761c502c89df",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
                                    className: "jsx-73c8761c502c89df"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                    x: "2",
                                    y: "9",
                                    width: "4",
                                    height: "12",
                                    className: "jsx-73c8761c502c89df"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    cx: "4",
                                    cy: "4",
                                    r: "2",
                                    className: "jsx-73c8761c502c89df"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                        label: "par l\xe0",
                        emoji: "\uD83D\uDC48"
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "73c8761c502c89df",
                children: ".icons>a{width:30px;height:30px;margin:0 15px}.icons{margin-bottom:40px}"
            })
        ]
    })
;
const FeuilleDeRoute = ({ roadmap  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        title: "Feuille de route",
        description: "D\xe9couvrez les API r\xe9cemment ajout\xe9 et celles qui sont en cours d'int\xe9gration au catalogue des API",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-wrapper text-style",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    children: [
                        "La feuille de route des API ",
                        /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                            emoji: "\uD83C\uDFD7",
                            label: "travaux"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Depuis 2016, nous r\xe9f\xe9ren\xe7ons les API de toutes les administrations qui ouvrent leur donn\xe9es"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Social, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(roadmap_roadmap, {
                    roadmap: roadmap
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Social, {})
            ]
        })
    });
};
const getStaticProps = async ()=>{
    const roadmap = await (0,model/* getRoadmap */.Pn)();
    return {
        props: {
            roadmap
        }
    };
};
/* harmony default export */ const feuille_de_route = (FeuilleDeRoute);


/***/ }),

/***/ 7958:
/***/ ((module) => {

module.exports = require("front-matter");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1904:
/***/ ((module) => {

module.exports = require("markdown-to-jsx");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7561:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4574:
/***/ ((module) => {

module.exports = require("underscore.string/prune");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,615,532,813], () => (__webpack_exec__(8088)));
module.exports = __webpack_exports__;

})();