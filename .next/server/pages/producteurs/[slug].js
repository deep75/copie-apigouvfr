"use strict";
(() => {
var exports = {};
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 5636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7209);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_page__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ }),

/***/ 5176:
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
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5636);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(769);
/* harmony import */ var _components_searchApis_apiCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1276);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1904);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _uiComponents_emoji__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9213);









const PageHeader = ({ title , logo , acronym  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "mission-statement",
        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "d4f766c4ba98e2e3",
                [
                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "d4f766c4ba98e2e3",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                        ]
                    ]
                ]) + " " + "fr-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "d4f766c4ba98e2e3",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]) + " " + "breadcrumb",
                        /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/producteurs",
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "d4f766c4ba98e2e3",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                    ]
                                ]
                            ]) + " " + "dont-apply-link-style",
                            children: "\u21E0 Tous les producteurs d'API"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "d4f766c4ba98e2e3",
                                [
                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]) + " " + "content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/images/api-logo/${logo}`,
                                alt: `logo de ${title}`,
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d4f766c4ba98e2e3",
                                        [
                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "d4f766c4ba98e2e3",
                                        [
                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                                        ]
                                    ]
                                ]),
                                children: [
                                    title,
                                    " ",
                                    acronym ? `(${acronym})` : ""
                                ]
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "d4f766c4ba98e2e3",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient
                ],
                children: `#mission-statement.__jsx-style-dynamic-selector{background:${_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.backgroundBlueGradient */ .Z.colors.backgroundBlueGradient};width:100%;color:#fff;text-align:left}.content.__jsx-style-dynamic-selector{margin:0;padding:25px 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.breadcrumb.__jsx-style-dynamic-selector{padding-top:25px}.breadcrumb.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin-top:25px;color:#fff}.breadcrumb.__jsx-style-dynamic-selector:hover{text-decoration:underline}h1.__jsx-style-dynamic-selector{margin:0;margin-left:15px;font-style:normal;font-weight:bold;color:#fff}img.__jsx-style-dynamic-selector{-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;width:60px;height:60px;-o-object-fit:contain;object-fit:contain;background-color:#fff}@media only screen and (min-width:1px)and (max-width:900px){.content.__jsx-style-dynamic-selector{padding:0 0 10px}.breadcrumb.__jsx-style-dynamic-selector{padding-top:10px}}`
            })
        ]
    })
;
const ProducerPage = ({ partnerApis =[] , apis =[] , producer ,  })=>{
    const producerWithPronounSafe = producer.nameWithPronoun || producer.name;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: `Les API produites par ${producer.name}`,
        description: `Découvrez la liste des API produites par ${producer.name} dont certaines sont accessibles via api.gouv.fr`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageHeader, {
                title: producer.name,
                logo: producer.logo || _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].logo */ .Z.logo,
                acronym: producer.acronym
            }),
            (producer.short || producer.description || producer.data) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "description",
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "31e5f84209f1b819",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                        ]
                    ]
                ]) + " " + "fr-container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "31e5f84209f1b819",
                            [
                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                            ]
                        ]
                    ]) + " " + "right-column-grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "31e5f84209f1b819",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                    ]
                                ]
                            ]) + " " + "left-column text-style",
                            children: [
                                producer.short && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                "Qu'est ce que ",
                                                producerWithPronounSafe,
                                                " ?"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: producer.short
                                        })
                                    ]
                                }),
                                producer.description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: "Quelle est sa mission de service public ?"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: producer.description
                                        })
                                    ]
                                }),
                                producer.data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                "Quelles donn\xe9es sont d\xe9tenues par ",
                                                producerWithPronounSafe,
                                                " ",
                                                "?"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                "Dans le cadre de sa mission ",
                                                producerWithPronounSafe,
                                                " a notamment la charge des donn\xe9es suivantes :"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((markdown_to_jsx__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            children: producer.data
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "31e5f84209f1b819",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                            ]
                                        ]
                                    ])
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "31e5f84209f1b819",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                    ]
                                ]
                            ]) + " " + "right-column info-column",
                            children: (producer.contact || producer.annuaire || producer.siteAPI || producer.siteOpenData) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "31e5f84209f1b819",
                                        [
                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "31e5f84209f1b819",
                                                [
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                ]
                                            ]
                                        ]),
                                        children: [
                                            "Contacter ",
                                            producerWithPronounSafe
                                        ]
                                    }),
                                    producer.annuaire && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        emoji: "\uD83D\uDCD6",
                                                        label: "annuaire"
                                                    }),
                                                    "Consulter",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: producer.annuaire,
                                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "31e5f84209f1b819",
                                                                [
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "sa page sur l'annuaire de l\u2019administration."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ])
                                            })
                                        ]
                                    }),
                                    producer.contact && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        emoji: "\uD83D\uDCDD",
                                                        label: "formulaire"
                                                    }),
                                                    "Ecrire \xe0 l'\xe9quipe via le",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: producer.contact,
                                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "31e5f84209f1b819",
                                                                [
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "formulaire de contact"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ])
                                            })
                                        ]
                                    }),
                                    producer.siteOpenData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ]),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                        emoji: "\uD83E\uDDD1\u200D\uD83D\uDCBB",
                                                        label: "ordinateur"
                                                    }),
                                                    "Consulter son",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: producer.siteOpenData,
                                                        className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "31e5f84209f1b819",
                                                                [
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "portail open-data"
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "31e5f84209f1b819",
                                                        [
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                        ]
                                                    ]
                                                ])
                                            })
                                        ]
                                    }),
                                    producer.siteAPI && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    emoji: "\u2699\uFE0F",
                                                    label: "rouage"
                                                }),
                                                "Consulter son ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: producer.siteAPI,
                                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "31e5f84209f1b819",
                                                            [
                                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "portail API"
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "api-list",
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "31e5f84209f1b819",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                            _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "31e5f84209f1b819",
                            [
                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                            ]
                        ]
                    ]) + " " + "fr-container text-style",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "31e5f84209f1b819",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                    ]
                                ]
                            ]),
                            children: [
                                "Quelles sont les API de ",
                                producerWithPronounSafe,
                                " ?"
                            ]
                        }),
                        apis && apis.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "31e5f84209f1b819",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        "Actuellement ",
                                        producerWithPronounSafe,
                                        " publie et maintient",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                apis.length,
                                                " API :"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "31e5f84209f1b819",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                            ]
                                        ]
                                    ]) + " " + "default-grid",
                                    children: apis.map((api)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchApis_apiCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            ...api
                                        }, api.title)
                                    )
                                })
                            ]
                        }),
                        partnerApis && partnerApis.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "31e5f84209f1b819",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        producerWithPronounSafe,
                                        " est partenaire de",
                                        " ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "31e5f84209f1b819",
                                                    [
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                        _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                partnerApis.length,
                                                " API :"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "31e5f84209f1b819",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                                                _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                                            ]
                                        ]
                                    ]) + " " + "default-grid",
                                    children: partnerApis.map((api)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_searchApis_apiCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                            ...api
                                        }, api.title)
                                    )
                                })
                            ]
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "31e5f84209f1b819",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey,
                    _constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue
                ],
                children: `#api-list.__jsx-style-dynamic-selector{background-color:${_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightGrey */ .Z.colors.lightGrey};display:block;padding-bottom:40px;padding-top:30px}.right-column-grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:65%31%;grid-gap:40px}.info-column.__jsx-style-dynamic-selector{border-left:2px solid ${_constants__WEBPACK_IMPORTED_MODULE_5__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue};padding:30px 0 0 40px}@media only screen and (min-width:1px)and (max-width:900px){.right-column-grid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.info-column.__jsx-style-dynamic-selector{border:none;padding:0}}`
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const producers = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getAllProducers */ .B_)();
    return {
        paths: producers.map((producer)=>{
            return {
                params: {
                    slug: producer.slug
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
    const producer = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getProducer */ .V8)(slug);
    const allApis = await (0,_model__WEBPACK_IMPORTED_MODULE_3__/* .getAllAPIs */ .Pc)();
    const apis = allApis.filter((api)=>api.producer === producer.slug
    );
    const partnerApis = allApis.filter((api)=>(api.partners || []).map((partner)=>partner.slug
        ).indexOf(producer.slug) > -1
    );
    return {
        props: {
            producer,
            apis,
            partnerApis
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProducerPage);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,276], () => (__webpack_exec__(5176)));
module.exports = __webpack_exports__;

})();