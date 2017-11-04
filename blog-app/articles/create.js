'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports.handler = (event, context, callback) => {
	const data = JSON.parse(event.body);
	if (!data.text || typeof data.text !== 'string') {
		console.error('Validation failed');
		callback(new Error('Body did not contain a text property.'));
		return;
	}
	
	let params = {
		TableName: 'BlogTable',
		Item: {
			article_id: uuid.v1(),
			text: data.text
		}
	};
	
	let putCbk = (error, result) => {

       if (error) {
	      console.log(error);
		  callback(new Error('Could not save record.'));
		  return;
	   }	
	   
	   console.log(result);

		const response = {
			statusCode: 201,
			body: JSON.stringify(result.Item)
		};

		callback(null, response);	   
	
	};
	
	dynamo.put(params, putCbk);
	
 
};
