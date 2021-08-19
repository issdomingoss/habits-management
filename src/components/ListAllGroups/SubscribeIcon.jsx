import { useContext } from "react";
import { GroupsContext } from "../../providers/Groups";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const SubscribeIcon = ({ item, userID }) => {
  const { subscribeGroup } = useContext(GroupsContext);

  const isSubscribed = item.users_on_group.find((user) => user.id === userID);

  return (
    <>
      {!!isSubscribed === false && (
        <AiOutlineUsergroupAdd
          title="Subscribe!"
          className="check-icon"
          onClick={() => subscribeGroup(item)}
        />
      )}
    </>
  );
};
