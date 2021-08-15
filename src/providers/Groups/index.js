import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  const addGroup = (group) => {
    const newGroup = { ...group };

    api
      .post("/groups/", newGroup, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGroups([...groups, res.data]))
      .catch((err) => console.log(err.res));
  };

  useEffect(() => {
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGroups(res.data))
      .catch((e) => console.log(e));
  }, []);

  /*useEffect(() => {
    api
      .get("/groups/")
      .then((res) => setGroups(res.data.results))
      .catch((e) => console.log(e));
  }, []);*/

  return (
    <GroupsContext.Provider value={{ groups, addGroup }}>
      {children}
    </GroupsContext.Provider>
  );
};
