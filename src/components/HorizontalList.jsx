import React from 'react';
import './HorizontalList.css';

export default function HorizontalList ({ data }) {
  return (
    <div className="horizontal-list">
      {data?.map((item, index) => (
        <span key={index} className="list-item">
          {/* <img src={item.icon} alt="icon" className="icon" /> */}
          <div className='icon'>
          <i className={item.icon} style={{ color: 'slateblue' }}></i>
          </div>
          <div className="item-info">
            {Object.entries(item).filter(([key, value])=>key!=='icon').map(([key, value], index) => (
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

// export default HorizontalList;
