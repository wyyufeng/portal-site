import React, { FunctionComponent } from 'react';
import { useRoutesMap, NavLink } from 'portal-core';
export interface INavProps {
    exclude?: Array<string>
}

const Nav: FunctionComponent<INavProps> = ({ exclude = [] }) => {
    const routes = useRoutesMap();
    return <nav className="mainmenu">
        <ul>
            {
                routes.children.filter(item => !exclude.includes(item.route)).map(route => {
                    return <li key={route.name}>
                        <NavLink to={route.path}>
                            {route.name}
                        </NavLink>
                        <nav className="secondmenu">
                            <ul>
                                {
                                    route.children.filter(item => !exclude.includes(item.route)).map(child => {
                                        return <li key={child.name}>
                                            <NavLink to={child.path}>{child.name}</NavLink>
                                        </li>
                                    })
                                }
                            </ul>
                        </nav>

                    </li>
                })
            }
        </ul>
    </nav>
}

export default Nav