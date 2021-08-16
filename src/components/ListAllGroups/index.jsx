import React from "react";
import { Lista } from "./styled";
import { BiCheckCircle } from "react-icons/bi";
import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";

const ListAllGroups = () => {
  const { allGroups, setPage, page } = useContext(GroupsContext);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  console.log(allGroups);
  return (
    <>
      <h3>Todos os Grupos</h3>
      {allGroups
        .filter((item) => item.category === "Saúde")
        .map((itemFiltered) => (
          <Lista key={itemFiltered.id}>
            <BiCheckCircle className="check-icon" /> {itemFiltered.name}
          </Lista>
        ))}
      <button onClick={previousPage}>Retornar</button>
      <button onClick={() => setPage(page + 1)}>Avançar</button>
    </>
  );
};

export default ListAllGroups;
