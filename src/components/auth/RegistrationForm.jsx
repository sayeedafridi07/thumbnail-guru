import React, { useState, useCallback } from "react";
import PasswordInput from "./PasswordInput";
import CustomInputField from "../CustomInputField";
import toast from "react-hot-toast";
import { login, registerUser } from "../../services/operations/authAPI";
import { setProfile } from "../../slices/profileSlice";
import { IMAGE_BASE_URL } from "../../utils/constant";
import { getUserProfileImage } from "../../services/operations/profileAPI";
import { setRefreshToken, setToken } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

const RegistrationForm = ({ onComplete, authData }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneNumber = authData?.phoneNumber || "";

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
    if (!values.name || values.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    }
    return errors;
  };

  const handleRegister = useCallback(async () => {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const errorMessages = Object.values(validationErrors).join("\n");
      toast.error(errorMessages);
      return;
    }

    if (values.password !== values.confirmPassword) {
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
        firstName: values.name.split(" ")[0],
        lastName: values.name.split(" ")[1] || "",
        email: values.email,
        mobileNo: phoneNumber || "",
        password: values.password,
        appType: "SERVICE-APP",
      };
      
      const response = await registerUser(body);
      if (response) {
        const loginBody = {
          userName: values.email,
          password: values.password,
          appType: "SERVICE-APP",
        };
        
        const res = await login(loginBody);
        if (res) {
          dispatch(setToken(res?.accessToken));
          dispatch(setRefreshToken(res?.refreshToken));
          
          let profileRes = await getUserProfileImage(res?.accessToken);
          if (profileRes?.code === 200 && profileRes?.data?.fileId) {
            dispatch(
              setProfile({
                ...res?.data,
                image: `${IMAGE_BASE_URL}${profileRes?.data?.fileId}`,
              })
            );
          } else {
            const image = `https://api.dicebear.com/5.x/initials/svg?seed=${
              res?.data?.firstName + " " + res?.data?.lastName
            }`;
            dispatch(
              setProfile({
                ...res?.data,
                image: image,
              })
            );
          }
          
          onComplete();
          toast.success("Registration successful! Welcome!");
        } else {
          toast.error("Registration successful but login failed. Please login manually.");
          onComplete();
        }
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }, [values, phoneNumber, dispatch, onComplete, errors]);

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        Complete Your Profile
      </h1>

      <div className="space-y-4">
        <CustomInputField
          name="name"
          value={values.name}
          error={errors.name}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <CustomInputField
          name="email"
          value={values.email}
          error={errors.email}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <CustomInputField
          name="password"
          value={values.password}
          error={errors.password}
          placeholder="Password"
          onChange={handleChange}
          secureTextEntry
        />
        <CustomInputField
          name="confirmPassword"
          value={values.confirmPassword}
          error={errors.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
          secureTextEntry
        />

        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            onClick={handleRegister}
            className="w-1/3 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
          >
            {isSubmitting ? "Processing..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
