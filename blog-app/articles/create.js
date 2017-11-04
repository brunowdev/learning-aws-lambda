'use strict';

module.exports.handler = (event, context, callback) => {
	
	const data = JSON.parse(event.body);
	
	if (data.text && typeof data.text !== 'string') {
		console.error('Validation failed');
		callback(new Error('Body did not contain a text property.'));
		return;
	}
	
	// debug only
	console.log(data.text);
	
	const response = {
	statusCode: 202,
	body: JSON.stringify({
		  message: 'Created article.',
		  input: event,
		}),
	};

	callback(null, response);
 
};
