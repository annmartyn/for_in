'use strict';

export default function orderByProps(obj, arr) {
    let newObj = {};
    let oldObj = {};
    arr.forEach((param) => Object.keys(obj).forEach((orig_param) => {
        if (param === orig_param) {
            newObj[param] = obj[param];
        };
    }));

    for (let key in obj) {
        for (let k in newObj) {
            if (k != key) {
                oldObj[key] = obj[key];
            }
        }
    }

    Object.keys(oldObj).sort().forEach((key) => { newObj[key] = obj[key]; });
    return newObj;
};