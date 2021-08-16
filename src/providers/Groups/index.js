import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("token")) || "");
  const [page, setPage] = useState(1);

  const addGroup = (group) => {
    const newGroup = { ...group };

    api
      .post("/groups/", newGroup, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGroups([...groups, res.data]))
      .catch((err) => console.log(err.res));
  };

  const subscribeGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe`, {
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

    api
      .get(`/groups/?page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAllGroups(res.data.results))
      .catch((e) => console.log(e));
  }, [page, token]);

  return (
    <GroupsContext.Provider
      value={{ groups, addGroup, subscribeGroup, allGroups, setPage, page }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
