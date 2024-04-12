import React from 'react';
import { Typography, Box } from '@mui/material';

const NoticeList = ({ title="Notice", notices }) => {
  return (
    <Box sx={{border: '2px solid blue'}}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <ul style={{textAlign: 'left'}}>
        {notices?.slice(0, 4).map((notice, index) => (
          <li key={index}>
            Notice {notice.number} / {notice.for} ({notice.date})
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default NoticeList;
