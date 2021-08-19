import { createContext, useContext } from "react";
import api from "../../services/api";
import { GroupsContext } from "../Groups";
import { toast } from "react-toastify";

export const ActivitiesContext = createContext();

export const ActivitiesProvider = ({ children }) => {
  const { myGroups, setMyGroups } = useContext(GroupsContext);

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
        .then((response) => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === activity.group) {
              item.activities = [...item.activities, response.data];
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

  const updateActivity = (activity_ID, updated_Item) => {
    const token = getToken();

    if (!!token) {
      api
        .patch(`/activities/${activity_ID}/`, updated_Item, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === response.data.group) {
              item.activities = item.activities.map((activity) => {
                if (activity.id === activity_ID) {
                  activity = { ...activity, ...response.data };
                }
                return activity;
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

  const removeActivity = (activity_ID, group) => {
    const token = getToken();

    if (!!token) {
      api
        .delete(`/activities/${activity_ID}/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          const updateGroups = myGroups.map((item) => {
            if (item.id === group.id) {
              item.activities = item.activities.filter(
                (activity) => activity.id !== activity_ID
              );
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
    <ActivitiesContext.Provider
      value={{
        createActivity,
        updateActivity,
        removeActivity,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};
