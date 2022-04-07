const handler = (requestUrl) => {
  const data = requestUrl.query;

  return `The weather is rainy in ${data.city}`;
};
module.exports.handler = handler;
