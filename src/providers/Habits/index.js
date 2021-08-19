import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || ""
  );

  //Funcoes do provider
  //--------------------------------------------------------------------------------------------------
  const getToken = (tken) => {
    setToken(tken);
  };

  const createHabit = (habit) => {
    const decode = jwt_decode(token);
    const newHabit = { ...habit, user: decode.user_id };

    api
      .post("/habits/", newHabit, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
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
  };

  const updateHabit = (id, updatedItens) => {
    let updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        habit = { ...habit, ...updatedItens };
      }
      return habit;
    });

    api
      .patch(`/habits/${id}/`, updatedItens, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setHabits(updatedHabits))
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
  };

  const removeHabit = (id) => {
    const newHabitsList = habits.filter((habit) => habit.id !== id);

    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setHabits(newHabitsList))
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
  };

  useEffect(() => {
    if (!!token) {
      api
        .get("/habits/personal/", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setHabits([...response.data]);
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
  }, [token]);

  //return do provider
  //======================================================================================
  return (
    <HabitsContext.Provider
      value={{
        habits,
        createHabit,
        updateHabit,
        removeHabit,
        getToken,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
