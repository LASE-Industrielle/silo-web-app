import React from "react";
import { ArrowDownIcon } from "../../icons/ArrowDownIcon";
import { ArrowUpIcon } from "../../icons/ArrowUpIcon";
import { useTranslation } from 'react-i18next'

const SiloStatusWidget = ({ silos }) => {
  const { t } = useTranslation()
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: 236,
        borderRadius: 6,
        background: "linear-gradient(180deg, #6CC799, #439A93)",
        padding: "28px 26px",
        color: "#fff",
        marginBottom: 20,
        boxShadow: "0px 3px 6px rgba(0,0,0,0.08)"
      }}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 6
            }}
          >
            {silos && silos.name}
          </div>
          <div style={{ fontSize: 14, marginBottom: 32 }}>
            {silos && silos.location}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "flex-end"
          }}
        >
          <div
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 6
            }}
          >
            {silos && silos.percentage}% {t("full")}
          </div>
          <div style={{ fontSize: 14, marginBottom: 32, fontWeight: "bold" }}>
            <ArrowDownIcon fill={"#96CEB7"} height={10} />0{" "}
            <ArrowUpIcon fill={"#96CEB7"} height={10} />
            100
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            position: "relative",
            flex: 1,
            border: "4px #96CEB7 solid",
            height: 54,
            borderRadius: 16,
            alignItems: "center"
          }}
        >
          {[10, 30, 50, 70, 90].map(percentage => (
            <div
              key={percentage}
              style={{
                position: "absolute",
                height: 80,
                borderLeft: "1px #96CEB7 dashed",
                bottom: 0,
                left: `${percentage}%`,
                color: "red"
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#fff",
                  marginLeft: 5
                }}
              >
                {percentage}
              </div>
            </div>
          ))}
          {[20, 40, 60, 80].map(percentage => (
            <div
              key={percentage}
              style={{
                display: "flex",
                alignItems: "flex-end",
                position: "absolute",
                height: 58,
                borderLeft: "1px #96CEB7 dashed",
                top: 24,
                left: `${percentage}%`,
                color: "red"
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#fff",
                  marginLeft: 5
                }}
              >
                {percentage}
              </div>
            </div>
          ))}
          <div
            style={{
              height: 54,
              width: `${silos && silos.percentage}%`,
              borderRadius: 10,
              backgroundColor: "#3A7F78"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SiloStatusWidget;
