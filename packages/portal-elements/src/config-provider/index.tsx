import React from 'react';

export interface ConfigConsumerProps {
    assetBasePath?: string;
    pictureFallback?: string;
}
export const ConfigContext = React.createContext<ConfigConsumerProps>({
    assetBasePath: '',
    pictureFallback: ''
});

export const ConfigConsumer = ConfigContext.Consumer;

export const ConfigProvider = ConfigContext.Provider;
