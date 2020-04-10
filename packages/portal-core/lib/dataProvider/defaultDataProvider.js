export default {
    queryRoutes: function () { return Promise.resolve({ data: [] }); },
    queryList: function () { return Promise.resolve({ records: [] }); },
    queryOneById: function () { return Promise.resolve({ data: {} }); }
};
