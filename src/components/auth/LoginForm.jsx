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
  const [values, setValues] = useState({ identifier: "", password: "" });
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

    if (!values.identifier) {
      errors.identifier = "Email or Phone is required";
    } else if (
      !emailRegex.test(values.identifier) &&
      !phoneRegex.test(values.identifier)
    ) {
      errors.identifier = "Invalid Email or Phone";
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
        identifier: values.identifier,
        password: values.password,
      };

      const response = await login(body);
      if (response) {
        dispatch(setToken(response?.token));
        const Image = response?.user?.image
          ? response?.user?.image
          : `https://api.dicebear.com/5.x/initials/svg?seed=${response?.user?.fullName}`;
        dispatch(
          setProfile({
            ...response?.user,
            image: Image,
          })
        );

        onClose();
        toast.success("Welcome back! You've successfully logged in.");
      } else {
        setErrors({
          identifier: "Invalid Credentials",
          password: "Invalid Credentials",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrors({
        identifier: "Login failed",
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
    if (values.identifier && phoneRegex.test(values.identifier)) {
      setAuthData({
        phoneNumber: values.identifier,
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

    // Simply navigate to the register form
    setMode("register");
  };

  const handleForgotPassword = () => {
    // Set the flow type to forgot
    setAuthData({
      phoneNumber:
        values.identifier && /^\d{10}$/.test(values.identifier)
          ? values.identifier
          : "",
      email:
        values.identifier &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.identifier)
          ? values.identifier
          : "",
      flowType: "forgot",
    });

    // Navigate to register screen
    setMode("register");
  };

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        Log In
      </h1>

      <div className="space-y-4">
        <CustomInputField
          name="identifier"
          error={errors.identifier}
          value={values.identifier}
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
                  flowType: "register",
                });
                setMode("register");
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
