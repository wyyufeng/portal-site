import { addParameters } from '@storybook/react';
addParameters({
    options: {
        storySort: (a, b) => {
            if (a[1].kind.includes('Site')) return -1;
            return 1;
        }
    }
});
