import React from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { FunctionComponent } from 'react';

export interface PortalLinkProps extends LinkProps {
    href?: string;
}

const PortalLink: FunctionComponent<PortalLinkProps> = ({ href, children, to, ...rest }) => {
    if (typeof href === 'string') {
        return (
            <a rel="noopener noreferrer" href={href} {...rest}>
                {children}
            </a>
        );
    }
    return (
        <Link to={to} {...rest}>
            {children}
        </Link>
    );
};
export default PortalLink;
