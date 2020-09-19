const { compose, split, last } = require('ramda');

const getExtension = compose(last, split('.'));

module.exports = getExtension;
