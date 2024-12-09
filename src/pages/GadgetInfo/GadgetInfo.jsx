import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import {
  getCartList,
  getWishList,
  saveToCartList,
  saveToWishList,
} from "../../utils";
import { useContext, useEffect, useState } from "react";
import { InfoContext } from "../../provider/InfoProvider/InfoProvider";
import { Helmet } from "react-helmet-async";

const GadgetInfo = () => {
  const { id } = useParams();
  const gadgets = useLoaderData();

  //   console.log(id, gadgets);
  const currentGadget = gadgets.find((gadget) => gadget.product_id == id);
  // console.log(currentGadget);
  const {
    product_id,
    product_image,
    product_title,
    price,
    description,
    rating,
    specification,
    availability
  } = currentGadget;
  // handle wishlist button disable
  const [wish, setWish] = useState(false);

  useEffect(() => {
    const wishLists = getWishList();
    const isExists = wishLists.some(
      (item) => item.product_id === currentGadget.product_id
    );
    setWish(isExists);
  }, [currentGadget]);

  const { setCarts } = useContext(InfoContext);

  //   handle add to cart
  const handleCart = (item) => {
    saveToCartList(item);
    setCarts(item);
  };
  //   handle wish list
  const handleWishlist = (item) => {
    saveToWishList(item);
    setWish(true);
  };

  return (
    <>
      <Helmet>
        <title>Gadgets | GadgetHaven</title>
      </Helmet>

      <div className="h-screen">
        {/* <h1>Details of Product</h1> */}
        <section className="space-y-4 py-6 text-center bg-purple-600 text-white h-96 relative mb- [400px]">
          <h1 className="text-2xl md:text-4xl font-bold ">Product Details</h1>
          <p className="mx-auto md:w-4/5">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </section>

        {/* Product Card */}

        <div className=" absolute w-10/12 mx-auto top-64 left-1/2 -translate-x-1/2 ">
          <section className="w-10/12 flex flex-col md:flex-row gap-6  justify-center bg-gray-100 shadow-md border  p-8 mx-auto rounded-2xl ">
            <div className="w-full md:w-[45%]  rounded-md">
              <img
                src={product_image}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* -----------------card details ------------------- */}
            <div className="w-full md:w-[55%] space-y-4 p-4">
              <h1 className="text-3xl font-semibold">{product_title}</h1>
              <p className="text-gray-600 font-semibold text-xl">
                Price: {price}
              </p>
              <div className="badge badge-primary badge-outline"> {availability ? "Stock" : "Stock out"}</div>

              <p className="text-gray-600">{description}</p>

              {/* specification */}
              <h2 className=" font-bold text-lg">Specification:</h2>
              <ol className="text-gray-600 list-decimal list-inside">
                {specification.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>

              {/* rating */}
              <h3 className="font-bold text-lg">Rating</h3>
              <div className="flex gap-4">
                <div className="rating w-24">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className=" font-semibold border rounded-full px-2 bg-gray-200">
                  4.5
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleCart(currentGadget)}
                  className="bg-purple-600 text-white font-bold px-5 rounded-full btn hover:text-black"
                >
                  Add To Cart <FaCartPlus></FaCartPlus>
                </button>

                <button
                  disabled={wish}
                  onClick={() => handleWishlist(currentGadget)}
                  className="border-2 btn rounded-full p-2"
                >
                  <FaRegHeart className="text-3xl " />
                </button>
              </div>
            </div>
          </section>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default GadgetInfo;
