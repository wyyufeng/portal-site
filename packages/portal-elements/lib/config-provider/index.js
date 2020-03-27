import React from 'react';
export var ConfigContext = React.createContext({
    assetsBase: '',
    pictureFallback: ''
});
export var ConfigConsumer = ConfigContext.Consumer;
export var ConfigProvider = ConfigContext.Provider;
