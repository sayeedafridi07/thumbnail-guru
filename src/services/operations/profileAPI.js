import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { profileEndpoints } from "../apis";

const {
  GET_USER_PROFILE_IMAGE_API,
  GET_USER_DETAILS_API,
  UPDATE_USER_DETAILS_API,
  UPDATE_PROFILE_IMAGE_API,
  CHANGE_PASSWORD_API,
} = profileEndpoints;

// GET USER PROFILE IMAGE
export async function getUserProfileImage(token) {
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_PROFILE_IMAGE_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
  }
  return result;
}

export async function getUserDetails(token, ID) {
  let result = null;
  try {
    const response = await apiConnector(
      "GET",
      GET_USER_DETAILS_API + "/" + ID,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
    toast.error(error.message);
  }
  return result;
}

// UPATE USER PROFILE IMAGE
export async function updateProfileImage(token, body) {
  let result = null;
  try {
    const response = await apiConnector(
      "POST",
      UPDATE_PROFILE_IMAGE_API,
      body,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    );
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
    toast.error(error.message);
  }
  return result;
}

// UPDATE USER PROFILE
export async function updateUserDetails(token, body) {
  const toastId = toast.loading("Changing Password...");
  let result = null;
  try {
    const response = await apiConnector("PUT", UPDATE_USER_DETAILS_API, body, {
      Authorization: `Bearer ${token}`,
    });
    toast.success("Profile Updated Successfully");
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
}

// CHANGE PASSWORD
export async function changePassword(token, body) {
  const toastId = toast.loading("Changing Password...");
  let result = null;
  try {
    const response = await apiConnector("PUT", CHANGE_PASSWORD_API, body, {
      Authorization: `Bearer ${token}`,
    });
    toast.success("Password Changed Successfully");
    result = response?.data;
  } catch (error) {
    console.error("error", JSON.stringify(error));
    toast.error(error.message);
  }
  toast.dismiss(toastId);
  return result;
}
