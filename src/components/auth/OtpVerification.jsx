import React, { useState, useEffect, useCallback } from "react";
import CustomInputField from "../CustomInputField";
import OtpInput from "react-otp-input";
import { generateOTP, validateOTP } from "../../services/operations/authAPI";
import toast from "react-hot-toast";
import { setRefreshToken, setToken } from "../../slices/authSlice";
import { getUserProfileImage } from "../../services/operations/profileAPI";
import { IMAGE_BASE_URL } from "../../utils/constant";
import { setProfile } from "../../slices/profileSlice";
import { useDispatch } from "react-redux";

const OtpVerification = ({ setMode, onClose, authData }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState(authData?.phoneNumber || "");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [canResend, setCanResend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const flowType = authData?.flowType || "signup";

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleChange = (value) => {
    setOtp(value);
    setError(false);
  };

  const resendOtp = async () => {
    if (!canResend) return;

    setIsResending(true);
    try {
      const body = {
        mobileNo: phoneNumber,
        type: flowType === "signup" ? "SignUp" : "Login",
      };
      const response = await generateOTP(body);
      if (response) {
        // Reset timer and canResend state
        setTimeLeft(120);
        setCanResend(false);
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP resend error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsResending(false);
    }
  };

  const handleVerifyOTP = useCallback(async () => {
    if (otp.length !== 4) {
      setError(true);
      toast.error("Please enter a valid OTP");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await validateOTP(
        phoneNumber,
        otp,
        flowType === "signup" ? true : false
      );

      if (response) {
        if (flowType === "forgot") {
          toast.success("OTP verified successfully");
          dispatch(setToken(response?.data?.accessToken));
          dispatch(setRefreshToken(response?.data?.refershToken));
          // Navigate to reset password screen
          setMode("resetPassword");
        } else if (flowType === "signup") {
          toast.success("OTP verified successfully");
          setMode("registration");
        } else {
          // Login flow
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

          if (onClose) {
            onClose();
          }
          toast.success("Welcome back! You've successfully logged in.");
        }
      } else {
        setError(true);
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [otp, phoneNumber, flowType, dispatch, setMode, onClose]);

  return (
    <div>
      <h1 className="text-2xl text-metal font-bold font-lato mb-8 text-center">
        Verify OTP
      </h1>

      <div className="space-y-4">
        <CustomInputField
          disabled
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={() => {}}
        />

        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          placeholder="----"
          renderInput={(props) => (
            <input
              {...props}
              className={`!w-12 !h-12 text-center text-xl font-semibold rounded-full border ${
                error ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary`}
            />
          )}
          containerStyle={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        />

        <div className="flex justify-end">
          <button
            onClick={resendOtp}
            disabled={!canResend || isResending}
            className={`text-sm font-bold font-lato ${
              canResend ? "text-primary hover:underline" : "text-metal"
            } transition duration-300`}
          >
            {canResend ? (
              "Resend OTP"
            ) : (
              <>
                Resend OTP in{" "}
                <span className="text-primary">{formatTime(timeLeft)}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleVerifyOTP}
            className="w-1/3 bg-primary text-white text-base font-lato py-2.5 rounded-full font-normal hover:scale-105 transition duration-300"
            disabled={isSubmitting}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
