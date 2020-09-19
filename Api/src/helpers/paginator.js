const applyFilters = require('./apply-filters');

const paginate = async ({
  model, page, pageSize, filters = {}, order = {}, run = (() => {}),
}) => {
  const current = +page;
  const query = model.query();
  applyFilters(filters, query);

  if (order.field) {
    query.orderBy(order.field, order.order);
  }

  const pager = await run(query).page(current - 1, pageSize);
  pager.pageSize = pageSize;
  pager.current = current;
  pager.lastPage = Math.ceil(pager.total / pageSize);

  return pager;
};

module.exports = paginate;
