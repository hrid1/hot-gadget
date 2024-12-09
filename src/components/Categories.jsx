import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories, setCateories] = useState([]);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCateories(data));
  }, []);
  // console.log(categories);

  return (
    <ul className=" gap-2 items-center justify-center space-y-4 p-4 bg-white border-2 rounded-2xl shadow-md">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-5 py-2 block border rounded-full font-bold t ${
            isActive ? "bg-purple-500 text-gray-100" : "text-gray-600"
          }`
        }
      >
        All
      </NavLink>

      {categories.map((category) => (
        <NavLink
          className={({ isActive }) =>
            `px-5 py-2 block border rounded-full font-bold ${
              isActive ? "bg-purple-500 text-gray-100" : "text-gray-600"
            }`
          }
          key={category.id}
          to={`category/${category.slug}`}
        >
          {category.category}
        </NavLink>
      ))}
    </ul>
  );
};

export default Categories;
