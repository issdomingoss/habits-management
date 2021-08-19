import { useContext, useState } from "react";
import { Container, ButtonCreate } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GroupsContext } from "../../providers/Groups";

export const CreateGroups = ({ group = {} }) => {
  const [isModal, setIsModal] = useState(false);
  const { createGroup } = useContext(GroupsContext);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const schema = yup.object().shape({
    name: yup.string().required("Required a name!"),
    description: yup.string().required("Required a description!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    const newGroup = {
      name: data.name,
      description: data.description,
      category: "Track-Speak",
    };

    createGroup(newGroup);

    closeModal();
  };

  return (
    <Container isModal={isModal}>
      <div>
        {isModal === false ? (
          <ButtonCreate onClick={openModal}>Criar Grupo</ButtonCreate>
        ) : (
          <div className="modal-container">
            <div className="modal">
              <div className="form-container">
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                  <div className="form__header">
                    <h4>Create Group</h4>
                    <div className="container-buttons">
                      <button className="cancel-button" onClick={closeModal}>
                        Cancel
                      </button>

                      <button type="submit" className="save-button">
                        Create
                      </button>
                    </div>
                  </div>
                  <div className="container-inputs">
                    <div className="text-input">
                      <p>Name</p>
                      <input
                        placeholder={errors.name?.message}
                        type="text"
                        defaultValue={group.name || ""}
                        {...register("name")}
                      />
                    </div>

                    <div className="text-input">
                      <p>Description</p>
                      <input
                        placeholder={errors.description?.message}
                        type="text"
                        defaultValue={group.description || ""}
                        {...register("description")}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
