/* eslint unicorn/no-process-exit: "off" */

'use strict';
const Configstore = require('configstore');
const firstRun = require('./');

(new Configstore('@zmarouf/first-run')).clear();
process.exit(firstRun('@zmarouf/first-run') ? 0 : 1);
