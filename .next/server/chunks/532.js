"use strict";
exports.id = 532;
exports.ids = [532];
exports.modules = {

/***/ 7532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ H2WithAnchor),
/* harmony export */   "h": () => (/* binding */ H3WithAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7561);
/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2738);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(769);





const turnStringToId = (str)=>{
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .Fv)(str.toString().toLowerCase().split(" ").join("-"));
};
const Anchor = ({ id  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: `#${id}`,
                "aria-hidden": "true",
                tabIndex: -1,
                className: next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "df17acb2d8300403",
                        [
                            _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.blue */ .Z.colors.blue
                        ]
                    ]
                ]) + " " + "header-anchor dont-apply-link-style",
                /*#__PURE__*/ children: "#"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "df17acb2d8300403",
                dynamic: [
                    _constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.blue */ .Z.colors.blue
                ],
                children: `a.header-anchor.__jsx-style-dynamic-selector{font-size:.9em;float:left;margin-left:-.87em;padding-right:.23em;text-decoration:none;color:${_constants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].colors.blue */ .Z.colors.blue}}`
            })
        ]
    })
;
const HiddenAnchor = ({ id  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                id: id,
                className: "jsx-be183dfe3e20798b" + " " + "hidden-anchor",
                children: "This is a hidden anchor. It is a trick to avoid having the header hiding the top of the page."
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "be183dfe3e20798b",
                children: "a.hidden-anchor.jsx-be183dfe3e20798b{display:block;position:absolute;top:0;visibility:hidden}"
            })
        ]
    })
;
const H2WithAnchor = ({ children  })=>{
    const id = turnStringToId(children || (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .uuid */ .Vj)());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-3cc1da6e79deaa93",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenAnchor, {
                id: id
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                className: "jsx-3cc1da6e79deaa93" + " " + "ui dividing header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-3cc1da6e79deaa93",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                            id: id
                        })
                    }),
                    children
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3cc1da6e79deaa93",
                children: "div.jsx-3cc1da6e79deaa93{margin-top:2em;position:relative}h2.jsx-3cc1da6e79deaa93>div.jsx-3cc1da6e79deaa93{opacity:0}h2.jsx-3cc1da6e79deaa93:hover>div.jsx-3cc1da6e79deaa93{opacity:1}"
            })
        ]
    });
};
const H3WithAnchor = ({ children  })=>{
    const id = turnStringToId(children || (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .uuid */ .Vj)());
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-769ae8057cfc3d9e",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-769ae8057cfc3d9e",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HiddenAnchor, {
                    id: id
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                className: "jsx-769ae8057cfc3d9e" + " " + "ui dividing header",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-769ae8057cfc3d9e",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Anchor, {
                            id: id
                        })
                    }),
                    children
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "769ae8057cfc3d9e",
                children: "div.jsx-769ae8057cfc3d9e{margin-top:2em;position:relative}h3.jsx-769ae8057cfc3d9e>div.jsx-769ae8057cfc3d9e{opacity:0}h3.jsx-769ae8057cfc3d9e:hover>div.jsx-769ae8057cfc3d9e{opacity:1}"
            })
        ]
    });
};



/***/ })

};
;