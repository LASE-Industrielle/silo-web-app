import { authReducer } from "./AuthReducer";
import { silosReducer } from "./SilosReducer";
import { notificationsReducer } from "./NotificationsReducer";

export const mainReducer = ({ auth, silos, notifications }, action) => ({
  auth: authReducer(auth, action),
  silos: silosReducer(silos, action),
  notifications: notificationsReducer(notifications, action)
});
