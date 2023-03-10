"use strict";
exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 4657:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// used by node, therefore in plain js
const frontmatter = __webpack_require__(7958);
const formatApiWithOwner = (producers)=>(slug, data)=>{
        const document = frontmatter(data);
        //@ts-ignore
        const producer1 = producers.find((producer)=>producer.slug === document.attributes.producer
        );
        if (!producer1.name) {
            throw new Error(`No matching producer for : ${document.attributes.producer} - in API : ${slug}`);
        }
        const partners = (document.attributes.partners || []).map((partner)=>{
            const partnerAsProducer = producers.find((producer)=>producer.slug === partner
            );
            if (partnerAsProducer) {
                return {
                    name: partnerAsProducer.name,
                    slug: partnerAsProducer.slug
                };
            }
            return {
                name: partner
            };
        });
        return {
            //@ts-ignore
            ...document.attributes,
            partners,
            body: document.body,
            slug,
            description: document.attributes.tagline,
            path: `/les-api/${slug}`,
            owner: producer1.name,
            owner_acronym: producer1.acronym || null,
            owner_slug: producer1.slug,
            owner_type: producer1.type || null,
            logo: producer1.logo
        };
    }
;
module.exports = {
    formatApiWithOwner
};


/***/ }),

/***/ 1988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// used by node, therefore in plain js
const frontmatter = __webpack_require__(7958);
const formatGuide = (slug, data)=>{
    const document = frontmatter(data);
    return {
        //@ts-ignore
        ...document.attributes,
        body: document.body,
        path: `/guides/${slug}`,
        slug
    };
};
module.exports = {
    formatGuide
};


/***/ }),

/***/ 6600:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// used by node, therefore in plain js
const frontmatter = __webpack_require__(7958);
const formatProducteur = (slug, data)=>{
    const document = frontmatter(data);
    return {
        //@ts-ignore
        ...document.attributes,
        body: document.body,
        path: `/producteurs/${slug}`,
        slug
    };
};
module.exports = {
    formatProducteur
};


/***/ }),

/***/ 3227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


// used by node, therefore in plain js
const frontmatter = __webpack_require__(7958);
const formatServiceWithApis = (apis)=>(slug, data)=>{
        const document = frontmatter(data);
        //@ts-ignore
        const matchingAPis = document.attributes.api.map((serviceApiTitle)=>{
            const match = apis.find((api)=>api.title === serviceApiTitle
            );
            if (!match) {
                throw new Error(`No matching API for : ${serviceApiTitle} - in service : ${slug}`);
            }
            return {
                slug: match.slug,
                title: match.title,
                path: match.path,
                tagline: match.tagline,
                uptime: match.uptime || null,
                owner: match.owner,
                is_open: match.is_open,
                logo: match.logo || null,
                noindex: match.noindex || false,
                is_france_connected: match.is_france_connected || null
            };
        });
        return {
            //@ts-ignore
            ...document.attributes,
            body: document.body,
            slug,
            path: `/service/${slug}`,
            apiList: matchingAPis
        };
    }
;
module.exports = {
    formatServiceWithApis
};


/***/ }),

/***/ 7697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B_": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.B_),
/* harmony export */   "Kf": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.Kf),
/* harmony export */   "Pc": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.Pc),
/* harmony export */   "Pn": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.Pn),
/* harmony export */   "TE": () => (/* binding */ ELIGIBLE),
/* harmony export */   "UV": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.UV),
/* harmony export */   "V8": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.V8),
/* harmony export */   "VW": () => (/* binding */ RoadmapNodeType),
/* harmony export */   "dn": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.dn),
/* harmony export */   "ko": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.ko),
/* harmony export */   "q6": () => (/* reexport safe */ _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__.q6)
/* harmony export */ });
/* unused harmony export IIsApiOpen */
/* harmony import */ var _readOnDiskForWebpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5174);

var RoadmapNodeType;
(function(RoadmapNodeType) {
    RoadmapNodeType[RoadmapNodeType["YEAR"] = 0] = "YEAR";
    RoadmapNodeType[RoadmapNodeType["MONTH"] = 1] = "MONTH";
    RoadmapNodeType[RoadmapNodeType["ELLIPSIS"] = 2] = "ELLIPSIS";
    RoadmapNodeType["ADD_API"] = "ADD_API";
    RoadmapNodeType["DLNUF"] = "DLNUF";
    RoadmapNodeType["INFO"] = "INFO";
})(RoadmapNodeType || (RoadmapNodeType = {}));
var ELIGIBLE;
(function(ELIGIBLE) {
    ELIGIBLE[ELIGIBLE["YES"] = 1] = "YES";
    ELIGIBLE[ELIGIBLE["NO"] = -1] = "NO";
    ELIGIBLE[ELIGIBLE["MAYBE"] = 0] = "MAYBE";
})(ELIGIBLE || (ELIGIBLE = {}));
var IIsApiOpen;
(function(IIsApiOpen) {
    IIsApiOpen[IIsApiOpen["YES"] = 1] = "YES";
    IIsApiOpen[IIsApiOpen["NO"] = -1] = "NO";
    IIsApiOpen[IIsApiOpen["MAYBE"] = 0] = "MAYBE";
})(IIsApiOpen || (IIsApiOpen = {}));



/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kf": () => (/* binding */ getAPI),
  "Pc": () => (/* binding */ getAllAPIs),
  "dn": () => (/* binding */ getAllGuides),
  "B_": () => (/* binding */ getAllProducers),
  "UV": () => (/* binding */ getAllServices),
  "q6": () => (/* binding */ getGuide),
  "V8": () => (/* binding */ getProducer),
  "Pn": () => (/* binding */ getRoadmap),
  "ko": () => (/* binding */ getService)
});

// UNUSED EXPORTS: loadGuides, loadProducers

// EXTERNAL MODULE: ./model/formatters/api.js
var api = __webpack_require__(4657);
// EXTERNAL MODULE: ./model/formatters/service.js
var service = __webpack_require__(3227);
// EXTERNAL MODULE: ./model/index.ts
var model = __webpack_require__(7697);
;// CONCATENATED MODULE: ./model/formatters/roadmap.ts

const monthAsWords = [
    "Janvier",
    "F\xe9vrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Ao\xfbt",
    "Septembre",
    "Octobre",
    "Novembre",
    "D\xe9cembre", 
];
const monthNode = (month)=>{
    return {
        type: model/* RoadmapNodeType.MONTH */.VW.MONTH,
        what: month
    };
};
const yearNode = (year)=>{
    return {
        type: model/* RoadmapNodeType.YEAR */.VW.YEAR,
        what: year
    };
};
const ellispsisNode = ()=>{
    return {
        type: model/* RoadmapNodeType.ELLIPSIS */.VW.ELLIPSIS
    };
};
const formatRoadmap = (roadmap)=>{
    const flatRoadmap = [];
    Object.keys(roadmap).forEach((year)=>{
        let lastMonth = 0;
        flatRoadmap.push(yearNode(year));
        Object.keys(roadmap[year]).forEach((month)=>{
            const monthAsNumber = parseInt(month, 10);
            if (monthAsNumber - lastMonth > 1) {
                // add an ellipse between non consecutive month
                flatRoadmap.push(ellispsisNode());
            }
            lastMonth = monthAsNumber;
            flatRoadmap.push(monthNode(monthAsWords[monthAsNumber - 1]));
            roadmap[year][month].forEach((roadmapEvent)=>{
                flatRoadmap.push(roadmapEvent);
            });
        });
    });
    return flatRoadmap;
};

// EXTERNAL MODULE: ./model/formatters/guide.js
var guide = __webpack_require__(1988);
// EXTERNAL MODULE: ./model/formatters/producteur.js
var producteur = __webpack_require__(6600);
;// CONCATENATED MODULE: ./model/formatters/index.ts







// EXTERNAL MODULE: external "front-matter"
var external_front_matter_ = __webpack_require__(7958);
var external_front_matter_default = /*#__PURE__*/__webpack_require__.n(external_front_matter_);
;// CONCATENATED MODULE: ./model/readOnDiskForWebpack.ts


const store = {
    apis: {},
    services: {},
    producers: {},
    guides: {},
    roadmap: []
};
const parseMarkdown = (context, formatter)=>{
    const keys = context.keys();
    const values = keys.map(context);
    const data = keys.reduce((accumulator, key, index)=>{
        // Create slug from filename
        const isMarkdownExtension = key.indexOf(".md") > -1;
        if (!isMarkdownExtension) {
            throw new Error(`${key} file does not use a markdown extension (.md)`);
        }
        const slug = key.replace(/^.*[\\/]/, "").split(".").slice(0, -1).join(".");
        const value = values[index];
        // Parse yaml metadata & markdownbody in document
        accumulator[slug] = formatter(slug, value.default);
        return accumulator;
    }, {});
    return data;
};
const loadServices = async ()=>{
    if (Object.keys(store.services).length === 0) {
        //@ts-ignore
        const serviceFolderContext = __webpack_require__(9113);
        const apis = await loadApis();
        const formatter = (0,service.formatServiceWithApis)(Object.values(apis));
        store.services = parseMarkdown(serviceFolderContext, formatter);
    }
    return store.services;
};
const loadApis = async ()=>{
    if (Object.keys(store.apis).length === 0) {
        //@ts-ignore
        const apiFolderContext = __webpack_require__(8982);
        const producers = await getAllProducers();
        const formatter = (0,api.formatApiWithOwner)(Object.values(producers));
        store.apis = await parseMarkdown(apiFolderContext, formatter);
    }
    return store.apis;
};
const getAPI = async (id)=>{
    const data = await loadApis();
    return data[id];
};
const getService = async (id)=>{
    const data = await loadServices();
    return data[id];
};
const getAllAPIs = async ()=>{
    const data = await loadApis();
    return Object.values(data);
};
const getAllServices = async ()=>{
    const data = await loadServices();
    return Object.values(data);
};
const getAllGuides = async ()=>{
    const data = await loadGuides();
    return Object.values(data);
};
const getAllProducers = async ()=>{
    const data = await loadProducers();
    return Object.values(data);
};
const getRoadmap = async ()=>{
    if (store.roadmap.length === 0) {
        const roadmapFile = __webpack_require__(2900);
        const md = external_front_matter_default()(roadmapFile.default);
        store.roadmap = formatRoadmap(md.attributes);
    }
    return store.roadmap;
};
const getGuide = async (slug)=>{
    const guides = await loadGuides();
    return guides[slug];
};
const loadGuides = async ()=>{
    if (Object.keys(store.guides).length === 0) {
        //@ts-ignore
        const guideFolderContext = __webpack_require__(9024);
        store.guides = parseMarkdown(guideFolderContext, guide.formatGuide);
    }
    return store.guides;
};
const getProducer = async (slug)=>{
    const producers = await loadProducers();
    return producers[slug];
};
const loadProducers = async ()=>{
    if (Object.keys(store.producers).length === 0) {
        //@ts-ignore
        const folderContext = __webpack_require__(6895);
        store.producers = parseMarkdown(folderContext, producteur.formatProducteur);
    }
    return store.producers;
};


/***/ }),

/***/ 2900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("---\n2020:\n  1:\n    - type: ADD_API\n      what: Menj\n      path: /les-api/api_open_data_education_nationale\n  4:\n    - type: ADD_API\n      what: ScanR\n      path: /les-api/scanR\n    - type: DLNUF\n      what: |\n        De nouvelles donn??es sont mises ?? disposition des administrations dans le cadre du [?? Dites le nous une fois ??](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) :\n\n        - Revenu fiscal de r??f??rence, informations sur le conjoint, adresse\n        - Informations sur les enfants, l???adresse et le quotient familial\n\n        Retrouvez ces donn??es dans l???[API Imp??t particulier](/les-api/impot-particulier) et l???[API Particulier](/les-api/api-particulier)\n  5:\n    - type: ADD_API\n      what: Point d???Acc??s National aux donn??es de transport\n      path: /les-api/api_catalogue_transport\n  6:\n    - type: ADD_API\n      what: Jours f??ri??s\n      path: /les-api/jours-feries\n    - type: ADD_API\n      what: Ingres Noyau\n      path: /les-api/API_Ingres_Noyau\n    - type: ADD_API\n      what: Ingres Nomenclatures\n      path: /les-api/API_Ingres_Nomenclatures\n    - type: ADD_API\n      what: R??pertoire National des Associations\n      path: /les-api/api_rna\n  7:\n    - type: ADD_API\n      what: Carto - module AOC\n      path: /les-api/api_carto_aoc\n    - type: ADD_API\n      what: Carto - module Cadastre\n      path: /les-api/api_carto_cadastre\n    - type: ADD_API\n      what: Carto - module Codes Postaux\n      path: /les-api/api_carto_codes_postaux\n    - type: ADD_API\n      what: Carto - module G??oportail de l'Urbanisme (GPU)\n      path: /les-api/api_carto_gpu\n    - type: ADD_API\n      what: Carto - module RPG\n      path: /les-api/api_carto_rpg\n    - type: ADD_API\n      what: Donn??es Locales\n      path: /les-api/api_donnees_locales\n    - type: ADD_API\n      what: BDM\n      path: /les-api/api_bdm\n    - type: ADD_API\n      what: Registre National du Commerce et des Soci??t??s\n      path: /les-api/api-rncs\n    - type: ADD_API\n      what: Professionnels RGE\n      path: /les-api/api_professionnels_rge\n    - type: ADD_API\n      what: DPE Logements\n      path: /les-api/api_dpe_logements\n    - type: ADD_API\n      what: DPE B??timents Publics\n      path: /les-api/api_dpe_batiments_publics\n    - type: ADD_API\n      what: Base Carbone??\n      path: /les-api/api_base_carbone\n  8:\n    - type: ADD_API\n      what: Donn??es ouvertes - data.gouv.fr\n      path: /les-api/api_data_gouv\n    - type: ADD_API\n      what: CartoBio produite par l'Agence BIO\n      path: /les-api/api_cartobio_territoires\n  9:\n    - type: ADD_API\n      what: Recherche de Personnes Physiques (R2P)\n      path: /les-api/api_r2p\n    - type: ADD_API\n      what: Gallica Recherche de la BnF\n      path: /les-api/api_gallica_recherche\n    - type: ADD_API\n      what: Gallica Document de la BnF\n      path: /les-api/api_gallica_document\n    - type: ADD_API\n      what: Aide financieres de l???ADEME\n      path: /les-api/api_aides_financieres_ademe\n    - type: ADD_API\n      what: Aides financi??res ?? la r??novation ??nergetique (Simul???Aid???s)\n      path: /les-api/api_aides_renovation_energetique\n    - type: ADD_API\n      what: Impacts environnementaux - AGRIBALYSE??\n      path: /les-api/api_agribalyse\n  10:\n    - type: ADD_API\n      what: Sirene donn??es ouvertes\n      path: /les-api/api-sirene-donnees-ouvertes\n  11:\n    - type: ADD_API\n      what: Registre des B??n??ficiaires Effectifs (RBE) produite par l'INPI\n      path: /les-api/api-rbe\n    - type: ADD_API\n      what: Donn??es ouvertes de l???Urssaf\n      path: /les-api/api-open-data-urssaf\n    - type: ADD_API\n      what: R??pertoire National des M??tiers\n      path: /les-api/api_rnm\n    - type: ADD_API\n      what: D??claration auto-entrepreneur\n      path: /les-api/api-declaration-auto-entrepreneur\n    - type: ADD_API\n      what: D??claration PAJE\n      path: /les-api/api-declaration-pajemploi\n    - type: ADD_API\n      what: D??claration CESU\n      path: /les-api/api-declaration-cesu\n    - type: ADD_API\n      what: Donn??es Ouvertes Loire-Atlantique\n      path: /les-api/api-loire-atlantique-donnees-ouvertes\n  12:\n    - type: ADD_API\n      what: Gallica IIIF par la BnF\n      path: /les-api/api_gallica_IIIF\n    - type: ADD_API\n      what: Data.bnf.fr par la BnF\n      path: /les-api/api-data-bnf-fr\n    - type: ADD_API\n      what: Fichiers des Comptes Bancaires (FiCoBa) produite par le DGFiP\n      path: /les-api/api_comptes_bancaires_ficoba\n    - type: DLNUF\n      what: |\n        De nouvelles donn??es seront mises ?? disposition des administrations dans le cadre du [?? Dites le nous une fois ??](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/) :\n\n        - informations contenues dans les attestations relatives au statut demandeur d'emploi\n        - informations contenues dans les attestations relatives au statut ??tudiant\n    - type: DLNUF\n      what: |\n        Dans le cadre du [?? Dites le nous une fois ??](https://www.numerique.gouv.fr/services/guichet-dites-le-nous-une-fois/), l?????change des donn??es entre administrations permettra le pr??-remplissage de 6 d??marches administratives:\n\n        - Demande d???allocation logement en ligne\n        - Simulation de droits sociaux\n        - Demande de prime d???activit??\n        - Aide au logement ??tudiant\n        - Demande ou renouvellement de logement social\n        - Recensement citoyen obligatoire\n    - type: INFO\n      what: |\n        Publication d'une doctrine relative ?? la circulation des donn??es entre administrations\n2021:\n  1:\n    - type: ADD_API\n      what: La Bonne Alternance\n      path: /les-api/api-la-bonne-alternance\n  3:\n    - type: ADD_API\n      what: M??tadonn??es de l'INSEE\n      path: /les-api/api-metadonnees-insee\n    - type: ADD_API\n      what: Engagement\n      path: /les-api/api-engagement\n  4:\n    - type: ADD_API\n      what: Tracabilit?? des d??chets dangereux - Trackd??chets\n      path: /les-api/api-trackdechets\n    - type: ADD_API\n      what: Service National par le minist??re des Arm??es\n      path: /les-api/api-service-national\n    - type: ADD_API\n      what: Infos Financi??res par la DILA\n      path: /les-api/api-info-financiere\n    - type: ADD_API\n      what: Hub???Eau - Surveillance du littoral\n      path: /les-api/api_hubeau_surv_litt\n  5:\n    - type: ADD_API\n      what: Pro Sant?? Connect par l'ANS\n      path: /les-api/api-pro-sante-connect\n  6:\n    - type: ADD_API\n      what: Maladies Rares (ORPHAcode)\n      path: /les-api/api-orphacode\n    - type: ADD_API\n      what: annuaire de l'Education Nationale\n      path: /les-api/api-annuaire-education\n    - type: ADD_API\n      what: Annonces officielles et comptes annuels des associations\n      path: /les-api/api-annonces-comptes-annuels-associations-joafe\n    - type: ADD_API\n      what: Bulletin des Annonces L??gales Obligatoires\n      path: /les-api/api-bulletin-annonces-legales-obligatoires-balo\n    - type: ADD_API\n      what: Hub'Eau - Hydrobiologie\n      path: /les-api/api_hubeau_hydrobiologie\n    - type: ADD_API\n      what: AgentConnect par la DINUM\n    - type: ADD_API\n      what: Professionnels BIO\n      path: /les-api/api-professionnels-bio\n    - type: ADD_API\n      what: Bulletin officiel des annonces des march??s publics par la DILA\n      path: /les-api/api-bulletin-annonces-marches-publics-boamp\n    - type: ADD_API\n      what: Indemnit??s journali??res par la CNAM\n      path: /les-api/api_indemnites_journalieres_cnam\n  7:\n    - type: ADD_API\n      what: Identifiants et R??f??rentiels pour l'enseignement sup??rieur et la recherche (IdRef) par l'ABES\n      path: /les-api/api-idref\n    - type: ADD_API\n      what: Syst??me Universitaire de Documentation (Sudoc)\n      path: /les-api/api-sudoc\n  8:\n    - type: ADD_API\n      what: R??f??rentiel des agences par P??le emploi\n      path: /les-api/api-agences-pole-emploi\n    - type: ADD_API\n      what: Anot??a par P??le emploi\n      path: /les-api/api-anotea\n    - type: ADD_API\n      what: Eligibilit?? aux aides ?? l'emploi (Clara) par P??le emploi\n      path: /les-api/api-clara\n    - type: ADD_API\n      what: R??pertoire Op??rationnel des M??tiers et des Emplois par P??le emploi\n      path: /les-api/api-rome\n\n  9:\n    - type: ADD_API\n      what: SI-Amiante\n      path: /les-api/api-si-amiante\n    - type: ADD_API\n      what: Gels des avoirs par la Direction G??n??rale du Tr??sor\n      path: /les-api/api-gels-avoirs\n    - type: ADD_API\n      what: Aides Territoires par le Minist??re de la Transition Ecologique\n      path: /les-api/api-aides-territoires\n  10:\n    - type: ADD_API\n      what: API Judilibre par la Cour de cassation\n      path: /les-api/api-judilibre\n    - type: ADD_API\n      what: Carto - module Nature par l'IGN\n      path: /les-api/api-carto-nature\n  11:\n    - type: ADD_API\n      what: Judilibre par la Cour de cassation\n      path: /les-api/api-judilibre\n    - type: ADD_API\n      what: Tiers de prestation par l'URSSAF\n      path: /les-api/api-tiers-de-prestation\n    - type: ADD_API\n      what: WFS G??oportail par l'IGN\n      path: /les-api/api-carto-wfs-geoportail\n    - type: ADD_API\n      what: Terminologies de Sant?? par l'Agence du Num??rique en Sant??\n      path: /les-api/api-terminologies-sante\n    - type: ADD_API\n      what: Qualit?? de l'eau potable par Hub'eau\n      path: /les-api/api_hubeau_eaupotable\n  12:\n    - type: ADD_API\n      what: Structures de l'inclusion par le Minist??re du Travail, de l'Emploi et de l'Insertion\n      path: /les-api/api-structures-inclusion\n    - type: ADD_API\n      what: Conventions collectives par le Minist??re du Travail, de l'Emploi et de l'Insertion\n      path: /les-api/api-conventions-collectives\n2022:\n  1:\n    - type: ADD_API\n      what: FANTOIR par l'IGN\n      path: /les-api/api-fantoir\n    - type: INFO\n      what: |\n        L'API Statut ??tudiant est disponible dans l'API Particulier : elle permetnotamment de [simplifier la tarification solidaire dans les transports en commun](https://api.gouv.fr/guides/delivrance-titres-transport)\n    - type: ADD_API\n      what: Statut ??tudiant par le Minist??re de l'Enseignement Sup??rieur, de la Recherche et de l'Innovation\n      path: /les-api/api-statut-etudiant\n    - type: ADD_API\n      what: API Statut ??tudiant - ??criture par le Minist??re de l'Enseignement Sup??rieur, de la Recherche et de l'Innovation\n      path: /les-api/api-statut-etudiant-ecriture\n    - type: ADD_API\n      what: Radio France\n      path: /les-api/api-radio-france\n    - type: ADD_API\n      what: G??orisques par le Bureau de Recherches G??ologiques et Mini??res (BRGM)\n      path: /les-api/api-georisques\n    - type: ADD_API\n      what: CaptchEtat par l'AIFE\n      path: /les-api/api-captchetat\n  2:\n    - type: ADD_API\n      what: RappelConso, par le Minist??re de l'??conomie, des finances et de la relance\n      path: /les-api/api-rappel-conso\n    - type: ADD_API\n      what: Prix des contr??les techniques par le Minist??re de l'??conomie, des finances et de la relance\n      path: /les-api/api-prix-controles-techniques\n    - type: INFO\n      what: |\n        L'API Statut ??tudiant boursier est disponible dans l'API Particulier : elle permet notamment de [simplifier la tarification solidaire dans les transports en commun](https://api.gouv.fr/guides/delivrance-titres-transport)\n    - type: ADD_API\n      what: Statut ??tudiant boursier par le CNOUS\n      path: /les-api/api-statut-etudiant-boursier\n    - type: ADD_API\n      what: calendrier scolaire, par le Minist??re de l'Education Nationale, de la Jeunesse et des Sports\n      path: /les-api/api-calendrier-scolaire\n  3:\n    - type: ADD_API\n      what: Donn??es ouvertes de l'ONISEP\n      path: /les-api/api-onisep\n    - type: ADD_API\n      what: Pseudonymisation de documents par la DINUM\n      path: /les-api/api-pseudonymisation-documents\n  4:\n    - type: ADD_API\n      what: CVEC par le CNOUS\n      path: /les-api/api-cvec\n  5:\n    - type: ADD_API\n      what: D??claration pr??alable ?? l'embauche par l'Urssaf\n      path: /les-api/api-declaration-embauche\n    - type: ADD_API\n      what: AgentConnect par la DINUM\n      path: /les-api/agent-connect\n  6:\n    - type: ADD_API\n      what: Recherche d???entreprises\n      path: /les-api/api-recherche-entreprises\n  7:\n    - type: ADD_API\n      what: Mobilic, par le Minist??re de la Transition Ecologique\n      path: /les-api/api-mobilic\n  8:\n    - type: ADD_API\n      what: Indemnisation P??le Emploi, par P??le Emploi\n      path: /les-api/api-indemnisation-pole-emploi\n    - type: ADD_API\n      what: Statut demandeur d'emploi (FranceConnect), par P??le Emploi\n      path: /les-api/api-statut-demandeur-emploi\n    - type: ADD_API\n      what: Ecobalyse, par le Minist??re de la Transition Ecologique\n      path: /les-api/api-ecobalyse\n    - type: ADD_API\n      what: Mon entreprise, par l'URSSAF\n      path: /les-api/api-mon-entreprise\n  9:\n    - type: INFO\n      what: |\n        Mise ?? jour de [l'API G??o](/les-api/api-geo) : il est d??sormais possible (entre autres) de r??cup??rer les contours des EPCI et la localisation des mairies des communes.\n        [Voir le release complet](https://github.com/etalab/api-geo/releases/tag/v2.2.0)\n    - type: ADD_API\n      what: Ecoulement des cours d'eau, par Eau France\n      path: /les-api/api_hubeau_onde\n    - type: ADD_API\n      what: D??marches du Minist??re de la culture\n      path: /les-api/api-demarches-ministere-culture\n    - type: ADD_API\n      what: Base nationale des d??fibrillateurs, par le Minist??re de la Sant??\n      path: /les-api/api-defibrillateurs\n    - type: ADD_API\n      what: Data subventions, par la DINUM\n      path: /les-api/api-data-subventions\n  10:\n    - type: ADD_API\n      what: Mirabel (revues), par Sciences Po Lyon\n      path: /les-api/api-mirabel\n    - type: ADD_API\n      what: Ma S??curit??, par le Service des Technologies et des Syst??mes d'Information de la S??curit?? Int??rieure\n      path: /les-api/api-ma-securite\n    - type: ADD_API\n      what: Rendez-vous permis, par le Minist??re de l'Int??rieur\n      path: /les-api/api-permis-conduire\n    - type: ADD_API\n      what: Donn??es locales de consommation d'??nergie, par le SDES\n      path: /les-api/api-donnees-locales-energie\n    - type: ADD_API\n      what: Donn??es ouvertes d'Enedis, par Enedis\n      path: /les-api/api-donnees-ouvertes-enedis\n  11:\n    - type: ADD_API\n      what: Sesali, par l'Agence du Num??rique en Sant??\n      path: /les-api/api-sesali\n    - type: ADD_API\n      what: Acc??s Libre, par le Minist??re de la Transition Ecologique\n      path: /les-api/api-acces-libre\n    - type: ADD_API\n      what: Ev??nements par P??le emploi\n      path: /les-api/api-evenements-pole-emploi\n  12:\n    - type: ADD_API\n      what: Smart Verify, par IN Groupe (Imprimerie Nationale)\n      path: /les-api/api-smart-verify\n    - type: ADD_API\n      what: Services publics plus - structures\n      path: /les-api/api-services-publics-structures\n    - type: ADD_API\n      what: Services publics plus - exp??riences\n      path: /les-api/api-services-publics-experiences\n    - type: ADD_API\n      what: Services publics plus - r??sultats, par la DITP\n      path: /les-api/api-services-publics-resultats\n    - type: ADD_API\n      what: Donn??es fonci??res par le CEREMA\n    - type: ADD_API\n      what: Prestations sociales par la Direction de la S??curit?? Sociale\n    - type: ADD_API\n      what: Historique d'un v??hicule (HistoVec), par le Minist??re de l'Int??rieur\n2023:\n  1:\n    - type: ADD_API\n      what: SIPSI (d??claration des travailleurs ??trangers) par le Minist??re du Travail\n    - type: ADD_API\n      what: Quotient Familial, par la MSA\n    - type: ADD_API\n      what: Famille nombreuse, par le Minist??re des Transports\n  3:\n    - type: ADD_API\n      what: Scolarit??, par le Minist??re de l'Education Nationale\n\n---\n");

/***/ })

};
;