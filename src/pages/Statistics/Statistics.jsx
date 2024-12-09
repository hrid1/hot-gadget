// import React from 'react';

import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const products = useLoaderData();
  //   console.log(data);

  return (
    <div className="px-4 md:px-12">
      <h1 className="text-2xl font-bold my-4">Statistics</h1>

      <section className="w-full h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart width={500} height={300} data={products}>
            <XAxis dataKey={`product_title`}></XAxis>
            <YAxis></YAxis>
            <CartesianGrid></CartesianGrid>
            <Bar barSize={35} dataKey="price" fill="#9538E2" />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default Statistics;
