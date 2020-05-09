import React from 'react';

export interface ConfigConsumerProps {
    assetsBasePath: string;
    pictureFallback?: string;
}
export const ConfigContext = React.createContext<ConfigConsumerProps>({
    assetsBasePath: '',
    pictureFallback: ''
});

export const ConfigConsumer = ConfigContext.Consumer;

export const ConfigProvider = ConfigContext.Provider;
