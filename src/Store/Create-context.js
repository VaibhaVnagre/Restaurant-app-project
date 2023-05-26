import React from "react";

const cartContext = React.createContext({
    items : [],
    addItem : ()=>{},
    removeItem : ()=>{},
    
})
export default cartContext;                                             