import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import {
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CardWrapper from "./CardWrapper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Dataset {
  label: string;
  data?: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: boolean;
}

export interface LineChartFilterDropDowns {
  state: string[];
  university: string[];
}

interface LineChartProps {
  data: {
    labels: string[];
    datasets?: Dataset[];
  };
  title?: string;
  filterDropDowns?: LineChartFilterDropDowns;
}

const LineChart: React.FC<LineChartProps> = ({ data, title = "syllabus", filterDropDowns }) => {
  const defaultColorPalette = [
    "#3e95cd",
    "#8e5ea2",
    "#3cba9f",
    "#e8c3b9",
    "#c45850",
    "#ff8c00",
  ];
  const chartData = {
    labels: data?.labels,
    datasets: data?.datasets?.map((dataset, index) => ({
      ...dataset,
      borderColor:
        dataset?.borderColor ||
        defaultColorPalette[index % defaultColorPalette.length],
      backgroundColor:
        dataset?.backgroundColor ||
        defaultColorPalette[index % defaultColorPalette.length],
      fill: false,
    })),
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
            usePointStyle: true, 
          },
      },
      title: {
        display: true,
        text: "SYLLABUS COMPLETION",
      },
    },
  };

  return (
    <CardWrapper>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item xs={8}>
            {filterDropDowns && (
              <Grid container spacing={2} marginBottom={2}>
                {Object.entries(filterDropDowns).map(([filter, options], indexOne) => (
                  <Grid item xs={6} key={indexOne}>
                    <FormControl key={filter} variant="outlined" fullWidth>
                      <InputLabel>{filter}</InputLabel>
                      <Select label={filter}>
                        {options.map((option: string, index: number) => (
                          <MenuItem key={indexOne+''+index} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
      <Line data={chartData as ChartData<'line'>} options={options} />
      </CardWrapper>
  );
}

export default LineChart;
