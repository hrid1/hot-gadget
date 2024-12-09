import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import { useState } from "react";

const GadgetsDiv = () => {
  const data = useLoaderData();
  //   console.log(data);
  const [gadgets, setGadgets] = useState(data.slice(0, 9));

  return (
    <div className=" my-20 ">
      <h1 className="md:text-4xl font-extrabold text-center my-12">
        Explore Cutting Edge Gadgets
      </h1>

      <section className="flex flex-col md:flex-row my-8 gap-6">
        {/* category */}
        <div className="w-full md:w-[18%] ">
          <Categories></Categories>
        </div>
        {/* gadgets */}
        <div className="w-full md:w-[82%] ">

            <Outlet></Outlet>
          {/* {gadgets.map((gadget) => (
            <li>{gadget.product_title}</li>
          ))} */}
        </div>
      </section>
    </div>
  );
};

export default GadgetsDiv;
