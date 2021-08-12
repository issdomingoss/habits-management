import { useState } from "react";
import { BiCheckCircle, BiPlusCircle, BiTrash } from "react-icons/bi";
import { Container } from "./styles";

import * as yup from "yup";
import { useForm, handleSubmit } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const HabitCard = ({ habit = {}, create }) => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const schema = yup.object().shape({
    title: yup.string().required("Required title!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    if (create) {
      //chamar função que cria
      console.log("Criou", data);
    } else {
      console.log("Editou", data);
    }
  };

  return (
    <Container isModal={isModal}>
      <div className="modal">
        {isModal === false ? (
          <div className="card__header" onClick={openModal}>
            <p className="title">{habit.title || "New habit"}</p>
            <div className="icons-header">
              {create ? (
                <BiPlusCircle />
              ) : (
                <BiCheckCircle className="check-icon" />
              )}
            </div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="form__header">
                <h4>{create ? "Create" : "Edit"} habit</h4>
                <div className="container-buttons">
                  <button className="cancel-button" onClick={closeModal}>
                    Cancel
                  </button>

                  <button type="submit" className="save-button">
                    {create ? "create" : "Save"}
                  </button>
                </div>
              </div>
              <div className="container-inputs">
                <div className="text-input">
                  <p>Title*</p>
                  <input
                    placeholder={errors.title?.message}
                    type="text"
                    defaultValue={habit.title || ""}
                    {...register("title")}
                  />
                </div>
                <div className="select-input">
                  <p>Difficulty</p>
                  <select
                    defaultValue={habit.difficulty || "Easy"}
                    {...register("difficulty")}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Intermediary">Intermediary</option>
                    <option value="Hard">Hard</option>
                    <option value="Very Hard">Very Hard</option>
                  </select>
                </div>
                <div className="select-input">
                  <p>Frequency</p>
                  <select
                    defaultValue={habit.frequency || "Daily"}
                    {...register("frequency")}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
            </form>
            {create !== true && (
              <div className="container-trash">
                <button className="delete-button">
                  <BiTrash className="trash-icon" />
                  <span> Delete habit</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};
