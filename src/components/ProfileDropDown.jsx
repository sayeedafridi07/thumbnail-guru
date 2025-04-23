import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { logout } from "../services/operations/authAPI";
// import { menuOptions } from "../data/menuData";

export default function ProfileDropdown() {
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  if (!profile) return null;

  const handleMenuItemClick = (path) => {
    navigate(path);
    setOpen(false);
  };

  // Filter menu options based on authentication status
  // const filteredMenuOptions = menuOptions.filter(option => 
  //   !option.loginRequired || (option.loginRequired && profile)
  // );

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)} 
        className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-3 py-2 hover:shadow-md transition-all duration-300"
      >
        <Menu className="h-5 w-5 text-gray-500" />
        <img
          src={profile?.image}
          alt={`profile-${profile?.firstName}`}
          className="h-8 w-8 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
      </button>
      
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-12 mt-2 w-64 overflow-hidden rounded-xl bg-white shadow-lg border z-50"
          ref={ref}
        >
          {/* User profile section at top of dropdown - now clickable */}
          <div 
            className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleMenuItemClick("/profile")}
          >
            <div className="flex items-center space-x-3">
              <img
                src={profile?.image}
                alt={`profile-${profile?.firstName}`}
                className="h-12 w-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-medium text-base text-gray-900">{profile?.firstName} {profile?.lastName}</p>
                <p className="text-xs text-gray-500">{profile?.email}</p>
              </div>
            </div>
          </div>
          
          <div className="py-1 divide-y divide-gray-100">
            {/* {filteredMenuOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleMenuItemClick(option.path)}
                className="block w-full px-4 py-2.5 text-base font-quickSand font-semibold text-gray-500 hover:bg-gray-50 text-left"
              >
                {option.label}
              </button>
            ))} */}
            <button
              onClick={() => {
                dispatch(logout(navigate));
                setOpen(false);
              }}
              className="block w-full px-4 py-2.5 text-base font-quickSand font-semibold text-red-500 hover:bg-red-50 text-left"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
