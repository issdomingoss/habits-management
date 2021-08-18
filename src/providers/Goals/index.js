import { createContext, useState, useContext } from "react";
import api from "../../services/api";
import { GroupsContext } from "../Groups";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goal, setGoal] = useState([]);
  const { myGroups, setMyGroups } = useContext(GroupsContext);

  const getToken = () => {
    return JSON.parse(localStorage.getItem("token")) || "";
  };

  const createGoal = (goal) => {
    const token = getToken();

    if (!!token) {
      api
        .post("/goals/", goal, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === goal.group) {
              item.goals = [...item.goals, response.data];
            }
            return item;
          });
          setMyGroups(updateGroups);
        })
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  const updateGoal = (goalId, updatedItens) => {
    const token = getToken();

    if (!!token) {
      api
        .patch(`/goals/${goalId}/`, updatedItens, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === response.data.group) {
              item.goals = item.goals.map((goal) => {
                if (goal.id === goalId) {
                  goal = { ...goal, ...response.data };
                  console.log("Mudou", goal);
                }
                return goal;
              });
            }
            return item;
          });
          setMyGroups(updateGroups);
        })
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  const getGoal = (goalId) => {
    api
      .get(`/goals/${goalId}/`)
      .then((response) => setGoal(response.data))
      .catch((err) => err.response);
  };

  const removeGoal = (goalId, group) => {
    const token = getToken();

    if (!!token) {
      api
        .delete(`/goals/${goalId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === group.id) {
              item.goals = item.goals.filter((goal) => goal.id !== goalId);
            }
            return item;
          });
          setMyGroups(updateGroups);
        })
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  return (
    <GoalsContext.Provider
      value={{ createGoal, updateGoal, removeGoal, getGoal, goal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
