import { useState } from 'react';
import GlobalLoaderContext from './global-loader-context';

const GlobalLoaderProvider = props => {
    const [visible, setVisible] = useState(props.visible ?? false);
    const onHide = () => setVisible(false);
    const onShow = () => setVisible(true);

    return (
        <GlobalLoaderContext.Provider 
            value={{
                isVisible: visible, 
                hide: onHide,
                show: onShow
            }}
            >
            {props.children}
        </GlobalLoaderContext.Provider>
    );
}; 

export default GlobalLoaderProvider;