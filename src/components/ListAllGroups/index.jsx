import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/Groups";
import { Lista, Container, Title } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
const ListAllGroups = () => {
  const { allGroups, subscribeGroup, myGroups } = useContext(GroupsContext);
  const [att, setAtt] = useState(0);

  useEffect(() => {
    setAtt(att + 1);
  }, [allGroups, subscribeGroup, myGroups]);

  return (
    <>
      <Title>All English Study Groups</Title>
      <Container>
        {allGroups.map((item) => (
          <Lista key={item.id}>
            <img className="logo" src={Logo} alt="logo" />
            <div className="group-information">
              <p>Name: {item.name}</p>
              <p>Description: {item.description}</p>
              <p>Followers: {item.users_on_group.length}</p>
            </div>

            <AiOutlineUsergroupAdd
              title="Subscribe!"
              className="check-icon"
              onClick={() => subscribeGroup(item)}
            />
          </Lista>
        ))}
      </Container>
    </>
  );
};

export default ListAllGroups;
