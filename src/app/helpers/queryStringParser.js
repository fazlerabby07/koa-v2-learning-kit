const parseUrl = function( that, valueOf ) {
  try {
    return that.request.query[valueOf].split(',');
  } catch (exp) {
    return [];
  }
};

export default{
  parseUrl
};
