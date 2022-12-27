"use strict";
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 1276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_uptime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5053);
/* harmony import */ var _filtersLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(769);







const ApiCard = ({ title , path , tagline ="" , uptime =null , logo , owner , is_open , is_france_connected =0 , matches ={} ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/les-api/[slug]",
                as: path,
                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "4e7da7a6048a82ac",
                            [
                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                            ]
                        ]
                    ]) + " " + "api-card dont-apply-link-style",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "4e7da7a6048a82ac",
                                    [
                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                    ]
                                ]
                            ]) + " " + "content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `/images/api-logo/${logo || _constants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logo */ .Z.logo}`,
                                    alt: logo ? `logo de ${title}` : "logo g\xe9n\xe9rique api.gouv",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4e7da7a6048a82ac",
                                            [
                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                            ]
                                        ]
                                    ])
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: (0,_filtersLogic__WEBPACK_IMPORTED_MODULE_5__/* .textHighlighter */ .$h)(matches.title, title)
                                    },
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4e7da7a6048a82ac",
                                            [
                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                            ]
                                        ]
                                    ]) + " " + "header"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: (0,_filtersLogic__WEBPACK_IMPORTED_MODULE_5__/* .textHighlighter */ .$h)(matches.tagline, tagline)
                                    },
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4e7da7a6048a82ac",
                                            [
                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                            ]
                                        ]
                                    ]) + " " + "description"
                                })
                            ]
                        }),
                        is_france_connected && is_france_connected > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "4e7da7a6048a82ac",
                                    [
                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                    ]
                                ]
                            ]) + " " + "card-extra fc-compat",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/images/divers/franceConnectLogo.png",
                                    alt: "fc-logo",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4e7da7a6048a82ac",
                                            [
                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                            ]
                                        ]
                                    ])
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "4e7da7a6048a82ac",
                                            [
                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        is_france_connected === 2 ? " S\u2019utilise avec " : " Peut s\u2019utiliser avec ",
                                        "FranceConnect"
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "4e7da7a6048a82ac",
                                    [
                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                    ]
                                ]
                            ]) + " " + "card-extra",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "4e7da7a6048a82ac",
                                        [
                                            (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "4e7da7a6048a82ac",
                                                [
                                                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            owner.indexOf("&") > -1 ? "Cop" : "P",
                                            "roduit par :"
                                        ]
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        dangerouslySetInnerHTML: {
                                            __html: (0,_filtersLogic__WEBPACK_IMPORTED_MODULE_5__/* .textHighlighter */ .$h)(matches.owner, owner)
                                        },
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "4e7da7a6048a82ac",
                                                [
                                                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                ]
                                            ]
                                        ])
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "4e7da7a6048a82ac",
                                    [
                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                    ]
                                ]
                            ]) + " " + "card-extra card-footer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "4e7da7a6048a82ac",
                                        [
                                            (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                        ]
                                    ]
                                ]) + " " + "badges",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "4e7da7a6048a82ac",
                                                [
                                                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "badge contract",
                                        children: is_open !== -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 32 32",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "4e7da7a6048a82ac",
                                                            [
                                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fill: _constants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].colors.grey */ .Z.colors.grey,
                                                            d: "M29.3333 14H10.6667C9.19391 14 8 15.3838 8 17.0909V27.9091C8 29.6162 9.19391 31 10.6667 31H29.3333C30.8061 31 32 29.6162 32 27.9091V17.0909C32 15.3838 30.8061 14 29.3333 14Z",
                                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "4e7da7a6048a82ac",
                                                                    [
                                                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                                    ]
                                                                ]
                                                            ])
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M2 14V8.66667C2 6.89856 2.70238 5.20286 3.95262 3.95262C5.20286 2.70238 6.89856 2 8.66667 2C10.4348 2 12.1305 2.70238 13.3807 3.95262C14.631 5.20286 15.3333 6.89856 15.3333 8.66667V14",
                                                            strokeWidth: "3",
                                                            stroke: _constants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].colors.grey */ .Z.colors.grey,
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "4e7da7a6048a82ac",
                                                                    [
                                                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                                    ]
                                                                ]
                                                            ])
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "4e7da7a6048a82ac",
                                                            [
                                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Acc\xe8s libre"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 32 32",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "4e7da7a6048a82ac",
                                                            [
                                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fill: _constants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].colors.grey */ .Z.colors.grey,
                                                            d: "M25.3333 14H6.66667C5.19391 14 4 15.3838 4 17.0909V27.9091C4 29.6162 5.19391 31 6.66667 31H25.3333C26.8061 31 28 29.6162 28 27.9091V17.0909C28 15.3838 26.8061 14 25.3333 14Z",
                                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "4e7da7a6048a82ac",
                                                                    [
                                                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                                    ]
                                                                ]
                                                            ])
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M9.33337 14V8.66667C9.33337 6.89856 10.0358 5.20286 11.286 3.95262C12.5362 2.70238 14.2319 2 16 2C17.7682 2 19.4638 2.70238 20.7141 3.95262C21.9643 5.20286 22.6667 6.89856 22.6667 8.66667V14",
                                                            stroke: _constants__WEBPACK_IMPORTED_MODULE_6__/* ["default"].colors.grey */ .Z.colors.grey,
                                                            strokeWidth: "3",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "4e7da7a6048a82ac",
                                                                    [
                                                                        (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                                    ]
                                                                ]
                                                            ])
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "4e7da7a6048a82ac",
                                                            [
                                                                (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Sous habilitation"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "4e7da7a6048a82ac",
                                                [
                                                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "badge filler"
                                    }),
                                    uptime && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "4e7da7a6048a82ac",
                                                [
                                                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                ]
                                            ]
                                        ]) + " " + "badge uptime",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "4e7da7a6048a82ac",
                                                        [
                                                            (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                                                        ]
                                                    ]
                                                ]) + " " + "uptime-stat"
                                            }),
                                            (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .roundUptime */ .a)(2)(uptime),
                                            "% actif / dernier mois"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "4e7da7a6048a82ac",
                dynamic: [
                    (0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)
                ],
                children: `.uptime-stat.__jsx-style-dynamic-selector{width:10px;height:10px;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;margin:0 .2em;background-color:${(0,_utils_uptime__WEBPACK_IMPORTED_MODULE_4__/* .getUptimeState */ .A)(uptime)}}.card-extra.fc-compat.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{width:initial!important}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiCard);


/***/ })

};
;