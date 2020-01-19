// import {
//   CorePortalContext,
//   useQueryList,
//   routesMap,
//   coreStore,
//   useRoutesMap
// } from "../../packages/portal-core/lib";
// import cms, { createHttpClient } from "../../packages/portal-data-cms/lib";
// import React, { useEffect } from "react";
// import { Header } from "../../packages/portal-elements/lib";
// import { createBrowserHistory } from "history";
// export default {
//   title: "portal"
// };
// function Test() {
//   const res = useQueryList("snews", 3, 10);
//   console.log(useRoutesMap());

//   useEffect(() => {
//     coreStore.store.dispatch(coreStore.actions("routesMap").getRoutes("cn"));
//   }, []);
//   // console.log(res);
//   // console.log(useQueryOneById("50044b68b6d14f7ba47a9cf4baf0354e"));
//   return <></>;
// }
// console.log(routesMap);
// export const test = () => (
//   <CorePortalContext
//     history={createBrowserHistory()}
//     models={[routesMap]}
//     dataProvider={cms(http)}
//   >
//     <Test></Test>
//     <Header></Header>
//   </CorePortalContext>
// );
// const http = createHttpClient(
//   "http://47.112.101.19:9990/",
//   "9dda913f813c4138a8234435eebb8505",
//   "76DE74CA877C1B564A0C937D69DA672E"
// );
// console.log();
