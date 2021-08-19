import React from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import { Lista, Container, Title } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
const ListAllGroups = () => {
  const { allGroups, subscribeGroup } = useContext(GroupsContext);

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
