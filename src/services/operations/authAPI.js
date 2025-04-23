import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../apis";
import { setToken } from "../../slices/authSlice";
import { setProfile } from "../../slices/profileSlice";

const {
  LOGIN_API,
  GENERATE_OTP_API,
  VALIDATE_OTP_API,
  REGISTER_USER_API,
  FORGOT_PASSWORD_API,
} = authEndpoints;

// LOGIN
export const login = async (body) => {
  const toastId = toast.loading("Loading...");
  let result = null;
  try {
    const response = await apiConnector("POST", LOGIN_API, body);
    if (!response?.status === 200) {
      throw new Error(response?.data?.message);
    }
    result = response?.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Login Failed");
  }
  toast.dismiss(toastId);
  return result;
};

// GENERATE OTP
export async function generateOTP(body) {
  const toastId = toast.loading("Generating otp...");
  let result = null;
  try {
    const response = await apiConnector("POST", GENERATE_OTP_API, body, {});
    result = response?.data;
  } catch (error) {
    console.log("error", error);
    toast.error(error?.response?.data?.message);
  }
  toast.dismiss(toastId);
  return result;
}

// VALIDATE OTP
export async function validateOTP(phoneNumber, otp, isSignUp) {
  const toastId = toast.loading("Validating otp...");
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      VALIDATE_OTP_API +
        `?mobileNo=${phoneNumber}&otp=${otp}&isSignUp=${isSignUp}&appType=SERVICE-APP`,
      null,
      {}
    );
    result = response?.data;
  } catch (error) {
    console.log("error", JSON.stringify(error?.message));
    toast.error(error?.response?.data?.message);
  }
  toast.dismiss(toastId);
  return result;
}

// REGISTER USER
export async function registerUser(body) {
  const toastId = toast.loading("Processing...");
  let result = null;
  try {
    const response = await apiConnector("POST", REGISTER_USER_API, body, {});
    result = response?.data;
  } catch (error) {
    console.log("error", error);
    toast.error(error?.response?.data?.message);
  }
  toast.dismiss(toastId);
  return result;
}

// FORGOT PASSWORD
export async function forgotPassword(token, body) {
  const toastId = toast.loading("Processing...");
  let result = null;
  try {
    const response = await apiConnector("POST", FORGOT_PASSWORD_API, body, {
      Authorization: `Bearer ${token}`,
    });
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
    toast.error(error?.response?.data?.message);
  }
  toast.dismiss(toastId);
  return result;
}

// LOGOUT
export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setProfile(null));
    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    toast.success("Logged Out");
    navigate("/");
  };
}
