import React from "react";

const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "default",
  ...props
}) => {
  const baseStyles =
    "font-bold rounded-full transition-all duration-300 flex items-center justify-center";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white transform hover:scale-105 hover:rotate-3",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 hover:-rotate-3",
    ghost: "bg-white bg-opacity-20 hover:bg-opacity-30 text-white",
  };

  const sizes = {
    default: "py-3 px-6",
    icon: "p-3",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
