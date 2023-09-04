// import axios from "axios";
// import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'


const useAllProduct = () => {
//     const [allProducts, setAllProducts] = useState([])
//     const [loading, setLoading] = useState(true)
//    useEffect(()=> {
//     axios.get("https://vape-cafe-server.vercel.app/products")
//     .then(response =>{
//         setAllProducts(response.data)
//         setLoading(false)
//     } )
//    },[])
//    return [allProducts, loading]


   const {  data: allProducts = [], refetch} = useQuery({
     queryKey: ['products' ],
     queryFn: async () => {
         const response = await fetch(`https://vape-cafe-server.vercel.app/products`)
         return response.json();
     },
   })
 
   return [allProducts, refetch]
};

export default useAllProduct;

