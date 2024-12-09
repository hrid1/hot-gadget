import { useState } from "react";
import Carts from "../../components/Carts";
import Wishlists from "../../components/Wishlists";
import Wishlist from "../../components/Wishlist";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  // handle toggle functionality
  const [isActive, setIsActive] = useState(true);
  const handleToggle = (active) => {
    setIsActive(active);
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | GadgetHaven</title>
      </Helmet>

      {/* first  */}
      <section className=" space-y-5 bg-purple-600 text-white text-center p-12 ">
        <h2 className="text-3xl font-bold ">DashBoard</h2>
        <p className="text-center mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. <br /> From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center items-center gap-6 mt-4">
          <button
            onClick={() => handleToggle(true)}
            className={`border rounded-full px-10 py-2 font-semibold  ${
              isActive
                ? " bg-white text-purple-600"
                : "bg-purple-600  text-white "
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={`border rounded-full px-10 py-2 font-semibold  ${
              !isActive
                ? " bg-white text-purple-600"
                : "bg-purple-600  text-white "
            }`}
          >
            Wishlist
          </button>
        </div>
      </section>

      {/* cart and white list div */}

      <section className="m bg-gray-100 px-6">
        {isActive ? <Carts></Carts> : <Wishlist></Wishlist>}
      </section>
    </div>
  );
};

export default Dashboard;
