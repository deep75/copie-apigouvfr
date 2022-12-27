"use strict";
(() => {
var exports = {};
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7209);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_page__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ }),

/***/ 392:
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
/* harmony import */ var _components_richReactMarkdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5813);
/* harmony import */ var _utils_client_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9435);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7697);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5636);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4034);
/* harmony import */ var _uiComponents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4795);
/* harmony import */ var _uiComponents_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(150);










const IsEligible = ({ isEligible  })=>{
    switch(isEligible){
        case _model__WEBPACK_IMPORTED_MODULE_4__/* .ELIGIBLE.YES */ .TE.YES:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    "Vous \xeates \xe9ligible",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "\xe9moji oui",
                        /*#__PURE__*/ children: "\uD83D\uDC4C"
                    })
                ]
            });
        case _model__WEBPACK_IMPORTED_MODULE_4__/* .ELIGIBLE.MAYBE */ .TE.MAYBE:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    "Vous \xeates peut-\xeatre \xe9ligible",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "\xe9moji peut-etre",
                        children: "\uD83E\uDDD0"
                    })
                ]
            });
        default:
        case _model__WEBPACK_IMPORTED_MODULE_4__/* .ELIGIBLE.NO */ .TE.NO:
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    "D\xe9sol\xe9, vous n\u2019\xeates pas \xe9ligible",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "\xe9moji non",
                        children: "\uD83D\uDEAB"
                    })
                ]
            });
    }
};
const AccessCondition = ({ title , slug , accessConditionOptions ,  })=>{
    const { 0: visitorType1 , 1: setVisitorType  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const updateVisitorType = (visitorType)=>{
        setIsLoading(true);
        setVisitorType(visitorType);
        window.setTimeout(()=>setIsLoading(false)
        , 500);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (visitorType1 === null) {
            (0,_utils_client_analytics__WEBPACK_IMPORTED_MODULE_9__/* .logParcoursDemandeAcces */ .A5)("1. Commence le parcours client", title);
        }
    }, [
        title,
        visitorType1
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (visitorType1 !== null) {
            (0,_utils_client_analytics__WEBPACK_IMPORTED_MODULE_9__/* .logParcoursDemandeAcces */ .A5)("2. Renseigne un statut de visiteur", title, visitorType1);
        }
    }, [
        title,
        visitorType1
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        headerKey: _components__WEBPACK_IMPORTED_MODULE_6__/* .HEADER_PAGE.APIS */ .NB.APIS,
        title: `Demande d’habilitation ${title}`,
        description: `${title} est une des APIs du service public. Découvrez ses conditions d’accès.`,
        canonical: `https://api.gouv.fr/les-api/${slug}/demande-acces`,
        noIndex: true,
        usePreFooter: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-80270df921d3c7d9" + " " + "fr-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-80270df921d3c7d9" + " " + "breadcrumb",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: `/les-api/${slug}`,
                        className: "jsx-80270df921d3c7d9",
                        children: [
                            "\u21E0 Fiche ",
                            title
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-80270df921d3c7d9" + " " + "text-wrapper text-style",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "jsx-80270df921d3c7d9",
                        children: [
                            "Demande d\u2019habilitation ",
                            title
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "jsx-80270df921d3c7d9",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                role: "img",
                                "aria-label": "\xe9moji cl\xe9",
                                className: "jsx-80270df921d3c7d9",
                                children: "\uD83D\uDD11"
                            }),
                            " ",
                            "L\u2019acc\xe8s aux donn\xe9es de ",
                            title,
                            " n\xe9cessite une habilitation."
                        ]
                    }),
                    accessConditionOptions && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "jsx-80270df921d3c7d9",
                                children: [
                                    "V\xe9rifions si vous \xeates ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "jsx-80270df921d3c7d9",
                                        children: "\xe9ligible"
                                    }),
                                    ". Qui \xeates-vous :"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_7__/* .MultiChoice */ .nb, {
                                multiChoiceOptions: accessConditionOptions,
                                onClick: updateVisitorType,
                                selected: visitorType1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "jsx-80270df921d3c7d9" + " " + "condition-details",
                                children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}) : accessConditionOptions.map((condition)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                        children: condition.value === visitorType1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "jsx-80270df921d3c7d9",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IsEligible, {
                                                        isEligible: condition.is_eligible
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_richReactMarkdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    source: condition.description
                                                })
                                            ]
                                        })
                                    }, condition.description)
                                )
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "80270df921d3c7d9",
                children: ".condition-details.jsx-80270df921d3c7d9{margin:50px 0 150px}.breadcrumb.jsx-80270df921d3c7d9{margin-top:25px}"
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const apis = await (0,_model__WEBPACK_IMPORTED_MODULE_4__/* .getAllAPIs */ .Pc)();
    return {
        paths: apis.filter((api)=>!!api.access_page
        ).map((api)=>{
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
    //@ts-ignore
    const api = await (0,_model__WEBPACK_IMPORTED_MODULE_4__/* .getAPI */ .Kf)(slug);
    if (!api.access_page) {
        throw Error("Should not happen");
    }
    const accessConditionOptions = api.access_page.reduce((accumulator, condition)=>{
        const { description , is_eligible  } = condition;
        condition.who.forEach((type)=>{
            accumulator.push({
                label: type,
                value: type,
                description,
                is_eligible
            });
        });
        return accumulator;
    }, []);
    return {
        props: {
            title: api.title,
            slug: api.slug,
            accessConditionOptions
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccessCondition);


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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,615,532,813,150], () => (__webpack_exec__(392)));
module.exports = __webpack_exports__;

})();