import { createContext, useState } from "react";

export const ApplyContext = createContext();

export const ApplyProvider = ({ children }) => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };
  const closePopup = () => {
    setPopup(false);
  };

  return (
    <ApplyContext.Provider value={{ popup, openPopup, closePopup }}>
      {children}
    </ApplyContext.Provider>
  );
};
