import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
// import '@storybook/addon-console';
addParameters({
    options: {
        theme: themes.dark,
        storySort: (a, b) => {
            if (a[1].kind.includes('Site')) return -1;
            return 1;
        }
    }
});
