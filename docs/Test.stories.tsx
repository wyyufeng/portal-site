import React from 'react';
import {
    Title,
    Subtitle,
    Description,
    Primary,
    Props,
    Stories
} from '@storybook/addon-docs/blocks';
import App from './App';

export default {
    title: 'Addons/Docs/stories docs blocks',
    component: App,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Subtitle />
                    <Description />
                    <Primary />
                    <Props />
                    <Stories />
                </>
            )
        }
    }
};
export const Default = () => <App />;
