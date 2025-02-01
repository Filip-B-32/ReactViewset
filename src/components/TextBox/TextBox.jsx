import React, { useState } from "react";
import "./textbox.css";
import "./material-icons.css";

const TextBox = ({
  type,
  id,
  value,
  onChange,
  placeholder = "",
  borderColor = "#2b3442", // Default border color
  inputColor = "rgb(255 255 255 / 96%)", // Default input color
  focusBorderColor = "rgba(255, 255, 255, 0.623)", // Default focus border color
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handle focus and blur events to change border color dynamically
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Determine the icon based on the input type
  const getIcon = (type) => {
    switch (type) {
      case "email":
        return "mail_outline";
      case "password":
        return "key";
      case "account":
        return "account_circle";
      default:
        return null;
    }
  };

  const icon = getIcon(type); // Get the appropriate icon

  return (
    <div className="textbox">
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          borderColor: isFocused ? focusBorderColor : borderColor,
          color: inputColor,
        }}
      />
      {icon && <span className="material-icons-outlined">{icon}</span>}
    </div>
  );
};

export default TextBox;
