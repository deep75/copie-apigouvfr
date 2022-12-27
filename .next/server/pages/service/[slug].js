"use strict";
(() => {
var exports = {};
exports.id = 309;
exports.ids = [309];
exports.modules = {

/***/ 8501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7697);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(769);
/* harmony import */ var _layouts_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7209);
/* harmony import */ var _components_searchApis_apiCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1276);
/* harmony import */ var _uiComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4795);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4034);
/* harmony import */ var _components_richReactMarkdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5813);










const Service = ({ title , description , link , slug , apiList , body , screenshot , noindex ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_page__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        headerKey: _components__WEBPACK_IMPORTED_MODULE_8__/* .HEADER_PAGE.SERVICES */ .NB.SERVICES,
        title: title,
        description: `${title} est un exemple d’utilisation d'API du service public. ${description}`,
        canonical: `https://api.gouv.fr/service/${slug}`,
        noIndex: noindex,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "title",
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "bd8ff4354185acdb",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "bd8ff4354185acdb",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]),
                        /*#__PURE__*/ children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "bd8ff4354185acdb",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]),
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "bd8ff4354185acdb",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                        ]
                    ]
                ]) + " " + "fr-container content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "bd8ff4354185acdb",
                            [
                                _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                            ]
                        ]
                    ]) + " " + "left-column-grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "bd8ff4354185acdb",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                    ]
                                ]
                            ]) + " " + "left-column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "bd8ff4354185acdb",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                            ]
                                        ]
                                    ]),
                                    children: apiList.length > 1 ? "Les API utilis\xe9es" : "API utilis\xe9e"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: apiList.map((api)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "bd8ff4354185acdb",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                    ]
                                                ]
                                            ]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchApis_apiCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                ...api,
                                                path: api.path,
                                                logo: api.logo
                                            })
                                        }, api.slug)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "bd8ff4354185acdb",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                    ]
                                ]
                            ]) + " " + "column",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "bd8ff4354185acdb",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                            ]
                                        ]
                                    ]) + " " + "text-style",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_richReactMarkdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        source: body
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "bd8ff4354185acdb",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                            ]
                                        ]
                                    ]) + " " + "text-style",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "bd8ff4354185acdb",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                    ]
                                                ]
                                            ]),
                                            children: "Acc\xe9der au service"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "bd8ff4354185acdb",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                    ]
                                                ]
                                            ]),
                                            children: "Suivez le lien suivant pour d\xe9couvrir le service :"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "bd8ff4354185acdb",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                    ]
                                                ]
                                            ]) + " " + "layout-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_uiComponents__WEBPACK_IMPORTED_MODULE_7__/* .ButtonLink */ .ZP, {
                                                href: link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                size: "large",
                                                children: [
                                                    "Acc\xe9dez au service",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        role: "img",
                                                        "aria-label": "\xe9moji fus\xe9e",
                                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "bd8ff4354185acdb",
                                                                [
                                                                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "\uD83D\uDE80"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "bd8ff4354185acdb",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: `/images/service-screenshot/${screenshot}`,
                                        alt: `capture d'écran de ${title}`,
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "bd8ff4354185acdb",
                                                [
                                                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                                ]
                                            ]
                                        ])
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "bd8ff4354185acdb",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                ],
                children: `#title.__jsx-style-dynamic-selector{padding:15px;text-align:center;background:${_constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient};margin-bottom:30px}#title.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector,#title.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{color:#fff}.left-column.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector{position:relative;padding:0 5px;text-align:center}.left-column.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector:after,.left-column.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector:before{position:absolute;content:"";width:15%;height:1px;top:15px;background-color:#ddd}.left-column.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector:after{left:0}.left-column.__jsx-style-dynamic-selector>h3.__jsx-style-dynamic-selector:before{right:0}.left-column.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{margin-bottom:25px}.column.__jsx-style-dynamic-selector{width:100%}.column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{margin-top:50px;max-width:100%}.markdown-body.__jsx-style-dynamic-selector{border:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;margin-top:2em;margin-bottom:2em}.content.__jsx-style-dynamic-selector{margin-bottom:3em}`
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const services = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getAllServices */ .UV)();
    return {
        paths: services.map((service)=>{
            return {
                params: {
                    slug: service.slug
                }
            };
        }),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    //@ts-ignore
    const serviceName = params.slug;
    //@ts-ignore
    const service = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getService */ .ko)(serviceName);
    return {
        props: {
            ...service
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Service);


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,615,532,813,276], () => (__webpack_exec__(8501)));
module.exports = __webpack_exports__;

})();