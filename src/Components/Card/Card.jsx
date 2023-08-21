import { Link } from "react-router-dom";


const Card = ({ w, product}) => {
  const {image, name, price, _id}=product;

  return (
    <div className={`card ${w} bg-base-100 shadow-xl m-4`}>
      <figure className="px-5 pt-5">
        <img
          src={image}
          alt={name}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-yellow-500"> BDT {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary"><Link to={`/Dashboard/productDetails/${_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
