import React from "react";

const SpecificationWidget = ({ silos }) => {
  return (
    <div
      style={{
        flex: 1,
        borderRadius: 6,
        backgroundColor: "#fff",
        boxShadow: "0px 3px 6px rgba(0,0,0,0.08)",
        padding: "36px 30px 32px 30px"
      }}
    >
      <div style={{ marginBottom: 18 }}>
        <div
          style={{
            color: "#898989",
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          Configuration
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        <div
          style={{
            borderRight: "1px #D0CDD3 solid",
            paddingRight: 12
          }}
        >
          <div style={{ color: "#BEB9B9", fontSize: 14 }}>Width</div>
          <div
            style={{
              color: "#83D0A9",
              fontSize: 26,
              fontWeight: "bold"
            }}
          >
            {silos && silos.width}
            <span
              style={{
                fontWeight: "normal",
                fontSize: 16,
                color: "#BEB9B9",
                marginLeft: 6
              }}
            >
              m
            </span>
          </div>
        </div>
        <div
          style={{
            borderRight: "1px #D0CDD3 solid",
            padding: "0 12px"
          }}
        >
          <div style={{ color: "#BEB9B9", fontSize: 14 }}>Height</div>
          <div
            style={{
              color: "#83D0A9",
              fontSize: 26,
              fontWeight: "bold"
            }}
          >
            {silos && silos.height}
            <span
              style={{
                fontWeight: "normal",
                fontSize: 16,
                color: "#BEB9B9",
                marginLeft: 6
              }}
            >
              m
            </span>
          </div>
        </div>
        <div
          style={{
            paddingLeft: 12
          }}
        >
          <div style={{ color: "#BEB9B9", fontSize: 14 }}>Capacity</div>
          <div
            style={{
              color: "#83D0A9",
              fontSize: 26,
              fontWeight: "bold"
            }}
          >
            {silos && silos.capacity}
            <span
              style={{
                fontWeight: "normal",
                fontSize: 16,
                color: "#BEB9B9",
                marginLeft: 6
              }}
            >
              kg
            </span>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            borderBottom: "1px #E8E6EA solid",
            padding: "30px 0 10px 0"
          }}
        >
          <div style={{ color: "#BEB9B9", fontSize: 14, marginBottom: 8 }}>
            Location
          </div>
          <div style={{ color: "#898989", fontSize: 14 }}>
            {silos && silos.location}
          </div>
        </div>
        <div style={{ borderBottom: "1px #E8E6EA solid", padding: "10px 0" }}>
          <div style={{ color: "#BEB9B9", fontSize: 14, marginBottom: 8 }}>
            Serial Number
          </div>
          <div style={{ color: "#898989", fontSize: 14 }}>
            {silos && silos.sensor && silos.sensor.serial_number}
          </div>
        </div>
        <div style={{ paddingTop: 10 }}>
          <div style={{ color: "#BEB9B9", fontSize: 14, marginBottom: 8 }}>
            Type
          </div>
          <div style={{ color: "#898989", fontSize: 14 }}>
            {silos && silos.sensor && silos.sensor.type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationWidget;
