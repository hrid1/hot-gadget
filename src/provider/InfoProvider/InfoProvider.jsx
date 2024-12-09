import { createContext, useEffect, useState } from "react";
import { getCartList } from "../../utils";

export const InfoContext = createContext(null);

const InfoProvider = ({ children }) => {
    const [carts , setCarts] = useState([]);


  const personInfo = { name: "Hridoy", isCoder: true, carts, setCarts };

  return (
    <InfoContext.Provider value={personInfo}>{children}</InfoContext.Provider>
  );
};

export default InfoProvider;
