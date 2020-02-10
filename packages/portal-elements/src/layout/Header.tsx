import React, { FunctionComponent } from "react";
import { useRoutesMap } from "portal-core";


const Header: FunctionComponent = () => {
  console.log(useRoutesMap());
  return <header></header>
}

export default Header