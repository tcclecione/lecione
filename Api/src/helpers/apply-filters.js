const { forEachObjIndexed } = require('ramda');

const applyFilters = (filters, query) => forEachObjIndexed((value, column) => {
  if (value) {
    query.where((query) => {
      query.whereRaw(`
        LOWER(${column}) like LOWER(?)
      `, [`%${value}%`]);
    });
  }
}, filters);

module.exports = applyFilters;
