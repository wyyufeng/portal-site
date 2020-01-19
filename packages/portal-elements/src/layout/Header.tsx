import React from "react";
import { useRoutesMap } from "portal-core";

export default function Header() {
  const routesMap = useRoutesMap();
  console.log(routesMap);
  return <div></div>;
}
