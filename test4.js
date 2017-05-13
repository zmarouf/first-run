/* eslint unicorn/no-process-exit: "off" */

'use strict';
const Configstore = require('configstore');
const firstRun = require('./');

(new Configstore('@zmarouf/first-run', null, {globalConfigPath: true})).clear();
process.exit(firstRun('@zmarouf/first-run', {globalConfigPath: true}) ? 0 : 1);
