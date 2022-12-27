"use strict";
(() => {
var exports = {};
exports.id = 113;
exports.ids = [113];
exports.modules = {

/***/ 8780:
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
// EXTERNAL MODULE: ./uiComponents/button/index.ts + 1 modules
var uiComponents_button = __webpack_require__(6926);
// EXTERNAL MODULE: ./utils/client/analytics.js
var analytics = __webpack_require__(9435);
// EXTERNAL MODULE: ./constants/index.js + 1 modules
var constants = __webpack_require__(769);
;// CONCATENATED MODULE: ./components/api/subSection.tsx




const SubSection = ({ id ="" , title , children ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: id,
                className: styled_jsx_default().dynamic([
                    [
                        "930313f946af484e",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue
                        ]
                    ]
                ]) + " " + "sub-section",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: styled_jsx_default().dynamic([
                            [
                                "930313f946af484e",
                                [
                                    constants/* default.colors.lightBlue */.Z.colors.lightBlue
                                ]
                            ]
                        ]),
                        /*#__PURE__*/ children: title
                    }),
                    children
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "930313f946af484e",
                dynamic: [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue
                ],
                children: `div.sub-section.__jsx-style-dynamic-selector{margin:40px 0;position:relative}h2.__jsx-style-dynamic-selector{font-size:1.2rem;line-height:1.8rem;margin-bottom:5px}@media only screen and (min-width:1px)and (max-width:900px){div.sub-section.__jsx-style-dynamic-selector{border:2px solid ${constants/* default.colors.lightBlue */.Z.colors.lightBlue};-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin:10px 0;padding:10px}h2.__jsx-style-dynamic-selector{margin-top:0}}`
            })
        ]
    });
};
/* harmony default export */ const subSection = (SubSection);

// EXTERNAL MODULE: ./uiComponents/emoji/index.tsx
var uiComponents_emoji = __webpack_require__(9213);
;// CONCATENATED MODULE: ./components/api/access.tsx






const DESCRIPTIONS = {
    open: "L\u2019API est ouverte \xe0 tous. Vous pouvez y acc\xe9der d\xe8s maintenant :",
    account: "\u26A0\uFE0F Attention ! Cette API n\xe9cessite de se cr\xe9er un compte afin d\u2019acc\xe9der aux donn\xe9es :",
    closed: "L\u2019API n\xe9cessite une habilitation :"
};
const AccessButton = ({ emoji ="" , emojiLabel ="" , label =""  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents_emoji/* default */.Z, {
                emoji: emoji,
                label: emojiLabel
            }),
            label
        ]
    })
;
const Access = ({ is_open , slug , doc_external_link ="" , doc_swagger_link ="" , account_link ="" ,  })=>{
    let accessDescription = "";
    let accessHref = "";
    let accessLabel = /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    let ext = false; // external link ?
    if (!doc_swagger_link && !doc_external_link) {
        throw new Error(`API ${slug} should have either an external or an internal documentation.`);
    }
    switch(is_open){
        case 1:
            accessDescription = DESCRIPTIONS.open;
            accessHref = doc_swagger_link ? `/documentation/${slug}` : doc_external_link;
            accessLabel = /*#__PURE__*/ jsx_runtime_.jsx(AccessButton, {
                emoji: "\uD83D\uDC69\u200D\uD83D\uDCBB",
                emojiLabel: "code",
                label: doc_swagger_link ? "Tester l\u2019API" : "Acc\xe9der au site de l\u2019API"
            });
            break;
        case 0:
            accessDescription = DESCRIPTIONS.account;
            accessHref = account_link;
            accessLabel = /*#__PURE__*/ jsx_runtime_.jsx(AccessButton, {
                emoji: "\u2197\uFE0F",
                emojiLabel: "attention",
                label: "Se cr\xe9er un compte"
            });
            ext = true;
            break;
        case -1:
            accessDescription = DESCRIPTIONS.closed;
            accessHref = `/les-api/${slug}/demande-acces`;
            accessLabel = /*#__PURE__*/ jsx_runtime_.jsx(AccessButton, {
                emoji: "\uD83D\uDD11",
                emojiLabel: "clef",
                label: "Faire une demande d\u2019habilitation"
            });
            break;
        default:
            throw new Error("is_open should be 0, -1 or 1");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(subSection, {
        title: "Acc\xe9der aux donn\xe9es",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: accessDescription
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "layout-right vertical-margin",
                children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents_button/* ButtonLink */.Z, {
                    href: accessHref,
                    onClick: analytics/* logDemanderAcces */.hF,
                    target: ext ? "_blank" : "",
                    rel: ext ? "noreferrer noopener" : "",
                    children: accessLabel
                })
            })
        ]
    });
};
/* harmony default export */ const access = (Access);

;// CONCATENATED MODULE: ./components/api/supportAndTeam.tsx





const SupportAndTeam = ({ logo , link , owner , owner_acronym , owner_slug ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(subSection, {
        title: "L\u2019\xe9quipe",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-bd9c59f631294483",
                /*#__PURE__*/ children: "Cette API est produite par :"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-bd9c59f631294483" + " " + "team",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: `/images/api-logo/${logo || "dinum.png"}`,
                        alt: "",
                        className: "jsx-bd9c59f631294483"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-bd9c59f631294483",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: `/producteurs/${owner_slug}`,
                            className: "jsx-bd9c59f631294483",
                            children: [
                                owner,
                                owner_acronym && ` (${owner_acronym})`
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: link ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-bd9c59f631294483" + " " + "layout-right vertical-margin",
                    children: link.indexOf("@") > -1 ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uiComponents_button/* ButtonLink */.Z, {
                            href: `mailto:${link}?subject=Contact%20via%20api.gouv.fr`,
                            alt: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    role: "img",
                                    "aria-label": "\xe9moji mail",
                                    className: "jsx-bd9c59f631294483",
                                    children: "\uD83D\uDC8C"
                                }),
                                " ",
                                "\xc9crire un mail \xe0 l\u2019\xe9quipe"
                            ]
                        })
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uiComponents_button/* ButtonLink */.Z, {
                            href: link,
                            target: "_blank",
                            rel: "noopener",
                            alt: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    role: "img",
                                    "aria-label": "\xe9moji formulaire",
                                    className: "jsx-bd9c59f631294483",
                                    children: "\uD83D\uDCDD"
                                }),
                                " ",
                                "Contacter l'\xe9quipe via formulaire"
                            ]
                        })
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "jsx-bd9c59f631294483",
                    children: "Le contact de cette API n'est pas disponible publiquement."
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "bd9c59f631294483",
                children: ".team.jsx-bd9c59f631294483{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:10px 0}.team.jsx-bd9c59f631294483 img.jsx-bd9c59f631294483{-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:auto;max-height:70px;max-width:30%;margin-right:15px;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}.team.jsx-bd9c59f631294483 span.jsx-bd9c59f631294483{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:50%}"
            })
        ]
    });
};
/* harmony default export */ const supportAndTeam = (SupportAndTeam);

;// CONCATENATED MODULE: ./components/api/partners.tsx



const Partners = ({ partners  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(subSection, {
        title: "Partenaires",
        children: partners && partners.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: partners.map((partner)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "item",
                    children: partner.slug ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: `/producteurs/${partner.slug}`,
                        children: partner.name
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: partner.name
                    })
                }, partner.name)
            )
        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Cette API ne recense pas ses partenariats publiquement."
        })
    });
};
/* harmony default export */ const api_partners = (Partners);

;// CONCATENATED MODULE: ./components/api/technical-documentation.tsx





const TechnicalDocumentation = ({ swagger_link , external_link , slug ,  })=>{
    const link = external_link ? external_link : `/documentation/${slug}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(subSection, {
        title: "Documentation technique",
        children: external_link || swagger_link ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Vous \xeates d\xe9veloppeur ou architecte ? Partagez la documentation avec votre \xe9quipe :"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layout-right vertical-margin",
                    children: swagger_link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uiComponents_button/* ButtonLink */.Z, {
                        href: `/documentation/${slug}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents_emoji/* default */.Z, {
                                emoji: "\uD83D\uDC69\u200D\uD83D\uDCBB",
                                label: "code"
                            }),
                            "Tester l\u2019API"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "layout-right vertical-margin",
                    children: link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(uiComponents_button/* ButtonLink */.Z, {
                        href: link,
                        alt: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(uiComponents_emoji/* default */.Z, {
                                emoji: "\uD83D\uDCDA",
                                label: "documentation"
                            }),
                            "Acc\xe9der \xe0 la documentation"
                        ]
                    })
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Cette API n\u2019a pas de documentation publique."
        })
    });
};
/* harmony default export */ const technical_documentation = (TechnicalDocumentation);

// EXTERNAL MODULE: ./components/serviceCard/index.js + 1 modules
var serviceCard = __webpack_require__(8055);
;// CONCATENATED MODULE: ./components/api/section.js



const section_Section = ({ id , title , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: styled_jsx_default().dynamic([
            [
                "a59e2398aa712ebd",
                [
                    constants/* default.colors.blue */.Z.colors.blue
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                id: id,
                className: styled_jsx_default().dynamic([
                    [
                        "a59e2398aa712ebd",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "hidden-anchor",
                /*#__PURE__*/ children: "This is a hidden anchor. It is a trick to avoid having the header hiding the top of the page."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                className: styled_jsx_default().dynamic([
                    [
                        "a59e2398aa712ebd",
                        [
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]) + " " + "ui dividing header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: `#${id}`,
                        "aria-hidden": "true",
                        tabIndex: "-1",
                        className: styled_jsx_default().dynamic([
                            [
                                "a59e2398aa712ebd",
                                [
                                    constants/* default.colors.blue */.Z.colors.blue
                                ]
                            ]
                        ]) + " " + "header-anchor",
                        children: "#"
                    }),
                    title
                ]
            }),
            children,
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "a59e2398aa712ebd",
                dynamic: [
                    constants/* default.colors.blue */.Z.colors.blue
                ],
                children: `section.__jsx-style-dynamic-selector{margin-top:2em;position:relative}a.header-anchor.__jsx-style-dynamic-selector{font-size:.9em;float:left;margin-left:-.87em;padding-right:.23em;opacity:0;text-decoration:none;color:${constants/* default.colors.blue */.Z.colors.blue}}h2.__jsx-style-dynamic-selector:hover .header-anchor.__jsx-style-dynamic-selector{opacity:1}a.hidden-anchor.__jsx-style-dynamic-selector{display:block;position:absolute;top:0;visibility:hidden}`
            })
        ]
    });
};
/* harmony default export */ const section = (section_Section);

;// CONCATENATED MODULE: ./components/api/apiRelatedServices.tsx




const ApiRelatedServices = ({ services =[]  })=>{
    return /*#__PURE__*/ _jsx(Section, {
        id: "services",
        title: "R\xe9alisations",
        children: services.length > 0 ? /*#__PURE__*/ _jsx("div", {
            className: "default-grid",
            children: services.map((service)=>/*#__PURE__*/ _jsx(ServiceCard, {
                    ...service
                }, service.slug)
            )
        }) : /*#__PURE__*/ _jsx("p", {
            children: "Il n\u2019y a pas \xe0 notre connaissance de r\xe9alisations utilisant cette API."
        })
    });
};
/* harmony default export */ const apiRelatedServices = ((/* unused pure expression or super */ null && (ApiRelatedServices)));

// EXTERNAL MODULE: ./uiComponents/index.js + 9 modules
var uiComponents = __webpack_require__(4795);
// EXTERNAL MODULE: ./components/widgets/datagouv.tsx + 2 modules
var datagouv = __webpack_require__(6171);
;// CONCATENATED MODULE: ./components/api/apiOpenDataSources.tsx






/**
 * For a list of datagouv uuid, returns the uuid enriched with dataset informations such as title
 * @param uuids
 */ const fetchDatagouvDatasets = async (uuids)=>{
    if (!uuids || uuids.length === 0) {
        return [];
    }
    return await Promise.all(uuids.map(async (uuid)=>{
        const response = await fetch(`https://www.data.gouv.fr/api/1/datasets/${uuid}`);
        const data = await response.json();
        if (!response.ok) {
            console.log(`----ERROR----`);
            console.log(`Incorrect response for dataset : ${uuid}`);
            console.log(`STATUS CODE : ${response.status}`);
            console.log(`BODY : ${JSON.stringify(data)}`);
            throw new Error(`Corrupted dataset uuid : ${uuid}`);
        }
        return {
            title: data.title,
            uuid,
            organization: data.organization.name
        };
    }));
};
const ApiOpenDataSources = ({ datasetsList ,  })=>{
    const uniq = datasetsList.length === 1;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(section, {
        id: "api-open-data-sources",
        title: "Source de donn\xe9es ouvertes",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-7987d5ff5edfeb36",
                children: [
                    "Cette API se base sur",
                    " ",
                    uniq ? "un jeu de donn\xe9es ouvert, accessible" : "plusieurs jeux de donn\xe9es ouverts, accessibles",
                    " ",
                    "via",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ExternalLink */.dL, {
                        href: "https://data.gouv.fr",
                        /*#__PURE__*/ children: "data.gouv.fr"
                    }),
                    "\xa0:"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-7987d5ff5edfeb36" + " " + `${uniq ? "" : "two-column-grid"} dataset-container`,
                children: datasetsList.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(datagouv/* default */.Z, {
                        title: item.title,
                        productor: item.organization,
                        href: `https://data.gouv.fr/fr/datasets/${item.uuid}`
                    }, item.title)
                )
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "7987d5ff5edfeb36",
                children: "div.jsx-7987d5ff5edfeb36>span.jsx-7987d5ff5edfeb36{margin-right:20px}div.dataset-container.jsx-7987d5ff5edfeb36{margin:30px auto}"
            })
        ]
    });
};
/* harmony default export */ const apiOpenDataSources = (ApiOpenDataSources);

;// CONCATENATED MODULE: ./components/api/pageHeader.tsx




const PageHeader = ({ title , tagline , owner , owner_acronym , owner_slug ,  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "mission-statement",
        className: styled_jsx_default().dynamic([
            [
                "f7b0f4e6d96c56b3",
                [
                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                ]
            ]
        ]),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styled_jsx_default().dynamic([
                    [
                        "f7b0f4e6d96c56b3",
                        [
                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                        ]
                    ]
                ]) + " " + "fr-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "f7b0f4e6d96c56b3",
                                [
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]) + " " + "breadcrumb",
                        /*#__PURE__*/ children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/rechercher-api",
                            className: styled_jsx_default().dynamic([
                                [
                                    "f7b0f4e6d96c56b3",
                                    [
                                        constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                    ]
                                ]
                            ]) + " " + "dont-apply-link-style",
                            children: "\u21E0 Toutes les API"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: styled_jsx_default().dynamic([
                            [
                                "f7b0f4e6d96c56b3",
                                [
                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                ]
                            ]
                        ]) + " " + "content",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "f7b0f4e6d96c56b3",
                                        [
                                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                        ]
                                    ]
                                ]),
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("i", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "f7b0f4e6d96c56b3",
                                        [
                                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                        ]
                                    ]
                                ]),
                                children: [
                                    "Producteur :",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `/producteurs/${owner_slug}`,
                                        className: styled_jsx_default().dynamic([
                                            [
                                                "f7b0f4e6d96c56b3",
                                                [
                                                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                                ]
                                            ]
                                        ]) + " " + "dont-apply-link-style",
                                        children: owner_acronym ? owner_acronym : owner
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "f7b0f4e6d96c56b3",
                                        [
                                            constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                                        ]
                                    ]
                                ]) + " " + "tagline",
                                children: tagline
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "f7b0f4e6d96c56b3",
                dynamic: [
                    constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient
                ],
                children: `#mission-statement.__jsx-style-dynamic-selector{background:${constants/* default.colors.backgroundBlueGradient */.Z.colors.backgroundBlueGradient};width:100%;color:#fff;text-align:left}.content.__jsx-style-dynamic-selector{margin:0;padding:5px 0 15px}.content.__jsx-style-dynamic-selector>i.__jsx-style-dynamic-selector>a.__jsx-style-dynamic-selector{color:#fff}.breadcrumb.__jsx-style-dynamic-selector{padding-top:25px}.breadcrumb.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{margin-top:25px;color:#fff}.breadcrumb.__jsx-style-dynamic-selector:hover{text-decoration:underline}h1.__jsx-style-dynamic-selector{margin:10px 0 0;font-style:normal;font-weight:bold;color:#fff}h1.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-weight:400}.tagline.__jsx-style-dynamic-selector{font-style:normal;font-weight:bold;font-size:17px;line-height:25px;margin:15px 0 10px;color:#fff}@media only screen and (min-width:1px)and (max-width:900px){.content.__jsx-style-dynamic-selector{padding:0 0 10px}.breadcrumb.__jsx-style-dynamic-selector{padding-top:10px}}`
            })
        ]
    })
;
/* harmony default export */ const pageHeader = (PageHeader);

// EXTERNAL MODULE: ./components/richReactMarkdown/index.tsx + 14 modules
var richReactMarkdown = __webpack_require__(5813);
// EXTERNAL MODULE: ./uiComponents/titleWithAnchor/index.tsx
var titleWithAnchor = __webpack_require__(7532);
;// CONCATENATED MODULE: ./components/api/apiDescription.tsx







const ApiDescription = ({ content_intro , guides , body  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(section, {
        id: "api-description",
        title: "Description",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    content_intro && /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown/* default */.Z, {
                        source: content_intro
                    }),
                    guides.length > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(titleWithAnchor/* H3WithAnchor */.h, {
                                /*#__PURE__*/ children: "Exemples d\u2019application"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-3e5c3ea49e8da0d7" + " " + "default-grid api-examples",
                                children: guides.map((guide)=>/*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* RichLink */.Nm, {
                                        title: guide.title,
                                        image: guide.image ? `/images/guides/thumbnail_${guide.image}` : undefined,
                                        href: `/guides/${guide.slug}`
                                    }, guide.slug)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(richReactMarkdown/* default */.Z, {
                        source: body
                    })
                ]
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "3e5c3ea49e8da0d7",
                children: ".api-examples.jsx-3e5c3ea49e8da0d7{margin-bottom:40px}"
            })
        ]
    })
;
/* harmony default export */ const apiDescription = (ApiDescription);

;// CONCATENATED MODULE: ./components/api/index.js










// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(2738);
;// CONCATENATED MODULE: ./uiComponents/icon/speedometer.tsx


const Speedo = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
    width: "28",
    height: "20",
    viewBox: "0 0 14 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
            width: "14",
            height: "11",
            fill: "white"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M6.53047 0.690704C5.41204 0.75132 4.35513 1.02665 3.40607 1.47387L4.68972 3.55825C5.25688 3.3092 5.87722 3.14912 6.53047 3.09689V0.690704Z",
            fill: "#DFE300"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M7.4696 0.689941V3.09677C8.12179 3.14944 8.74151 3.31093 9.30845 3.56133L10.5963 1.47018C9.64632 1.02439 8.58876 0.749941 7.4696 0.689941Z",
            fill: "#FF782C"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M11.41 1.90982L10.1205 4.00384C10.643 4.34791 11.0987 4.77532 11.4653 5.26502L13.6999 4.05555C13.1004 3.20146 12.32 2.47091 11.41 1.90982V1.90982Z",
            fill: "#A50000"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M0.306274 4.0588L2.52965 5.26222C2.8964 4.771 3.35274 4.34292 3.87674 3.99909L2.59309 1.9147C1.68462 2.4765 0.905555 3.20711 0.306274 4.0588Z",
            fill: "#37AB00"
        }),
        /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.43152 9.54101L5.34966 10.4987L6.50147 9.22745C6.68101 9.30004 6.87939 9.3344 7.08547 9.32074C7.81506 9.27243 8.3676 8.64145 8.31921 7.91187C8.30661 7.72158 8.25419 7.54337 8.17098 7.38479L11.6913 3.49921L7.6611 6.85331C7.44135 6.72592 7.18259 6.6601 6.91028 6.67815C6.18069 6.72645 5.62815 7.35743 5.67655 8.08701C5.68477 8.21175 5.71012 8.33145 5.75006 8.44371L4.43152 9.54101Z",
            fill: "black"
        })
    ]
});
/* harmony default export */ const speedometer = (Speedo);

// EXTERNAL MODULE: ./uiComponents/icon/cardiogram.tsx
var cardiogram = __webpack_require__(9636);
;// CONCATENATED MODULE: ./uiComponents/icon/stats.tsx


const Stats = /*#__PURE__*/ jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /*#__PURE__*/ jsx_runtime_.jsx("polyline", {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })
});
/* harmony default export */ const stats = (Stats);

;// CONCATENATED MODULE: ./components/api/apiDetails.tsx










const ShowMore = ({ onClick =(isOpen)=>{} , isOpen =false  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>onClick(!isOpen)
                ,
                className: styled_jsx_default().dynamic([
                    [
                        "c3d8de0752314475",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                            constants/* default.colors.blue */.Z.colors.blue
                        ]
                    ]
                ]),
                /*#__PURE__*/ children: isOpen ? "-" : "+"
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "c3d8de0752314475",
                dynamic: [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue,
                    constants/* default.colors.blue */.Z.colors.blue
                ],
                children: `button.__jsx-style-dynamic-selector{-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;border:none;background-color:${constants/* default.colors.lightBlue */.Z.colors.lightBlue};color:${constants/* default.colors.blue */.Z.colors.blue};-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;padding:4px 8px;font-weight:bold}`
            })
        ]
    });
};
const triggerOnEnterKey = (trigger)=>(event)=>{
        if (!event.keyCode || event && event.keyCode === 13) {
            trigger();
        }
    }
;
const MonitoringDetail = ({ uptime , monitoring , monitoring_link =null ,  })=>{
    const { 0: showMonitoringDesc , 1: setShowMonitoringDesc  } = (0,external_react_.useState)(false);
    const toggle = ()=>setShowMonitoringDesc(!showMonitoringDesc)
    ;
    const toggleKey = triggerOnEnterKey(toggle);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                onClick: toggle,
                onKeyDown: toggleKey,
                role: "button",
                tabIndex: 0,
                className: styled_jsx_default().dynamic([
                    [
                        "b67a211c15cb9396",
                        [
                            (0,utils/* getUptimeState */.AW)(uptime)
                        ]
                    ]
                ]) + " " + "badge uptime cursor-pointer",
                children: [
                    uptime ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b67a211c15cb9396",
                                        [
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "b67a211c15cb9396",
                                            [
                                                (0,utils/* getUptimeState */.AW)(uptime)
                                            ]
                                        ]
                                    ]) + " " + "uptime-stat"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b67a211c15cb9396",
                                        [
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]),
                                children: [
                                    "Disponibilit\xe9 : ",
                                    (0,utils/* roundUptime */.an)(2)(uptime),
                                    "% sur le dernier mois"
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b67a211c15cb9396",
                                        [
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]),
                                children: cardiogram/* default */.Z
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: styled_jsx_default().dynamic([
                                    [
                                        "b67a211c15cb9396",
                                        [
                                            (0,utils/* getUptimeState */.AW)(uptime)
                                        ]
                                    ]
                                ]),
                                children: "La disponibilit\xe9 sur le dernier mois n'est pas communiqu\xe9e"
                            })
                        ]
                    }),
                    (monitoring || monitoring_link) && /*#__PURE__*/ jsx_runtime_.jsx(ShowMore, {
                        isOpen: showMonitoringDesc
                    })
                ]
            }),
            (monitoring || monitoring_link) && showMonitoringDesc && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: styled_jsx_default().dynamic([
                        [
                            "b67a211c15cb9396",
                            [
                                (0,utils/* getUptimeState */.AW)(uptime)
                            ]
                        ]
                    ]) + " " + "details",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: styled_jsx_default().dynamic([
                                [
                                    "b67a211c15cb9396",
                                    [
                                        (0,utils/* getUptimeState */.AW)(uptime)
                                    ]
                                ]
                            ]),
                            children: monitoring
                        }),
                        monitoring && monitoring_link && /*#__PURE__*/ jsx_runtime_.jsx("br", {
                            className: styled_jsx_default().dynamic([
                                [
                                    "b67a211c15cb9396",
                                    [
                                        (0,utils/* getUptimeState */.AW)(uptime)
                                    ]
                                ]
                            ])
                        }),
                        monitoring_link && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "b67a211c15cb9396",
                                            [
                                                (0,utils/* getUptimeState */.AW)(uptime)
                                            ]
                                        ]
                                    ]),
                                    children: "Le monitoring de cette API est accessible ici :"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: styled_jsx_default().dynamic([
                                        [
                                            "b67a211c15cb9396",
                                            [
                                                (0,utils/* getUptimeState */.AW)(uptime)
                                            ]
                                        ]
                                    ]) + " " + "layout-right vertical-margin",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                                        href: monitoring_link,
                                        target: "_blank",
                                        rel: "noopener",
                                        alt: true,
                                        children: "Acc\xe9der au monitoring"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "b67a211c15cb9396",
                dynamic: [
                    (0,utils/* getUptimeState */.AW)(uptime)
                ],
                children: `.uptime-stat.__jsx-style-dynamic-selector{min-width:15px;min-height:15px;-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;margin:0 7px;background-color:${(0,utils/* getUptimeState */.AW)(uptime)}}`
            })
        ]
    });
};
const RateLimitingDetail = ({ rate_limiting , rate_limiting_resume , rate_limiting_link  })=>{
    const { 0: showRateLimitDesc , 1: setShowRateLimitDesc  } = (0,external_react_.useState)(false);
    const toggle = ()=>setShowRateLimitDesc(!showRateLimitDesc)
    ;
    const toggleKey = triggerOnEnterKey(toggle);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "badge cursor-pointer",
                onClick: toggle,
                onKeyDown: toggleKey,
                role: "button",
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: speedometer
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: rate_limiting_resume ? `Limite : ${rate_limiting_resume}` : "Les limites d\u2019utilisation de cette API ne sont pas communiqu\xe9es"
                    }),
                    rate_limiting && /*#__PURE__*/ jsx_runtime_.jsx(ShowMore, {
                        isOpen: showRateLimitDesc
                    })
                ]
            }),
            rate_limiting && showRateLimitDesc && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "details",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        children: rate_limiting
                    }),
                    rate_limiting_link && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-right vertical-margin",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                                href: rate_limiting_link,
                                target: "_blank",
                                rel: "noopener",
                                alt: true,
                                children: "En savoir plus"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const StatsDetail = ({ stats_detail , stats_detail_resume , stats_detail_link  })=>{
    const { 0: showStatsDetailDesc , 1: setShowStatsDetailDesc  } = (0,external_react_.useState)(false);
    const toggle = ()=>setShowStatsDetailDesc(!showStatsDetailDesc)
    ;
    const toggleKey = triggerOnEnterKey(toggle);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "badge cursor-pointer",
                onClick: toggle,
                onKeyDown: toggleKey,
                role: "button",
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: stats
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: stats_detail_resume ? `Stats : ${stats_detail_resume}` : "Les statistiques d\u2018utilisation de cette API ne sont pas communiqu\xe9es"
                    }),
                    stats_detail && /*#__PURE__*/ jsx_runtime_.jsx(ShowMore, {
                        isOpen: showStatsDetailDesc
                    })
                ]
            }),
            stats_detail && showStatsDetailDesc && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "details",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        children: stats_detail
                    }),
                    stats_detail_link && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-right vertical-margin",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(uiComponents/* ButtonLink */.ZP, {
                                href: stats_detail_link,
                                target: "_blank",
                                rel: "noopener",
                                alt: true,
                                children: "En savoir plus"
                            })
                        })
                    })
                ]
            })
        ]
    });
};
const IsFranceConnectedDetail = ({ is_france_connected ,  })=>{
    const { 0: show , 1: setShow  } = (0,external_react_.useState)(false);
    const toggle = ()=>setShow(!show)
    ;
    const toggleKey = triggerOnEnterKey(toggle);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "badge cursor-pointer",
                onClick: toggle,
                onKeyDown: toggleKey,
                role: "button",
                tabIndex: 0,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/divers/franceConnectLogo.png",
                            alt: "fc-logo"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            "FranceConnect :",
                            is_france_connected === 2 ? " obligatoire" : " compatible"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ShowMore, {
                        isOpen: show
                    })
                ]
            }),
            show && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "details",
                children: [
                    is_france_connected === 2 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            "Cette API fonctionne ",
                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                children: "obligatoirement"
                            }),
                            " avec FranceConnect pour identifier les citoyen."
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: "Cette API fonctionne soit avec FranceConnect, soit sans FranceConnect."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Pour en savoir, plus consultez",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/guides/api-franceconnectees",
                        children: "le guide des API FranceConnect\xe9e."
                    })
                ]
            })
        ]
    });
};
const ApiDetails = ({ uptime , monitoring , monitoring_link , rate_limiting , rate_limiting_resume , rate_limiting_link , stats_detail , stats_detail_resume , stats_detail_link , is_france_connected =null ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(subSection, {
        id: "api-details-lateral-section",
        title: "L\u2019API en d\xe9tail",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MonitoringDetail, {
                uptime: uptime,
                monitoring: monitoring,
                monitoring_link: monitoring_link
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RateLimitingDetail, {
                rate_limiting: rate_limiting,
                rate_limiting_resume: rate_limiting_resume,
                rate_limiting_link: rate_limiting_link
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StatsDetail, {
                stats_detail: stats_detail,
                stats_detail_resume: stats_detail_resume,
                stats_detail_link: stats_detail_link
            }),
            (is_france_connected === 1 || is_france_connected === 2) && /*#__PURE__*/ jsx_runtime_.jsx(IsFranceConnectedDetail, {
                is_france_connected: is_france_connected
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "7dbf3be3319faa79",
                dynamic: [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue
                ],
                children: `#api-details-lateral-section>.badge{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:4px 0;width:100%}#api-details-lateral-section>.badge>div:first-of-type{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}#api-details-lateral-section>.badge>div:last-of-type{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}#api-details-lateral-section>.details{-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background-color:${constants/* default.colors.lightBlue */.Z.colors.lightBlue};padding:5px 10px;font-size:.9rem;margin-bottom:10px}`
            })
        ]
    });
};
/* harmony default export */ const apiDetails = (ApiDetails);

// EXTERNAL MODULE: ./components/index.js + 9 modules
var components = __webpack_require__(4034);
// EXTERNAL MODULE: ./components/feedback/index.tsx
var feedback = __webpack_require__(9597);
;// CONCATENATED MODULE: ./pages/les-api/[slug].tsx











const API = ({ api , guides , datagouvDatasets  })=>{
    const { slug , title , tagline , logo , owner , owner_acronym , owner_slug , uptime , contact_link , account_link , doc_tech_link , doc_tech_external , monitoring_link , monitoring_description , rate_limiting_description , rate_limiting_resume , rate_limiting_link , stats_detail_description , stats_detail_resume , stats_detail_link , body , is_open , partners , content_intro , is_france_connected , hide_pre_footer ,  } = api;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts/* default */.Z, {
        headerKey: components/* HEADER_PAGE.APIS */.NB.APIS,
        title: title,
        description: `${title} est une des APIs du service public. ${tagline}`,
        canonical: `https://api.gouv.fr/les-api/${slug}`,
        usePreFooter: !hide_pre_footer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(pageHeader, {
                title: title,
                logo: logo || constants/* default.logo */.Z.logo,
                tagline: tagline,
                owner: owner,
                owner_acronym: owner_acronym,
                owner_slug: owner_slug
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "description",
                className: styled_jsx_default().dynamic([
                    [
                        "5c39d1ce231205b3",
                        [
                            constants/* default.colors.lightBlue */.Z.colors.lightBlue
                        ]
                    ]
                ]) + " " + "fr-container",
                /*#__PURE__*/ children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: styled_jsx_default().dynamic([
                        [
                            "5c39d1ce231205b3",
                            [
                                constants/* default.colors.lightBlue */.Z.colors.lightBlue
                            ]
                        ]
                    ]) + " " + "right-column-grid",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: styled_jsx_default().dynamic([
                                [
                                    "5c39d1ce231205b3",
                                    [
                                        constants/* default.colors.lightBlue */.Z.colors.lightBlue
                                    ]
                                ]
                            ]) + " " + "left-column text-style",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(apiDescription, {
                                    guides: guides,
                                    body: body,
                                    content_intro: content_intro
                                }),
                                datagouvDatasets.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(apiOpenDataSources, {
                                    datasetsList: datagouvDatasets
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(feedback/* default */.Z, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: styled_jsx_default().dynamic([
                                [
                                    "5c39d1ce231205b3",
                                    [
                                        constants/* default.colors.lightBlue */.Z.colors.lightBlue
                                    ]
                                ]
                            ]) + " " + "right-column info-column",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(access, {
                                    is_open: is_open,
                                    slug: slug,
                                    doc_swagger_link: doc_tech_link,
                                    doc_external_link: doc_tech_external,
                                    account_link: account_link
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(supportAndTeam, {
                                    logo: logo,
                                    owner: owner,
                                    owner_acronym: owner_acronym,
                                    owner_slug: owner_slug,
                                    link: contact_link
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(technical_documentation, {
                                    swagger_link: doc_tech_link,
                                    external_link: doc_tech_external,
                                    slug: slug
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(apiDetails, {
                                    monitoring: monitoring_description,
                                    monitoring_link: monitoring_link,
                                    rate_limiting: rate_limiting_description,
                                    rate_limiting_resume: rate_limiting_resume,
                                    rate_limiting_link: rate_limiting_link,
                                    stats_detail: stats_detail_description,
                                    stats_detail_resume: stats_detail_resume,
                                    stats_detail_link: stats_detail_link,
                                    uptime: uptime,
                                    is_france_connected: is_france_connected
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(api_partners, {
                                    partners: partners
                                })
                            ]
                        })
                    ]
                })
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "5c39d1ce231205b3",
                dynamic: [
                    constants/* default.colors.lightBlue */.Z.colors.lightBlue
                ],
                children: `#description.__jsx-style-dynamic-selector{margin-bottom:70px}.right-column-grid.__jsx-style-dynamic-selector{display:grid;grid-template-columns:65%31%;grid-gap:40px}.info-column.__jsx-style-dynamic-selector{border-left:2px solid ${constants/* default.colors.lightBlue */.Z.colors.lightBlue};padding:0 0 0 40px}@media only screen and (min-width:1px)and (max-width:900px){.right-column-grid.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.info-column.__jsx-style-dynamic-selector{border:none;padding:0}}`
            })
        ]
    });
};
const getStaticPaths = async ()=>{
    // Return a list of possible value for id
    const apis = await (0,model/* getAllAPIs */.Pc)();
    return {
        paths: apis.map((api)=>{
            return {
                params: {
                    slug: api.slug
                }
            };
        }),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    //@ts-ignore
    const slug1 = params.slug;
    //@ts-ignore
    const api = await (0,model/* getAPI */.Kf)(slug1);
    const datagouvDatasets = await fetchDatagouvDatasets(api.datagouv_uuid || []);
    const allServices = await (0,model/* getAllServices */.UV)();
    const services = allServices.filter((service)=>{
        return service.api.indexOf(api.title) > -1;
    });
    const allGuides = await (0,model/* getAllGuides */.dn)();
    const guides = allGuides.filter((guide)=>{
        return guide.api && guide.api.indexOf(api.title) > -1;
    }).map((guide)=>{
        const { title , slug , image =null  } = guide;
        return {
            title,
            slug,
            image
        };
    });
    return {
        props: {
            api,
            services,
            guides,
            datagouvDatasets
        }
    };
};
/* harmony default export */ const _slug_ = (API);


/***/ }),

/***/ 9636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cardio = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("polyline", {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
    })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cardio);


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
var __webpack_exports__ = __webpack_require__.X(0, [505,664,209,408,36,738,615,532,813,683], () => (__webpack_exec__(8780)));
module.exports = __webpack_exports__;

})();