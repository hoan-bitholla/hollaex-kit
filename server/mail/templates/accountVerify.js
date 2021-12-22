'use strict';

const { Button } = require('./helpers/common');
const { GET_EMAIL } = require('../../constants');
const fetchMessage = (email, data, language, domain) => {
	const emailConfigurations = GET_EMAIL();
	if(emailConfigurations[language] && emailConfigurations[language]['ACCOUNTVERIFY']) {
		const stringDynamic = emailConfigurations[language]['ACCOUNTVERIFY'];
		return {
			html: htmlDynamic(email, data, language, domain, stringDynamic),
			text: textDynamic(email, data, language, domain, stringDynamic)
		};
	}
	return {
		html: html(email, data, language, domain),
		text: text(email, data, language, domain)
	};
};

const html = (email, data, language, domain) => {
	const link = `${domain}/trade`;
    const ACCOUNTVERIFY = require('../strings').getStringObject(language, 'ACCOUNTVERIFY');
	return `
        <div>
            <p>
                ${ACCOUNTVERIFY.GREETING(email)}
            </p>
            <p>
                ${ACCOUNTVERIFY.BODY[1]}
            </p>
            ${Button(link, ACCOUNTVERIFY.BODY[2])}
            <p>
                ${ACCOUNTVERIFY.CLOSING[1]}<br />
                ${ACCOUNTVERIFY.CLOSING[2]()}
            </p>
        </div>
    `;
};

const text = (email, data, language, domain) => {
	const link = `${domain}/trade`;
    const ACCOUNTVERIFY = require('../strings').getStringObject(language, 'ACCOUNTVERIFY');
	return `
        ${ACCOUNTVERIFY.GREETING(email)}
        ${ACCOUNTVERIFY.BODY[1]}
        ${ACCOUNTVERIFY.BODY[2]}(${link})
        ${ACCOUNTVERIFY.CLOSING[1]} ${ACCOUNTVERIFY.CLOSING[2]()}
    `;
};

const htmlDynamic = (email, data, language, domain, stringDynamic) => {
	const link = `${domain}/trade`;
	return `
        <div>
            <p>
                ${stringDynamic.GREETING.format(email)}
            </p>
            <p>
                ${stringDynamic.BODY[1]}
            </p>
            ${Button(link, stringDynamic.BODY[2])}
            <p>
                ${stringDynamic.CLOSING[1]}<br />
                ${stringDynamic.CLOSING[2]}
            </p>
        </div>
    `;
};

const textDynamic = (email, data, language, domain, stringDynamic) => {
	const link = `${domain}/trade`;
	return `
        ${stringDynamic.GREETING.format(email)}
        ${stringDynamic.BODY[1]}
        ${stringDynamic.BODY[2]}(${link})
        ${stringDynamic.CLOSING[1]} ${stringDynamic.CLOSING[2]}
    `;
};

module.exports = fetchMessage;
