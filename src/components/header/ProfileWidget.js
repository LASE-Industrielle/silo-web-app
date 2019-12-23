import React, { useState } from "react";
import NotificationSettingsIcon from "../../icons/NotificationSettingsIcon";
import SyncIcon from "../../icons/SyncIcon";
import ccLogo from "../../assets/cc.jpg";
import ProfileIcon from "../../icons/SyncIcon";
import AuthService from "../../services/AuthService";
import {useStore} from "../../context/StateContext";

const ProfileWidget = ({ history }) => {
  const [username, setUsername] = useState("codecentric");
  const [{auth},dispatch] = useStore()


  const logout = () => {
    AuthService.logout(dispatch, history)
  };

  return (
    <div style={style.container}>
      <img src={ccLogo} style={style.userImage} />
      <div style={style.userName}>{username}</div>
      <div style={style.signOutButton}>
        <SyncIcon style={style.syncIcon} fill={"#F19B93"} />
        <div style={style.signOutText} onClick={() => logout()}>
          Sign out
        </div>
      </div>
    </div>
  );
};

const style = {
  container: {
    cursor:'auto',
    position: "absolute",
    boxShadow: "0px 3px 6px rgba(0,0,0,0.08)",
    backgroundColor: "white",
    width: 250,
    height: 160,
    padding: 12,
    marginTop: 135,
    marginLeft: -160,
    zIndex: 1,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    fontSize: 13,
    fontFamily: "Rubik",
    borderRadius: 15
  },
  userImage: {
    alignSelf: "center",
    padding: 10,
    width: 70,
    borderRadius: 70
  },
  userName: {
    alignSelf: "center",
    fontFamily: "Rubik",
    fontSize: 13,
    color: "#797979",
    fontWeight: "bold"
  },
  syncIcon: {
    width: 14,
    margin: 5,
    color: "blue",
    backgroundColor: "#E8E6EA",
    padding: 5,
    borderRadius: 5,
    alignSelf: "center"
  },
  signOutText: {
    cursor: 'pointer',
    alignSelf: "center",
    fontWeight: "bold",
    color: "#F19B93",
    marginLeft: 10
  },
  signOutButton: { flex: 1, flexDirection: "row", display: "flex" }
};

export default ProfileWidget;
