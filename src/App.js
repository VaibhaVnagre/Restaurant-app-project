import React,{Fragment} from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import Cart from "./Component/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
     <Meal/>
      </main>
    </Fragment>
  );
}

export default App;
