import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import { useEffect, useState } from "react";

const ComponentsHome = () => {
  const { category } = useParams();
  console.log(category);
  const [products, setProducts] = useState([]);

  console.log(category);
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${category}`).then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, [category]);
  return (
    <div>
        <h3 className="text-center text-3xl font-bold my-4">{category}</h3>
        <div className="md:grid grid-cols-3">
      {products.map((product) => (
        <Card
          key={product._id}
          product={product}
          productImage={product.image}
          productName={product.name}
          price={product.price}
          w={"w-auto md:w-64"}
        />
      ))}
    </div>
    </div>
  );
};

export default ComponentsHome;
