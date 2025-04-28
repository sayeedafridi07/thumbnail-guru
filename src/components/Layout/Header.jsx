import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Menu, UserRound, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "../ProfileDropDown";
import { openAuthModal } from "../../slices/modalSlice";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="w-11/12 mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="z-30"
            >
              <img src={logo} alt="" id="logo" className="h-12 w-auto" />
            </motion.div>

            {/* <nav className="hidden md:flex ml-10">
              <ul className="flex space-x-8">
                {["Pricing"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-primary font-medium transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav> */}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {token !== null && profile !== null ? (
              <>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <button
                  onClick={() => dispatch(openAuthModal("login"))}
                  className="flex items-center bg-emerald-400 hover:bg-emerald-500 transition-colors group rounded-full text-white font-bold"
                >
                  <div
                    className={` ${
                      isScrolled
                        ? "bg-white ring-white"
                        : "bg-emerald-50 ring-emerald-50"
                    } ring-4 border-2 border-emerald-400 text-emerald-400 group-hover:text-emerald-500 group-hover:border-emerald-500 rounded-full p-2 mr-3`}
                  >
                    <UserRound strokeWidth={2.5} size={18} />
                  </div>
                  <span className="my-2 mr-5">LOG IN</span>
                </button>
                <button
                  onClick={() => dispatch(openAuthModal("register"))}
                  className="flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors px-6 py-2 rounded-full text-white font-bold"
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
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
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
                    className="flex items-center bg-emerald-400 hover:bg-emerald-500 transition-colors group rounded-full text-white text-medium font-bold"
                  >
                    <div className="bg-white ring-white ring-4 border-2 border-emerald-400 text-emerald-400 group-hover:text-emerald-500 group-hover:border-emerald-500 rounded-full p-2 mr-3">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
