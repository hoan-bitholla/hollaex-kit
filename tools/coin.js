'use strict';

const { SERVER_PATH } = require('../constants');
const { getNodeLib } = require(`${SERVER_PATH}/init`);
const {
	subscribedToCoin,
	getKitCoin,
	getKitCoins,
	getKitCoinsConfig
} = require('./common');

const getNetworkCoins = (
	opts = {
		search: null,
		active: null,
		verified: null,
		limit: null,
		page: null,
		orderBy: null,
		order: null,
		startDate: null,
		endDate: null,
		additionalHeaders: null
	}
) => {
	return getNodeLib().getCoins(opts);
};

const createCoin = async (
	symbol,
	fullname,
	opts = {
		code: null,
		withdrawalFee: null,
		min: null,
		max: null,
		incrementUnit: null,
		logo: null,
		meta: null,
		estimatedPrice: null,
		type: null,
		network: null,
		standard: null,
		allowDeposit: null,
		allowWithdrawal: null,
		additionalHeaders: null
	}
) => {
	const formattedSymbol = symbol.trim().toLowerCase();

	return getNodeLib().createCoin(formattedSymbol, fullname, opts);
};

const updateCoin = async (
	symbol,
	fullname,
	opts = {
		code: null,
		withdrawalFee: null,
		min: null,
		max: null,
		incrementUnit: null,
		logo: null,
		meta: null,
		estimatedPrice: null,
		type: null,
		network: null,
		standard: null,
		allowDeposit: null,
		allowWithdrawal: null,
		additionalHeaders: null
	}
) => {
	const formattedSymbol = symbol.trim().toLowerCase();

	return getNodeLib().updateCoin(formattedSymbol, fullname, opts);
};

module.exports = {
	subscribedToCoin,
	getKitCoin,
	getKitCoins,
	getKitCoinsConfig,
	createCoin,
	updateCoin,
	getNetworkCoins
};
