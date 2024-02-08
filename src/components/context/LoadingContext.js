import React, { createContext, useContext, useState } from "react";

const ProgressBarContext = createContext();

export const useProgressBar = () => useContext(ProgressBarContext);

function LoadingContext({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <ProgressBarContext.Provider value={{ loading, setLoading }}>
      {children}
    </ProgressBarContext.Provider>
  );
}

export default LoadingContext;
