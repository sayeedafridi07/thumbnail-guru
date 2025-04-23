import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthModal from "./AuthModal";
import { closeAuthModal } from "../../slices/modalSlice";

const AuthModalContainer = () => {
  const dispatch = useDispatch();
  const { isAuthModalOpen, initialMode } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeAuthModal());
  };

  return (
    <AuthModal 
      isOpen={isAuthModalOpen} 
      onClose={handleClose} 
      initialMode={initialMode} 
    />
  );
};

export default AuthModalContainer;