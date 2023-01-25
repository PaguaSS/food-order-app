import { Fragment } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header/>
      <Meals/>
    </Fragment>
  );
}

export default App;