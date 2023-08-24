
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useCart = () => {
  const [cartData, setCartData] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    fetch(`http://localhost:5000/cart/data/${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setCartData(data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, [user?.email]);
  
  return [cartData];
};

export default useCart;
