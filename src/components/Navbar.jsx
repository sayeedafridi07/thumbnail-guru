import React, { useState } from "react";
import logo from "../assets/logo.png";
import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropDown";
import { logout } from "../services/operations/authAPI";
// import { menuOptions } from "../data/menuData";
import { openAuthModal } from "../slices/modalSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Menu/Logo Container */}
      <nav className="sticky left-0 right-0 top-0 p-4 bg-white z-50 shadow-md">
        {/* Flex Container For Nav Items */}
        <div className="flex w-11/12 mx-auto items-center justify-between space-x-10">
          {/* Logo */}
          <div className="z-30">
            <Link to="/">
              <img src={logo} alt="" id="logo" className="h-12 w-auto" />
            </Link>
          </div>
          {/* Menu Items */}
          <div className="hidden items-center space-x-4 md:flex">
            {token !== null && profile !== null ? (
              <>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <button
                  onClick={() => dispatch(openAuthModal("login"))}
                  className="flex items-center bg-sky-400 hover:bg-sky-500 transition-colors group rounded-full text-white text-medium font-bold"
                >
                  <div className="bg-white ring-white ring-4 border-2 border-sky-400 text-sky-400 group-hover:text-sky-500 group-hover:border-sky-500 rounded-full p-2 mr-3">
                    <UserRound strokeWidth={2.5} size={18} />
                  </div>
                  <span className="my-2 mr-5">LOG IN</span>
                </button>
                <button
                  onClick={() => dispatch(openAuthModal("register"))}
                  className="flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors px-6 py-2 rounded-full text-white text-medium font-bold"
                >
                  <span>REGISTER</span>
                  <span className="ml-2">&#10095;</span>
                </button>
              </>
            )}
          </div>
          {/* Hamburger Button */}
          <div
            onClick={toggleMenu}
            className={`z-30 block md:hidden focus:outline-none hamburger ${
              isMenuOpen ? "open" : ""
            }`}
          >
            <span className="hamburger-top" />
            <span className="hamburger-middle" />
            <span className="hamburger-bottom" />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-20 ${
            isMenuOpen ? "flex" : "hidden"
          } md:hidden flex-col w-full h-full min-h-screen pt-24 pb-4 bg-white`}
        >
          <div className="flex flex-col items-center space-y-4 mx-4">
            {token !== null && profile !== null ? (
              <div
                onClick={() => handleMenuItemClick("/profile")}
                className="flex items-center space-x-2"
              >
                <img
                  src={profile?.image}
                  alt={`profile-${profile?.firstName}`}
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <h1 className="text-black text-2xl font-bold font-roboto">
                  {profile?.firstName} {profile?.lastName}
                </h1>
              </div>
            ) : (
              <>
                <button
                  onClick={() => dispatch(openAuthModal("login"))}
                  className="flex items-center bg-sky-400 hover:bg-sky-500 transition-colors group rounded-full text-white text-medium font-bold"
                >
                  <div className="bg-white ring-white ring-4 border-2 border-sky-400 text-sky-400 group-hover:text-sky-500 group-hover:border-sky-500 rounded-full p-2 mr-3">
                    <UserRound strokeWidth={2.5} size={18} />
                  </div>
                  <span className="my-2 mr-5">LOG IN</span>
                </button>
                <button
                  onClick={() => dispatch(openAuthModal("register"))}
                  className="flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors px-6 py-2 rounded-full text-white text-medium font-bold"
                >
                  <span>REGISTER</span>
                  <span className="ml-2">&#10095;</span>
                </button>
              </>
            )}
          </div>

          <div className="py-1 divide-y divide-gray-100 w-full mt-4">
            {token !== null && profile !== null && (
              <button
                onClick={() => {
                  dispatch(logout(navigate));
                  setIsMenuOpen(false);
                }}
                className="block w-full px-4 py-2.5 text-base font-quickSand font-semibold text-red-500 hover:bg-red-50 text-left"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
