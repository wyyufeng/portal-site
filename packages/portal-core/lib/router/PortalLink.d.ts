import { LinkProps } from 'react-router-dom';
import { FunctionComponent } from 'react';
export interface PortalLinkProps extends LinkProps {
    href?: string;
}
declare const PortalLink: FunctionComponent<PortalLinkProps>;
export default PortalLink;
