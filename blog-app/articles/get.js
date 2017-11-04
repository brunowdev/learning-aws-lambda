'use strict';

module.exports.handler = (event, context, callback) => {
	
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			  message: 'Get article.',
			  input: event,
			}),
	};

	callback(null, response);
 
};
