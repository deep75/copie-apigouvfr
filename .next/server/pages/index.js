"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
// EXTERNAL MODULE: ./layouts/page.tsx + 1 modules
var page = __webpack_require__(7209);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
;// CONCATENATED MODULE: ./uiComponents/icon/magnifyingGlass.tsx



const MagnifyingGlass = ({ color  })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 53 53",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M37.4285 34.9796L48.653 46.2041L46 48.8571L34.7755 37.6326M29.5714 29.3673C32.4633 26.4215 34.0708 22.4501 34.0422 18.3221C34.0135 14.1941 32.3512 10.2454 29.4187 7.3399C26.4862 4.4344 22.5223 2.80859 18.3942 2.81813C14.2661 2.82767 10.3098 4.47178 7.39077 7.39081C4.47175 10.3098 2.82764 14.2661 2.8181 18.3943C2.80856 22.5224 4.43437 26.4862 7.33987 29.4187C10.2454 32.3512 14.194 34.0136 18.3221 34.0422C22.4501 34.0708 26.4214 32.4633 29.3673 29.5714L46.7142 46.9184L29.5714 29.3673Z",
            stroke: color || constants/* default.colors.blue */.Z.colors.blue,
            strokeWidth: "5",
            strokeLinecap: "round"
        })
    })
;
/* harmony default export */ const magnifyingGlass = (MagnifyingGlass);

;// CONCATENATED MODULE: ./components/home/baseline.js




const Baseline = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "homepage-mission-statement",
        className: "fr-container layout-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* TypingCarousel */.Si, {
                    txtBefore: "Vous \xeates",
                    sentences: [
                        " une collectivit\xe9 ?",
                        " un minist\xe8re ?",
                        " une entreprise ?", 
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Acc\xe9dez aux donn\xe9es de toutes les administrations, pour construire des services innovants."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                href: "/rechercher-api",
                size: "large",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "layout-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(magnifyingGlass, {
                            color: "#fff"
                        }),
                        "\xa0 Rechercher une API"
                    ]
                })
            })
        ]
    })
;
/* harmony default export */ const baseline = (Baseline);

// EXTERNAL MODULE: ./components/searchApis/apiCard.tsx
var apiCard = __webpack_require__(1276);
;// CONCATENATED MODULE: ./components/home/apiTripletSection.js




const ApiTripletSection = ({ apiList  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "api-triplet",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "fr-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "D\xe9couvrez des API du service public\xa0:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "default-grid",
                        children: apiList.map((api)=>/*#__PURE__*/ jsx_runtime_.jsx(apiCard/* default */.Z, {
                                ...api
                            }, api.title)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        backgroundColor: "white"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                        href: "rechercher-api",
                        size: "large",
                        alt: true,
                        children: "Voir toutes les API \u261E"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const apiTripletSection = (ApiTripletSection);

;// CONCATENATED MODULE: ./components/home/explanationSection.js

const explanations = [
    {
        title: 'Trouvez <a href="/apropos#apis">l\u2019API</a> dont vous avez besoin',
        src: "/images/home/1.png"
    },
    {
        title: 'Obtenez l\u2019<a href="/apropos#access">acc\xe8s</a> \xe0 l\u2019API',
        src: "/images/home/2.png"
    },
    {
        title: 'Construisez votre <a href="/apropos#service">service !</a>',
        src: "/images/home/3.png"
    }, 
];
const ExplanationSection = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "explanation-section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fr-container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    children: "Comment \xe7a marche\xa0?"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: explanations.map((explanation)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    dangerouslySetInnerHTML: {
                                        __html: explanation.title
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: explanation.src,
                                    alt: ""
                                })
                            ]
                        }, explanation.src)
                    )
                })
            ]
        })
    })
;
/* harmony default export */ const explanationSection = (ExplanationSection);

;// CONCATENATED MODULE: ./components/home/useCaseSection.js



const USE_CASES = [
    {
        title: "Les transports scolaires de la r\xe9gion Nouvelle-Aquitaine",
        content: "La r\xe9gion Nouvelle-Aquitaine propose une d\xe9gressivit\xe9 du tarif des transports scolaires en fonction du revenu fiscal est n\xe9cessaire pour vous permettre de b\xe9n\xe9ficier \xe9ventuellement de la d\xe9gressivit\xe9 du tarif. Un service en ligne permet aux familles de s\u2019inscrire et de payer en ligne l\u2019abonnement. Les familles n\u2019ont pas \xe0 produire de pi\xe8ce justificative \xe0 l\u2019appui de leur d\xe9marche.",
        // apis: [],
        picture: "/images/home/nouvelleAquitaine.jpg",
        button: {
            txt: "Je cherche \xe0 faciliter les d\xe9marches des familles",
            linkTo: constants/* default.links.mailto.NOUVELLE_AQUITAINE */.Z.links.mailto.NOUVELLE_AQUITAINE
        }
    },
    {
        title: "Le pass metz Loisirs",
        content: "Le Pass Metz Loisirs permet aux enfants de pratiquer une activit\xe9 ( sportive, culturelle ou de loisirs) dans les structures conventionn\xe9es ou s\u2019inscrire aux activit\xe9s socio-\xe9ducatives apr\xe8s la classe et le mercredi apr\xe8s-midi. Il est subventionn\xe9 par la ville pour les familles \xe0 faibles revenus sur la base du quotient familial. Les familles n\u2019ont plus \xe0 fournir de justificatifs pour cette d\xe9marche.",
        // apis: [],
        picture: "/images/home/metz.jpg",
        button: {
            txt: "Aidez-moi \xe0 d\xe9mat\xe9rialiser des justificatifs",
            linkTo: constants/* default.links.mailto.PASS_METZ */.Z.links.mailto.PASS_METZ
        }
    }, 
];
const UseCaseSection = ()=>/*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "use-cases",
        className: "fr-container",
        children: USE_CASES.map((useCase)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "use-case",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content-wrapper",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: useCase.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: useCase.content
                            }),
                            useCase.apis && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "apis",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "API utilis\xe9es\xa0:"
                                    }),
                                    " ",
                                    useCase.apis.join(", ")
                                ]
                            }),
                            useCase.button && /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: useCase.button.linkTo,
                                children: useCase.button.txt
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: useCase.picture,
                            alt: useCase.title
                        })
                    })
                ]
            }, useCase.title)
        )
    })
;
/* harmony default export */ const useCaseSection = (UseCaseSection);

;// CONCATENATED MODULE: ./components/home/DLNUFSection.js

const DLNUFSection = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "use-cases",
        className: "fr-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "layout-center",
                children: "Les API et le Dites-le-nous-une-fois"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "use-case",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "content-wrapper",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    "Le principe du ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "Dites-le-nous une fois (DLNUF)"
                                    }),
                                    ", consiste \xe0 \xe9viter aux citoyens de fournir, lors de leurs d\xe9marches en ligne, des informations ou pi\xe8ces justificatives",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "d\xe9j\xe0 d\xe9tenues par d\u2019autres administrations"
                                    }),
                                    ", en s\u2019appuyant sur le partage automatique de donn\xe9es.",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "Les API ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                        children: "jouent un r\xf4le essentiel"
                                    }),
                                    " pour permettre ces \xe9changes de donn\xe9es."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer noopener",
                                href: "https://www.dailymotion.com/video/x7x5gkj",
                                children: "\u21E2 En savoir plus"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "img-wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            title: "Vid\xe9o Dites le nous une fois",
                            href: "https://www.dailymotion.com/video/x7x5gkj",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/images/home/dailymotion.jpg",
                                alt: ""
                            })
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const home_DLNUFSection = (DLNUFSection);

;// CONCATENATED MODULE: ./components/home/index.js







;// CONCATENATED MODULE: ./pages/index.tsx







const Home = ({ apis  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(page/* default */.Z, {
        title: "Api.gouv.fr",
        canonical: `https://api.gouv.fr`,
        description: "Simplifiez le partage et la circulation des donn\xe9es administratives grace \xe0 api.gouv, le site qui r\xe9f\xe9rence toutes les API du service public.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(baseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(explanationSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(apiTripletSection, {
                apiList: apis
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-a4be9f4f94e878ca" + " " + "fr-container layout-center",
                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "jsx-a4be9f4f94e878ca",
                    children: "Ils ont cr\xe9\xe9 de nouveaux services innovants avec des API\xa0:"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(useCaseSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(home_DLNUFSection, {}),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "a4be9f4f94e878ca",
                children: "h2.jsx-a4be9f4f94e878ca{margin:100px 0 0}"
            })
        ]
    })
;
const getStaticProps = async ()=>{
    const apiList = await (0,model/* getAllAPIs */.Pc)();
    const mostInterestingApis = apiList.sort((a, b)=>(a.visits_2019 || 0) > (b.visits_2019 || 0) ? -1 : 1
    ).slice(0, 15);
    const refreshList = ()=>{
        return {
            apis: (0,external_lodash_.shuffle)(mostInterestingApis).slice(0, 3)
        };
    };
    return {
        props: refreshList()
    };
};
/* harmony default export */ const pages = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,276], () => (__webpack_exec__(3064)));
module.exports = __webpack_exports__;

})();