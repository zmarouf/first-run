'use strict';
const Configstore = require('configstore');

function getConf(name, opts) {
	opts = opts || {};
	delete opts.name;

	if (!name) {
		throw new Error('Please specify name in the options.');
	}
	return new Configstore(name, {firstRun: true}, opts);
}

function firstRun(name, opts) {
	const conf = getConf(name, opts);
	let firstRun;

	if (firstRun === undefined) {
		firstRun = conf.get('firstRun');
	}

	if (firstRun === true) {
		conf.set('firstRun', false);
	}

	return firstRun;
}

function clear(name, opts) {
	getConf(name, opts).set('firstRun', true);
}

module.exports = firstRun;
module.exports.clear = clear;
