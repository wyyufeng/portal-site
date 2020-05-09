import React, { FunctionComponent } from 'react';
export interface IHeaderProps {
    logo: string | React.ReactNode;
    title?: string;
    extra?: React.ReactNode;
}
declare const Header: FunctionComponent<IHeaderProps>;
export default Header;
