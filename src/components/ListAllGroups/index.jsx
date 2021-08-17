import React from "react";
import { Lista } from "./styled";

import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";

const ListAllGroups = () => {
  const { allGroups, subscribeGroup } = useContext(GroupsContext);

  return (
    <>
      <h3>All Groups</h3>
      {allGroups.map((item) => (
        <Lista key={item.id}>
          <AiOutlineUsergroupAdd
            title="Subscribe!"
            className="check-icon"
            onClick={() => subscribeGroup(item)}
          />
          <p>Group Name: {item.name}</p>
        </Lista>
      ))}
    </>
  );
};

export default ListAllGroups;
