"use strict";
(() => {
var exports = {};
exports.id = 508;
exports.ids = [508];
exports.modules = {

/***/ 7082:
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
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7209);





const Producteurs = ({ producers  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Liste des producteurs d'API",
        description: "La liste de toutes les administrations qui propose une API disponible publiquement.",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "jsx-f292054e5f7c66e2" + " " + "fr-container page-baseline",
                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "jsx-f292054e5f7c66e2",
                    children: [
                        producers.length,
                        " entit\xe9s administratives ouvrent leur donn\xe9es"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "realisations",
                className: "jsx-f292054e5f7c66e2" + " " + "page-body-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-f292054e5f7c66e2" + " " + "fr-container default-grid",
                    children: producers.map((producer)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: `/producteurs/${producer.slug}`,
                            className: "jsx-f292054e5f7c66e2" + " " + "dont-apply-link-style",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-f292054e5f7c66e2" + " " + "layout-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `/images/api-logo/${producer.logo}`,
                                        alt: `logo de ${producer.name}`,
                                        className: "jsx-f292054e5f7c66e2"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "jsx-f292054e5f7c66e2",
                                    children: producer.name
                                })
                            ]
                        }, producer.slug)
                    )
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f292054e5f7c66e2",
                children: "a.jsx-f292054e5f7c66e2{-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#fff;text-align:center;padding:25px 30px;-webkit-box-shadow:0px 3px 6px rgba(0,0,0,.1);-moz-box-shadow:0px 3px 6px rgba(0,0,0,.1);box-shadow:0px 3px 6px rgba(0,0,0,.1);-webkit-transition:-webkit-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;-moz-transition:-moz-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;-o-transition:-o-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;transition:-webkit-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;transition:-moz-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;transition:-o-transform 200ms ease-in-out,box-shadow 200ms ease-in-out;transition:transform 200ms ease-in-out,box-shadow 200ms ease-in-out;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}a.jsx-f292054e5f7c66e2:hover{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);-ms-transform:translateY(-8px);-o-transform:translateY(-8px);transform:translateY(-8px);-webkit-box-shadow:0px 5px 10px rgba(0,0,0,.2);-moz-box-shadow:0px 5px 10px rgba(0,0,0,.2);box-shadow:0px 5px 10px rgba(0,0,0,.2)}a.jsx-f292054e5f7c66e2>div.jsx-f292054e5f7c66e2 img.jsx-f292054e5f7c66e2{width:auto;max-height:100px;max-width:100%;margin-right:15px;margin-bottom:15px;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}"
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const producers = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getAllProducers */ .B_)();
    return {
        props: {
            producers
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Producteurs);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36], () => (__webpack_exec__(7082)));
module.exports = __webpack_exports__;

})();