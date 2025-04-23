import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";

function CustomInputField({
  label,
  placeholder,
  type,
  maxLength,
  name,
  value,
  onChange,
  secureTextEntry,
  error,
  radius,
  bgColor,
  multiline = false,
  style,
  indicatorText,
  isMandatory = false,
  onBlur,
  disabled = false,
  onEditPress,
  enableEdit = false,
  isShowingCurrency = false,
  showLength = false,
  borderColor,
  leftIcon,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`relative ${style}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-medium font-jost text-gray-700">
            {label}
            {isMandatory && <span className="text-red-500"> *</span>}
          </div>
          {showLength && (
            <div className="text-xs text-gray-500">
              {value?.length}/{maxLength}
            </div>
          )}
        </div>
      )}
      <div className="relative">
        {multiline ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            disabled={disabled}
            onBlur={onBlur}
            className={`w-full px-4 py-3 placeholder:text-gray-400 placeholder:text-sm font-jost border ${
              bgColor ?? "bg-neutral-50"
            } 
            ${radius ?? "rounded-xl"} ${
              error ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-1 focus:ring-primary ${
              indicatorText ? "pr-24" : ""
            }`}
          />
        ) : (
          <input
            name={name}
            type={secureTextEntry && !showPassword ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            disabled={disabled}
            onBlur={onBlur}
            className={`w-full px-4 py-3 placeholder:text-gray-400 placeholder:text-sm font-jost border ${
              bgColor ?? "bg-neutral-50"
            } 
            ${disabled && "cursor-not-allowed"}
            ${radius ?? "rounded-xl"} ${
              error ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-1 focus:ring-primary ${
              indicatorText ? "pr-24" : ""
            }`}
          />
        )}
        {secureTextEntry && (
          <button
            className="absolute right-4 top-3 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? <EyeClosed /> : <Eye />}
          </button>
        )}
        {indicatorText && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm font-bold text-gray-500 font-jost">
            {indicatorText}
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomInputField;
