import React from "react";
import "./VerticalCard.css";
// import { Divider } from "primereact/divider";
import Divider from "@mui/material/Divider";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const VerticalCard = () => {
  const data = [
    {
      title: "Content",
      content: {
        Assignment: 32,
        Questions: 28,
      },
    },
    {
      title: "Usage",
      content: {
        Class: "10/2",
        Topic: "30/3",
        Questions: "100/2",
      },
    },
    {
      title: "Information",
      content: {
        Notice: 29,
        Announcement: 30,
        News: 38,
      },
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".hr-lines h2");
    const hrLines = document.querySelectorAll(
      ".hr-lines::before, .hr-lines::after"
    );

    // Get the width of the title
    const titleWidth = title.offsetWidth;

    // Set the width of hr lines based on the title width
    hrLines.forEach((hrLine) => {
      hrLine.style.width = `calc(50% - ${titleWidth / 2}px)`;
    });
  });

  return (
    <div className="vertical-card">
      {data.map((category, index) => (
        <div key={index} style={{ width: "100%" }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before, &::after": {
                borderColor: "secondary.light",
              },
            }}
          >
            <b>{category.title}</b>
          </Divider>

          <div className="content">
            {Object.entries(category.content).map(([key, value], index) => (
              <div key={index} className="content-item">
                <span className="key">{key}</span>
                {typeof value === "string" ? (
                  <span className="value">{value}</span>
                ) : (
                  <div className="circle-wrapper">
                    <div className="circle">{value}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCard;
