import { useState } from "react";
import { deleteFromWishList, getWishList } from "../utils";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const wishListProduct = getWishList();
  const [wishList, setWishList] = useState(wishListProduct);

  //   console.log(wishList)

  const handleDeleteWishList = (id) => {
    deleteFromWishList(id);
    const newWishList = getWishList();
    setWishList(newWishList);
    // console.log("wislist", id);
  };

  if (wishList.length === 0)
    return (
      <h2 className="text-center font-bold text-2xl py-10">No Item in WishList</h2>
    );

  return (
    <div>
      <section>
        {wishList.map((item) => (
          <WishlistCard
            key={item.product_id}
            product={item}
            handleDeleteWishList={handleDeleteWishList}
          ></WishlistCard>
        ))}
      </section>
    </div>
  );
};

export default Wishlist;
