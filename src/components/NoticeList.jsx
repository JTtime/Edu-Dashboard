import React from "react";
import { Typography, Box } from "@mui/material";
import "./NoticeList.css";

const NoticeList = ({ title = "Notice", notices }) => {
  return (
    <Box sx={{ border: "2px solid blue", padding: '1rem' }}>
      <Typography align='left' variant="h4" gutterBottom>
        {title}
      </Typography>
      <ul style={{ textAlign: "left", paddingInlineStart: '1rem' }}>
        {notices?.slice(0, 4).map((notice, index) => (
          <li key={index}>
            <Typography>
              Notice {notice.number} / {notice.for} ({notice.date})
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default NoticeList;
