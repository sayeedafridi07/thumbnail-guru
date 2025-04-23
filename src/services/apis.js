const BASE_URL = import.meta.env.VITE_API_URL;

// AUTH ENDPOINTS
export const authEndpoints = {
  LOGIN_API: BASE_URL + "/login",
  GENERATE_OTP_API: BASE_URL + "/send-otp",
  VALIDATE_OTP_API: BASE_URL + "/verify-otp",
  REGISTER_USER_API: BASE_URL + "/register",
  FORGOT_PASSWORD_API: BASE_URL + "/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/users",
  CHANGE_PASSWORD_API: BASE_URL + "/change-password",
};

