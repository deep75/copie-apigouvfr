"use strict";
(() => {
var exports = {};
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 5039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7697);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5636);
/* harmony import */ var _components_documentation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(756);






const Documentation = ({ allApis  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: `Espace documentation des API`,
        description: `Découvrez toutes les documentations techniques des API du service public.`,
        useFooter: false,
        usePreFooter: false,
        useDocHeader: true,
        canonical: `https://api.gouv.fr/documentation`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-6058d59e4e314e30" + " " + "documentation-wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_documentation__WEBPACK_IMPORTED_MODULE_5__/* .DocumentationLeftMenu */ .Ex, {
                        allApis: allApis
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-6058d59e4e314e30" + " " + "documentation-body text-style",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "jsx-6058d59e4e314e30",
                                children: [
                                    "Bienvenue sur l\u2019espace ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "jsx-6058d59e4e314e30",
                                        /*#__PURE__*/ children: "documentation technique"
                                    }),
                                    " du site",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/apropos",
                                        className: "jsx-6058d59e4e314e30",
                                        children: "api.gouv.fr"
                                    }),
                                    "."
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "jsx-6058d59e4e314e30",
                                children: [
                                    "Cet espace s\u2019adresse \xe0 tous ceux - d\xe9veloppeurs\xb7ses, architectes, products owners, craftman\xb7es, magicien\xb7nes du web...",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        role: "img",
                                        "aria-label": "\xe9moji ninja",
                                        className: "jsx-6058d59e4e314e30",
                                        children: "\uD83E\uDDD9\u200D\u2640\uFE0F"
                                    }),
                                    " ",
                                    "- qui s\u2019int\xe9ressent aux API du service public."
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "jsx-6058d59e4e314e30",
                                children: "Celles-ci sont d\xe9velopp\xe9es et maintenues dans le cadre de la politique d\u2019ouverture des donn\xe9es, par les acteurs suivant :"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "jsx-6058d59e4e314e30",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: "les administrations centrales"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: "les collectivit\xe9s territoriales"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: "les minist\xe8res"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: "les agences gouvernementales"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "jsx-6058d59e4e314e30",
                                children: [
                                    "Les API tombent dans deux grandes cat\xe9gories. Les",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: "API ouvertes"
                                    }),
                                    " qui sont accessibles \xe0 tous. Et les",
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                        className: "jsx-6058d59e4e314e30",
                                        children: [
                                            "API qui n\xe9cessitent une habilitation",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                role: "img",
                                                "aria-label": "\xe9moji cadenas",
                                                className: "jsx-6058d59e4e314e30",
                                                children: "\uD83D\uDD12"
                                            }),
                                            "."
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "jsx-6058d59e4e314e30",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        role: "img",
                                        "aria-label": "\xe9moji ninja",
                                        className: "jsx-6058d59e4e314e30",
                                        children: "\uD83D\uDC48"
                                    }),
                                    " ",
                                    "\xc0 vous de jouer : utilisez le champ de recherche \xe0 votre gauche et d\xe9couvrez nos API.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        role: "img",
                                        "aria-label": "\xe9moji ninja",
                                        className: "jsx-6058d59e4e314e30",
                                        children: "\uD83D\uDC48"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "6058d59e4e314e30",
                children: ".documentation-wrapper.jsx-6058d59e4e314e30{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.documentation-body.jsx-6058d59e4e314e30{height:-webkit-calc(100vh - 116px);height:-moz-calc(100vh - 116px);height:calc(100vh - 116px);overflow:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;padding:0 30px}@media only screen and (min-width:1px)and (max-width:993px){.documentation-content.jsx-6058d59e4e314e30{height:-webkit-calc(100vh - 172px);height:-moz-calc(100vh - 172px);height:calc(100vh - 172px)}}"
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const allApis = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getAllAPIs */ .Pc)();
    return {
        props: {
            allApis: allApis.sort((a, b)=>a.title > b.title ? 1 : -1
            )
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Documentation);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,754], () => (__webpack_exec__(5039)));
module.exports = __webpack_exports__;

})();