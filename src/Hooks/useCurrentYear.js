import React, { useState, useEffect } from "react";
const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return currentYear;
};
export default useCurrentYear;