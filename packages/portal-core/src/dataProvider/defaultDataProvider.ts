export default {
  queryRoutes: () => Promise.resolve({ data: [] }),
  queryList: () => Promise.resolve({ records: [] }),
  queryOneById: () => Promise.resolve({ data: {} })
};
