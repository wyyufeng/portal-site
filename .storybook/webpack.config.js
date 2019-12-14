module.exports = ({ config }) => {
    // const jsRule = config.module.rules.find(/* find existing js rule */);
    // jsRule.exclude = /node_modules/;
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
        exclude: /node_modules/,
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
