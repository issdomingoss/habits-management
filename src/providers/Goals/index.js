import { createContext, useContext } from "react";
import api from "../../services/api";
import { GroupsContext } from "../Groups";
import { toast } from "react-toastify";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
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
        .catch(() => {
          toast.error("Something went wrong!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
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
                }
                return goal;
              });
            }
            return item;
          });
          setMyGroups(updateGroups);
        })
        .catch(() => {
          toast.error("Something went wrong!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
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
        .catch(() => {
          toast.error("Something went wrong!!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  return (
    <GoalsContext.Provider value={{ createGoal, updateGoal, removeGoal }}>
      {children}
    </GoalsContext.Provider>
  );
};
