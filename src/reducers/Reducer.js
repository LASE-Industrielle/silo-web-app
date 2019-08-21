import { authReducer } from "./AuthReducer";
import { silosReducer } from "./SilosReducer";

export const mainReducer = ({ auth, silos }, action) => ({
  auth: authReducer(auth, action),
  silos: silosReducer(silos, action)
});
