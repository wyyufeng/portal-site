import React from 'react';
export interface ConfigConsumerProps {
    assetsBase?: string;
    pictureFallback?: string;
}
export declare const ConfigContext: React.Context<ConfigConsumerProps>;
export declare const ConfigConsumer: React.Consumer<ConfigConsumerProps>;
export declare const ConfigProvider: React.Provider<ConfigConsumerProps>;
