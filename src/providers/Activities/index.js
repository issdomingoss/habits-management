import { createContext, useState } from "react";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [Activities, setActivities] = useState([]);

  const addActivity = () => {};
  const removeActivity = () => {};

  return (
    <ActivitiesContext.Provider
      value={{ Activities, addActivity, removeActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
