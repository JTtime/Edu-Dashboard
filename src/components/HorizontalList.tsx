import React from 'react';
import './HorizontalList.css';


interface MockDataItem {
  icon: React.ReactNode;
  Questions?: number;
  Subject?: number;
  Topic?: number;
  Content?: number;
}

interface Props {
  data: MockDataItem[]; 
}


const HorizontalList: React.FC<Props> = ({ data }) => {
  return (
    <div className="horizontal-list">
      {data?.map((item, index) => (
        <span key={index} className="list-item">
          <div className='icon' style={{ color: 'slateblue' }}>
            {item.icon}
          </div>
          <div className="item-info">
            {Object.entries(item).filter(([key]) => key !== 'icon').map(([key, value], index) => (
              <div key={index} className="info">
                <span className="value">{value}</span>
                <span className="key">{key}</span>
              </div>
            ))}
          </div>
        </span>
      ))}
    </div>
  );
};

export default HorizontalList;
