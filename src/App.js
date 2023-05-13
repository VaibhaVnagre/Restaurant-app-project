import React,{Fragment} from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
function App() {
  return (
    <Fragment>
      <Header/>
      <main>
     <Meal/>
      </main>
    </Fragment>
  );
}

export default App;
