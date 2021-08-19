import React from "react";
import { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../../providers/Groups";
import { Lista, Container, Title } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
import jwt_decode from "jwt-decode";
import { SubscribeIcon } from "./SubscribeIcon";

const ListAllGroups = () => {
  const { allGroups, myGroups } = useContext(GroupsContext);
  const [att, setAtt] = useState(0);
  const [userOnToken] = useState(
    jwt_decode(JSON.parse(localStorage.getItem("token")))
  );

  useEffect(() => {
    setAtt(att + 1);
  }, [allGroups, myGroups]);

  return (
    <>
      <Title>All English Study Groups</Title>
      <Container>
        {allGroups.map((item) => (
          <Lista key={item.id}>
            <img className="logo" src={Logo} alt="logo" />

            <div className="group-information">
              <p className="group_Name">{item.name}</p>
              <p>Description: {item.description}</p>
              <p className="followers">
                Followers: {item.users_on_group.length}
              </p>

              {item.users_on_group.map(
                (user) =>
                  user.id === userOnToken.user_id && (
                    <p className="following"> Following</p>
                  )
              )}
            </div>

            <SubscribeIcon userID={userOnToken.user_id} item={item} />
          </Lista>
        ))}
      </Container>
    </>
  );
};

export default ListAllGroups;
