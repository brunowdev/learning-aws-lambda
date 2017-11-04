'use strict';

module.exports.hello = (event, context, callback) => {
	
		let remainingTime = context.getRemainingTimeInMillis();
		let functionName = context.functionName;
		let AWSrequestID = context.awsRequestId;
 
		const response = {
			statusCode: 200,
			ev:event,
			rt: remainingTime,
			fn: functionName,
			aid: AWSrequestID
		};

  callback(null, response);

};
