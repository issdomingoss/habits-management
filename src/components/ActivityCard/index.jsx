import { useEffect, useState } from "react";
import { BiTrash, BiPlusCircle } from "react-icons/bi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";

export const ActivityCard = ({ activity = {}, adm, create }) => {
  const [isModal, setIsModal] = useState(false);
  const [passedTheDeadline, setPassedTheDeadline] = useState(false);

  useEffect(() => {
    if (!!create === false) {
      const deadline = activity.realization_time.split("/").reverse();

      const limitDate = new Date(deadline[0], deadline[1] - 1, deadline[2]);

      const myDate = new Date();

      const passLimitDate = myDate.valueOf() > limitDate.valueOf();

      setPassedTheDeadline(passLimitDate);
    }
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

  const onSubmitFunction = (data) => {
    data.realization_time = data.realization_time
      .split("-")
      .reverse()
      .join("/");

    if (!!create) {
      console.log("Criou", data);
    } else {
      console.log("Editou", data);
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
                <p className="date-limit"> {activity.realization_time}</p>
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
              <button className="delete-button">
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
