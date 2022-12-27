"use strict";
(() => {
var exports = {};
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 7548:
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
// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
// EXTERNAL MODULE: ./layouts/index.ts
var layouts = __webpack_require__(5636);
// EXTERNAL MODULE: ./components/index.js + 9 modules
var components = __webpack_require__(4034);
// EXTERNAL MODULE: ./components/richReactMarkdown/index.tsx + 14 modules
var richReactMarkdown = __webpack_require__(5813);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
;// CONCATENATED MODULE: ./uiComponents/icon/socialMedia.tsx


const linkedin = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    stroke: "white",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
            x: "2",
            y: "9",
            width: "4",
            height: "12"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("circle", {
            cx: "4",
            cy: "4",
            r: "2"
        })
    ]
});
const mail = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    fill: "none",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
            points: "22,6 12,13 2,6"
        })
    ]
});
const facebook = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    fill: "none",
    stroke: "white",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })
});
const twitter = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
    })
});


;// CONCATENATED MODULE: ./uiComponents/share/index.tsx





const Share = ({ href , title =""  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styled_jsx_default().dynamic([
            [
                "8224f013be8c9e0e",
                [
                    constants/* default.colors.blue */.Z.colors.blue
                ]
            ]
        ]) + " " + "container social-network-icons",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `https://twitter.com/intent/tweet?url=${href}&text=${title}`,
                rel: "noreferrer noopener",
                target: "_blank",
                title: "Partager sur twitter",
                className: styled_jsx_default().dynamic([
                    [
                        "8224f013be8c9e0e",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "dont-apply-link-style",
                /*#__PURE__*/ children: twitter
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `https://www.facebook.com/sharer/sharer.php?u=${href}`,
                rel: "noreferrer noopener",
                target: "_blank",
                title: "Partager sur Facebook",
                className: styled_jsx_default().dynamic([
                    [
                        "8224f013be8c9e0e",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "dont-apply-link-style",
                children: facebook
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${title}`,
                rel: "noreferrer noopener",
                target: "_blank",
                title: "Partager sur Linkedin",
                className: styled_jsx_default().dynamic([
                    [
                        "8224f013be8c9e0e",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "dont-apply-link-style",
                children: linkedin
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: `mailto:info@example.com?&subject=${title}&body=${href}`,
                rel: "noreferrer noopener",
                target: "_blank",
                title: "Partager par e-mail",
                className: styled_jsx_default().dynamic([
                    [
                        "8224f013be8c9e0e",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "dont-apply-link-style",
                children: mail
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "8224f013be8c9e0e",
                dynamic: [
                    constants/* default.colors.blue */.Z.colors.blue
                ],
                children: `.social-network-icons.container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:end;-webkit-justify-content:flex-end;-moz-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.social-network-icons a{background-color:none;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:3px;margin:1px;-webkit-transition:-webkit-transform 100ms ease-in-out;-moz-transition:-moz-transform 100ms ease-in-out;-o-transition:-o-transform 100ms ease-in-out;transition:-webkit-transform 100ms ease-in-out;transition:-moz-transform 100ms ease-in-out;transition:-o-transform 100ms ease-in-out;transition:transform 100ms ease-in-out}.social-network-icons a:hover{-webkit-transform:translateY(-3px);-moz-transform:translateY(-3px);-ms-transform:translateY(-3px);-o-transform:translateY(-3px);transform:translateY(-3px)}.social-network-icons a,.social-network-icons a svg{stroke:${constants/* default.colors.blue */.Z.colors.blue};width:25px;height:25px}.social-network-icons a:after{display:none}`
            })
        ]
    })
;
/* harmony default export */ const share = (Share);

// EXTERNAL MODULE: ./components/feedback/index.tsx
var feedback = __webpack_require__(9597);
;// CONCATENATED MODULE: ./pages/guides/[slug].tsx











const computeRelatedGuides = async (guide1)=>{
    const related_guides = await Promise.all((guide1.related_guides || []).map(async (slug)=>await (0,model/* getGuide */.q6)(slug)
    ));
    return related_guides.map((guide)=>{
        const { title , slug , image =null  } = guide;
        return {
            title,
            slug,
            image
        };
    });
};
const Guide = ({ guide: guide2 , related_guides  })=>{
    const { title , slug , tagline , body , image , noindex =false  } = guide2;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* default */.Z, {
        headerKey: components/* HEADER_PAGE.APIS */.NB.APIS,
        title: title,
        description: `${tagline}`,
        canonical: `https://api.gouv.fr/guides/${slug}`,
        noIndex: noindex,
        usePreFooter: false,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "b80181c29ec6efb",
                        [
                            image ? `url(${`/images/guides/${image}`})` : "#fff",
                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                            image ? `0.8` : "1"
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "b80181c29ec6efb",
                                [
                                    image ? `url(${`/images/guides/${image}`})` : "#fff",
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                    image ? `0.8` : "1"
                                ]
                            ]
                        ]) + " " + "hero",
                        /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: styled_jsx_default().dynamic([
                                [
                                    "b80181c29ec6efb",
                                    [
                                        image ? `url(${`/images/guides/${image}`})` : "#fff",
                                        constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                        image ? `0.8` : "1"
                                    ]
                                ]
                            ]) + " " + "text-wrapper",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "b80181c29ec6efb",
                                            [
                                                image ? `url(${`/images/guides/${image}`})` : "#fff",
                                                constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                                image ? `0.8` : "1"
                                            ]
                                        ]
                                    ]),
                                    children: title
                                }),
                                tagline && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "b80181c29ec6efb",
                                            [
                                                image ? `url(${`/images/guides/${image}`})` : "#fff",
                                                constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                                image ? `0.8` : "1"
                                            ]
                                        ]
                                    ]),
                                    children: tagline
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "b80181c29ec6efb",
                                [
                                    image ? `url(${`/images/guides/${image}`})` : "#fff",
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                    image ? `0.8` : "1"
                                ]
                            ]
                        ]) + " " + "text-style text-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(share, {
                                title: title,
                                href: `https://api.gouv.fr/guides/${slug}`
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown/* default */.Z, {
                                source: body
                            })
                        ]
                    }),
                    related_guides.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "b80181c29ec6efb",
                                [
                                    image ? `url(${`/images/guides/${image}`})` : "#fff",
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                    image ? `0.8` : "1"
                                ]
                            ]
                        ]) + " " + "text-style text-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b80181c29ec6efb",
                                        [
                                            image ? `url(${`/images/guides/${image}`})` : "#fff",
                                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                            image ? `0.8` : "1"
                                        ]
                                    ]
                                ]),
                                children: "Sur le m\xeame sujet"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b80181c29ec6efb",
                                        [
                                            image ? `url(${`/images/guides/${image}`})` : "#fff",
                                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                            image ? `0.8` : "1"
                                        ]
                                    ]
                                ]) + " " + "default-grid",
                                children: related_guides.map((guide)=>/*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* RichLink */.Nm, {
                                        title: guide.title,
                                        image: guide.image ? `/images/guides/thumbnail_${guide.image}` : undefined,
                                        href: `/guides/${guide.slug}`
                                    }, guide.slug)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "b80181c29ec6efb",
                                [
                                    image ? `url(${`/images/guides/${image}`})` : "#fff",
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                                    image ? `0.8` : "1"
                                ]
                            ]
                        ]) + " " + "text-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(feedback/* default */.Z, {})
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "b80181c29ec6efb",
                dynamic: [
                    image ? `url(${`/images/guides/${image}`})` : "#fff",
                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient,
                    image ? `0.8` : "1"
                ],
                children: `.hero.__jsx-style-dynamic-selector{padding:1px 0;background:${image ? `url(${`/images/guides/${image}`})` : "#fff"};background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;position:relative}.hero.__jsx-style-dynamic-selector:after{content:"";background:${constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient};width:100%;height:100%;position:absolute;top:0;left:0;opacity:${image ? `0.8` : "1"};z-index:0}.hero.__jsx-style-dynamic-selector .text-wrapper.__jsx-style-dynamic-selector{position:relative;z-index:1}.hero.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{font-size:1.2rem;color:#fff;text-align:center}.hero.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{margin-top:0px;text-align:center;margin-bottom:20px;color:#fff}`
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const guides = await (0,model/* getAllGuides */.dn)();
    return {
        paths: guides.map((guide)=>{
            return {
                params: {
                    slug: guide.slug
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
    const guide = await (0,model/* getGuide */.q6)(slug);
    const related_guides = await computeRelatedGuides(guide);
    return {
        props: {
            guide,
            related_guides
        }
    };
};
/* harmony default export */ const _slug_ = (Guide);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,615,532,813,683], () => (__webpack_exec__(7548)));
module.exports = __webpack_exports__;

})();