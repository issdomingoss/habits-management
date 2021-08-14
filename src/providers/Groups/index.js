import { createContext, useState, useEffect } from "react";
import api from "../../services/api";
export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api
      .get("/groups/subscriptions/")

      .then((res) => setGroups(res.data.results))
      .catch((e) => console.log(e));
  }, []);

  const addgroup = () => {};

  return (
    <GroupsContext.Provider value={{ groups, addgroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
