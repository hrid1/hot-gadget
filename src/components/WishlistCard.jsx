import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { saveToCartList } from "../utils";

const WishlistCard = ({ product, handleDeleteWishList }) => {
  const {
    product_id,
    product_title,
    price,
    product_image,
    rating,
    description,
  } = product || {};
  return (
    <>
      {/* card section */}
      <section className="border p-6 flex gap-8 mt-6 rounded-md bg-white">
        {/*left side -> card pic */}
        <div className="w-60  border rounded-xl ">
          <img
            className="w-full mx-auto h-full object-contain"
            src={product_image}
            alt={product_title}
          />
        </div>
        {/*right side -> card info */}
        <div className=" space-y-4 w-full ">
          <h2 className="text-2xl font-bold">{product_title}</h2>
         
          <p>{description}</p>
          <h4 className="font-medium ">
            Rating: <span>{rating}</span>
          </h4>
          <h4 className="font-medium ">
            Price: <span>$ {price}</span>
          </h4>

          <hr />

          <div className="flex justify-between items-center">
            <div className="space-x-4">
              <>
                <button
                  onClick={() => saveToCartList(product)}
                  className="p-2.5 px-4 font-medium rounded-full bg-purple-500 text-white"
                >
                  Add To Cart
                </button>
              </>
            </div>

            <div>
              <button
                onClick={() => handleDeleteWishList(product_id)}
                className=" border rounded-full mr-6 p-1 hover:bg-red-400 duration-150"
              >
                <IoMdCloseCircleOutline className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistCard;
