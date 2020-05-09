import { FunctionComponent } from 'react';
export interface Props {
    /**
     * 排除某些路由，这些路由将不会出现在导航中
     */
    exclude?: Array<string>;
}
export declare const Nav: FunctionComponent<Props>;
export default Nav;
