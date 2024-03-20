import { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, labelClass="", type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium text-[#444554] mb-1 ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full rounded border border-gray-300 bg-white px-4 py-2 text-[#444554] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
