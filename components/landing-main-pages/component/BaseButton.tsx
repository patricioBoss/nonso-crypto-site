import React from "react";


const BaseButton= ({className, children,...props }) => {
    return (
    <button {...props}
        className={`text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 ${className}`}
      >
        { children }
      </button>
    )
}

export default BaseButton