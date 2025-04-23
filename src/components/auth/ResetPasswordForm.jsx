import React, { useState, useCallback } from "react";
import CustomInputField from "../CustomInputField";
import toast from "react-hot-toast";
import { forgotPassword } from "../../services/operations/authAPI";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setRefreshToken } from "../../slices/authSlice";
import { setProfile } from "../../slices/profileSlice";
import { IMAGE_BASE_URL } from "../../utils/constant";
import { getUserProfileImage } from "../../services/operations/profileAPI";

const ResetPasswordForm = ({ onComplete, authData }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [values, setValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: null,
    });
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.newPassword) {
      errors.newPassword = "New password is required";
    } else if (values.newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
    }
    return errors;
  };

  const handleResetPassword = useCallback(async () => {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const errorMessages = Object.values(validationErrors).join("\n");
      toast.error(errorMessages);
      return;
    }

    if (values.newPassword !== values.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Passwords do not match",
      });
      toast.error("Passwords do not match");
      return;
    }

    setIsSubmitting(true);

    const body = {
      password: values.newPassword,
      appType: "SERVICE-APP",
    };

    const response = await forgotPassword(token, body);

    if (response) {
      dispatch(setToken(response?.data?.accessToken));
      dispatch(setRefreshToken(response?.data?.refershToken));

      let res = await getUserProfileImage(response?.data?.accessToken);
      if (res?.code === 200 && res?.data?.fileId) {
        dispatch(
          setProfile({
            ...response?.data,
            image: `${IMAGE_BASE_URL}${res?.data?.fileId}`,
          })
        );
      } else {
        const Image = `https://api.dicebear.com/5.x/initials/svg?seed=${
          response?.data?.firstName + " " + response?.data?.lastName
        }`;
        dispatch(
          setProfile({
            ...response?.data,
            image: Image,
          })
        );
      }
      toast.success("Password Changed Successfully");
      onComplete();
    } else {
      setErrors({
        ...errors,
        newPassword: "The old password and new password cannot be the same",
      });
    }
    setIsSubmitting(false);
  }, [values, errors, token, onComplete, dispatch]);

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        Reset Password
      </h1>

      <div className="space-y-4">
        <CustomInputField
          name="newPassword"
          value={values.newPassword}
          error={errors.newPassword}
          placeholder="New Password"
          onChange={handleChange}
          secureTextEntry
        />
        <CustomInputField
          name="confirmPassword"
          value={values.confirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirm New Password"
          onChange={handleChange}
          secureTextEntry
        />

        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            onClick={handleResetPassword}
            className="w-1/3 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
