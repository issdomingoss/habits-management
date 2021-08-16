import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";

export const ActivityCard = ({ activity = {}, adm }) => {
  const [isModal, setIsModal] = useState(false);

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
    console.log(data);
    closeModal();
  };

  return (
    <Container isModal={isModal} isAdm={adm}>
      <div className="modal">
        {isModal === false ? (
          <div className="card__header">
            <div className="container-title" onClick={openModal}>
              <p className="title">Activity x</p>
            </div>
            <div className="icons-header"></div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="form__header">
                <h4> Edit activity</h4>
                <div className="container-buttons">
                  <button className="cancel-button" onClick={closeModal}>
                    Cancel
                  </button>

                  <button type="submit" className="save-button">
                    Save
                  </button>
                </div>
              </div>
              <div className="container-inputs">
                <div className="text-input">
                  <p>Title*</p>
                  <input
                    placeholder={errors.title?.message}
                    type="text"
                    defaultValue={""}
                    {...register("title")}
                  />
                </div>
                <div className="text-input">
                  <p>Limit date</p>
                  <input
                    type="date"
                    placeholder={errors.realization_time?.message}
                    {...register("realization_time")}
                  />
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
