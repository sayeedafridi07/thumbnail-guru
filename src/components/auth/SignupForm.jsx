import React, { useState } from "react";
import CustomInputField from "../CustomInputField";
import toast from "react-hot-toast";
import { generateOTP } from "../../services/operations/authAPI";

const SignupForm = ({ setMode, setAuthData, authData }) => {
  const flowType = authData?.flowType || "signup";
  const [phoneNumber, setPhoneNumber] = useState(authData?.phoneNumber || "");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
    setError(null);
  };

  const validateForm = (phoneNumber) => {
    let error = false;
    if (!phoneNumber) {
      error = true;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      error = true;
    }
    return error;
  };

  const handleSubmit = async () => {
    const error = validateForm(phoneNumber);
    if (error) {
      setError(true);
      toast.error("Please enter valid Phone Number");
      return;
    }

    setIsSubmitting(true);

    const body = {
      mobileNo: phoneNumber,
      type:
        flowType === "signup"
          ? "SignUp"
          : flowType === "forgot"
          ? "ForgotPassword"
          : "Login",
    };

    try {
      const response = await generateOTP(body);
      if (response) {
        // Update the shared auth data in the parent component
        setAuthData((prev) => ({
          ...prev,
          phoneNumber,
          flowType,
        }));

        setMode("otp");
        toast.success("OTP sent successfully!");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("OTP generation error:", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get the appropriate title based on flow type
  const getTitle = () => {
    switch (flowType) {
      case "login":
        return "Log In with OTP";
      case "forgot":
        return "Reset Password";
      default:
        return "Sign Up";
    }
  };

  // Get the appropriate button text based on flow type
  const getButtonText = () => {
    if (isSubmitting) return "Sending OTP...";

    switch (flowType) {
      case "forgot":
        return "Send Reset OTP";
      default:
        return "Continue";
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        {getTitle()}
      </h1>

      <div className="space-y-4">
        <CustomInputField
          name="phoneNumber"
          value={phoneNumber}
          error={error}
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <div className="flex justify-center">
          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="w-1/3 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
          >
            Continue
          </button>
        </div>

        <div className="text-center mt-6">
          {flowType === "signup" && (
            <p className="text-metal font-lato text-sm font-bold">
              Already have an account?
              <button
                onClick={() => setMode("login")}
                className="text-primary font-semibold ml-1 hover:underline"
              >
                Log In
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
