import React, { FunctionComponent } from 'react';
export interface ICenterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    tag?: string;
    width?: number;
}
declare const Center: FunctionComponent<ICenterProps>;
export default Center;
