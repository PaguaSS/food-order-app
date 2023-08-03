import { Fragment } from "react";
import CartSummaryProvider from "./components/Providers/cart-summary-provider";
import GlobalLoaderProvider from "./components/Providers/global-loader-provider";
import BodyWrapper from './components/Layout/BodyWrapper';

const App = () => {
  return (
    <Fragment>
      <CartSummaryProvider>
        <GlobalLoaderProvider>
          <BodyWrapper/>
        </GlobalLoaderProvider>
      </CartSummaryProvider>
    </Fragment>
  );
}

export default App;