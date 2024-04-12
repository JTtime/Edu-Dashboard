import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import TimeDisplay from "./components/Timer";
// import PieChartComponent from './components/PieChartComponent'
import PieChartWithLegend from "./components/PiechartwithLegend";
import LineChart from "./components/LineChart";
import NoticeList from "./components/NoticeList";
import VerticalCard from "./components/VerticalCard";
import HorizontalList from "./components/HorizontalList";
import GridTemplate from "./components/GridTemplate";
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import LineChart from './LineChart';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

const lineChartdata = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  datasets: [
    {
      label: "Syllabus",
      data: [20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100],
    },
    {
      label: "Completed",
      data: [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    },
  ],
};

const filterDropDowns = {
  state: ["Maharashtra", "Gujarat", "Goa", "Kashmir", "Bihar"],
  university: ["Mumbai", "Pune", "BATU", "DTU", "IIIT"],
};

const notices = [
  { number: 24, for: "student", date: "11 - 02 - 2024" },
  { number: 23, for: "teacher", date: "10 - 02 - 2024" },
  { number: 22, for: "staff", date: "09 - 02 - 2024" },
  { number: 21, for: "student", date: "08 - 02 - 2024" },
  { number: 20, for: "teacher", date: "07 - 02 - 2024" },
  { number: 19, for: "staff", date: "06 - 02 - 2024" },
  { number: 18, for: "student", date: "05 - 02 - 2024" },
];

function App() {
  const [count, setCount] = useState(0);
  // const { width, height, left, top } = useDrawingArea();

  const data = [
    { label: "Category A", name: "Category A", value: 400 },
    { label: "Category B", name: "Category B", value: 300 },
    { label: "Category C", name: "Category C", value: 300 },
    { label: "Category D", name: "Category D", value: 200 },
  ];

  const mockData = [
    { icon: "https://example.com/icon1.png", Questions: 20 },
    { icon: "https://example.com/icon2.png", Subject: 108 },
    { icon: "https://example.com/icon3.png", Topic: 210 },
    { icon: "https://example.com/icon4.png", Content: 510 },
  ];

  return (
    <>
      <PrimeReactProvider>
        <Layout>
          {/* Your page content goes here */}
         
          {/* <TimeDisplay/> */}
          {/* <PieChartComponent/> */}
          <Box sx={{ width: "100%" }}>
            {/* <PieChartWithLegend 
      // x={left + width / 2} y={top + height / 2}
       data={data} title='query'/>
        */}

            {/* <LineChart data={lineChartdata} title="Syllabus Completion" filterDropDowns={filterDropDowns}/> */}
            {/* <NoticeList title="Latest Notices" notices={notices} /> */}
            {/* <VerticalCard /> */}

            {/* <HorizontalList data={mockData} /> */}
            <GridTemplate mockData={mockData} lineChartdata={lineChartdata} filterDropDowns={filterDropDowns} piedata={data} notices={notices}/>
          </Box>
        </Layout>
      </PrimeReactProvider>
    </>
  );
}

export default App;
