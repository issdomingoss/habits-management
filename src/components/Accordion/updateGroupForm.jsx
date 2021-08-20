import { useContext, useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GroupsContext } from "../../providers/Groups";
import { ContainerModal } from "./styles";
export const EditForm = ({ group = {}, closeModal, item }) => {
  const { updateGroup, myGroups } = useContext(GroupsContext);
  const [att, setAtt] = useState(0);

  useEffect(() => {
    setAtt(att + 1);
  }, [myGroups]);

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
    const updatedGroup = {
      name: data.name,
      description: data.description,
    };

    updateGroup(item, updatedGroup);

    closeModal();
  };

  return (
    <ContainerModal>
      <div>
        <div className="modal">
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <div className="form__header">
                <h4>Edit Group </h4>
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
                  <p>Name</p>
                  <input
                    placeholder={errors.name?.message}
                    type="text"
                    defaultValue={item.name || ""}
                    maxLength="18"
                    {...register("name")}
                  />
                </div>

                <div className="text-input">
                  <p>Description</p>
                  <input
                    placeholder={errors.description?.message}
                    type="text"
                    defaultValue={item.description || ""}
                    {...register("description")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        )
      </div>
    </ContainerModal>
  );
};
