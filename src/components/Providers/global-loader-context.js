import React from 'react';

const GlobalLoaderContext = React.createContext({
    isVisible: false,
    hide: () => {},
    show: () => {}
});

export default GlobalLoaderContext;