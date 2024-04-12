import React from "react";

import { PieChart } from "@mui/x-charts/PieChart";

// const data = [
//   { name: "Category A", value: 400 },
//   { name: "Category B", value: 300 },
//   { name: "Category C", value: 300 },
//   { name: "Category D", value: 200 },
// ];

const PieChartComponent = ({data}) => (
  <PieChart
    series={[
      {
        data,
        innerRadius: 30,
        outerRadius: 40,
        paddingAngle: 0,
        cornerRadius: 0,
        startAngle: 0,
        endAngle: 360,
        cx: 30,
        cy: 30,
      },
    ]}
  />
  
);

export default PieChartComponent;
