import { useContext, useState } from "react";
import {
  BiTrash,
  BiPlusCircle,
  BiCheckbox,
  BiCheckboxChecked,
} from "react-icons/bi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styles";
import { GoalsContext } from "../../providers/Goals";

export const GoalCard = ({ goal = {}, adm, create, group }) => {
  const [isModal, setIsModal] = useState(false);

  const { createGoal, updateGoal, removeGoal } = useContext(GoalsContext);

  const openModal = () => {
    if (adm === true) {
      setIsModal(true);
    }
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const goalAchieved = (achieved) => {
    const data = { achieved: !achieved };
    updateGoal(goal.id, data);
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
    if (!!create) {
      const newData = {
        ...data,
        group: group,
        achieved: false,
        how_much_achieved: 100,
      };
      createGoal(newData);
    } else {
      updateGoal(goal.id, data);
    }
    closeModal();
  };

  return (
    <Container isModal={isModal} isAdm={adm}>
      <div className="modal">
        {isModal === false ? (
          <div
            className="card__header"
            title={
              !!create === false
                ? `Difficulty: ${goal.difficulty}`
                : "Create habit"
            }
          >
            <div className="container-title" onClick={openModal}>
              <p className="title">
                {!!create === false ? goal.title : "New goal"}
              </p>
            </div>
            <div className="icons-header">
              {!!create === false ? (
                goal.achieved === true ? (
                  <BiCheckboxChecked
                    className="check-icon"
                    onClick={() => goalAchieved(goal.achieved)}
                  />
                ) : (
                  <BiCheckbox onClick={() => goalAchieved(goal.achieved)} />
                )
              ) : (
                <BiPlusCircle onClick={openModal} />
              )}
            </div>
          </div>
        ) : (
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="form__header">
                <h4> {!!create === false ? "Edit" : "Create"} goal</h4>
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
                    defaultValue={goal.title || ""}
                    {...register("title")}
                  />
                </div>
                <div className="select-input">
                  <p>Difficulty</p>
                  <select
                    defaultValue={goal.difficulty || "Easy"}
                    {...register("difficulty")}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Intermediary">Intermediary</option>
                    <option value="Hard">Hard</option>
                    <option value="Very Hard">Very Hard</option>
                  </select>
                </div>
              </div>
            </form>
            <div className="container-trash">
              <button
                className="delete-button"
                onClick={() => removeGoal(goal.id, group)}
              >
                <BiTrash className="trash-icon" />
                <span> Delete goal</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
