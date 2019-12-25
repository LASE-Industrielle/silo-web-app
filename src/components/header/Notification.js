import React from "react";
import { useTranslation } from 'react-i18next'

const Notification = ({ title, body, time, read = true}) => {
  const { t } = useTranslation()
  return (
    <div style={style.container}>
      {read ? (
        <div style={style.inactiveDot}>•</div>
      ) : (
        <div style={style.activeDot}>•</div>
      )}
      <div>
        <div style={style.title}>{title}</div>
        <div style={style.body}>{body}</div>
        <div style={style.footer}>
          <div style={style.time}>{time}</div>
          {read ? null : <div style={style.readButton}>{t("Read")}</div>}
        </div>
      </div>
    </div>
  );
};

const style = {
  container: { display: "flex", flex: 1, margin: 10, fontSize: 13 },
  activeDot: { color: "#6cc799", fontSize: 30, padding: 10 },
  inactiveDot: { color: "#656565", fontSize: 30, padding: 10 },
  title: {
    fontWeight: "bold",
    color: "#656565",
    margin: 3
  },
  body: { color: "#656565", margin: 3 },
  footer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  time: { color: "#D6D6D6", margin: 3 },
  readButton: { color: "#6CC799", margin: 3, cursor:'pointer' }
};

export default Notification;
