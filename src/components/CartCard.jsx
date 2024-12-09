import React from "react";
import { MdDeleteForever } from "react-icons/md";

const CartCard = ({ product, handleRemoveCart }) => {
  //   console.log(product);
  const { product_id, product_title, description, price, product_image } =
    product;

//   console.log(handleRemoveCart);
  return (
    <>
      <div className="border flex justify-between items-center p-6 rounded-xl shadow-md bg-white">
        {/* left */}
        <div className="flex gap-3 items-center justify-center">
          <div className="avata">
            <div className="w-32 h-32 rounded-xl">
              <img src={product_image} className="rounded-xl" />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">{product_title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="text-gray-900 text-md font-semibold">
              <span className="font-bold text-yellow-400">$</span> {price}
            </p>
          </div>
        </div>

        {/* right */}
        <button
          onClick={() => handleRemoveCart(product_id)}
          className=" hover:scale-125 hover:text-red-500 duration-200 md:mr-10"
        >
          <MdDeleteForever className="text-3xl" />
        </button>
      </div>
      ;
    </>
  );
};

export default CartCard;
