import React, { useState } from "react";

const Exchange = ({
  title,
  type,
  disabled,
  exchangeSelected,
  exchanges,
  onDropdownSelect,
  ...rest
}) => {
  const [openDropdown, setDropDown] = useState(false);

  function toggleDropDown() {
    setDropDown(!openDropdown);
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
        <span className="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">
          {title}{" "}
        </span>
        <input
          type={type}
          disabled={disabled}
          className="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
          {...rest}
        />
      </div>
      <div className="relative w-full max-w-[106px] sm:max-w-[159px]">
        <button
          type="button"
          className="w-full flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
          onClick={toggleDropDown}
        >
          <img
            src={`${exchangeSelected.image}`}
            alt=""
            className="flex-shrink-0 h-6 w-6 rounded-full"
          />
          <span className="ml-3 block truncate">{exchangeSelected.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {openDropdown && (
          <ul
            className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee]"
            onClick={toggleDropDown}
          >
            {exchanges.map((exchange) => {
              return (
                <li
                  key={exchange.name}
                  id="listbox-option-0"
                  className="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
                  role="option"
                  onClick={() => onDropdownSelect(exchange)}
                >
                  <div className="flex items-center">
                    <img
                      src={`${exchange.image}`}
                      alt=""
                      className="flex-shrink-0 h-6 w-6 rounded-full"
                    />
                    <span className="font-normal ml-3 block truncate">
                      {exchange.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Exchange;
