import { CorePortalContext } from "../../packages/portal-core/lib";
import cms, { createHttpClient } from "../../packages/portal-data-cms";
import React from "react";
export default {
  title: "portal"
};

export const test = () => (
  <CorePortalContext dataProvider={cms(http)}></CorePortalContext>
);
const http = createHttpClient(
  "http://47.112.101.19:9990/",
  "9dda913f813c4138a8234435eebb8505",
  "76DE74CA877C1B564A0C937D69DA672E"
);
cms(http)
  .queryRoutes("cn")
  .then(res => {
    console.log(res);
  });
