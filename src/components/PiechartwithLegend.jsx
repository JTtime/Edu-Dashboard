import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography, Grid } from '@mui/material';
import CardWrapper from './CardWrapper';
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
          usePointStyle: true,
        },
      },
    },
  };

  

  return (
    <CardWrapper>
      <Typography align='left' variant="h5" gutterBottom>
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
      </CardWrapper>
  );
};

export default PieChartWithLegend;
