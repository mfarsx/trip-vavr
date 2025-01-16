"use client";

import React from "react";
import PropTypes from "prop-types";

export const LoadingSpinner = ({ size = "8", color = "blue-500" }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
      ></div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
