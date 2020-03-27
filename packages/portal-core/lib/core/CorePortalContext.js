import React from 'react';
import DataProviderContext from '../dataProvider/DataProviderContext';
import { Provider } from 'react-redux';
import { coreStore, createModels } from '../store';
var CorePortalContext = function (_a) {
    var dataProvider = _a.dataProvider, children = _a.children, _b = _a.models, models = _b === void 0 ? [] : _b;
    coreStore.useModel.apply(coreStore, createModels(models, dataProvider));
    coreStore.run();
    return (React.createElement(Provider, { store: coreStore.store },
        React.createElement(DataProviderContext.Provider, { value: dataProvider }, children)));
};
export default CorePortalContext;
