import React from "react";

const InputFieldComponent = ({
  placeholder = "Enter data",
  type = "text",
  enable,
  onClick,
}) => {
  const readOnly = enable === "hidden" ? "" : { readOnly: true };
  return (
    <div class="flex flex-row border border-gray-300 rounded-md">
      <input
        {...readOnly}
        class=" pl-4 py-2 font-normal w-full px-2 focus:outline-none"
        type={type}
        placeholder={placeholder}
      />
      <span class="flex items-center bg-transparent rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
        <button
          onClick={onClick}
          class={"text-sm font-normal text-[#2262C6] bg-[#fff] " + enable}
        >
          {/* pointer-events-none */}
          {/* hidden */}
          Edit
        </button>
      </span>
    </div>
  );
};

export default InputFieldComponent;
