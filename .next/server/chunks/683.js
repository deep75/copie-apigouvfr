"use strict";
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 9597:
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(769);
/* harmony import */ var _uiComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4795);
/* harmony import */ var _uiComponents_emoji__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9213);
/* harmony import */ var _utils_client_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9435);







const Feedback = ()=>{
    const { /*#__PURE__*/ 0: hasAnswered , 1: setHasAnswered  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-1);
    const { 0: hasAnsweredDetails , 1: setHasAnsweredDetails  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const refDetails = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const answer = (yesOrNo)=>{
        setHasAnswered(yesOrNo ? 1 : 0);
        // send to matomo
        (0,_utils_client_analytics__WEBPACK_IMPORTED_MODULE_6__/* .logFeedback */ .Cp)(yesOrNo ? "Oui" : "Non");
    };
    const answerDetails = ()=>{
        if (!refDetails || !refDetails.current) {
            return;
        }
        //@ts-ignore
        const details = refDetails.current.value;
        setHasAnsweredDetails(true);
        // send to matomo
        (0,_utils_client_analytics__WEBPACK_IMPORTED_MODULE_6__/* .logFeedbackDetails */ .tO)(`${window.location.pathname} - ${details}`);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "feedback-widget",
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "f85f3f9699e40837",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                            _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                        ]
                    ]
                ]),
                children: hasAnswered === -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            role: "img",
                            "aria-label": "\xe9moji hello",
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]),
                            children: "\uD83D\uDC4B"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]) + " " + "separator"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]),
                            children: "Est-ce que cette page vous a \xe9t\xe9 utile ?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]) + " " + "separator large"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_4__/* .ButtonLink */ .ZP, {
                            onClick: ()=>answer(true)
                            ,
                            alt: true,
                            children: "Oui"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]) + " " + "separator"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_4__/* .ButtonLink */ .ZP, {
                            onClick: ()=>answer(false)
                            ,
                            alt: true,
                            children: "Non"
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "f85f3f9699e40837",
                            [
                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                            ]
                        ]
                    ]) + " " + "thanks",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "f85f3f9699e40837",
                                        [
                                            _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                            _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                        ]
                                    ]
                                ]),
                                children: "Merci pour votre r\xe9ponse !"
                            })
                        }),
                        hasAnswered === 0 && !hasAnsweredDetails && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            id: "contact-form",
                            onSubmit: answerDetails,
                            className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f85f3f9699e40837",
                                    [
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                        _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    htmlFor: "question",
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f85f3f9699e40837",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                            ]
                                        ]
                                    ]),
                                    children: "Pouvez-vous nous en dire plus sur ce qui vous a pos\xe9 probl\xe8me ?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    id: "description",
                                    placeholder: "D\xe9taillez ici votre r\xe9ponse",
                                    ref: refDetails,
                                    required: true,
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f85f3f9699e40837",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                            ]
                                        ]
                                    ])
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f85f3f9699e40837",
                                            [
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                                                _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                                            ]
                                        ]
                                    ]) + " " + "submit layout-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents__WEBPACK_IMPORTED_MODULE_4__/* .ButtonLink */ .ZP, {
                                        type: "submit",
                                        size: "large",
                                        children: "Envoyer"
                                    })
                                })
                            ]
                        }),
                        hasAnsweredDetails && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_uiComponents_emoji__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            emoji: "\uD83D\uDE42",
                            label: "merci"
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f85f3f9699e40837",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue,
                    _constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey
                ],
                children: `div#feedback-widget.__jsx-style-dynamic-selector{background-color:${_constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.lightBlue */ .Z.colors.lightBlue};color:${_constants__WEBPACK_IMPORTED_MODULE_3__/* ["default"].colors.darkGrey */ .Z.colors.darkGrey};-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:20px 10px;margin-top:70px;border-bottom:none;z-index:10;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.1rem}.separator.__jsx-style-dynamic-selector{width:15px}.separator.large.__jsx-style-dynamic-selector{width:40px}.thanks.__jsx-style-dynamic-selector{text-align:center;line-height:30px}`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);


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