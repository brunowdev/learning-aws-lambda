'use strict';

module.exports.handler = (event, context, callback) => {
	
	const response = {
		statusCode: 202,
		body: JSON.stringify({
			  message: 'Deleted.',
			  input: event,
			}),
	};

	callback(null, response);
 
};
