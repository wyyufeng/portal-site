import {
  CorePortalContext,
  Switch,
  PortalRoute as Route,
  PortalLink as Link
} from "../../packages/portal-core/lib";
import cms, { createHttpClient } from "../../packages/portal-data-cms";
import React from "react";
export default {
  title: "portal"
};

export const test = () => (
  <CorePortalContext dataProvider={cms(http)}>
    <Route exclude={["/"]} path="*">
      <h1>hahaha</h1>
    </Route>
    <Switch>
      <Route path="/">
        <h1>
          <Link to={"/"} href="http://www.baidu.com">
            baidu
          </Link>
        </h1>
      </Route>
    </Switch>
  </CorePortalContext>
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
