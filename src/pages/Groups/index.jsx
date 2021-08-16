import Accordion from "../../components/Accordion";
import { CreateGroups } from "../../components/CreateGroups";
import ListAllGroups from "../../components/ListAllGroups";

const PageGroups = () => {
  return (
    <div>
      <CreateGroups />
      <Accordion />
      <ListAllGroups />
    </div>
  );
};

export default PageGroups;
