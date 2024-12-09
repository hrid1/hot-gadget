import { deleteFromCartList, getCartList } from "../utils";
import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import payment from "../assets/Group.png";

const Carts = () => {
  // set cart item
  const cartList = getCartList();
  const [cartItem, setCartItem] = useState(cartList);

  //total cost
  const totalCost = cartItem.reduce((acu, item) => {
    return acu + item.price;
  }, 0);

  //   delete from cart
  const handleRemoveCart = (id) => {
    // console.log("hi", id);
    deleteFromCartList(id);
    const updateCartList = getCartList();
    setCartItem(updateCartList);
  };

  // sort Cart Item
  const handleSortingItem = () => {
    const sortCartItem = [...cartItem].sort((a, b) => b.price - a.price);
    setCartItem(sortCartItem);
  };

  const [isDisable, setDisable] = useState(false);
  useEffect(() => {
    if (cartList.length === 0) {
      setDisable(true);
    }
  }, [cartList.length]);

  //   handle purchase
  const handlePurchase = () => {
    localStorage.removeItem("cartList");
  };

  // navigate after purchase
  const navigate = useNavigate();

  return (
    <>
      <div>
        {/* cart and total cost */}
        <section className="py-6 my-4 flex justify-between items-center text-xl font-semibold px-4">
          <div>
            <h2>Cart</h2>
          </div>
          <div className="flex items-center justify-center gap-4">
            <h2>
              Total Cost: <span>{totalCost.toFixed(2)}</span>
            </h2>
            <button
              onClick={handleSortingItem}
              className="text-violet-600 border rounded-full btn border-violet-600"
            >
              Sort By Price
            </button>
            <button
              onClick={() => {
                document.getElementById("my_modal_5").showModal();
                handlePurchase();
              }}
              disabled={isDisable}
              className="bg-violet-500 btn rounded-full text-white"
            >
              Purchase
            </button>
          </div>
        </section>

        <section>
          {cartItem.map((item) => (
            <CartCard
              key={item.product_id}
              product={item}
              handleRemoveCart={handleRemoveCart}
            ></CartCard>
          ))}
        </section>

        {!cartItem.length && (
          <h2 className="text-center font-bold text-2xl pb-10">
            No Item in Cart!
          </h2>
        )}
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-center"
      >
        <div className="modal-box flex flex-col items-center justify-center">
          <img src={payment} className="mb-6" alt="" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <p className="py-4">
            Thanks for purchasing.
            <br />
            <span className="text-lg font-bold">
              {" "}
              Total: {totalCost.toFixed(2)}
            </span>
          </p>
          <div className="modal-action flex justify-center w-full ">
            {/* <form method="dialog bg-red-500"> */}
            <button
              onClick={() => navigate("/")}
              className="btn w-5/6 rounded-full"
            >
              Close
            </button>
            {/* </form> */}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Carts;
