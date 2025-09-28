import React from "react";

export function Button({ children, onClick, className, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
