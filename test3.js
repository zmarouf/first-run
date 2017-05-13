/* eslint unicorn/no-process-exit: "off" */

'use strict';
const Configstore = require('configstore');
const firstRun = require('./');

(new Configstore('@zmarouf/first-run')).clear();
const shouldBeTrue = firstRun('@zmarouf/first-run');
firstRun.clear('@zmarouf/first-run');
const shouldBeTrueAgain = firstRun('@zmarouf/first-run');
process.exit(shouldBeTrue && shouldBeTrueAgain ? 0 : 1);
