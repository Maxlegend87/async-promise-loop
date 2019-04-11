"use strict";

/**
 * Loops through an array applying a promise to every element, each loop will wait for the previous to resolve
 * @param {any[]} elements Array of elements to loop trough
 * @param {Promise} apply Promise that will be executed on each array element
 * @return Promise Resolves when the full loop has finished
 */

module.exports=function (elements, apply) {
    if (elements.length == 0) { return Promise.resolve(); }
    return new Promise((resolve) => {
        for (let i = 0, p = Promise.resolve(); i < elements.length; i++) {
            p = p.then(() => apply(elements[i]))
                .then(() => (i == elements.length - 1) ? resolve(elements) : null);
        }
    });
};