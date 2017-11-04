'use strict';

module.exports.createArticle = (event, context, callback) => {
  const response = {
    statusCode: 202,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
 
};
