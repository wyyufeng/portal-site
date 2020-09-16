import React from 'react';

export interface PortalUIContextProps {
  assetsPrefix: string;
  pictureFallback?: string;
}
export const PortalUIContext = React.createContext<PortalUIContextProps>({
  assetsPrefix: '',
  pictureFallback: ''
});

export const PortalUIConsumer = PortalUIContext.Consumer;

export const PortalUIProvider = PortalUIContext.Provider;
