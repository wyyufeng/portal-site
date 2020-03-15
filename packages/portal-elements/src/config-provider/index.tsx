import React from 'react';

export interface ConfigConsumerProps {
    assetsBase?: string;
    pictureFallback?: string;
}
export const ConfigContext = React.createContext<ConfigConsumerProps>({
    assetsBase: '',
    pictureFallback: ''
});

export const ConfigConsumer = ConfigContext.Consumer;

export const ConfigProvider = ConfigContext.Provider;
