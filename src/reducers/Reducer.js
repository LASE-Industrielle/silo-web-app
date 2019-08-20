import { authReducer } from "./AuthReducer";

export const mainReducer = ({ auth }, action) => ({
  auth: authReducer(auth, action)
});
