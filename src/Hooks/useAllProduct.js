import axios from "axios";
import { useEffect, useState } from "react";


const useAllProduct = () => {
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(true)
   useEffect(()=> {
    axios.get("http://localhost:5000/products")
    .then(response =>{
        setAllProducts(response.data)
        setLoading(false)
    } )
   },[])
   return [allProducts, loading]
};

export default useAllProduct;