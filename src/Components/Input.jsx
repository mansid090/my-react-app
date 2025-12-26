import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", showToggle, isPasswordVisible, onToggle, ...props },
  ref
) {
  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <label className="text-sm text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        className="
          border rounded-md p-2 pr-10
          bg-white dark:bg-gray-700
          text-black dark:text-white
          dark:border-gray-600
          focus:outline-none focus:ring-2
          focus:ring-black dark:focus:ring-white
        "
        {...props}
      />

      
      {showToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-2 top-9 text-sm text-gray-500 dark:text-gray-300"
        >
          {isPasswordVisible ? "🙈" : "👁"}
        </button>
      )}
    </div>
  );
});

export default Input;
