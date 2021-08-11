import { createContext, useState } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habit, setHabit] = useState([]);

  const addHabit = () => {};
  const removeHabit = () => {};

  return (
    <HabitsContext.Provider value={{ habit, addHabit, removeHabit }}>
      {children}
    </HabitsContext.Provider>
  );
};
