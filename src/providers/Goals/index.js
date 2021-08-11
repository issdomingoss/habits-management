import { createContext, useState } from "react";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goals, setGoal] = useState([]);

  const addGoal = () => {};
  const removeGoal = () => {};

  return (
    <GoalsContext.Provider value={{ goals, addGoal, removeGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
