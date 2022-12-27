"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rechercher_api),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
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
;// CONCATENATED MODULE: ./components/searchApis/filterHeader.js


const FilterHeader = ({ search , setTheme , allThemesOptions , setAPIType , allAPITypeOptions , searchFromQueryString ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "search-api-filters",
        className: "fr-container ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* Dropdown */.Lt, {
                label: "Th\xe9matique",
                onChange: setTheme,
                placeholder: "Toutes les th\xe9matiques",
                selectOptions: allThemesOptions
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* Dropdown */.Lt, {
                label: "Modalit\xe9 d\u2019acc\xe8s",
                onChange: setAPIType,
                placeholder: "Tous les acc\xe8s",
                selectOptions: allAPITypeOptions,
                width: 350
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* SearchBar */.E1, {
                onSearch: search,
                style: {
                    marginTop: "10px",
                    width: "400px",
                    maxWidth: "100%"
                },
                defaultValue: searchFromQueryString,
                placeholder: "Recherchez un service, un minist\xe8re",
                label: "Rechercher"
            })
        ]
    })
;
/* harmony default export */ const filterHeader = (FilterHeader);

// EXTERNAL MODULE: ./components/searchApis/apiCard.tsx
var apiCard = __webpack_require__(1276);
;// CONCATENATED MODULE: ./components/searchApis/results.js


const Results = ({ apiList  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "api-results",
        className: "page-body-container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fr-container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "results-counter ",
                    children: [
                        apiList.length,
                        " r\xe9sultat",
                        apiList.length > 1 && "s"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "default-grid",
                    children: apiList.length > 0 ? apiList.map((api)=>/*#__PURE__*/ jsx_runtime_.jsx(apiCard/* default */.Z, {
                            ...api
                        }, api.title)
                    ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "Aucun r\xe9sultat trouv\xe9 pour la recherche."
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const results = (Results);

// EXTERNAL MODULE: ./components/searchApis/filtersLogic.ts + 1 modules
var filtersLogic = __webpack_require__(93);
;// CONCATENATED MODULE: ./components/searchApis/searchApis.js






const logResultsInMatomo = (0,external_lodash_.debounce)((search, theme, resultCounts)=>{
    //@ts-ignore
    if (false) {}
}, 1000);
const allAPITypeOptions = [
    {
        value: filtersLogic/* API_ACCESS_TYPE.OPEN */.VC.OPEN,
        label: "Les API ouvertes \xe0 tous"
    },
    {
        value: filtersLogic/* API_ACCESS_TYPE.NOT_OPEN */.VC.NOT_OPEN,
        label: "Les API en acc\xe8s restreint"
    },
    {
        value: filtersLogic/* API_ACCESS_TYPE.FRANCE_CONNECT */.VC.FRANCE_CONNECT,
        label: "Les API compatibles avec FranceConnect"
    }, 
];
const SearchApis = ({ allApis , allThemes  })=>{
    const { 0: apiList , 1: setApiList  } = (0,external_react_.useState)(allApis);
    const { 0: theme1 , 1: setTheme  } = (0,external_react_.useState)(null);
    const { 0: APIType , 1: setAPIType  } = (0,external_react_.useState)(null);
    const { 0: searchTerms , 1: setSearchTerms  } = (0,external_react_.useState)("");
    const allThemesOptions = allThemes.map((el, index)=>{
        return {
            value: index,
            label: el
        };
    });
    (0,external_react_.useEffect)(()=>{
        let res = allApis;
        const cleanedSearchTerms = searchTerms.split(" ").filter((t)=>!!t
        );
        if (cleanedSearchTerms.length > 0) {
            res = allApis.map((0,filtersLogic/* computeSearchResults */.cI)(cleanedSearchTerms)).filter((api)=>api.score !== 0
            );
        }
        const newApiList = res.filter((0,filtersLogic/* filterAccess */.aZ)(APIType)).filter((0,filtersLogic/* filterTheme */.yu)(theme1)).sort((a, b)=>{
            //@ts-ignore
            if (a.score && b.score) {
                //@ts-ignore
                return b.score - a.score;
            }
            return (b.visits_2019 || 0) - (a.visits_2019 || 0);
        });
        const themeAndAccess = `${theme1}${APIType || ""}`;
        logResultsInMatomo(searchTerms, themeAndAccess, newApiList.length);
        setApiList(newApiList);
        return ()=>{};
    }, [
        theme1,
        APIType,
        searchTerms,
        allApis
    ]);
    const updateTheme = (index)=>{
        let idx;
        try {
            idx = parseInt(index, 10);
        } catch  {
            idx = 0;
        }
        if (!!idx) {
            // no theme selected
            setTheme(null);
        }
        const newTheme = allThemesOptions.reduce((selectedTheme, theme)=>{
            if (theme.value === idx) {
                return theme.label;
            }
            return selectedTheme;
        }, null);
        setTheme(newTheme);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(filterHeader, {
                allThemesOptions: allThemesOptions,
                setTheme: updateTheme,
                allAPITypeOptions: allAPITypeOptions,
                setAPIType: setAPIType,
                search: setSearchTerms
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(results, {
                apiList: apiList
            })
        ]
    });
};
/* harmony default export */ const searchApis = (SearchApis);

;// CONCATENATED MODULE: ./components/searchApis/index.js

/* harmony default export */ const components_searchApis = (searchApis);

// EXTERNAL MODULE: ./components/index.js + 9 modules
var components = __webpack_require__(4034);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
;// CONCATENATED MODULE: ./pages/rechercher-api.tsx








const RechercherApi = ({ allApis , allThemes  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(page/* default */.Z, {
        headerKey: components/* HEADER_PAGE.APIS */.NB.APIS,
        preFooterBackground: constants/* default.colors.white */.Z.colors.white,
        title: "Rechercher une API du service public",
        description: "Vous faites partie d'un minist\xe8re ou d'une collectivit\xe9 et vous cherchez une API du service public ? Vous \xeates au bon endroit.",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "fr-container page-baseline",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Vous recherchez une API du service public ? Vous \xeates au bon endroit !"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_searchApis, {
                allApis: allApis,
                allThemes: allThemes
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const allApis = await (0,model/* getAllAPIs */.Pc)();
    const allThemes = (0,external_lodash_.uniq)((0,external_lodash_.flatten)(allApis.map((api)=>{
        // this must be tested with JEST first, but one never knows
        if (!api.themes) {
            throw new Error(`API must have at least one theme : ${api.slug}`);
        }
        return api.themes;
    }))).sort();
    const sortedAllApis = allApis.sort((a, b)=>(a.visits_2019 || 0) < (b.visits_2019 || 0) ? 1 : -1
    );
    return {
        props: {
            allApis: sortedAllApis,
            allThemes
        }
    };
};
/* harmony default export */ const rechercher_api = (RechercherApi);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,93,276], () => (__webpack_exec__(310)));
module.exports = __webpack_exports__;

})();