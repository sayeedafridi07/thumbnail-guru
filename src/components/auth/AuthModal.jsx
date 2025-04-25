import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import OtpVerification from "./OtpVerification";
import RegistrationForm from "./RegistrationForm";
import ResetPasswordForm from "./ResetPasswordForm";
import { X } from "lucide-react";
import logo from "../../assets/logo.png";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [mode, setMode] = useState(initialMode);
  const [authData, setAuthData] = useState({
    phoneNumber: "",
    email: "",
    flowType: "register",
  });

  // Always sync mode with initialMode prop when it changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  // Reset data when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setAuthData({
        phoneNumber: "",
        email: "",
        flowType: "register",
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const renderContent = () => {
    switch (mode) {
      case "login":
        return (
          <LoginForm
            setMode={setMode}
            onClose={onClose}
            setAuthData={setAuthData}
            authData={authData}
          />
        );
      case "register":
        return (
          <SignupForm
            setMode={setMode}
            onClose={onClose}
            setAuthData={setAuthData}
            authData={authData}
          />
        );
      case "otp":
        return (
          <OtpVerification
            setMode={setMode}
            onClose={onClose}
            authData={authData}
          />
        );
      case "registration":
        return <RegistrationForm onComplete={onClose} authData={authData} />;
      case "resetPassword":
        return <ResetPasswordForm onComplete={onClose} authData={authData} />;
      default:
        return (
          <LoginForm
            setMode={setMode}
            onClose={onClose}
            setAuthData={setAuthData}
            authData={authData}
          />
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden w-[95%] max-w-md mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-metal font-bold p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X strokeWidth={2.5} />
            </button>

            <div className="p-4 md:p-8 flex flex-col min-h-[480px] md:min-h-[480px] max-h-[90vh] overflow-y-auto">
              {/* Logo at the top */}
              <div className="flex justify-center mb-4 md:mb-6">
                <img src={logo} alt="Thumbnail Guru Logo" className="h-10 md:h-12" />
              </div>
              
              <div className="flex-1">
                {renderContent()}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
