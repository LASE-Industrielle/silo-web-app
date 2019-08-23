import React from "react";
import Notification from "./Notification";

const NotificationsWidget = ({
  notifications = [],
  unreadCount,
  readCount
}) => (
  <div style={style.container}>
    <div style={style.readText}>
      {unreadCount === 0 ? (
        <div>Read notifications ({readCount})</div>
      ) : (
        <div>You have ({unreadCount}) unread notifications</div>
      )}
    </div>
    <div style={style.notificationList}>
      {notifications.data.map(item => (
        <Notification
          key={item.timestamp}
          title={item.title}
          body={item.body}
          time={item.timestamp}
          read={item.read}
        />
      ))}
    </div>
    <div style={style.footer}>
      <div style={style.allRead}>Mark all as read</div>
      <div style={style.clearAll}>Clear all</div>
    </div>
  </div>
);

const style = {
  container: {
    cursor:'auto',
    position: "absolute",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.08)",
    backgroundColor: "white",
    width: 350,
    height: 480,
    padding: 12,
    marginTop: 295,
    marginLeft: -230,
    zIndex: 1,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 13,
    borderRadius: 7
  },
  notificationList: { overflow: "scroll", height: 480 },
  readText: { alignSelf: "center", color: "#C5C5C5", fontFamily: "Rubik" },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Rubik"
  },
  allRead: { color: "#6CC799", margin: 5, cursor: 'pointer' },
  clearAll: { color: "#F19B93", margin: 5 , cursor: 'pointer'}
};

export default NotificationsWidget;
