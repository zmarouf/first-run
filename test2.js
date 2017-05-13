/* eslint unicorn/no-process-exit: "off" */

'use strict';
const firstRun = require('./');

process.exit(firstRun('@zmarouf/first-run') ? 1 : 0);
