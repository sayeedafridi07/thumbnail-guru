import React, { useCallback, useState } from "react";
import CustomInputField from "../CustomInputField";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../../services/operations/authAPI";
import { IMAGE_BASE_URL } from "../../utils/constant";
import { setRefreshToken, setToken } from "../../slices/authSlice";
import { getUserProfileImage } from "../../services/operations/profileAPI";
import { setProfile } from "../../slices/profileSlice";

const LoginForm = ({ setMode, onClose, setAuthData, authData }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({ loginId: "", password: "" });
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!values.loginId) {
      errors.loginId = "Email or Phone is required";
    } else if (
      !emailRegex.test(values.loginId) &&
      !phoneRegex.test(values.loginId)
    ) {
      errors.loginId = "Invalid Email or Phone";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const handleLogin = useCallback(async () => {
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      const errorMessages = Object.values(validationErrors).join("\n");
      toast.error(errorMessages);
      return;
    }

    setIsSubmitting(true);

    try {
      const body = {
        userName: values.loginId,
        password: values.password,
        appType: "SERVICE-APP",
      };

      const response = await login(body);
      if (response) {
        dispatch(setToken(response?.accessToken));
        dispatch(setRefreshToken(response?.refreshToken));

        let res = await getUserProfileImage(response?.accessToken);
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

        onClose();
        toast.success("Welcome back! You've successfully logged in.");
      } else {
        setErrors({
          loginId: "Invalid Credentials",
          password: "Invalid Credentials",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors({
        loginId: "Login failed",
        password: "Login failed",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [values, dispatch, onClose]);

  const handleOtpLogin = () => {
    // Check if input is a valid phone number
    const phoneRegex = /^\d{10}$/;

    // If a valid phone number is provided, use that
    if (values.loginId && phoneRegex.test(values.loginId)) {
      setAuthData({
        phoneNumber: values.loginId,
        email: "",
        flowType: "login",
      });
    } else {
      // Just set the flow type to login without a phone number
      setAuthData({
        phoneNumber: "",
        email: "",
        flowType: "login",
      });
    }

    // Simply navigate to the signup form
    setMode("signup");
  };

  const handleForgotPassword = () => {
    // Set the flow type to forgot
    setAuthData({
      phoneNumber: values.loginId && /^\d{10}$/.test(values.loginId) ? values.loginId : "",
      email: values.loginId && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.loginId) ? values.loginId : "",
      flowType: "forgot"
    });
    
    // Navigate to signup screen
    setMode("signup");
  };

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        Log In
      </h1>

      <div className="space-y-4">
        <CustomInputField
          name="loginId"
          error={errors.loginId}
          value={values.loginId}
          placeholder="Phone Number / Email"
          onChange={handleChange}
        />
        <CustomInputField
          name="password"
          error={errors.password}
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          secureTextEntry
        />

        <div className="flex justify-end">
          <button
            disabled={isSubmitting}
            onClick={handleForgotPassword}
            className="text-sm font-bold text-metal font-lato hover:underline transition duration-300"
          >
            Forgot Password?
          </button>
        </div>

        <div className="flex flex-col space-y-3 items-center">
          <button
            disabled={isSubmitting}
            onClick={handleLogin}
            className="w-1/2 md:w-1/3 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
          >
            Log In
          </button>

          <button
            disabled={isSubmitting}
            onClick={handleOtpLogin}
            className="w-1/2 md:w-1/3 bg-white border border-primary text-metal text-xs font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
          >
            Log in with <span className="text-primary">OTP</span>
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-metal font-lato text-sm font-bold">
            Don't have an account?
            <button
              disabled={isSubmitting}
              onClick={() => {
                setAuthData({
                  phoneNumber: "",
                  email: "",
                  flowType: "signup",
                });
                setMode("signup");
              }}
              className="text-primary font-semibold ml-1 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
