import React from 'react';
import './GridTemplate.css'; 
import HorizontalList from './HorizontalList';
import VerticalList from './VerticalCard';
import NoticeList from './NoticeList';
import PieChartWithLegend from './PiechartwithLegend';
import LineChart from './LineChart';
import TimeDisplay from './Timer';

// mockData={mockData} LineChartdata={LineChartdata} filterDropDowns={filterDropDowns} piedata={data}

const GridTemplate = ({mockData, lineChartdata, filterDropDowns, piedata, notices}) => {
  const lineChartdataOne = {
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

  const lineChartdataTwo = {
    labels: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'],
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

  const dataOne = [
    { label: "Category A", name: "Category A", value: 400 },
    { label: "Category B", name: "Category B", value: 300 },
    { label: "Category C", name: "Category C", value: 300 },
    { label: "Category D", name: "Category D", value: 200 },
  ];

  const mockDataOne = [
    { icon: 'pi pi-pen-to-square', Questions: 20 },
    { icon: "pi pi-book", Subject: 108 },
    { icon: "pi pi-bars", Topic: 210 },
    { icon: "pi pi-box", Content: 510 },
  ];

  const dataTwo = [
    { label: "Category A", name: "Category ATwo", value: 400, icon: 'pi pi-pen-to-square' },
    { label: "Category B", name: "Category BTwo", value: 300, icon: 'pi pi-book' },
    { label: "Category C", name: "Category CTwo", value: 300, icon: 'pi pi-bars' },
    { label: "Category D", name: "Category DTwo", value: 200, icon: 'pi pi-box' },
  ];

  const mockDataTwo = [
    { id: 5, icon: "https://example.com/icon1.png", Questions: 20 },
    { id: 6, icon: "https://example.com/icon2.png", Subject: 108 },
    { id: 7, icon: "https://example.com/icon3.png", Topic: 210 },
    { id: 8, icon: "https://example.com/icon4.png", Content: 510 },
  ];

  const dataThree = [
    { label: "Category A", name: "Category AThree", value: 400 },
    { label: "Category B", name: "Category BThree", value: 300 },
    { label: "Category C", name: "Category CThree", value: 300 },
    { label: "Category D", name: "Category DThree", value: 200 },
  ];

  const dataFour = [
    { label: "Category A", name: "Category AThree", value: 400 },
    { label: "Category B", name: "Category BThree", value: 300 },
    { label: "Category C", name: "Category CThree", value: 300 },
    { label: "Category D", name: "Category DThree", value: 200 },
  ];

  const dataFive = [
    { label: "Category A", name: "Category AFive", value: 400 },
    { label: "Category B", name: "Category BFive", value: 300 },
    { label: "Category C", name: "Category CFive", value: 300 },
    { label: "Category D", name: "Category DFive", value: 200 },
  ];

  


  return (
    <div className="grid-container">
      <span className="item horizontal-list-one">
        <HorizontalList data={mockDataOne} />
      </span>
      <span className="item time-display">
        <TimeDisplay />
      </span>
      <div className="item vertical-list">
        <VerticalList />
      </div>
      <div className="item notice-list">
        <NoticeList notices={notices} />
      </div>
      <div className="item pie-chart-legend-one">
        <PieChartWithLegend title="Question" data={dataOne}/>
      </div>
      <div className="item pie-chart-legend-two">
        <PieChartWithLegend title='Running Stats' data={dataTwo} type='DISC' />
      </div>
      <div className="item line-chart-one">
        <LineChart data={lineChartdata} />
      </div>
      <div className="item pie-chart-legend-three">
        <PieChartWithLegend title='Content' data={dataTwo} type='DISC'/>
      </div>
      <div className="item line-chart-two">
        <LineChart data={lineChartdataTwo} filterDropDowns={filterDropDowns} />
      </div>
      <div className="item pie-chart-legend-four">
        <PieChartWithLegend  data={dataFour} type='DISC'/>
      </div>
      <div className="item pie-chart-legend-five">
        <PieChartWithLegend title='Ticket' data={dataFive} />
      </div>
    </div>
  );
};

export default GridTemplate;
