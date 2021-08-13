import { createContext, useState } from "react";
import api from "../../services/api";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const [Activity, setActivity] = useState([]);

  const getToken = () => {
    return JSON.parse(localStorage.getItem("token")) || "";
  };

  const createActivity = (activity) => {
    const token = getToken();

    if (!!token) {
      api
        .post("/activities/", activity, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  const updateActivity = (activity_ID, updated_Item) => {
    const token = getToken();

    if (!!token) {
      api
        .patch(`/activities/${activity_ID}/`, updated_Item, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  const removeActivity = (activity_ID) => {
    const token = getToken();

    if (!!token) {
      api
        .delete(`/activities/${activity_ID}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => console.log("removido com sucesso"))
        .catch((err) => console.log(err.response));
    } else {
      console.log("token não disponível");
    }
  };

  const getActivity = (activity_ID) => {
    api
      .get(`/activities/${activity_ID}/`)
      .then((response) => setActivity(response.data))
      .catch((err) => console.log(err.response));
  };

  return (
    <ActivitiesContext.Provider
      value={{
        createActivity,
        updateActivity,
        removeActivity,
        getActivity,
        Activity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
