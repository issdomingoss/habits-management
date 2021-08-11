import { createContext, useState } from "react";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const addgroup = () => {};

  return (
    <GroupsContext.Provider value={{ groups, addgroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
