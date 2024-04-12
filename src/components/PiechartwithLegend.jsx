// import React from "react";
// import { Box, Typography, Grid } from "@mui/material";
// import PieChartComponent from "./PieChartComponent"; // Assuming you have defined this component
// import { ChartContainer } from "@mui/x-charts";

// const PieChartWithLegend = ({ data, type, title }) => {
//   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Define your colors here

//   return (
//     <Box>
//       <Typography variant="h5" gutterBottom>
//         {title}
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={6}>
//           <Box
//             sx={{
//               height: 200,
//               width: 200,
//               viewBox: "-5 -5 200 200",
//               maxWidth: "400px",
//               maxHeight: "400px",
//               overflow: "hidden",
//             }}
//           >
//             <ChartContainer
//               series={[
//                 {
//                 //   data,
//                 //   innerRadius: 30,
//                   outerRadius: 40,
//                   paddingAngle: 0,
//                   cornerRadius: 0,
//                   startAngle: 0,
//                   endAngle: 360,
//                   cx: 30,
//                   cy: 30,
//                 },
//               ]}
//               width={300}
//               height={300}
//             >
//               <PieChartComponent data={data} type={type} />
//             </ChartContainer>
//           </Box>
//         </Grid>
//         {/* <Grid item xs={6}>
//           {data.map((item, index) => (
//             <div
//               key={index}
//               style={{ display: "flex", alignItems: "center", marginBottom: 5 }}
//             >
//               <div
//                 style={{
//                   width: 20,
//                   height: 20,
//                   backgroundColor: COLORS[index],
//                   marginRight: 10,
//                 }}
//               ></div>
//               <Typography variant="body1">{item.name}</Typography>
//             </div>
//           ))}
//         </Grid> */}
//       </Grid>
//     </Box>
//   );
// };

// export default PieChartWithLegend;


import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography, Box, Grid } from '@mui/material';
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWithLegend = ({ data, title="Query", type='RING' }) => {
  const chartData = {
    labels: data?.map(item => item.name),
    datasets: [{
      label:  '',
      data: data?.map(item => item.value),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
        '#FF9933',
      ],
      borderWidth: 1,
    }],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true, // Use circles instead of rectangles
        },
      },
    },
  };

  

  return (
    <Box sx={{border: '2px solid blue', borderRadius: '10px'}}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {type == 'DISC' ? <Pie data={chartData} options={options} /> : <Doughnut data={chartData} options={options} />}
        </Grid>
        
        {/* <Grid item xs={6}>
          {data.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
              <div style={{ width: 20, height: 20, backgroundColor: chartData.datasets[0].backgroundColor[index], marginRight: 10 }}></div>
              <Typography variant="body1">{item.name}</Typography>
            </div>
          ))}
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default PieChartWithLegend;
