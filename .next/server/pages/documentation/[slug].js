"use strict";
(() => {
var exports = {};
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 2232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "swagger-ui-dist"
const external_swagger_ui_dist_namespaceObject = require("swagger-ui-dist");
;// CONCATENATED MODULE: ./components/swagger/index.tsx




const SwaggerUIWrapper = ({ url  })=>{
    (0,external_react_.useEffect)(()=>{
        const ui = (0,external_swagger_ui_dist_namespaceObject.SwaggerUIBundle)({
            url,
            dom_id: "#swagger-ui-container",
            presets: [
                external_swagger_ui_dist_namespaceObject.SwaggerUIBundle.presets.apis,
                external_swagger_ui_dist_namespaceObject.SwaggerUIStandalonePreset
            ],
            plugins: [
                external_swagger_ui_dist_namespaceObject.SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout",
            validatorUrl: null,
            defaultModelExpandDepth: 0
        });
        //@ts-ignore
        window.ui = ui;
    }, [
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1fa42fd55ab8eb34" + " " + "swagger-section",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "swagger-ui-container",
                className: "jsx-1fa42fd55ab8eb34" + " " + "swagger-ui-wrap"
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "1fa42fd55ab8eb34",
                children: "#swagger-ui-container .topbar{display:none}.swagger-section,.information-container.wrapper{background-color:#fff!important;padding:0px;margin:0;overflow:auto}.swagger-ui .info h2.title{font-size:1.9rem}.swagger-section .swagger-ui .wrapper section.models{background-color:#fff}@media only screen and (min-width:1px)and (max-width:600px){.swagger-section{padding:10px 0px}}"
            })
        ]
    });
};
/* harmony default export */ const swagger = (SwaggerUIWrapper);

// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
// EXTERNAL MODULE: ./layouts/index.ts
var layouts = __webpack_require__(5636);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
// EXTERNAL MODULE: ./components/documentation/index.tsx + 2 modules
var documentation = __webpack_require__(756);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(2738);
;// CONCATENATED MODULE: ./uiComponents/icon/share.tsx


const Share = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "white",
    stroke: "none",
    strokeWidth: "2",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
            cx: "18",
            cy: "5",
            r: "3"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
            cx: "6",
            cy: "12",
            r: "3"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
            cx: "18",
            cy: "19",
            r: "3"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("line", {
            x1: "8.59",
            y1: "13.51",
            x2: "15.42",
            y2: "17.49",
            stroke: "white"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("line", {
            x1: "15.41",
            y1: "6.51",
            x2: "8.59",
            y2: "10.49",
            stroke: "white"
        })
    ]
});
/* harmony default export */ const share = (Share);

// EXTERNAL MODULE: ./uiComponents/icon/cardiogram.tsx
var cardiogram = __webpack_require__(9636);
// EXTERNAL MODULE: ./uiComponents/emoji/index.tsx
var emoji = __webpack_require__(9213);
// EXTERNAL MODULE: ./components/documentation/documentationSubSection.tsx
var documentationSubSection = __webpack_require__(8382);
;// CONCATENATED MODULE: ./pages/documentation/[slug].tsx














const Documentation = ({ api , allApis  })=>{
    const { title , doc_tech_link , useSwaggerProxy , doc_tech_external , path , account_link , uptime , slug , is_open ,  } = api;
    const shareLink = `${constants/* default.links.mailto.SHARE */.Z.links.mailto.SHARE}?subject=Connaissez vous ${title} ?&body=https://api.gouv.fr/documentation/${slug}`;
    const swaggerLink = useSwaggerProxy ? `/api/v1/proxy/${slug}` : doc_tech_link;
    const useSeparator = (is_open === -1 || !!account_link && is_open !== 1) && !!doc_tech_external;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* default */.Z, {
        title: `Documentation de ${title}`,
        description: `${title} est une API du service public. Découvrez sa documentation`,
        useFooter: false,
        noIndex: true,
        usePreFooter: false,
        useDocHeader: true,
        canonical: `https://api.gouv.fr/documentation/${api.slug}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "eb6fac74227d1a4f",
                        [
                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                            (0,utils/* getUptimeState */.AW)(uptime)
                        ]
                    ]
                ]) + " " + "documentation-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(documentation/* DocumentationLeftMenu */.Ex, {
                        allApis: allApis
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "eb6fac74227d1a4f",
                                [
                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                    (0,utils/* getUptimeState */.AW)(uptime)
                                ]
                            ]
                        ]) + " " + "documentation-content",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "eb6fac74227d1a4f",
                                        [
                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]) + " " + "documentation-header",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]),
                                        /*#__PURE__*/ children: title
                                    }),
                                    uptime && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        title: `Sur le dernier mois, cette API était active ${(0,utils/* roundUptime */.an)(2)(uptime)}% du temps`,
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "availability btn-icon",
                                        children: [
                                            cardiogram/* default */.Z,
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: styled_jsx_default().dynamic([
                                                    [
                                                        "eb6fac74227d1a4f",
                                                        [
                                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                            (0,utils/* getUptimeState */.AW)(uptime)
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    (0,utils/* roundUptime */.an)(2)(uptime),
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        title: "Partager cette API aux membres de mon \xe9quipe",
                                        href: encodeURI(shareLink),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "share-api dont-apply-link-style",
                                        children: share
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "eb6fac74227d1a4f",
                                        [
                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]) + " " + "documentation-body",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            "Bienvenue sur la documentation technique de ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                className: styled_jsx_default().dynamic([
                                                    [
                                                        "eb6fac74227d1a4f",
                                                        [
                                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                            (0,utils/* getUptimeState */.AW)(uptime)
                                                        ]
                                                    ]
                                                ]),
                                                children: title
                                            }),
                                            ". Cette page pr\xe9sente les caract\xe9ristiques techniques de l\u2019API. Pour plus d\u2019information sur les caract\xe9ristiques fonctionnelles,",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: path,
                                                className: styled_jsx_default().dynamic([
                                                    [
                                                        "eb6fac74227d1a4f",
                                                        [
                                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                            (0,utils/* getUptimeState */.AW)(uptime)
                                                        ]
                                                    ]
                                                ]),
                                                children: "acc\xe9dez \xe0 la fiche m\xe9tier."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "sections",
                                        children: [
                                            is_open === -1 && /*#__PURE__*/ jsx_runtime_.jsx(documentation/* Habilitation */.E5, {
                                                slug: slug
                                            }),
                                            account_link && is_open === 0 && /*#__PURE__*/ jsx_runtime_.jsx(documentation/* AccountNeeded */.AD, {
                                                account_link: account_link
                                            }),
                                            useSeparator && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: styled_jsx_default().dynamic([
                                                    [
                                                        "eb6fac74227d1a4f",
                                                        [
                                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                            (0,utils/* getUptimeState */.AW)(uptime)
                                                        ]
                                                    ]
                                                ]) + " " + "separator"
                                            }),
                                            doc_tech_external && /*#__PURE__*/ jsx_runtime_.jsx(documentation/* ExternalDoc */.wM, {
                                                doc_link: doc_tech_external
                                            })
                                        ]
                                    }),
                                    useSwaggerProxy && /*#__PURE__*/ jsx_runtime_.jsx(documentationSubSection/* SwaggerPartiallyFunctionnal */.pw, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "eb6fac74227d1a4f",
                                                [
                                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                    (0,utils/* getUptimeState */.AW)(uptime)
                                                ]
                                            ]
                                        ]),
                                        children: swaggerLink ? /*#__PURE__*/ jsx_runtime_.jsx(swagger, {
                                            url: swaggerLink
                                        }) : doc_tech_external ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: styled_jsx_default().dynamic([
                                                        [
                                                            "eb6fac74227d1a4f",
                                                            [
                                                                constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                                (0,utils/* getUptimeState */.AW)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                                                            emoji: "\uD83D\uDE14",
                                                            label: "triste"
                                                        }),
                                                        "Malheureusement, cette API ne poss\xe8de pas de documentation au format",
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ExternalLink */.dL, {
                                                            href: "https://swagger.io/docs/specification/about/",
                                                            children: "Open API"
                                                        }),
                                                        "."
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: styled_jsx_default().dynamic([
                                                        [
                                                            "eb6fac74227d1a4f",
                                                            [
                                                                constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                                (0,utils/* getUptimeState */.AW)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Vous pouvez n\xe9anmoins acc\xe9der \xe0 la documentation en suivant ce lien :"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                                                    href: doc_tech_external,
                                                    rel: "noopener",
                                                    target: "_blank",
                                                    alt: true,
                                                    children: "Acc\xe9der \xe0 la documentation"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: styled_jsx_default().dynamic([
                                                [
                                                    "eb6fac74227d1a4f",
                                                    [
                                                        constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                                        (0,utils/* getUptimeState */.AW)(uptime)
                                                    ]
                                                ]
                                            ]),
                                            children: "La documentation de cette API n\u2019est pas disponible publiquement."
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "eb6fac74227d1a4f",
                dynamic: [
                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                    (0,utils/* getUptimeState */.AW)(uptime)
                ],
                children: `.documentation-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.documentation-content.__jsx-style-dynamic-selector{height:-webkit-calc(100vh - 116px);height:-moz-calc(100vh - 116px);height:calc(100vh - 116px);overflow:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media only screen and (min-width:1px)and (max-width:993px){.documentation-content.__jsx-style-dynamic-selector{height:-webkit-calc(100vh - 172px);height:-moz-calc(100vh - 172px);height:calc(100vh - 172px)}}.documentation-content.__jsx-style-dynamic-selector .sections.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.documentation-content.__jsx-style-dynamic-selector .sections.__jsx-style-dynamic-selector .separator.__jsx-style-dynamic-selector{width:20px}.documentation-body.__jsx-style-dynamic-selector,.documentation-header.__jsx-style-dynamic-selector{padding:10px 30px}.documentation-header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:start;border-bottom:2px solid ${constants/* default.colors.lightGrey */.Z.colors.lightGrey};background-color:#133675;height:60px;color:#fff}.documentation-header.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:white;margin:0;padding:0;line-height:initial;font-size:1.3rem}.availability.__jsx-style-dynamic-selector{background-color:${(0,utils/* getUptimeState */.AW)(uptime)};color:white;padding:0 6px;height:35px;margin-left:15px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;font-weight:bold;font-size:1.1rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.btn-icon.__jsx-style-dynamic-selector>svg.__jsx-style-dynamic-selector{margin-right:5px}.share-api.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;margin:0 5px;padding:0 5px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.share-api.__jsx-style-dynamic-selector:hover{background-color:rgba(1,1,1,.2)}`
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const apis = await (0,model/* getAllAPIs */.Pc)();
    return {
        paths: apis.map((api)=>{
            return {
                params: {
                    slug: api.slug
                }
            };
        }),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    //@ts-ignore
    const slug = params.slug;
    const allApis = await (0,model/* getAllAPIs */.Pc)();
    //@ts-ignore
    const api = await (0,model/* getAPI */.Kf)(slug);
    return {
        props: {
            api,
            allApis: allApis.sort((a, b)=>a.title > b.title ? 1 : -1
            )
        }
    };
};
/* harmony default export */ const _slug_ = (Documentation);


/***/ }),

/***/ 9636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cardio = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cardio);


/***/ }),

/***/ 7958:
/***/ ((module) => {

module.exports = require("front-matter");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,754], () => (__webpack_exec__(2232)));
module.exports = __webpack_exports__;

})();