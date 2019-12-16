import React from 'react';
import {
    CorePortalContext,
    coreStore,
} from '../packages/portal-core/src';
import DataProvider,{createHttpClient} from '../packages/portal-data-cms/src'
export default {
    title: 'portal',
};
console.log(coreStore.store);

export const context = () => <CorePortalContext></CorePortalContext>;
const http = createHttpClient('http://www.tianyige.com.cn/api','9dda913f813c4138a8234435eebb8505','76DE74CA877C1B564A0C937D69DA672E')
const dp  = DataProvider(http)
dp.queryRoutes('cn').then(data=>{
    console.log(data)
})