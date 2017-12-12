"use strict";

var assert = require('assert');
let client = require('../public/js/client.js');

describe('Testing Express and Jsx', function() {
    describe('simple test', function() {
        it('should return 2', function() {
            let sum = 1 + 1;

            assert.equal(sum, 2);
        });
    });
});


//
// describe('testing Client file', function() {
//     it('testing outputlog format', function() {
//         let now = new Date();
//         let timestampTest = now.toLocaleTimeString();
//         let message = "Hallo";
//         let output = `${timestampTest} ${message}<br>`;
//
//         assert.equal(client.outputLog("Hallo"), output);
//     });
// });
