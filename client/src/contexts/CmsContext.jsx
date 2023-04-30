import { createContext, useContext } from "react";

export const CmsContext = createContext(null);

const CmsContextProvider = ({ children }) => {
  const value = {};
  return <CmsContext.Provider value={value}>
    {children}
  </CmsContext.Provider>;
};

export default CmsContextProvider;
