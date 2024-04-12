import React, { useEffect } from "react";
import "./VerticalCard.css";
import Divider from "@mui/material/Divider";
import CardWrapper from "./CardWrapper";

interface Category {
  title: string;
  content: { [key: string]: string | number };
}

const VerticalCard: React.FC = () => {
  const data: Category[] = [
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

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      const title = document.querySelector(".hr-lines h2");
      const hrLines = document.querySelectorAll(
        ".hr-lines::before, .hr-lines::after"
      );

      if (title) {
        // Get the width of the title
        const titleWidth = (title as HTMLElement).offsetWidth;

        // Set the width of hr lines based on the title width
        hrLines.forEach((hrLine) => {
          (hrLine as HTMLElement).style.width = `calc(50% - ${
            titleWidth / 2
          }px)`;
        });
      }
    };

    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  return (
    <CardWrapper>
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
              {Object.entries(category.content).map(([key, value]) => (
                <div key={index} >
                  {index % 2 === 0 ? (
                    <div className="content-item">
                      <span className="key">{key}</span>
                      {typeof value === "string" ? (
                        <span className="value">{value}</span>
                      ) : (
                        <div className="circle-wrapper">
                          <div className="circle value">{value}</div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="content-item">
                      {typeof value === "string" ? (
                        <span className="value">{value}</span>
                      ) : (
                        <div className="circle-wrapper">
                          <div className="circle value">{value}</div>
                        </div>
                      )}
                      <span className="key">{key}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default VerticalCard;
