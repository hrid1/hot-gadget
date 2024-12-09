import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "./GadgetCard";

const Gadgets = () => {
  const { id } = useParams();

  const data = useLoaderData();
  //   console.log(id);
  const [gadgets, setGadgets] = useState([]);

  //   console.log(notFound)

  useEffect(() => {
    if (id) {
      const filterGadgets = [...data].filter(
        (gadget) => gadget.category === id
      );
      setGadgets(filterGadgets);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [data, id]);

  return (
    <>
      {gadgets.length ? (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            // <li key={gadget.id}>{gadget.product_title}</li>
            <GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>
          ))}
        </div>
      ) : (
        <div className=" flex flex-col  items-center justify-center h-80 font-bold ">
          <h1 className="text-3xl text-center text-orange-600">
            {" "}
            <span>Opps Sorry!</span>
            <br />
            <span> This Item is Not Available.</span>
          </h1>
          <span>we will stock soon.</span>
        </div>
      )}
    </>
  );
};

export default Gadgets;
