import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useCart = () => {
  const [cartData, setCartData] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    axios.get(`http://localhost:5000/cart/data/${user?.email}`).then((res) => {
      setCartData(res.data);
    });
  }, [user?.email]);
  
  return [cartData];
};

export default useCart;
