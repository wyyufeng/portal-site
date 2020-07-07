import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { DocsPage } from 'storybook-addon-deps/blocks';
addParameters({
  options: {
    showRoots: true,
    storySort: (a, b) => {
      return a[1].kind.includes('Portal-Site|Start') ? -1 : 1;
    }
  },
  docs: { page: DocsPage },
  dependencies: {
    //display only dependencies/dependents that have a story in storybook
    //by default this is false
    withStoriesOnly: true,

    //completely hide a dependency/dependents block if it has no elements
    //by default this is false
    hideEmpty: true
  }
});
