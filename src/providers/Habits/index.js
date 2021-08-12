import { createContext, useEffect, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("token")) || "");

  //Funcoes
  //--------------------------------------------------------------------------------------------------
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
      .catch((err) => console.log(err.response));
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
      .then((response) => setHabits(updatedHabits))
      .catch((err) => console.log(err.response));
  };

  const removeHabit = (id) => {
    const newHabitsList = habits.filter((habit) => habit.id !== id);

    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setHabits(newHabitsList))
      .catch((err) => console.log(err.response.data.detail));
  };

  const loadHabits = () => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setHabits([...response.data]);
        console.log(response.data);
      })
      .catch((err) => console.log(err.response.data.error));
  };

  //----------------------------------------------------------------------------------------
  const hbt = {
    title: "Calistenia tarde (15 minutos)",
    category: "Sáude",
    difficulty: "díficil",
    frequency: "Diária",
    achieved: false,
    how_much_achieved: 30,
  };

  useEffect(() => {
    //createHabit(hbt);
    loadHabits();
    //console.log("token: ", token);
  }, []);

  //return do jsx
  //======================================================================================
  return (
    <HabitsContext.Provider
      value={{ habits, createHabit, updateHabit, removeHabit, loadHabits }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
