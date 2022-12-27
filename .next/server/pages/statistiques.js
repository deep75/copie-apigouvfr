"use strict";
(() => {
var exports = {};
exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 7946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ statistiques),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./layouts/page.tsx + 1 modules
var page = __webpack_require__(7209);
// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
// EXTERNAL MODULE: ./uiComponents/emoji/index.tsx
var emoji = __webpack_require__(9213);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(2738);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
;// CONCATENATED MODULE: external "d3"
const external_d3_namespaceObject = require("d3");
;// CONCATENATED MODULE: ./components/charts/stackedBarChartByMonth.js





const StackedBarChart = ({ data , labels , colors  })=>{
    const d3Container = (0,external_react_.useRef)(null);
    const width = 700;
    const height = 250;
    const { /*#__PURE__*/ 0: svgWidth , 1: setSvgWidth  } = (0,external_react_.useState)(0);
    const keys = Object.keys(labels);
    const legendCellSize = 20;
    let tooltip = null;
    const chartUuid = (0,utils/* uuid */.Vj)();
    const stack = external_d3_namespaceObject.stack().keys(keys).order(external_d3_namespaceObject.stackOrderReverse).offset(external_d3_namespaceObject.stackOffsetNone);
    const series = stack(data);
    const getTooltip = (d)=>{
        const total = keys.reduce((sum, key)=>sum + d[key]
        , 0);
        return `
      <div>
        <b>${d.label}</b> - ${total} API</br>
        <br/>
        ${keys.map((key)=>`${d[key]} API : ${labels[key]}`
        ).join("<br/>")}
      </div>
      `;
    };
    const addLegend = (svg)=>{
        let legend = svg.append("g").attr("transform", "translate(5, 15)"); // Représente le point précis en haut à gauche du premier carré de couleur
        // Pour chaque couleur, on ajoute un carré toujours positionné au même endroit sur l'axe X et décalé en fonction de la
        // taille du carré et de l'indice de la couleur traitée sur l'axe Y
        legend.selectAll().data(Object.values(labels)).enter().append("rect").attr("height", legendCellSize + "px").attr("width", legendCellSize + "px").attr("x", 5).attr("y", (d, i)=>i * legendCellSize
        ).style("fill", (d, i)=>colors[i]
        );
        // On procéde de la même façon sur les libellés avec un positionement sur l'axe X de la taille des carrés
        // à laquelle on rajoute 10 px de marge
        legend.selectAll().data(keys).enter().append("text").attr("transform", (d, i)=>"translate(" + (legendCellSize + 10) + ", " + i * legendCellSize + ")"
        ).attr("dy", legendCellSize / 1.6) // Pour centrer le texte par rapport aux carrés
        .style("font-size", "13px").style("fill", "grey").text((d)=>labels[d]
        );
    };
    const draw = ()=>{
        const containerWidth = d3Container.current.getBoundingClientRect().width || width;
        if (data && d3Container.current && containerWidth !== svgWidth) {
            setSvgWidth(svgWidth);
            external_d3_namespaceObject.select(d3Container.current).select("svg").remove();
            const svg = external_d3_namespaceObject.select(d3Container.current).append("svg").attr("width", containerWidth).attr("height", height + 80).append("g").attr("transform", "translate(35, 10)");
            const x = external_d3_namespaceObject.scaleBand().domain(data.map((d)=>d.month
            )).range([
                0,
                containerWidth - 35
            ]).padding(0.1);
            const y = external_d3_namespaceObject.scaleLinear().domain([
                0,
                external_d3_namespaceObject.max(series[0], (d)=>d[1]
                ) + 35
            ]).range([
                height,
                0
            ]);
            const interval = Math.round(data.length / 4);
            const xAxis = external_d3_namespaceObject.axisBottom(x).tickValues(x.domain().filter((d)=>d % interval === 1
            )).tickFormat((d, i)=>data[i * interval].label
            );
            svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).selectAll("text").style("text-anchor", "middle");
            svg.append("g").attr("class", "y axis").call(external_d3_namespaceObject.axisLeft(y)).append("text").attr("fill", "#000").attr("y", 6).attr("dx", "30px").style("text-anchor", "end").text("API");
            let groups = svg.selectAll("g.groupe").data(series).enter().append("g").style("fill", (d, i)=>colors[i]
            );
            groups.selectAll("rect").data((d)=>d
            ).enter().append("rect").attr("class", function(d) {
                return `month-${d.data.month}-${chartUuid}`;
            }).attr("x", (d)=>x(d.data.month)
            ).attr("width", x.bandwidth()).attr("y", (d)=>y(d[1])
            ).attr("height", (d)=>height - y(d[1] - d[0])
            ).attr("cursor", "help").on("mouseover", function(event, d) {
                external_d3_namespaceObject.selectAll(`.month-${d.data.month}-${chartUuid}`).attr("opacity", 0.6);
            }).on("mouseleave", function(event, d) {
                external_d3_namespaceObject.selectAll(`.month-${d.data.month}-${chartUuid}`).attr("opacity", 1);
            }).on("mousemove", function(event, d) {
                if (!tooltip) return;
                tooltip.style("display", "block");
                if (!tooltip) return;
                tooltip.html(getTooltip(d.data)).style("left", event.pageX + 10 + "px").style("top", event.pageY + 20 + "px");
            }).on("mouseout", function(d) {
                if (!tooltip) return;
                tooltip.style("display", "none");
            });
            addLegend(svg);
        }
    };
    (0,external_react_.useEffect)(()=>{
        /*eslint-disable*/ tooltip = external_d3_namespaceObject.select("body").append("div").attr("class", "tooltip").style("display", "none");
        /*eslint-enable*/ if (!data || !d3Container.current) {
            return;
        }
        draw();
        window.addEventListener("resize", ()=>draw()
        );
        return window.removeEventListener("resize", ()=>draw()
        );
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: d3Container,
                className: "jsx-d7ccda0afb1d3dec" + " " + "chart-wrapper"
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "d7ccda0afb1d3dec",
                children: ".chart-wrapper{width:100%;margin:auto}.chart-wrapper>svg .axis path{stroke:#706f6f;stroke-width:.7;shape-rendering:crispEdges}.chart-wrapper>svg .axis text{fill:#2b2929;font-family:Georgia,serif;font-size:.8rem}div.tooltip{position:absolute;text-align:left;padding:4px;background:#fff;max-width:300px;border:1px solid#aaa;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;pointer-events:none}@media only screen and (min-width:1px)and (max-width:700px){div.tooltip{display:none!important}}"
            })
        ]
    });
};
/* harmony default export */ const stackedBarChartByMonth = (StackedBarChart);

;// CONCATENATED MODULE: ./components/charts/utils.js
const getLabel = (m)=>{
    const d = new Date(new Date(ORIGIN).setMonth(new Date(ORIGIN).getMonth() + m));
    var options = {
        year: "numeric",
        month: "long"
    };
    return new Intl.DateTimeFormat("fr-FR", options).format(d);
};
const ORIGIN = "01/01/2020";
// returns the last update date or 01/01/2020 if older
const getDate = (api)=>{
    const createdAtArray = (api.last_update || ORIGIN).split("/");
    return new Date(parseInt(createdAtArray[2], 10), parseInt(createdAtArray[1], 10), 0);
};

;// CONCATENATED MODULE: ./components/charts/chartAPIIsOpen.tsx





const openClosedLabels = {
    open: " en acc\xe8s libre",
    datapass: " en acc\xe8s restreint via le compte api.gouv.fr (DataPass)",
    close: " en acc\xe8s restreint"
};
const colors = [
    "#F8D67C",
    "#A72257",
    "#2b8cbe"
];
const generateData = (allApis)=>{
    const origin = new Date(ORIGIN);
    const monthCount = (0,utils/* monthDifference */.mH)(origin, new Date()) + 1;
    //@ts-ignore
    const data = [
        ...Array(monthCount).keys()
    ].map((m)=>{
        return {
            month: m + 1,
            open: 0,
            close: 0,
            datapass: 0,
            label: getLabel(m),
            new: []
        };
    });
    allApis.forEach((api)=>{
        const month = (0,utils/* monthDifference */.mH)(origin, new Date(getDate(api)) || origin);
        for(let m = month; m < monthCount; m++){
            if (api.datapass_link) {
                data[m].datapass += api.datapass_link ? 1 : 0;
            }
            if (!api.datapass_link && api.is_open === -1) {
                data[m].close += api.is_open === -1 ? 1 : 0;
            }
            if (api.is_open === 0 || api.is_open === 1) {
                data[m].open += 1;
            }
        }
        data[month].new.push({
            slug: api.slug,
            title: api.title
        });
    });
    return data;
};
const StackedBarChartOpenClosed = ({ allApis ,  })=>{
    const data = generateData(allApis);
    return /*#__PURE__*/ jsx_runtime_.jsx(stackedBarChartByMonth, {
        colors: colors,
        data: data,
        labels: openClosedLabels
    });
};
/* harmony default export */ const chartAPIIsOpen = (StackedBarChartOpenClosed);

;// CONCATENATED MODULE: ./components/charts/chartAPIByProducers.tsx





const getLabels = (allApis)=>{
    const labels = {};
    allApis.forEach((api)=>{
        const type = api.owner_type || "autre";
        if (!labels[type]) {
            labels[type] = type;
        }
    });
    return labels;
};
const chartAPIByProducers_colors = [
    "#DD6A3D",
    "#69B5B7",
    "#A72257",
    "#F09B7A",
    "#6C5B7B",
    "#ffce00",
    "#00a7ff", 
];
const chartAPIByProducers_generateData = (allApis, keys)=>{
    const origin = new Date(ORIGIN);
    const monthCount = (0,utils/* monthDifference */.mH)(origin, new Date()) + 1;
    //@ts-ignore
    const data = [
        ...Array(monthCount).keys()
    ].map((m)=>{
        const node = {
            month: m + 1,
            label: getLabel(m),
            new: []
        };
        keys.forEach((key)=>{
            //@ts-ignore
            node[key] = 0;
        });
        return node;
    });
    allApis.forEach((api)=>{
        const month = (0,utils/* monthDifference */.mH)(origin, new Date(getDate(api)) || origin);
        for(let m = month; m < monthCount; m++){
            data[m][api.owner_type] += 1;
        }
        data[month].new.push({
            slug: api.slug,
            title: api.title
        });
    });
    return data;
};
const chartAPIByProducers_StackedBarChartOpenClosed = ({ allApis ,  })=>{
    const labels = getLabels(allApis);
    const data = chartAPIByProducers_generateData(allApis, Object.keys(labels));
    return /*#__PURE__*/ jsx_runtime_.jsx(stackedBarChartByMonth, {
        colors: chartAPIByProducers_colors,
        data: data,
        labels: labels
    });
};
/* harmony default export */ const chartAPIByProducers = (chartAPIByProducers_StackedBarChartOpenClosed);

// EXTERNAL MODULE: ./model/readOnDiskForWebpack.ts + 2 modules
var readOnDiskForWebpack = __webpack_require__(5174);
;// CONCATENATED MODULE: ./model/fetchFromMatomo.ts

const getDateRange = ()=>{
    const now = new Date();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
    return `${year - 1}-${month}-${day},${year}-${month}-${day}`;
};
const extractStats = (matomoEvents, pagesStats, rootPath, allApis)=>{
    const stats = {};
    matomoEvents.forEach((elem)=>{
        const label = `page : ${rootPath}`;
        if (elem.label.indexOf(label) > -1) {
            const key = elem.label.replace(label, "");
            const visits = pagesStats["/" + key];
            const path = `${rootPath}${key}`;
            const title = ((allApis || []).find((api)=>api.slug === key
            ) || {}).title || path;
            const yes = (elem.subtable.find((d)=>d.label === "Oui"
            ) || {}).nb_events || 0;
            const no = (elem.subtable.find((d)=>d.label === "Non"
            ) || {}).nb_events || 0;
            if (yes > 0 && no > 0) {
                const approval = Math.round(yes / (no + yes) * 100);
                stats[key] = {
                    title,
                    path,
                    visits,
                    yes,
                    no,
                    approval
                };
            }
        }
    });
    return Object.values(stats);
};
const getMatomoStats = async ()=>{
    try {
        const allApis = await (0,readOnDiskForWebpack/* getAllAPIs */.Pc)();
        const [matomoEventsResponse, matomoPagesResponse] = await Promise.all([
            fetch(`https://stats.data.gouv.fr/index.php?&expanded=1&format=JSON&idSite=22&filter_limit=999&method=Events.getName&module=API&&period=range&date=${getDateRange()}`),
            fetch(`https://stats.data.gouv.fr/index.php?&expanded=1&format=JSON&idSite=22&filter_limit=999&method=Actions.getPageUrls&module=API&period=range&date=${getDateRange()}`), 
        ]);
        const matomoPages = await matomoPagesResponse.json();
        const matomoEvents = await matomoEventsResponse.json();
        const pagesStats = matomoPages.filter((elem)=>[
                "guides",
                "les-api"
            ].indexOf(elem.label) > -1
        ).reduce((acc, elem)=>{
            return [
                ...acc,
                ...elem.subtable
            ];
        }, []).reduce((acc, elem)=>{
            acc[elem.label] = elem.nb_visits;
            return acc;
        }, {});
        return {
            api: extractStats(matomoEvents, pagesStats, "/les-api/", allApis).sort((a, b)=>a.visits < b.visits ? 1 : -1
            ),
            guide: extractStats(matomoEvents, pagesStats, "/guides/")
        };
    } catch (e) {
        return {
            api: null,
            guide: null
        };
    }
};

// EXTERNAL MODULE: ./uiComponents/loader/index.tsx
var loader = __webpack_require__(150);
;// CONCATENATED MODULE: ./components/matomoStats/index.tsx




const MatomoTable = ({ matomoStats , category  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Visites"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Votes"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("th", {
                            children: "Note moyenne"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                children: matomoStats.map((lineStat)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: lineStat.path,
                                    children: lineStat.title
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: lineStat.visits
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                children: lineStat.yes + lineStat.no
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                children: [
                                    lineStat.approval,
                                    "%"
                                ]
                            })
                        ]
                    }, lineStat.path)
                )
            })
        ]
    })
;
const MatomoStatsTable = ()=>{
    const { 0: matomoAPIStats , 1: setAPIStats  } = (0,external_react_.useState)();
    const { 0: matomoGuideStats , 1: setGuideStats  } = (0,external_react_.useState)();
    const { 0: isLoading , 1: setIsLoading  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const fetchStats = async ()=>{
            const stats = await getMatomoStats();
            setAPIStats(stats.api);
            setGuideStats(stats.guide);
            setIsLoading(false);
        };
        fetchStats();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(loader/* default */.Z, {
            message: "T\xe9l\xe9chargement des statistiques en cours"
        }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: matomoAPIStats && matomoGuideStats ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(MatomoTable, {
                        category: "Pages API",
                        matomoStats: matomoAPIStats
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MatomoTable, {
                        category: "Pages guide",
                        matomoStats: matomoGuideStats
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx("i", {
                children: "Notre logiciel de statistiques est actuellement indisponible. Merci de r\xe9essayer ult\xe9rieurement."
            })
        })
    });
};
/* harmony default export */ const matomoStats = (MatomoStatsTable);

// EXTERNAL MODULE: ./uiComponents/titleWithAnchor/index.tsx
var titleWithAnchor = __webpack_require__(7532);
;// CONCATENATED MODULE: ./pages/statistiques.tsx









const Stats = ({ allApis  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(page/* default */.Z, {
        title: "Statistiques",
        description: "D\xe9couvrez les chiffres cl\xe9s du catalogue des APIs du service public",
        usePreFooter: false,
        noIndex: true,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-wrapper text-style",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    children: [
                        "Statistiques ",
                        /*#__PURE__*/ jsx_runtime_.jsx(emoji/* default */.Z, {
                            emoji: "\uD83E\uDDEE",
                            label: "math\xe9matiques"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(titleWithAnchor/* H2WithAnchor */.C, {
                    children: "\xc9volution des API au catalogue api.gouv.fr."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "R\xe9partition des API en acc\xe8s libre et en acc\xe8s restreint :"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(chartAPIIsOpen, {
                    allApis: allApis
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "R\xe9partition des API par type de producteur de donn\xe9e :"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(chartAPIByProducers, {
                    allApis: allApis
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(titleWithAnchor/* H2WithAnchor */.C, {
                    children: "Retours utilisateurs"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: 'R\xe9ponses des visiteurs \xe0 la question "Est-ce que cette page vous a \xe9t\xe9 utile ?", sur les douze derniers mois :'
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(matomoStats, {})
            ]
        })
    });
};
const getStaticProps = async ()=>{
    const allApis = await (0,model/* getAllAPIs */.Pc)();
    return {
        props: {
            allApis
        }
    };
};
/* harmony default export */ const statistiques = (Stats);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,532,150], () => (__webpack_exec__(7946)));
module.exports = __webpack_exports__;

})();