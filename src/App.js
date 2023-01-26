import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartSummaryProvider } from "./components/Providers/cart-summary-context";

const App = () => {
  return (
    <Fragment>
      <CartSummaryProvider>
        <Header/>
        <Meals/>
      </CartSummaryProvider>
    </Fragment>
  );
}

export default App;