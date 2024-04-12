import React from "react";
import { Typography } from "@mui/material";
import "./NoticeList.css";
import CardWrapper from "./CardWrapper";

const NoticeList = ({ title = "Notice", notices }) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

export default NoticeList;
