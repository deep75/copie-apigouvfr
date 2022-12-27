"use strict";
exports.id = 813;
exports.ids = [813];
exports.modules = {

/***/ 5813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ richReactMarkdown)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(1904);
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
;// CONCATENATED MODULE: ./uiComponents/quote/index.tsx




const Quote = ({ children , logo , who , title , link ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "bd3b6e9c8d3c5d41",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "quote-wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "bd3b6e9c8d3c5d41",
                                [
                                    constants/* default.colors.blue */.Z.colors.blue
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "bd3b6e9c8d3c5d41",
                                        [
                                            constants/* default.colors.blue */.Z.colors.blue
                                        ]
                                    ]
                                ]) + " " + "medaillon",
                                /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: logo,
                                    alt: "",
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "bd3b6e9c8d3c5d41",
                                            [
                                                constants/* default.colors.blue */.Z.colors.blue
                                            ]
                                        ]
                                    ])
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "bd3b6e9c8d3c5d41",
                                        [
                                            constants/* default.colors.blue */.Z.colors.blue
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "bd3b6e9c8d3c5d41",
                                                [
                                                    constants/* default.colors.blue */.Z.colors.blue
                                                ]
                                            ]
                                        ]),
                                        children: who
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "bd3b6e9c8d3c5d41",
                                                [
                                                    constants/* default.colors.blue */.Z.colors.blue
                                                ]
                                            ]
                                        ]),
                                        children: title
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "bd3b6e9c8d3c5d41",
                                [
                                    constants/* default.colors.blue */.Z.colors.blue
                                ]
                            ]
                        ]),
                        children: [
                            children,
                            link && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "bd3b6e9c8d3c5d41",
                                        [
                                            constants/* default.colors.blue */.Z.colors.blue
                                        ]
                                    ]
                                ]) + " " + "layout-right",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "bd3b6e9c8d3c5d41",
                                            [
                                                constants/* default.colors.blue */.Z.colors.blue
                                            ]
                                        ]
                                    ]),
                                    children: "\u21E2 Lire la suite du t\xe9moignage"
                                })
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "bd3b6e9c8d3c5d41",
                dynamic: [
                    constants/* default.colors.blue */.Z.colors.blue
                ],
                children: `.quote-wrapper.__jsx-style-dynamic-selector{background-color:${constants/* default.colors.blue */.Z.colors.blue};padding:0 40px;margin:25px 0;color:#fff;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;position:relative}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-of-type{text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:.9rem;line-height:1.2rem;margin-bottom:10px}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-of-type>.medaillon.__jsx-style-dynamic-selector{content:"";-webkit-border-radius:100px;-moz-border-radius:100px;border-radius:100px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:70px;height:70px;margin:15px;background-color:#fff;overflow:hidden;border:5px solid#fff}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:first-of-type>.medaillon.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{width:100%}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-of-type{font-style:italic;margin:40px 10px 40px 50px;z-index:1;position:relative}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-of-type a.__jsx-style-dynamic-selector{color:white}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-of-type:before{content:"“";font-size:6rem;font-style:initial;position:absolute;top:0px;left:-40px;color:#fff;opacity:.1;z-index:0}.quote-wrapper.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:last-of-type:after{content:"”";font-size:6rem;font-style:initial;position:absolute;right:-30px;bottom:10px;color:#fff;opacity:.1;z-index:0}`
            })
        ]
    });
};
/* harmony default export */ const quote = (Quote);

// EXTERNAL MODULE: ./components/teamHelpWidget/index.tsx
var teamHelpWidget = __webpack_require__(5615);
// EXTERNAL MODULE: ./uiComponents/searchBar/index.js
var searchBar = __webpack_require__(725);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(2738);
;// CONCATENATED MODULE: ./components/apiWidgets/apiWidgetResults.tsx


const ApiWidgetResults = ({ results  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            results && results.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "layout-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                            children: "R\xe9sultat(s) :"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "results",
                        children: results.map((res)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: res
                            }, res)
                        )
                    })
                ]
            }),
            results && results.length === 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        children: "Pas de r\xe9sultat"
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const apiWidgetResults = (ApiWidgetResults);

;// CONCATENATED MODULE: ./components/apiWidgets/apiWidgetWrapper.tsx




const ApiWidgetWrapper = ({ title , children ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styled_jsx_default().dynamic([
            [
                "b2d348c11a79d708",
                [
                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                    constants/* default.colors.darkBlue */.Z.colors.darkBlue,
                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                ]
            ]
        ]) + " " + "widget-wrapper layout-center",
        children: [
            title && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "b2d348c11a79d708",
                        [
                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                            constants/* default.colors.darkBlue */.Z.colors.darkBlue,
                            constants/* default.colors.darkBlue */.Z.colors.darkBlue
                        ]
                    ]
                ]) + " " + "widget-label",
                /*#__PURE__*/ children: title
            }),
            children,
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "b2d348c11a79d708",
                dynamic: [
                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                    constants/* default.colors.darkBlue */.Z.colors.darkBlue,
                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                ],
                children: `.widget-wrapper{background-color:${constants/* default.colors.lightGrey */.Z.colors.lightGrey};-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:50px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;position:relative;margin:40px auto}.widget-wrapper>.widget-label{position:absolute;margin:0;top:-15px;font-weight:bold;background-color:#fff;-webkit-border-bottom-left-radius:10px;-moz-border-radius-bottomleft:10px;border-bottom-left-radius:10px;-webkit-border-bottom-right-radius:10px;-moz-border-radius-bottomright:10px;border-bottom-right-radius:10px;padding:3px 10px}.widget-wrapper p{text-align:center}.widget-wrapper .interactive-component{width:70%;background-color:#fff;border:1px solid ${constants/* default.colors.darkBlue */.Z.colors.darkBlue};-webkit-box-shadow:0 20px 35px 0px rgba(0,0,0,.25);-moz-box-shadow:0 20px 35px 0px rgba(0,0,0,.25);box-shadow:0 20px 35px 0px rgba(0,0,0,.25);padding:40px 40px 30px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;position:relative}.widget-wrapper .interactive-component:before{content:"Démonstrateur";position:absolute;-webkit-border-bottom-right-radius:5px;-moz-border-radius-bottomright:5px;border-bottom-right-radius:5px;-webkit-border-bottom-left-radius:5px;-moz-border-radius-bottomleft:5px;border-bottom-left-radius:5px;padding:4px 4px;font-size:.9rem;line-height:.9rem;background-color:${constants/* default.colors.darkBlue */.Z.colors.darkBlue};top:0;left:20px;color:#fff}.widget-wrapper .interactive-component>.results{margin-top:20px;max-height:300px;overflow:auto}.widget-wrapper .interactive-component>.results>div{padding:10px;background-color:#f3f3f3;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin-bottom:5px;font-size:.9rem;line-height:1.3rem}@media only screen and (min-width:1px)and (max-width:700px){.widget-wrapper .interactive-component{width:-webkit-calc(100% - 40px);width:-moz-calc(100% - 40px);width:calc(100% - 40px);padding:40px 20px 30px}.widget-wrapper{padding:80px 20px 50px}}`
            })
        ]
    });
};
/* harmony default export */ const apiWidgetWrapper = (ApiWidgetWrapper);

;// CONCATENATED MODULE: ./components/apiWidgets/apiRna.tsx






const ApiRnaWidget = ()=>{
    const { 0: results , 1: setResults  } = (0,external_react_.useState)(null);
    const search = (searchTerm)=>{
        if (!searchTerm) {
            setResults(null);
            return;
        }
        fetch(`https://entreprise.data.gouv.fr/api/rna/v1/full_text/${encodeURI((0,utils/* normalize */.Fv)(searchTerm))}`).then((response)=>response.json()
        ).then((data)=>window.setTimeout(()=>{
                setResults((data.association || []).map((res)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: res.titre
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "layout-space-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                        children: [
                                            res.adresse_code_postal,
                                            " ",
                                            res.adresse_libelle_commune
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                        children: [
                                            "n\xb0RNA : ",
                                            res.id_association
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: res.objet || ""
                            })
                        ]
                    })
                ));
            }, 400)
        ).catch((error)=>{
            console.error("Error:", error);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(apiWidgetWrapper, {
        title: "Interroger l\u2019API R\xe9pertoire National des Associations",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "L\u2019",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/les-api/api_rna",
                        children: "API RNA"
                    }),
                    " permet ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "\xe0 n'importe qui"
                    }),
                    " ",
                    "d'effectuer une recherche sur les associations Fran\xe7aises. Voila comment ca fonctionne :"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Vous tapez le nom d\u2019une association"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Votre ordinateur envoi ce nom \xe0 l\u2019API RNA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "L\u2019API RNA r\xe9pond avec la liste des associations qui correspondent"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Votre ordinateur affiche les r\xe9sultats (pas plus de 10, ceci est juste un d\xe9monstrateur)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "interactive-component",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(searchBar/* default */.Z, {
                            onSearch: search,
                            placeholder: "Tapez le nom d\u2019une association",
                            label: "Recherchez une association fran\xe7aise",
                            debounceRate: 200
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(apiWidgetResults, {
                        results: results
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const apiRna = (ApiRnaWidget);

;// CONCATENATED MODULE: ./components/apiWidgets/apiSirene.tsx






const ApiSireneWidget = ({ title  })=>{
    const { 0: results , 1: setResults  } = (0,external_react_.useState)(null);
    const search = (searchTerm)=>{
        if (!searchTerm) {
            setResults(null);
            return;
        }
        fetch(`https://entreprise.data.gouv.fr/api/sirene/v1/full_text/${encodeURI((0,utils/* normalize */.Fv)(searchTerm))}`).then((response)=>response.json()
        ).then((data)=>window.setTimeout(()=>{
                setResults((data.etablissement || []).map((res)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: res.l1_normalisee
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "layout-space-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        children: res.l4_normalisee
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                        children: res.l6_normalisee
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    "N\xb0 SIRET : ",
                                    res.siret
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: res.libelle_activite_principale
                            })
                        ]
                    })
                ));
            }, 400)
        ).catch((error)=>{
            console.error("Error:", error);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(apiWidgetWrapper, {
        title: title || "Interroger l\u2019API Sirene",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    "L\u2019",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/les-api/sirene_v3",
                        children: "API Sirene"
                    }),
                    " permet",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "\xe0 n'importe qui"
                    }),
                    " d'effectuer une recherche sur les entreprises Fran\xe7aises. Voila comment ca fonctionne :"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Vous tapez le nom d\u2019une entreprise"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Votre ordinateur envoie ce nom \xe0 l\u2019API Sirene"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "L\u2019API Sirene r\xe9pond avec la liste des entreprises qui correspondent"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "Votre ordinateur affiche les r\xe9sultats (pas plus de 10, ceci est juste un d\xe9monstrateur)"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "interactive-component",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "layout-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(searchBar/* default */.Z, {
                            onSearch: search,
                            placeholder: "Tapez le nom d\u2019une entreprise",
                            label: "Recherchez une entreprise fran\xe7aise",
                            debounceRate: 200
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(apiWidgetResults, {
                        results: results
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const apiSirene = (ApiSireneWidget);

// EXTERNAL MODULE: ./components/widgets/datagouv.tsx + 2 modules
var datagouv = __webpack_require__(6171);
;// CONCATENATED MODULE: ./components/widgets/flatFile.tsx





const FlatFileWidget = ({ href , title , subtitle , description , label ="Acc\xe9der au fichier" ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "c7c00fdac135f2c5",
                        [
                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                            constants/* default.colors.darkBlue */.Z.colors.darkBlue
                        ]
                    ]
                ]) + " " + "flat-file-widget",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "50",
                        viewBox: "0 0 157 193",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: styled_jsx_default().dynamic([
                            [
                                "c7c00fdac135f2c5",
                                [
                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                ]
                            ]
                        ]),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M106.5 24.5H24L20.5 29.5V164.5L24 169H132L136.5 164.5V56L106.5 24.5Z",
                                fill: "white",
                                className: styled_jsx_default().dynamic([
                                    [
                                        "c7c00fdac135f2c5",
                                        [
                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                            constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M137.97 54.1355L137.881 53.8399L137.852 53.7216L137.704 53.426L137.644 53.3077L137.348 52.953L107.005 22.68L106.65 22.3843C106.62 22.3843 106.591 22.3843 106.561 22.3252L106.265 22.1774L106.117 22.1478L105.82 22.0591L105.346 22H25.993C22.1409 22 19 25.1337 19 28.977V164.023C19 167.866 22.1409 171 25.993 171H131.037C134.889 171 138 167.866 138 164.023V54.6085L137.97 54.1355ZM133.348 164.023C133.348 165.294 132.311 166.359 131.037 166.359H25.993C25.6831 166.359 25.3763 166.297 25.0903 166.178C24.8044 166.059 24.545 165.884 24.3272 165.664C24.1094 165.444 23.9376 165.183 23.8218 164.896C23.7059 164.61 23.6482 164.303 23.6521 163.993V29.0065C23.6521 27.7353 24.7189 26.671 26.0227 26.671H103.005V46.8333C103.005 52.4208 107.539 56.9145 113.139 56.9145H133.318V164.023H133.348Z",
                                className: styled_jsx_default().dynamic([
                                    [
                                        "c7c00fdac135f2c5",
                                        [
                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                            constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                        ]
                                    ]
                                ])
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M123.68 71H32.3197C31.7069 71.0076 31.1213 71.2514 30.688 71.6793C30.2546 72.1072 30.0077 72.6854 30 73.2905V142.68C30 143.943 31.0409 145 32.3197 145H123.68C124.959 145 126 143.943 126 142.68V73.2905C126 72.0278 124.959 71 123.68 71V71ZM41.6877 140.36H34.6691V133.43H41.7175V140.36H41.6877ZM41.6877 128.79H34.6691V121.86H41.7175V128.79H41.6877ZM41.6877 117.25H34.6691V110.29H41.7175V117.279L41.6877 117.25ZM41.6877 105.68H34.6691V98.75H41.7175V105.68H41.6877ZM41.6877 94.1103H34.6691V87.1802H41.7175V94.1103H41.6877ZM41.6877 82.5405H34.6691V75.6103H41.7175V82.5405H41.6877ZM72.1413 140.39H46.3866V133.43H72.1413V140.36V140.39ZM72.1413 128.79H46.3866V121.86H72.1413V128.79ZM72.1413 117.25H46.3866V110.29H72.1413V117.279V117.25ZM72.1413 105.68H46.3866V98.75H72.1413V105.68ZM72.1413 94.1103H46.3866V87.1802H72.1413V94.1103ZM72.1413 82.5698H46.3866V75.581H72.1413V82.5405V82.5698ZM96.7361 140.36H76.8104V133.43H96.7361V140.36ZM96.7361 128.79H76.8104V121.86H96.7361V128.79ZM96.7361 117.25H76.8104V110.29H96.7361V117.279V117.25ZM96.7361 105.68H76.8104V98.75H96.7361V105.68ZM96.7361 94.1103H76.8104V87.1802H96.7361V94.1103ZM96.7361 82.5698H76.8104V75.581H96.7361V82.5405V82.5698ZM121.331 140.36H101.405V133.43H121.331V140.36V140.36ZM121.331 128.79H101.405V121.86H121.331V128.79ZM121.331 117.25H101.405V110.29H121.331V117.279V117.25ZM121.331 105.68H101.405V98.75H121.331V105.68ZM121.331 94.1103H101.405V87.1802H121.331V94.1103ZM121.331 82.5698H101.405V75.581H121.331V82.5405V82.5698Z",
                                className: styled_jsx_default().dynamic([
                                    [
                                        "c7c00fdac135f2c5",
                                        [
                                            constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                            constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                        ]
                                    ]
                                ])
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "c7c00fdac135f2c5",
                                [
                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                ]
                            ]
                        ]) + " " + "flat-file-title",
                        /*#__PURE__*/ children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "c7c00fdac135f2c5",
                                [
                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                ]
                            ]
                        ]) + " " + "flat-file-icon"
                    }),
                    description && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "c7c00fdac135f2c5",
                                [
                                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                                ]
                            ]
                        ]) + " " + "description",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                        href: href,
                        alt: true,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: label
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "c7c00fdac135f2c5",
                dynamic: [
                    constants/* default.colors.lightGrey */.Z.colors.lightGrey,
                    constants/* default.colors.darkBlue */.Z.colors.darkBlue
                ],
                children: `div.flat-file-widget.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;max-width:400px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;padding:30px 20px;margin:auto;width:-webkit-calc(100% - 40px);width:-moz-calc(100% - 40px);width:calc(100% - 40px);background-color:${constants/* default.colors.lightGrey */.Z.colors.lightGrey};position:relative;height:-webkit-calc(100% - 60px);height:-moz-calc(100% - 60px);height:calc(100% - 60px)}div.flat-file-title.__jsx-style-dynamic-selector{text-align:center;font-weight:bold}div.description.__jsx-style-dynamic-selector{text-align:center;font-size:.9rem;font-style:italic;margin-bottom:10px}svg.__jsx-style-dynamic-selector{fill:${constants/* default.colors.darkBlue */.Z.colors.darkBlue}}`
            })
        ]
    })
;
/* harmony default export */ const flatFile = (FlatFileWidget);

// EXTERNAL MODULE: ./uiComponents/titleWithAnchor/index.tsx
var titleWithAnchor = __webpack_require__(7532);
// EXTERNAL MODULE: ./utils/client/analytics.js
var analytics = __webpack_require__(9435);
;// CONCATENATED MODULE: ./components/questionTree/data/api-entreprise/eligible.ts
const pathEligible = {
    question: "Qui sera en charge techniquement de l\u2019int\xe9gration de l\u2019API Entreprise ?",
    choiceTree: [
        {
            choices: [
                "**Nos d\xe9veloppeurs internes.**<br/>Ils con\xe7oivent une solution logicielle sur-mesure pour mon organisation.",
                "**Nos d\xe9veloppeurs prestataires.**<br/>Ils con\xe7oivent une solution logicielle sur-mesure pour mon organisation.", 
            ],
            answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et avez les compétences techniques pour intégrer l’API Entreprise** à votre logiciel interne de traitement des démarches des associations et des entreprises.**
      <br/><br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`
        },
        {
            choices: [
                "**Mon \xe9diteur.**<br/>Rien \xe0 coder, j\u2019utilise une solution cl\xe9 en main propos\xe9e par un \xe9diteur.", 
            ],
            next: {
                question: "Votre \xe9diteur ou profil acheteur a-t-il d\xe9j\xe0 int\xe9gr\xe9 l'API Entreprise ? S\xe9lectionnez votre \xe9diteur dans la liste ci-dessous :",
                choiceTree: [
                    {
                        choices: [
                            "Achatpublic - achatpublic.com",
                            "Atexo - LocalTrustSub",
                            "Atexo - Place",
                            "AWS - AWS-achat",
                            "Atline Services - marches-securises.fr",
                            "Dematis - e-marchespublics.com",
                            "E-attestations - E-attestations.com",
                            "Klekoon - klekoon.com",
                            "MGDIS - Portail des aides",
                            "Provigis - Provigis plateforme",
                            "Territoires num\xe9riques - Pack commande publique", 
                        ],
                        answer: `**Bonne nouvelle ! Vous êtes éligible et votre éditeur/profil acheteur a déjà intégré l’API Entreprise. <span role='img' aria-label='émoji ok'>👍</span>**
            <br/><br/>
            Vous n’avez plus qu’à vous adresser directement à votre éditeur.`
                    },
                    {
                        choices: [
                            "**Mon \xe9diteur ne figure pas dans cette liste**"
                        ],
                        answer: `**Vous êtes éligible mais votre éditeur/profil acheteur n’a pas intégré l’API&nbsp;Entreprise <span role="img" aria-label="émoji loupe">🔎</span>**
            <br/>
            Déposez une demande pour expliciter vos besoins et votre situation. L’équipe API Entreprise vous contactera pour identifier des pistes de solutions, et contactera le cas échéant votre éditeur (pensez donc bien à préciser le nom de votre éditeur et ses coordonnées).
            <br/>
            <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer une demande</Button>
            <br/>
            **Nota :** L’API Entreprise s’utilise au travers d’un logiciel métier, votre éditeur vous met probablement à disposition un logiciel de ce type.
            <br/>
            En revanche, comme ce dernier n’a pas encore intégré l’API Entreprise, les instructeurs de l’API Entreprise devront, entre autres, vérifier si votre éditeur a les <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>prérequis techniques</External> pour utiliser l’API Entreprise.`
                    }, 
                ]
            }
        },
        {
            choices: [
                "**Je n\u2019ai ni \xe9quipe technique, ni \xe9diteur.**<br/>Actuellement, je contacte les entreprises et associations une par une et traite leurs donn\xe9es \xe0 la main.", 
            ],
            answer: `** Vous êtes éligible mais n'avez pas les <External href='https://entreprise.api.gouv.fr/doc/#fondamentaux'>prérequis techniques</External> pour utiliser l’API&nbsp;Entreprise <span role='img' aria-label='émoji loupe'>🔎</span>**
      <br/>
      L’API Entreprise s’utilise au travers d’un logiciel métier, comme par exemple un profil acheteur pour les marchés publics. Si vous collectez et traitez les données à la main, vous n’avez probablement pas un logiciel dédié aux démarches.
      <br/>
      **Vous pouvez :<br/>** - **contacter des éditeurs de logiciel ayant déjà intégré l’API Entreprise :**
      <br/><Button href='https://entreprise.api.gouv.fr/cas_usage/aides_publiques/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Aides Publiques</Button>
      <Button href='https://entreprise.api.gouv.fr/cas_usage/marches_publics/#liste-d%C3%A9diteurs' target='_blank' rel="noreferrer noopener" alt>Liste des éditeurs Marchés Publics</Button>
      <br/>- **déposer une demande afin de nous expliquer votre contexte d’utilisation et vos besoins.** Les instructeurs d’API Entreprise étudieront votre demande. L’identification d’une équipe technique sera indispensable pour délivrer une habilitation. Merci de nous indiquer dans le formulaire que vous n'avez pas d'équipe technique pour accélerer le traitement de votre demande.
      <br/>
      <Button href='https://datapass.api.gouv.fr/api-entreprise' target='_blank' rel="noreferrer noopener" alt>Déposer une demande</Button>`
        }, 
    ]
};

;// CONCATENATED MODULE: ./components/questionTree/data/api-entreprise/administrations.ts
const pathDevelopForAdministration = {
    question: "\xc0 qui sont destin\xe9s les interfaces/logiciels que vous concevez ?",
    choiceTree: [
        {
            choices: [
                "Aux administrations et/ou aux collectivit\xe9s"
            ],
            next: {
                question: "Quel type de service proposez-vous aux administrations ?",
                choiceTree: [
                    {
                        choices: [
                            "Un **logiciel m\xe9tier cl\xe9 en main**, propos\xe9 \xe0 de nombreuses entit\xe9s administratives", 
                        ],
                        answer: `**Vous êtes éligible pour mettre à disposition de vos utilisateurs l’API Entreprise <span role='img' aria-label='émoji ok'>👍</span>**
              <br/>
              <span role='img' aria-label='émoji avertissement'>⚠️</span> En tant que prestataire technique d’une entité administrative, vous pourrez être destinataire des informations techniques permettant l’usage de l’API mais en aucun cas des données elles-même.
              <br/>
              <span role='img' aria-label='émoji information'>ℹ️</span>**Pour que votre demande soit traitée plus rapidement :** Au niveau de la section _Les modèles pré-remplis_, le modèle "_Demande spécifique aux éditeurs de logiciels_" est sélectionné. Il est impératif de garder ce modèle et de ne pas en changer.
              <br/>
              <Button href='https://datapass.api.gouv.fr/api-entreprise?demarche=editeur' alt>Déposer une demande pour intégrer l'API Entreprise</Button>`
                    },
                    {
                        choices: [
                            "Un logiciel con\xe7u **sur mesure** pour une administration", 
                        ],
                        answer: `**L’administration pour laquelle vous proposez une prestation est éligible à l’API&nbsp;Entreprise <span role='img' aria-label='émoji ok'>👍</span>**
            <br/>
            **C’est à elle de compléter une demande auprès d’API Entreprise.** Elle devra dans sa demande d’habilitation vous renseigner en tant que “contact technique”. Le lien ci-dessous permet à l’administration d’accéder à la demande d’habilitation, partagez-lui :
            <br/>
            <External href='/les-api/api-entreprise/demande-acces'>Lien vers la page</External>
            &nbsp;
            <ButtonCopy source='https://api.gouv.fr/les-api/api-entreprise/demande-acces'/>`
                    }, 
                ]
            }
        },
        {
            choices: [
                "Aux entreprises, associations et/ou particuliers"
            ],
            answer: `**Vous n'êtes pas éligible <span role='img' aria-label='émoji non'>🚫</span>**
      <br/>
      L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
      <br/>
      <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>
      `
        }, 
    ]
};

;// CONCATENATED MODULE: ./components/questionTree/data/api-entreprise/index.ts


const apiEntrepriseQuestions = {
    "entreprises-or-associations": {
        question: "Votre entreprise/association est-elle :",
        choiceTree: [
            {
                choices: [
                    "d\xeete **\u201Ccharg\xe9e d\u2019une mission de service public\u201D**",
                    'd\xeete **"d\xe9l\xe9gataire de service public\u201D**', 
                ],
                answer: `**Vous êtes bien éligible <span role='img' aria-label='émoji oui'>👌</span> !**
        <br/>
        Lors de la demande, vous devrez justifier par le cadre légal adéquat de votre statut de société chargée d’une mission de service public.
        <br/><br/>
        Pour vérifier que l’API Entreprise vous permet d’accéder aux données dont vous avez besoin, consultez : <br/> - le [catalogue des données](https://entreprise.api.gouv.fr/catalogue/) ; <br/> - les [cas d’usage](https://entreprise.api.gouv.fr/cas_usage/) de l’API Entreprise.
        `,
                next: pathEligible
            },
            {
                choices: [
                    "**prestataire d\u2019une entit\xe9 administrative** et d\xe9veloppant des logiciels/interfaces", 
                ],
                next: pathDevelopForAdministration
            },
            {
                choices: [
                    "un **cabinet d\u2019avocat ou comptable**",
                    "dans aucune de ces situations", 
                ],
                answer: `**Vous n'êtes pas éligible <span role='img' aria-label='émoji non'>🚫</span>**
        <br/>
        L’usage des données de l’API Entreprise est reservé aux acteurs publics : les administrations, leurs opérateurs et les collectivités, les acteurs de santé, etc.
        <br/>
        <br/>
        <Button href='/les-api/api-entreprise#alternatives-en-acces-libre' alt>Consulter les alternatives</Button>`
            }, 
        ]
    },
    administrations: pathEligible,
    editors: pathDevelopForAdministration
};
/* harmony default export */ const api_entreprise = (apiEntrepriseQuestions);

;// CONCATENATED MODULE: ./components/questionTree/data/france-connected-api/index.ts
const isFranceConnectedQuestions = {
    dgfip: {
        question: "Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?",
        choiceTree: [
            {
                choices: [
                    "Oui"
                ],
                answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-impot-particulier-fc-sandbox">Remplir une demande</Button>`
            },
            {
                choices: [
                    "Non"
                ],
                next: {
                    question: "Souhaitez vous migrer de l\u2019API Particulier (DINUM) vers l\u2019API Imp\xf4t Particulier (DGFiP) ?",
                    choiceTree: [
                        {
                            choices: [
                                "Oui", 
                            ],
                            answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et pouvez remplir une demande de migration.
              <br/><br/>
              <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox?demarche=migration_api_particulier' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`
                        },
                        {
                            choices: [
                                "Non", 
                            ],
                            answer: `**<span role='img' aria-label='émoji ok'>👍</span> Vous êtes éligible et pouvez remplir une demande.
              <br/><br/>
              <Button href='https://datapass.api.gouv.fr/api-impot-particulier-sandbox' target='_blank' rel="noreferrer noopener">Déposer une demande</Button>`
                        }, 
                    ]
                }
            }, 
        ]
    },
    statutEtudiant: {
        question: "Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?",
        choiceTree: [
            {
                choices: [
                    "Oui"
                ],
                answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant">Remplir une demande</Button>`
            },
            {
                choices: [
                    "Non"
                ],
                answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Statut Etudiant, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
            }, 
        ]
    },
    statutEtudiantBoursier: {
        question: "Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?",
        choiceTree: [
            {
                choices: [
                    "Oui"
                ],
                answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-etudiant-boursier">Remplir une demande</Button>`
            },
            {
                choices: [
                    "Non"
                ],
                answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API Statut étudiant boursier, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
            }, 
        ]
    },
    agentConnect: {
        question: "Vous \xeates...",
        choiceTree: [
            {
                choices: [
                    "Fournisseur de services"
                ],
                answer: `Si vous souhaitez intégrer le bouton AgentConnect dans votre service, pouvez remplir cette demande :
        <Button href="https://datapass.api.gouv.fr/agent-connect-fs">Remplir une demande</Button>
        `
            },
            {
                choices: [
                    "Fournisseur d\u2018identit\xe9"
                ],
                answer: `Si vous souahitez contribuer à AgentConnect en fournissant des données d'identité, vous pouvez remplir cette demande :
        <br/>
        <Button href="https://datapass.api.gouv.fr/agent-connect-fi">Remplir une demande</Button>
        `
            }, 
        ]
    },
    statutDe: {
        question: "Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?",
        choiceTree: [
            {
                choices: [
                    "Oui"
                ],
                answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-statut-demandeur-emploi">Remplir une demande</Button>`
            },
            {
                choices: [
                    "Non"
                ],
                answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API statut demandeur d'emploi, via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
            }, 
        ]
    },
    indemnisationPe: {
        question: "Utilisez-vous ou comptez-vous utiliser FranceConnect sur votre service ?",
        choiceTree: [
            {
                choices: [
                    "Oui"
                ],
                answer: `Vous pouvez remplir une demande :
        <Button href="https://datapass.api.gouv.fr/api-indemnisation-pole-emploi">Remplir une demande</Button>`
            },
            {
                choices: [
                    "Non"
                ],
                answer: `En remplissant cette demande, vous allez obtenir l’accès à l'API indemnisation Pôle emploi via l'API Particulier.
        <br/>
        <Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
            }, 
        ]
    }
};
/* harmony default export */ const france_connected_api = (isFranceConnectedQuestions);

;// CONCATENATED MODULE: ./components/questionTree/data/api-particulier/eligible.ts
const eligible_pathEligible = {
    question: "Quel est l\u2019\xe9diteur de logiciel qui impl\xe9mentera l\u2019API ?",
    choiceTree: [
        {
            choices: [
                "Arp\xe8ge (Concerto)", 
            ],
            answer: `<br/><<Button href="https://datapass.api.gouv.fr/api-particulier?demarche=arpege-concerto">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Arp\xe8ge (Sonate)", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas-arpege">Remplir une demande</Button>
            `
        },
        {
            choices: [
                "Abelium Collectivit\xe9s", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=abelium">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Agora Plus", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=agora-plus">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Jd\xe9alise/Cantine de France", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=cantine-de-france">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Berger-Levrault", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=bl-enfance-berger-levrault-cnaf">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Ciril GROUP", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=civil-enfance-ciril-group">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Docaposte FAST", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=docaposte-fast">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "DOCAPOSTE", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Odyss\xe9e Informatique", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Technocarte", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Communaut\xe9 CapD\xe9mat", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Nord France Informatique (NFI)", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=nfi-grc">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "NUMESIA", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Mushroom Software", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=city-family-mushroom-software-cnaf">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Amiciel", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=amiciel-malice">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Qiis", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=qiis">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Aiga", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=aiga">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Teamnet", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=teamnet">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "JVS-Mairistem", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=jvs-parascol">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "3D Ouest", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=3d-ouest">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Entrouvert", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=entrouvert-publik">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Waigeo", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=waigeo">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "AFI", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas-Melissandre-afi">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Arche MC2", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier?demarche=ccas-ArcheMC2">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Kosmos", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        },
        {
            choices: [
                "Autre", 
            ],
            answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
        `
        }, 
    ]
};

;// CONCATENATED MODULE: ./components/questionTree/data/api-particulier/index.ts

const apiParticulierQuestions = {
    apipart: {
        question: "Qui sera en charge techniquement de l\u2019int\xe9gration de l\u2019API Particulier ?",
        choiceTree: [
            {
                choices: [
                    "Mon \xe9diteur de logiciel", 
                ],
                next: eligible_pathEligible
            },
            {
                choices: [
                    "Mon \xe9quipe de d\xe9veloppeurs (ou moi-m\xeame)",
                    "Autre / Je ne sais pas"
                ],
                answer: `<br/><Button href="https://datapass.api.gouv.fr/api-particulier">Remplir une demande</Button>
            `
            }, 
        ]
    }
};
/* harmony default export */ const api_particulier = (apiParticulierQuestions);

;// CONCATENATED MODULE: ./components/questionTree/data/index.ts



const allQuestions = {
    "api-entreprise": api_entreprise,
    "france-connected-api": france_connected_api,
    "api-particulier": api_particulier
};

;// CONCATENATED MODULE: ./components/questionTree/index.tsx







const Question = ({ questionTree , parentLabel , apiName  })=>{
    const { /*#__PURE__*/ 0: currentChoiceType , 1: setChoiceType  } = (0,external_react_.useState)(null);
    const { 0: selectedLabel , 1: setSelectedLabel  } = (0,external_react_.useState)(undefined);
    // When user change a parent choice in the tree, we close children
    (0,external_react_.useEffect)(()=>{
        setChoiceType(null);
    }, [
        parentLabel
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styled_jsx_default().dynamic([
            [
                "eb93762c443822e0",
                [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                    constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                    constants/* default.colors.blue */.Z.colors.blue
                ]
            ]
        ]) + " " + "question-tree-wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: styled_jsx_default().dynamic([
                    [
                        "eb93762c443822e0",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                            constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]),
                children: questionTree.question
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "eb93762c443822e0",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                            constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "choices",
                children: questionTree.choiceTree.map((choiceType, key)=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                        children: choiceType.choices.map((choice)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>{
                                    setSelectedLabel(choice);
                                    (0,analytics/* logParcoursDemandeAcces */.A5)("3. Renseigne un sujet de question", formatCategoryName(apiName), choice);
                                    setChoiceType(choiceType);
                                },
                                className: styled_jsx_default().dynamic([
                                    [
                                        "eb93762c443822e0",
                                        [
                                            constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                                            constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                                            constants/* default.colors.blue */.Z.colors.blue
                                        ]
                                    ]
                                ]) + " " + ((choice === selectedLabel ? "selected" : "") || ""),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown, {
                                    source: choice
                                })
                            }, choice)
                        )
                    }, key)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "eb93762c443822e0",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                            constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ])
            }),
            currentChoiceType && currentChoiceType.answer && /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown, {
                source: currentChoiceType.answer
            }),
            currentChoiceType && currentChoiceType.next && /*#__PURE__*/ jsx_runtime_.jsx(Question, {
                apiName: apiName,
                questionTree: currentChoiceType.next,
                parentLabel: selectedLabel
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "eb93762c443822e0",
                dynamic: [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                    constants/* default.colors.darkestGrey */.Z.colors.darkestGrey,
                    constants/* default.colors.blue */.Z.colors.blue
                ],
                children: `.question-tree-wrapper.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:${constants/* default.colors.lightBlue */.Z.colors.lightBlue};padding:5px 10px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;border:2px solid transparent;font-size:1.1rem;line-height:1.6rem;color:${constants/* default.colors.darkestGrey */.Z.colors.darkestGrey};width:-webkit-calc(30% - 12px);width:-moz-calc(30% - 12px);width:calc(30% - 12px);margin:6px 6px 0 0;text-align:left}.question-tree-wrapper.__jsx-style-dynamic-selector button.selected.__jsx-style-dynamic-selector,.question-tree-wrapper.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector:hover{border-color:${constants/* default.colors.blue */.Z.colors.blue}}.question-tree-wrapper.__jsx-style-dynamic-selector .choices.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}@media(max-width:900px){.question-tree-wrapper.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:-webkit-calc(50% - 6px);width:-moz-calc(50% - 6px);width:calc(50% - 6px)}}@media(max-width:600px){.question-tree-wrapper.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{width:100%-6px;);}}`
            })
        ]
    });
};
const QuestionTree = ({ tree , question ,  })=>{
    if (allQuestions[tree] && allQuestions[tree][question]) {
        return /*#__PURE__*/ jsx_runtime_.jsx(Question, {
            apiName: tree,
            questionTree: allQuestions[tree][question]
        });
    } else {
        throw new Error(`QuestionTree must be called with an existing key, but received : ${tree} and then ${question},`);
    }
};
// Category name for analytics should be the API title
const formatCategoryName = (title)=>{
    switch(title){
        case "api-entreprise":
            return "API Entreprise";
        case "france-connected-api":
            return "FranceConnect et les API FranceConnect\xe9es";
        case "api-particulier":
            return "API Particulier";
        default:
            return "*";
    }
};
/* harmony default export */ const questionTree = (QuestionTree);

;// CONCATENATED MODULE: ./components/richReactMarkdown/index.tsx













const CenteredCta = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-6e8d223eafbd6b1a" + " " + "layout-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                href: props.href,
                size: "large",
                alt: props.alt,
                /*#__PURE__*/ children: props.children
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "6e8d223eafbd6b1a",
                children: ".layout-center.jsx-6e8d223eafbd6b1a{padding:10px 0}"
            })
        ]
    })
;
const Centered = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "layout-center",
        children: props.children
    })
;
const Grid = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "default-grid",
        children: props.children
    })
;
const NextSteps = ({ is_editeur =false , service_description =`de la description du service justifiant une simplification pour les citoyens` ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                    children: "Pour remplir votre demande, vous aurez besoin : "
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "de votre num\xe9ro SIRET"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "du cadre juridique"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: service_description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: "des coordonn\xe9es de l'\xe9quipe"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        children: [
                            "des coordonn\xe9es de votre d\xe9l\xe9gu\xe9 \xe0 la protection des donn\xe9es et responsable de traitement",
                            is_editeur && /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: " de l\u2019entit\xe9 pour laquelle vous op\xe9rez"
                            })
                        ]
                    })
                ]
            })
        ]
    })
;
const RichReactMarkdown = ({ source ,  })=>/*#__PURE__*/ jsx_runtime_.jsx((external_markdown_to_jsx_default()), {
        children: source,
        options: {
            overrides: {
                Button: CenteredCta,
                ButtonCopy: uiComponents/* ButtonCopy */.WY,
                NextSteps: NextSteps,
                External: uiComponents/* ExternalLink */.dL,
                Quote: quote,
                RichLink: uiComponents/* RichLink */.Nm,
                Grid: Grid,
                Centered: Centered,
                ContactUs: teamHelpWidget/* default */.Z,
                ApiRnaWidget: apiRna,
                FlatFile: flatFile,
                ApiSireneWidget: apiSirene,
                Datagouv: datagouv/* default */.Z,
                h2: titleWithAnchor/* H2WithAnchor */.C,
                h3: titleWithAnchor/* H3WithAnchor */.h,
                QuestionTree: questionTree
            }
        }
    })
;
/* harmony default export */ const richReactMarkdown = (RichReactMarkdown);


/***/ }),

/***/ 6171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ datagouv)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
;// CONCATENATED MODULE: ./uiComponents/icon/external.tsx



/* harmony default export */ const external = (/*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 50 50",
    fill: constants/* default.colors.blue */.Z.colors.blue,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M41.6667 41.6667H8.33333V8.45742L16.6667 8.33333V0H0V50H50V29.1667H41.6667V41.6667ZM25 0L33.3333 8.33333L20.8333 20.8333L29.1667 29.1667L41.6667 16.6667L50 25V0H25Z"
    })
}));

;// CONCATENATED MODULE: ./uiComponents/icon/flatFile.tsx



/* harmony default export */ const flatFile = (/*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: "50",
    viewBox: "0 0 157 193",
    fill: constants/* default.colors.darkBlue */.Z.colors.darkBlue,
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M106.5 24.5H24L20.5 29.5V164.5L24 169H132L136.5 164.5V56L106.5 24.5Z",
            fill: "white"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M137.97 54.1355L137.881 53.8399L137.852 53.7216L137.704 53.426L137.644 53.3077L137.348 52.953L107.005 22.68L106.65 22.3843C106.62 22.3843 106.591 22.3843 106.561 22.3252L106.265 22.1774L106.117 22.1478L105.82 22.0591L105.346 22H25.993C22.1409 22 19 25.1337 19 28.977V164.023C19 167.866 22.1409 171 25.993 171H131.037C134.889 171 138 167.866 138 164.023V54.6085L137.97 54.1355ZM133.348 164.023C133.348 165.294 132.311 166.359 131.037 166.359H25.993C25.6831 166.359 25.3763 166.297 25.0903 166.178C24.8044 166.059 24.545 165.884 24.3272 165.664C24.1094 165.444 23.9376 165.183 23.8218 164.896C23.7059 164.61 23.6482 164.303 23.6521 163.993V29.0065C23.6521 27.7353 24.7189 26.671 26.0227 26.671H103.005V46.8333C103.005 52.4208 107.539 56.9145 113.139 56.9145H133.318V164.023H133.348Z"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M123.68 71H32.3197C31.7069 71.0076 31.1213 71.2514 30.688 71.6793C30.2546 72.1072 30.0077 72.6854 30 73.2905V142.68C30 143.943 31.0409 145 32.3197 145H123.68C124.959 145 126 143.943 126 142.68V73.2905C126 72.0278 124.959 71 123.68 71V71ZM41.6877 140.36H34.6691V133.43H41.7175V140.36H41.6877ZM41.6877 128.79H34.6691V121.86H41.7175V128.79H41.6877ZM41.6877 117.25H34.6691V110.29H41.7175V117.279L41.6877 117.25ZM41.6877 105.68H34.6691V98.75H41.7175V105.68H41.6877ZM41.6877 94.1103H34.6691V87.1802H41.7175V94.1103H41.6877ZM41.6877 82.5405H34.6691V75.6103H41.7175V82.5405H41.6877ZM72.1413 140.39H46.3866V133.43H72.1413V140.36V140.39ZM72.1413 128.79H46.3866V121.86H72.1413V128.79ZM72.1413 117.25H46.3866V110.29H72.1413V117.279V117.25ZM72.1413 105.68H46.3866V98.75H72.1413V105.68ZM72.1413 94.1103H46.3866V87.1802H72.1413V94.1103ZM72.1413 82.5698H46.3866V75.581H72.1413V82.5405V82.5698ZM96.7361 140.36H76.8104V133.43H96.7361V140.36ZM96.7361 128.79H76.8104V121.86H96.7361V128.79ZM96.7361 117.25H76.8104V110.29H96.7361V117.279V117.25ZM96.7361 105.68H76.8104V98.75H96.7361V105.68ZM96.7361 94.1103H76.8104V87.1802H96.7361V94.1103ZM96.7361 82.5698H76.8104V75.581H96.7361V82.5405V82.5698ZM121.331 140.36H101.405V133.43H121.331V140.36V140.36ZM121.331 128.79H101.405V121.86H121.331V128.79ZM121.331 117.25H101.405V110.29H121.331V117.279V117.25ZM121.331 105.68H101.405V98.75H121.331V105.68ZM121.331 94.1103H101.405V87.1802H121.331V94.1103ZM121.331 82.5698H101.405V75.581H121.331V82.5405V82.5698Z"
        })
    ]
}));

;// CONCATENATED MODULE: ./components/widgets/datagouv.tsx







const DatagouvWidget = ({ href , title , productor  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "aec55b9042839ab3",
                        [
                            constants/* default.colors.greyBlue */.Z.colors.greyBlue
                        ]
                    ]
                ]) + " " + "flat-file-widget",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "aec55b9042839ab3",
                                [
                                    constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                ]
                            ]
                        ]) + " " + "top-container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "aec55b9042839ab3",
                                        [
                                            constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                        ]
                                    ]
                                ]) + " " + "logo-container",
                                /*#__PURE__*/ children: flatFile
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "aec55b9042839ab3",
                                        [
                                            constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                        ]
                                    ]
                                ]),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "aec55b9042839ab3",
                                                [
                                                    constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                                ]
                                            ]
                                        ]) + " " + "flat-file-title",
                                        children: title
                                    }),
                                    productor && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "aec55b9042839ab3",
                                                [
                                                    constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                                ]
                                            ]
                                        ]) + " " + "description",
                                        children: [
                                            "Produit par : ",
                                            productor
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "aec55b9042839ab3",
                                [
                                    constants/* default.colors.greyBlue */.Z.colors.greyBlue
                                ]
                            ]
                        ]) + " " + "cta layout-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uiComponents/* ButtonLink */.ZP, {
                            href: href,
                            target: "_blank",
                            size: "small",
                            rel: "noopener noreferrer",
                            alt: true,
                            children: [
                                "Acc\xe9der au jeu de donn\xe9es\xa0",
                                external
                            ]
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "aec55b9042839ab3",
                dynamic: [
                    constants/* default.colors.greyBlue */.Z.colors.greyBlue
                ],
                children: `div.flat-file-widget.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-decoration:none;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;padding:10px 20px;color:#444;margin:auto;width:-webkit-calc(100% - 40px);width:-moz-calc(100% - 40px);width:calc(100% - 40px);max-width:310px;border:1px solid ${constants/* default.colors.greyBlue */.Z.colors.greyBlue};height:-webkit-calc(100% - 20px);height:-moz-calc(100% - 20px);height:calc(100% - 20px);-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}div.top-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;text-align:left;font-weight:bold;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}div.logo-container.__jsx-style-dynamic-selector{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:60px}div.logo-container.__jsx-style-dynamic-selector>img.__jsx-style-dynamic-selector{width:100%}div.description.__jsx-style-dynamic-selector{font-size:.9rem;line-height:1.3rem;font-style:italic;font-weight:normal;margin-bottom:10px}div.cta.__jsx-style-dynamic-selector{margin:10px auto}`
            })
        ]
    })
;
/* harmony default export */ const datagouv = (DatagouvWidget);


/***/ })

};
;