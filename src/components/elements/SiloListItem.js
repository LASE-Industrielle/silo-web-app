import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SiloListItem = ({ silo, isHighlighted }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 14px",
        borderBottom: "1px #E9E9E9 solid",
        backgroundColor: isHighlighted ? "#F8F8F8" : "white"
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-start"
        }}
      >
        <CircularProgressbar
          value={silo && silo.percentage && silo.percentage}
          text={`${silo && silo.percentage && silo.percentage}%`}
          styles={{
            root: { height: 64, marginLeft: -20 },
            path: { stroke: "#6CC799" }
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#262626"
          }}
        >
          {silo && silo.name && silo.name}
        </div>
        <div style={{ fontSize: 14, color: "#898989" }}>
          {silo && silo.location && silo.location}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          fontSize: 14,
          color: "#c5c5c5",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          marginLeft: 12
        }}
      >
        <div>{silo && silo.last_update && silo.last_update}</div>
      </div>
    </div>
  );
};

export default SiloListItem;
