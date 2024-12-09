import { Link } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
  const { product_id, product_title, price, product_image } = gadget || {};

  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure className="rounded-md px-4 pt-4 h-[300px] h- 60 ">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-md  w-full h-full object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions ">
            <Link
              to={`/gadget/${product_id}`}
              className="border px-4 py-2 border-purple-500 font-semibold rounded-full text-purple-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetCard;
