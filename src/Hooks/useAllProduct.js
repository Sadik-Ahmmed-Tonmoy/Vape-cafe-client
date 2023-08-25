import axios from "axios";
import { useEffect, useState } from "react";


const useAllProduct = () => {
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
   useEffect(()=> {
    axios.get("https://vape-cafe-server.vercel.app/products")
    .then(response =>{
        setAllProducts(response.data)
        setLoading(false)
    } )
   },[])
   return [allProducts, loading]
};

export default useAllProduct;