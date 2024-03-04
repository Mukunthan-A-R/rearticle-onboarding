import React from "react";

const InputFieldComponent = ({
  placeholder = "Enter data",
  type = "text",
  enable,
  onClick,
}) => {
  return (
    <div class="flex flex-row border border-gray-300 rounded-md">
      <input
        class=" pl-4 pr-20 py-2 font-normal w-full px-2 focus:outline-none "
        type="text"
        placeholder={placeholder}
      />
      <span class="flex items-center bg-transparent rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
        <button
          onClick={onClick}
          class="text-sm font-normal text-[#2262C6] bg-[#fff] "
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
