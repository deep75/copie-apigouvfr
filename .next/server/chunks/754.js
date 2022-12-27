"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 8382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* binding */ AccountNeeded),
/* harmony export */   "E5": () => (/* binding */ Habilitation),
/* harmony export */   "pw": () => (/* binding */ SwaggerPartiallyFunctionnal),
/* harmony export */   "wM": () => (/* binding */ ExternalDoc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(769);
/* harmony import */ var _uiComponents_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9213);
/* harmony import */ var _uiComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4795);






const DocSection = ({ children , label ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "72b8a56dc3fb30c3",
                [
                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "72b8a56dc3fb30c3",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey
                        ]
                    ]
                ]) + " " + "wrapper",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "72b8a56dc3fb30c3",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey
                                ]
                            ]
                        ]) + " " + "label",
                        /*#__PURE__*/ children: label
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "72b8a56dc3fb30c3",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey
                                ]
                            ]
                        ]) + " " + "description",
                        children: children
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "72b8a56dc3fb30c3",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey
                ],
                children: `.wrapper.__jsx-style-dynamic-selector{max-width:600px;margin-top:20px;background-color:${_constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey};padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.label.__jsx-style-dynamic-selector{font-weight:bold;font-size:1.2rem;line-height:1.8rem;margin-bottom:5px}`
            })
        ]
    })
;
const ExternalDoc = ({ doc_link  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DocSection, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    emoji: "\uD83D\uDCBB",
                    label: "Documentation"
                }),
                "Documentation externe"
            ]
        }),
        children: [
            "Cette API poss\xe8de une documentation compl\xe9mentaire, \xe0 laquelle vous pouvez acc\xe9der en ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_5__/* .ExternalLink */ .dL, {
                href: doc_link,
                children: "cliquant ici"
            })
        ]
    })
;
const Habilitation = ({ slug  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DocSection, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    emoji: "\uD83D\uDD12",
                    label: "lock"
                }),
                "API sous habilitation"
            ]
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginBottom: "10px"
                },
                children: "Cette API n\xe9cessite une habilitation. Vous pouvez consulter sa documentation, mais pour acc\xe9der aux donn\xe9es vous devrez faire une demande d'acc\xe8s"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "layout-right",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_5__/* .ButtonLink */ .ZP, {
                    href: `/les-api/${slug}/demande-acces`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "layout-center btn-icon",
                        children: "Demander l\u2019acc\xe8s \xe0 l\u2019API"
                    })
                })
            })
        ]
    })
;
const SwaggerPartiallyFunctionnal = ({})=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-b3e1b6a7c9b96113",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                className: "jsx-b3e1b6a7c9b96113"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                className: "jsx-b3e1b6a7c9b96113",
                children: "Cette documentation peut ne pas fonctionner correctement :"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                className: "jsx-b3e1b6a7c9b96113"
            }),
            'Ce swagger est prot\xe9g\xe9 par une politique de "Cross-origin resource sharing" (CORS) pouvant nuire \xe0 son bon fonctionnement.',
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b3e1b6a7c9b96113",
                children: ""
            })
        ]
    })
;
const AccountNeeded = ({ account_link ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DocSection, {
        label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    emoji: "\u26A0\uFE0F",
                    label: "attention"
                }),
                "Compte n\xe9cessaire pour appeler l\u2019API"
            ]
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    marginBottom: "10px"
                },
                children: "Attention ! Cette API n\xe9cessite de se cr\xe9er un compte afin d\u2019acc\xe9der aux donn\xe9es :"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "layout-right",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_5__/* .ButtonLink */ .ZP, {
                    href: account_link,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "layout-center btn-icon",
                        children: "Se cr\xe9er un compte"
                    })
                })
            })
        ]
    })
;


/***/ }),

/***/ 756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AD": () => (/* reexport */ documentationSubSection/* AccountNeeded */.AD),
  "Ex": () => (/* reexport */ documentationLeftMenu),
  "wM": () => (/* reexport */ documentationSubSection/* ExternalDoc */.wM),
  "E5": () => (/* reexport */ documentationSubSection/* Habilitation */.E5)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./uiComponents/icon/lock.tsx


const Lock = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
            x: "3",
            y: "11",
            width: "18",
            fill: "white",
            height: "11",
            rx: "2",
            ry: "2"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4"
        })
    ]
});
/* harmony default export */ const lock = (Lock);

// EXTERNAL MODULE: ./components/searchApis/filtersLogic.ts + 1 modules
var filtersLogic = __webpack_require__(93);
;// CONCATENATED MODULE: ./components/documentation/documentationLeftMenu.tsx






const DocumentationLeftMenu = ({ allApis  })=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const { 0: results , 1: setResults  } = (0,external_react_.useState)(allApis);
    (0,external_react_.useEffect)(()=>{
        let res = allApis;
        const cleanedSearchTerms = searchTerm.split(" ").filter((t)=>!!t
        );
        if (cleanedSearchTerms.length > 0) {
            res = res.map((0,filtersLogic/* computeSearchResults */.cI)(cleanedSearchTerms)).filter((api)=>api.score !== 0
            );
        }
        const newApiList = res.sort((a, b)=>{
            //@ts-ignore
            if (a.score && b.score) {
                //@ts-ignore
                return b.score - a.score;
            }
            return (b.visits_2019 || 0) - (a.visits_2019 || 0);
        });
        setResults(newApiList);
        return ()=>{};
    }, [
        searchTerm,
        allApis
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "documentation-left-column",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "search-wrapper layout-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* SearchBar */.E1, {
                    placeholder: "Rechercher une API",
                    onSearch: setSearchTerm
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "documentation-api-list",
                children: results.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Aucun r\xe9sultat n'a \xe9t\xe9 trouv\xe9."
                }) : results.map((api)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documentation/[slug]",
                        as: `/documentation/${api.slug}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "api-title",
                                    children: [
                                        api.title,
                                        " ",
                                        !api.doc_tech_link && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            title: "Cette API ne propose pas de documentation au format Open API",
                                            className: "swagger-label",
                                            children: "Pas\xa0de\xa0swagger"
                                        })
                                    ]
                                }),
                                api.is_open === -1 && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    title: "Cette API n\xe9cessite une habilitation",
                                    className: "is-open-label",
                                    children: lock
                                })
                            ]
                        })
                    }, api.slug)
                )
            })
        ]
    });
};
/* harmony default export */ const documentationLeftMenu = (DocumentationLeftMenu);

// EXTERNAL MODULE: ./components/documentation/documentationSubSection.tsx
var documentationSubSection = __webpack_require__(8382);
;// CONCATENATED MODULE: ./components/documentation/index.tsx





/***/ }),

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7209);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_page__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ })

};
;