import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext)


  const {  data: cart = [], refetch} = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
        const response = await fetch(`https://vape-cafe-server.vercel.app/cart?email=${user?.email}`)
        return response.json();
    },
  })

  return [cart, refetch]
};

export default useCart;