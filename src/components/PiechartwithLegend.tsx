import React from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Typography, Grid } from '@mui/material';
import CardWrapper from './CardWrapper';


ChartJS.register(ArcElement, Tooltip, Legend);

interface DataItem {
  name: string;
  value: number;
}

interface PieChartWithLegendProps {
  data: DataItem[];
  title?: string;
  type?: 'RING' | 'DISC';
}

const PieChartWithLegend: React.FC<PieChartWithLegendProps> = ({ data, title = 'Query', type = 'RING' }) => {
  const chartData = {
    labels: data?.map(item => item.name),
    datasets: [{
      label: '',
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

  const options: ChartOptions<'pie'> = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  const DoughnutOptions: ChartOptions<'doughnut'> = {
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
          {type === 'DISC' ? <Pie data={chartData} options={options} /> : <Doughnut data={chartData} options={DoughnutOptions} />}
        </Grid>
      </Grid>
    </CardWrapper>
  );
};

export default PieChartWithLegend;
