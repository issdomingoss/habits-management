import { useContext, useEffect, useState } from "react";
import { BiTrash, BiPlusCircle } from "react-icons/bi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { ActivitiesContext } from "../../providers/Activities";

export const ActivityCard = ({ activity = {}, adm, create, group }) => {
  const [isModal, setIsModal] = useState(false);
  const [passedTheDeadline, setPassedTheDeadline] = useState(false);

  const { createActivity, updateActivity, removeActivity } =
    useContext(ActivitiesContext);

  useEffect(() => {
    if (!!create === false) {
      const newDate = transformDate(activity.realization_time);
      const deadline = newDate.split("/");

      const limitDate = new Date(deadline[0], deadline[1] - 1, deadline[2]);

      const myDate = new Date();

      const passLimitDate = myDate.valueOf() > limitDate.valueOf();

      setPassedTheDeadline(passLimitDate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity]);

  const openModal = () => {
    if (adm === true) {
      setIsModal(true);
    }
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Required title!"),
    realization_time: yup.string().required("Required limit date!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const transformDate = (date) => {
    let newDate = date.split("T");
    newDate = newDate[0].split("-").join("/");
    return newDate;
  };

  const onSubmitFunction = (data) => {
    data.realization_time = `${data.realization_time}T15:00:00Z`;

    if (!!create) {
      const newData = { ...data, group: group.id };

      createActivity(newData);
    } else {
      updateActivity(activity.id, data);
    }
    closeModal();
  };

  return (
    <Container
      isModal={isModal}
      isAdm={adm}
      passedTheDeadline={passedTheDeadline}
    >
      <div className="modal">
        {isModal === false ? (
          <div className="card__header">
            <div className="container-title" onClick={openModal}>
              <p className="title">
                {!!create === false ? activity.title : "New activity"}
              </p>
            </div>
            <div className="icons-header">
              {!!create === false ? (
                <p className="date-limit">
                  {" "}
                  {transformDate(activity.realization_time)
                    .split("/")
                    .reverse()
                    .join("/")}
                </p>
              ) : (
                <BiPlusCircle onClick={openModal} />
              )}
            </div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="form__header">
                <h4> {!!create === false ? "Edit" : "Create"} activity</h4>
                <div className="container-buttons">
                  <button className="cancel-button" onClick={closeModal}>
                    Cancel
                  </button>

                  <button type="submit" className="save-button">
                    {!!create === false ? "Save" : "Create"}
                  </button>
                </div>
              </div>
              <div className="container-inputs">
                <div className="text-input">
                  <p>Title*</p>
                  <input
                    placeholder={errors.title?.message}
                    type="text"
                    defaultValue={activity.title || ""}
                    {...register("title")}
                  />
                </div>
                <div className="text-input">
                  <p>Limit date</p>
                  <input type="date" {...register("realization_time")} />
                  <span className="error">
                    {errors.realization_time?.message}
                  </span>
                </div>
              </div>
            </form>
            <div className="container-trash">
              <button
                className="delete-button"
                onClick={() => removeActivity(activity.id, group)}
              >
                <BiTrash className="trash-icon" />
                <span> Delete activity</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
