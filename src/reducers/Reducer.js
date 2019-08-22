import { authReducer } from "./AuthReducer";
import { silosReducer } from "./SilosReducer";
import { notificationsReducer } from "./NotificationsReducer";
import { measurementsReducer} from "./MeasurementsReducer"

export const mainReducer = ({ auth, silos, notifications, measurements }, action) => ({
  auth: authReducer(auth, action),
  silos: silosReducer(silos, action),
  notifications: notificationsReducer(notifications, action),
  measurements: measurementsReducer(measurements, action)
});
