import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    api
      .get("/groups/")

      .then((res) => setAllGroups(res.data.results))
      .catch((e) => console.log(e));
  }, []);

  const addgroup = () => {};

  return (
    <GroupsContext.Provider value={{ allGroups, addgroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
