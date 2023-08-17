

const Card = ({productImage, productName, price, w}) => {
  return (
    <div className={`card ${w} bg-base-100 shadow-xl m-2 mx-auto`}>
      <figure className="px-5 pt-5">
        <img
          src={productImage}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p className="text-yellow-500"> BDT {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
