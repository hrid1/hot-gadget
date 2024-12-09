import toast from "react-hot-toast";



// get from cartitem
const getCartList = () => {
  let cartList = [];
  const storedGadgets = localStorage.getItem("cartList");
  if (storedGadgets) {
    cartList = JSON.parse(storedGadgets);
  }
  return cartList;
};

// save to cart
const saveToCartList = (item) => {
  let cartList = getCartList();
  const isExist = cartList.find((p) => p.product_id === item.product_id);
  if (isExist) {
    return toast.error("Product already in Cart");
  }
  cartList.push(item);
  localStorage.setItem("cartList", JSON.stringify(cartList));
  toast.success("Product added on CartList");
};
// delete from cart
const deleteFromCartList = (id) => {
  let cartList = getCartList();
  const remaining = cartList.filter((item) => item.product_id !== id);
  localStorage.setItem("cartList", JSON.stringify(remaining));
  toast.success("Item remove from cart");
};
// --------------------------FOR Wish LiST-------------------------
// get from cartitem
const getWishList = () => {
  let wishList = [];
  const storedGadgets = localStorage.getItem("wishList");
  if (storedGadgets) {
    wishList = JSON.parse(storedGadgets);
  }
  return wishList;
};

// save to cart
const saveToWishList = (item) => {
  let wishList = getWishList();
  const isExist = wishList.find((p) => p.product_id === item.product_id);
  if (isExist) {
    return toast.error("Product already in WishList");
  }
  wishList.push(item);
  localStorage.setItem("wishList", JSON.stringify(wishList));
  toast.success("Product added on WishList");
};
// delete from cart
const deleteFromWishList = (id) => {
  let wishList = getWishList();
  const remaining = wishList.filter((item) => item.product_id !== id);
  localStorage.setItem("wishList", JSON.stringify(remaining));
  toast.success("Item remove from WishList");
};
export {
  getCartList,
  saveToCartList,
  deleteFromCartList,
  getWishList,
  saveToWishList,
  deleteFromWishList,
};
