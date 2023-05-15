import React,{Fragment,useState} from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import Cart from "./Component/Cart/Cart";
function App() {
  const [cartData, setcartData] = useState(false); 

  const showcartHandeler =()=>{
      setcartData(true)
  }

  const closeDataHandeler=()=>{
      setcartData(false)
  }
  
  return (
    <Fragment>   

      {cartData && <Cart onClose={closeDataHandeler}/>}

      <Header onShowcart={showcartHandeler}/>

      <main>
     <Meal/>
      </main>

    </Fragment>
  );
}

export default App;
