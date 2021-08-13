import { createContext, useState } from "react";
import api from "../../services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  const [goal, setGoal] = useState([]);

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
          console.log(response.data);
        })
        .catch((err) => console.log(err.response));
    }
  };

  const updateGoal = (goalId, updatedItens) => {
    const token = getToken();

    if (!!token) {
      api
        .patch(`/goals/${goalId}/`, updatedItens, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err.response));
    }
  };

  const getGoal = (goalId) => {
    const token = getToken();

    if (!!token) {
      api
        .get(`/goals/${goalId}/`)
        .then((response) => setGoal(response.data))
        .catch((err) => err.response);
    }
  };

  const removeGoal = (goalId) => {
    const token = getToken();

    if (!!token) {
      api
        .delete(`/goals/${goalId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => console.log("removido com sucesso"))
        .catch((err) => console.log(err.response));
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
