import React from 'react';
export var ConfigContext = React.createContext({
    assetBasePath: '',
    pictureFallback: ''
});
export var ConfigConsumer = ConfigContext.Consumer;
export var ConfigProvider = ConfigContext.Provider;
