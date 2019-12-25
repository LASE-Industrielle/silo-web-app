import React, { useEffect, useState } from "react";
import { useStore } from "../../context/StateContext";
import { NotificationIcon } from "../../icons/NotificationIcon";
import { LogoIcon } from "../../icons/LogoIcon";
import { ProfileIcon } from "../../icons/ProfileIcon";
import NotificationsWidget from "./NotificationsWidget";
import ProfileWidget from "./ProfileWidget";
import getNotifications from "../../services/NotificationsService";
import { useTranslation } from 'react-i18next'

const Header = ({ history }) => {
  const { t } = useTranslation()
  const [{ notifications }, dispatch] = useStore();

  const [unreadCount, setUnreadCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);


  useEffect(() => {
    getNotifications(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (notifications !== undefined) {
      setUnreadCount(notifications.data.filter(x => x.read === false).length);
      setReadCount(notifications.data.filter(x => x.read === true).length);
    }
  }, [notifications]);

  // only one dropdown can be opened at the same time
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
          <div style={style.headerText}>{t("Notifications")} ({unreadCount})</div>
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
          <div style={style.headerText}>{t("Profile")}</div>
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
  headerContent: {
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
    cursor:'pointer'
  },
  headerContentWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  }
};

export default Header;
