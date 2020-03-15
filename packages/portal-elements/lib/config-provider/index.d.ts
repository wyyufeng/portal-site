import React from 'react';
export interface ConfigConsumerProps {
    assetsBase?: string;
    pictureFallback?: string;
}
export declare const ConfigContext: React.Context<ConfigConsumerProps>;
export declare const ConfigConsumer: React.ExoticComponent<React.ConsumerProps<ConfigConsumerProps>>;
export declare const ConfigProvider: React.ProviderExoticComponent<React.ProviderProps<ConfigConsumerProps>>;
