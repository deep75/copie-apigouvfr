"use strict";
exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 93:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VC": () => (/* binding */ API_ACCESS_TYPE),
  "cI": () => (/* binding */ computeSearchResults),
  "aZ": () => (/* binding */ filterAccess),
  "yu": () => (/* binding */ filterTheme),
  "$h": () => (/* binding */ textHighlighter)
});

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: ./utils/index.ts + 1 modules
var utils = __webpack_require__(2738);
;// CONCATENATED MODULE: ./components/searchApis/stopwords.ts
// from https://github.com/stopwords-iso/stopwords-fr/blob/master/raw/language-resource-stopwords.txt
const stopWords = [
    "a",
    "\xe0",
    "\xe2",
    "abord",
    "afin",
    "ah",
    "ai",
    "aie",
    "ainsi",
    "allaient",
    "allo",
    "all\xf4",
    "allons",
    "apr\xe8s",
    "assez",
    "attendu",
    "au",
    "aucun",
    "aucune",
    "aujourd",
    "aujourd\u2019hui",
    "auquel",
    "aura",
    "auront",
    "aussi",
    "autre",
    "autres",
    "aux",
    "auxquelles",
    "auxquels",
    "avaient",
    "avais",
    "avait",
    "avant",
    "avec",
    "avoir",
    "ayant",
    "b",
    "bah",
    "beaucoup",
    "bien",
    "bigre",
    "boum",
    "bravo",
    "brrr",
    "c",
    "\xe7a",
    "car",
    "ce",
    "ceci",
    "cela",
    "celle",
    "celle-ci",
    "celle-l\xe0",
    "celles",
    "celles-ci",
    "celles-l\xe0",
    "celui",
    "celui-ci",
    "celui-l\xe0",
    "cent",
    "cependant",
    "certain",
    "certaine",
    "certaines",
    "certains",
    "certes",
    "ces",
    "cet",
    "cette",
    "ceux",
    "ceux-ci",
    "ceux-l\xe0",
    "chacun",
    "chaque",
    "cher",
    "ch\xe8re",
    "ch\xe8res",
    "chers",
    "chez",
    "chiche",
    "chut",
    "ci",
    "cinq",
    "cinquantaine",
    "cinquante",
    "cinquanti\xe8me",
    "cinqui\xe8me",
    "clac",
    "clic",
    "combien",
    "comme",
    "comment",
    "compris",
    "concernant",
    "contre",
    "couic",
    "crac",
    "d",
    "da",
    "dans",
    "de",
    "debout",
    "dedans",
    "dehors",
    "del\xe0",
    "depuis",
    "derri\xe8re",
    "des",
    "d\xe8s",
    "d\xe9sormais",
    "desquelles",
    "desquels",
    "dessous",
    "dessus",
    "deux",
    "deuxi\xe8me",
    "deuxi\xe8mement",
    "devant",
    "devers",
    "devra",
    "diff\xe9rent",
    "diff\xe9rente",
    "diff\xe9rentes",
    "diff\xe9rents",
    "dire",
    "divers",
    "diverse",
    "diverses",
    "dix",
    "dix-huit",
    "dixi\xe8me",
    "dix-neuf",
    "dix-sept",
    "doit",
    "doivent",
    "donc",
    "dont",
    "douze",
    "douzi\xe8me",
    "dring",
    "du",
    "duquel",
    "durant",
    "e",
    "effet",
    "eh",
    "elle",
    "elle-m\xeame",
    "elles",
    "elles-m\xeames",
    "en",
    "encore",
    "entre",
    "envers",
    "environ",
    "es",
    "\xe8s",
    "est",
    "et",
    "etant",
    "\xe9taient",
    "\xe9tais",
    "\xe9tait",
    "\xe9tant",
    "etc",
    "\xe9t\xe9",
    "etre",
    "\xeatre",
    "eu",
    "euh",
    "eux",
    "eux-m\xeames",
    "except\xe9",
    "f",
    "fa\xe7on",
    "fais",
    "faisaient",
    "faisant",
    "fait",
    "feront",
    "fi",
    "flac",
    "floc",
    "font",
    "g",
    "gens",
    "h",
    "ha",
    "h\xe9",
    "hein",
    "h\xe9las",
    "hem",
    "hep",
    "hi",
    "ho",
    "hol\xe0",
    "hop",
    "hormis",
    "hors",
    "hou",
    "houp",
    "hue",
    "hui",
    "huit",
    "huiti\xe8me",
    "hum",
    "hurrah",
    "i",
    "il",
    "ils",
    "importe",
    "j",
    "je",
    "jusqu",
    "jusque",
    "k",
    "l",
    "la",
    "l\xe0",
    "laquelle",
    "las",
    "le",
    "lequel",
    "les",
    "l\xe8s",
    "lesquelles",
    "lesquels",
    "leur",
    "leurs",
    "longtemps",
    "lorsque",
    "lui",
    "lui-m\xeame",
    "m",
    "ma",
    "maint",
    "mais",
    "malgr\xe9",
    "me",
    "m\xeame",
    "m\xeames",
    "merci",
    "mes",
    "mien",
    "mienne",
    "miennes",
    "miens",
    "mille",
    "mince",
    "moi",
    "moi-m\xeame",
    "moins",
    "mon",
    "moyennant",
    "n",
    "na",
    "ne",
    "n\xe9anmoins",
    "neuf",
    "neuvi\xe8me",
    "ni",
    "nombreuses",
    "nombreux",
    "non",
    "nos",
    "notre",
    "n\xf4tre",
    "n\xf4tres",
    "nous",
    "nous-m\xeames",
    "nul",
    "o",
    "o|",
    "\xf4",
    "oh",
    "oh\xe9",
    "ol\xe9",
    "oll\xe9",
    "on",
    "ont",
    "onze",
    "onzi\xe8me",
    "ore",
    "ou",
    "o\xf9",
    "ouf",
    "ouias",
    "oust",
    "ouste",
    "outre",
    "p",
    "paf",
    "pan",
    "par",
    "parmi",
    "partant",
    "particulier",
    "particuli\xe8re",
    "particuli\xe8rement",
    "pas",
    "pass\xe9",
    "pendant",
    "personne",
    "peu",
    "peut",
    "peuvent",
    "peux",
    "pff",
    "pfft",
    "pfut",
    "pif",
    "plein",
    "plouf",
    "plus",
    "plusieurs",
    "plut\xf4t",
    "pouah",
    "pour",
    "pourquoi",
    "premier",
    "premi\xe8re",
    "premi\xe8rement",
    "pr\xe8s",
    "proche",
    "psitt",
    "puisque",
    "q",
    "qu",
    "quand",
    "quant",
    "quanta",
    "quant-\xe0-soi",
    "quarante",
    "quatorze",
    "quatre",
    "quatre-vingt",
    "quatri\xe8me",
    "quatri\xe8mement",
    "que",
    "quel",
    "quelconque",
    "quelle",
    "quelles",
    "quelque",
    "quelques",
    "quelqu\u2019un",
    "quels",
    "qui",
    "quiconque",
    "quinze",
    "quoi",
    "quoique",
    "r",
    "revoici",
    "revoil\xe0",
    "rien",
    "s",
    "sa",
    "sacrebleu",
    "sans",
    "sapristi",
    "sauf",
    "se",
    "seize",
    "selon",
    "sept",
    "septi\xe8me",
    "sera",
    "seront",
    "ses",
    "si",
    "sien",
    "sienne",
    "siennes",
    "siens",
    "sinon",
    "six",
    "sixi\xe8me",
    "soi",
    "soi-m\xeame",
    "soit",
    "soixante",
    "son",
    "sont",
    "sous",
    "stop",
    "suis",
    "suivant",
    "sur",
    "surtout",
    "t",
    "ta",
    "tac",
    "tant",
    "te",
    "t\xe9",
    "tel",
    "telle",
    "tellement",
    "telles",
    "tels",
    "tenant",
    "tes",
    "tic",
    "tien",
    "tienne",
    "tiennes",
    "tiens",
    "toc",
    "toi",
    "toi-m\xeame",
    "ton",
    "touchant",
    "toujours",
    "tous",
    "tout",
    "toute",
    "toutes",
    "treize",
    "trente",
    "tr\xe8s",
    "trois",
    "troisi\xe8me",
    "troisi\xe8mement",
    "trop",
    "tsoin",
    "tsouin",
    "tu",
    "u",
    "un",
    "une",
    "unes",
    "uns",
    "v",
    "va",
    "vais",
    "vas",
    "v\xe9",
    "vers",
    "via",
    "vif",
    "vifs",
    "vingt",
    "vivat",
    "vive",
    "vives",
    "vlan",
    "voici",
    "voil\xe0",
    "vont",
    "vos",
    "votre",
    "v\xf4tre",
    "v\xf4tres",
    "vous",
    "vous-m\xeames",
    "vu",
    "w",
    "x",
    "y",
    "z",
    "zut",
    // API specific
    "api",
    "apis",
    "donn\xe9es",
    "donn\xe9e",
    "base", 
];
/* harmony default export */ const stopwords = (stopWords);

;// CONCATENATED MODULE: ./components/searchApis/filtersLogic.ts



const filterTheme = (selectedTheme)=>{
    if (!selectedTheme) {
        return ()=>true
        ;
    }
    return (api)=>api.themes.includes(selectedTheme)
    ;
};
var API_ACCESS_TYPE;
(function(API_ACCESS_TYPE) {
    API_ACCESS_TYPE["ALL"] = "";
    API_ACCESS_TYPE["OPEN"] = "open";
    API_ACCESS_TYPE["NOT_OPEN"] = "notOpen";
    API_ACCESS_TYPE["FRANCE_CONNECT"] = "franceConnect";
})(API_ACCESS_TYPE || (API_ACCESS_TYPE = {}));
const filterAccess = (APIType)=>{
    if (APIType === API_ACCESS_TYPE.OPEN) {
        return (api)=>api.is_open !== -1
        ;
    } else if (APIType === API_ACCESS_TYPE.NOT_OPEN) {
        return (api)=>api.is_open === -1
        ;
    } else if (APIType === API_ACCESS_TYPE.FRANCE_CONNECT) {
        return (api)=>api.is_france_connected === 1 || api.is_france_connected === 2
        ;
    }
    return ()=>true
    ;
};
/**
 * Check if two consecutive matches overlap and if they do, merge them
 * @param {*} previousMatches
 * @param {*} currentMatch
 */ const mergeMatchesPosition = (previousMatches, currentMatch)=>{
    const len = previousMatches.length;
    if (len === 0) {
        return [
            currentMatch
        ];
    }
    const lastMatch = previousMatches[len - 1];
    if (lastMatch[1] >= currentMatch[0]) {
        return [
            ...previousMatches.slice(0, len - 1),
            [
                lastMatch[0],
                Math.max(lastMatch[1], currentMatch[1])
            ], 
        ];
    }
    return [
        ...previousMatches,
        currentMatch
    ];
};
/**
 * Search needles in haystack and returns a list of matches (duplets [start, end])
 * @param {*} searchTerms
 */ const computeSearchResults = (needles)=>{
    // exclude stopwords
    let relevantNeedles = needles.filter((needle)=>stopwords.indexOf(needle) === -1
    );
    if ((0,external_lodash_.isEmpty)(relevantNeedles)) {
        // if no relevant needles, lets look for the needles
        relevantNeedles = needles;
    }
    if ((0,external_lodash_.isEmpty)(relevantNeedles)) {
        // if no needles to find, then every api is a relevant result
        return (api)=>{
            return {
                ...api,
                score: 1
            };
        };
    }
    const finders = relevantNeedles.map(utils/* normalizeAndfindAll */.v1);
    return (api)=>{
        const matches1 = finders.reduce((matches, finder)=>{
            return {
                title: [
                    ...matches.title,
                    ...finder(api.title)
                ],
                tagline: [
                    ...matches.tagline,
                    ...finder(api.tagline)
                ],
                owner: [
                    ...matches.owner,
                    ...finder(api.owner)
                ],
                owner_acronym: [
                    ...matches.owner_acronym,
                    ...finder(api.owner_acronym || ""), 
                ],
                keywords: [
                    ...matches.keywords,
                    ...finder(api.keywords.join(", ") || ""), 
                ]
            };
        }, {
            title: [],
            tagline: [],
            owner: [],
            owner_acronym: [],
            keywords: []
        });
        // field can be boosted here
        const score = matches1.title.length * 0.4 + matches1.tagline.length * 0.1 + matches1.owner.length * 0.1 + matches1.keywords.length * 0.1 + matches1.owner_acronym.length * 0.1;
        // merge matches
        matches1.title = matches1.title.reduce(mergeMatchesPosition, []);
        matches1.tagline = matches1.tagline.reduce(mergeMatchesPosition, []);
        matches1.owner = matches1.owner.reduce(mergeMatchesPosition, []);
        return {
            ...api,
            score,
            matches: matches1
        };
    };
};
const textHighlighter = (matches, text = "")=>{
    if (!text) {
        return "";
    }
    if (!matches) {
        return text;
    }
    let previousIdx = 0;
    let newText = "";
    matches.forEach(([start, end])=>{
        newText += text.slice(previousIdx, start);
        newText += `<span style='background-color:yellow'>${text.slice(start, end)}</span>`;
        previousIdx = end;
    });
    newText += text.slice(previousIdx);
    return newText;
};


/***/ })

};
;