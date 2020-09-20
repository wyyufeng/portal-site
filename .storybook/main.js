module.exports = {
  stories: ['../docs/**/*.stories.(ts|tsx|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
<<<<<<< HEAD
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    };
=======
>>>>>>> origin/master
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true
          }
        },
        {
          loader: require.resolve('react-docgen-typescript-loader')
        }
      ]
    });
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader]
    });
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  }
};
