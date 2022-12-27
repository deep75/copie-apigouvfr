"use strict";
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 2738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AW": () => (/* reexport */ uptime/* getUptimeState */.A),
  "mH": () => (/* binding */ monthDifference),
  "Fv": () => (/* reexport */ normalize),
  "v1": () => (/* reexport */ normalizeAndfindAll),
  "an": () => (/* reexport */ uptime/* roundUptime */.a),
  "Vj": () => (/* reexport */ uuid)
});

// UNUSED EXPORTS: findAll, getWindowHash, isElementVisible, replaceAll

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./utils/string.ts

/**
 * Replaces all occurrences of find in a string
 * @param {*} str
 * @param {*} find
 * @param {*} replace
 */ const replaceAll = (str, find, replace)=>{
    return str.replace(new RegExp(find, "g"), replace);
};
/**
 * Find all occurrences of needle in a string
 */ const findAll = (needle)=>{
    if (needle === "") {
        return ()=>[]
        ;
    }
    const regex = new RegExp(`${(0,external_lodash_.escapeRegExp)(needle)}`, "g");
    return (haystack)=>{
        let result;
        let indices = [];
        while(result = regex.exec(haystack || "")){
            indices.push([
                result.index,
                result.index + needle.length
            ]);
        }
        return indices;
    };
};
/**
 * Find all occurences of a normalized needle in a normalised string
 */ const normalizeAndfindAll = (needle)=>{
    const normalizedNeedle = normalize(needle || "").toLowerCase();
    const finder = findAll(normalizedNeedle);
    return (haystack)=>{
        const normalizedHaystack = normalize(haystack || "").toLowerCase();
        return finder(normalizedHaystack);
    };
};
/**
 * Normalize string
 * See: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
 *
 * -> normalize()ing to NFD Unicode normal form decomposes combined graphemes into the combination of simple ones. The è ends up expressed as e + ̀.
 * -> Using a regex character class to match the U+0300 → U+036F range to get rid of the diacritics
 */ const normalize = (str)=>{
    try {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } catch  {
        // IE 11 and older browser cannot support normalize.
        // A search with diacritics is still better than no search at all
        return str;
    }
};
const uuid = (size = 7)=>{
    return Math.random().toString(36).substring(size);
};

// EXTERNAL MODULE: ./utils/uptime.js
var uptime = __webpack_require__(5053);
;// CONCATENATED MODULE: ./utils/index.ts



const monthDifference = (d1, d2)=>{
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
};



/***/ }),

/***/ 5053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getUptimeState),
/* harmony export */   "a": () => (/* binding */ roundUptime)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(769);

const getUptimeState = (uptime)=>{
    const { red , orange , green  } = _constants__WEBPACK_IMPORTED_MODULE_0__/* ["default"].colors */ .Z.colors;
    let color = red; // Red
    if (uptime >= 98) {
        color = green; // Green
    } else if (uptime >= 90) {
        color = orange; // Orange
    }
    return color;
};
const roundUptime = (digits = 2)=>{
    return (uptime)=>{
        if (typeof uptime === Number) {
            return uptime.toFixed(digits);
        } else {
            // should fail if uptime is neither a string nor a number
            const multiplier = Math.pow(10, digits);
            const upTimeAsNum = parseInt(uptime * multiplier, 10) / multiplier;
            return upTimeAsNum.toFixed(digits);
        }
    };
};


/***/ })

};
;