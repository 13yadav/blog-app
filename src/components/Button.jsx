function Button({
  children,
  type = "button",
  bgColor = "bg-[#172121]",
  textColor = "text-[#E5D0CC]",
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
