import React, { useEffect, useState } from "react";
import { NotificationIcon } from "../../icons/NotificationIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";
import NotificationsWidget from "./NotificationsWidget";
import ProfileWidget from "./ProfileWidget";

const notifications = {
  data: [
    {
      title: "Silo: Solingen",
      body:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus",
      time: "19:01",
      read: false
    },
    {
      title: "Silo: Berlin",
      body:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae",
      time: "17:34",
      read: false
    },
    {
      title: "Update",
      body:
        "quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit",
      time: "08:33",
      read: false
    }
  ]
};

const Header = ({ history }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // only one dropdown can be opened at the same time
  useEffect(() => {
    setUnreadCount(notifications.data.filter(x => x.read === false).length);
    setReadCount(notifications.data.filter(x => x.read === true).length);
  }, []);

  useEffect(() => {
    if (showNotifications) {
      setShowProfile(false);
    }
  }, [showNotifications]);

  useEffect(() => {
    if (showProfile) {
      setShowNotifications(false);
    }
  }, [showProfile]);

  return (
    <div style={style.container}>
      <div style={{ flex: 1 }}>
        <LogoIcon />
      </div>
      <div style={style.headerContentWrapper}>
        <div
          style={style.headerContent}
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <NotificationIcon fill={"#6cc799"} />
          <div style={style.headerText}>Notifications ({unreadCount})</div>
          <div style={style.dropdownTick}>{showNotifications ? "▲" : "▼"}</div>
          {showNotifications ? (
            <NotificationsWidget
              notifications={notifications}
              unreadCount={unreadCount}
              readCount={readCount}
            />
          ) : null}
        </div>
        <div
          style={style.headerContent}
          onClick={() => setShowProfile(!showProfile)}
        >
          <ProfileIcon fill={"#6cc799"} />
          <div style={style.headerText}>Profile</div>
          <div style={style.dropdownTick}>{showProfile ? "▲" : "▼"}</div>
          {showProfile ? <ProfileWidget history={history} /> : null}
        </div>
      </div>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    padding: "20px 120px",
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    boxShadow: "0px 3px 6px rgba(0,0,0,0.08)"
  },
  dropdownTick: {
    display: "flex",
    fontSize: 12,
    color: "#6cc799",
    alignItems: "center",
    marginLeft: 10
  },
  headerText: {
    color: "#6cc799",
    fontSize: 16,
    marginLeft: 5
  },
  headerContent: { display: "flex", alignItems: "center", marginLeft: 20 },
  headerContentWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
};

export default Header;
