function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <div>
      <button
        className={`font-bold py-2 px-4 rounded ${bgColor} ${textColor} ${className}`}
        type={type}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
