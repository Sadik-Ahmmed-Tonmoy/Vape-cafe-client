import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../../../Components/Card/Card";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

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
      <Slide>
        <h3 className="text-center text-3xl font-bold my-4 text-yellow-50">
          {category}
        </h3>
      </Slide>
      <div className="md:grid grid-cols-3">
        {products.map((product) => (
          <Card
            key={product._id}
            product={product}
            productImage={product.image}
            productName={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentsHome;
