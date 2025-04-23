import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import CustomInputField from "../CustomInputField";
import toast from "react-hot-toast";
import { changePassword } from "../../services/operations/profileAPI";

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [values, setValues] = useState({
    oldPassword: "",
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
    if (!values.oldPassword) {
      errors.oldPassword = "Current password is required";
    }
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

  const handleChangePassword = useCallback(async () => {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const errorMessages = Object.values(validationErrors).join("\n");
      toast.error(errorMessages);
      return;
    }

    if (values.oldPassword === values.newPassword) {
      setErrors({
        ...errors,
        newPassword: "New password must be different from current password",
      });
      toast.error("New password must be different from current password");
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

    try {
      const body = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
        userName: profile?.mobileNo,
      };

      const response = await changePassword(token, body);

      if (response) {
        setValues({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        onClose();
      }
    } catch (error) {
      console.error("Password change error:", error);
      setErrors({
        ...errors,
        oldPassword: "Incorrect current password",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [values, errors]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-2 md:p-6 z-50">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-metal font-bold"
        >
          <X strokeWidth={2.5} />
        </button>

        <div>
          <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
            Change Password
          </h1>

          <div className="space-y-4">
            <CustomInputField
              radius={"rounded-xl"}
              bgColor={"bg-white"}
              name="oldPassword"
              value={values.oldPassword}
              error={errors.oldPassword}
              placeholder="Current Password"
              onChange={handleChange}
              secureTextEntry
            />
            <CustomInputField
              radius={"rounded-xl"}
              bgColor={"bg-white"}
              name="newPassword"
              value={values.newPassword}
              error={errors.newPassword}
              placeholder="New Password"
              onChange={handleChange}
              secureTextEntry
            />
            <CustomInputField
              radius={"rounded-xl"}
              bgColor={"bg-white"}
              name="confirmPassword"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              placeholder="Confirm New Password"
              onChange={handleChange}
              secureTextEntry
            />

            <div className="flex justify-center mt-6">
              <button
                disabled={isSubmitting}
                onClick={handleChangePassword}
                className="w-full md:w-1/2 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
              >
                {isSubmitting ? "Changing..." : "Change Password"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
