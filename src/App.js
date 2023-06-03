import React,{useState} from "react";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/Meal";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Store/Context-provider";
function App() {
  const [cartData, setcartData] = useState(false); 

  const showcartHandeler =()=>{
      setcartData(true)
  }

  const closeDataHandeler=()=>{
      setcartData(false)
  }
  
  return (
    <CartProvider>   

      {cartData && <Cart onClose={closeDataHandeler}/>}

      <Header onShowcart={showcartHandeler}/>

      <main>
     <Meal/>
      </main>

    </CartProvider>
  );
}

export default App;
