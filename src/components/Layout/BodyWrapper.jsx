import { Fragment, useContext } from "react";
import GlobalLoaderContext from "../Providers/global-loader-context";
import Header from '../Layout/Header/Header';
import Meals from '../Meals/Meals';
import GlobalLoader from '../Layout/GlobalLoader/GlobalLoader';

const BodyWrapper = () => {
    const globalLoaderCtx = useContext(GlobalLoaderContext);

    return (
        <Fragment>
            <Header/>
            <Meals/>
          {globalLoaderCtx.isVisible && <GlobalLoader/>}
        </Fragment>
    );
};
export default BodyWrapper;