# async-promise-loop

A Node.js Promise-based asynchronous loop.

## Introduction

Lots of times I found myself doing DataBase request for every element of an array, maybe searching info for some IDs, or getting more data for many objects.

So, i created this. It allows to apply a Promise to every element of an array no matter if it is asynchronous or not.

## Usage

First, install the package using npm:

    npm install async-promise-loop --save

Then, require the package and use it like so:

>If you don't understand arrow functions, go to the next example
    
    const asyncLoop = require('./async-promise-loop/index');

    //Asynchronous promise to apply to each element of the array
    const asyncPromise = (elem) => new Promise((resolve) => {
        setTimeout(() => {
            console.log(elem, ": I am resolving");
            return resolve();
        }, 1000);
    });

    //Loop using the "asyncPromise"
    asyncLoop([1, 2, 3], asyncPromise)
        .then((array) => {
            console.log("I finished looping through this:", array);
        });

>This is the next example

    const asyncLoop = require('./async-promise-loop/index');

    //Asynchronous promise to apply to each element of the array
    function asyncPromise(elem) {
        return new Promise(function (resolve) {
            setTimeout(function() {
                console.log(elem, ": I am resolving");
                return resolve();
            }, 1000);
        });
    }

    //Loop using the "asyncPromise"
    asyncLoop([1, 2, 3], asyncPromise)
        .then(function (array) {
            console.log("I finished looping through this:", array);
        });


## License

ISC