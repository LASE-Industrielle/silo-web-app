import React from "react";

const AnalyticsListItem = ({ isLast = false, date, value }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "12px 0",
        borderBottom: isLast ? 0 : "1px #E8E6EA solid"
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "orange",
              height: 12,
              width: 12,
              borderRadius: "50%",
              marginRight: 12
            }}
          />
          <div style={{ color: "#262626" }}>{value}%</div>
        </div>
        <div style={{ color: "#BEB9B9", fontSize: 12 }}>{date}</div>
      </div>
    </div>
  );
};

export default AnalyticsListItem;
