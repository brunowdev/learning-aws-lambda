'use strict';

module.exports.handler = (event, context, callback) => {

	const response = {
		statusCode: 202,
		body: JSON.stringify({
			  message: 'Updated.',
			  input: event,
			}),
	};

	callback(null, response);
 
};
