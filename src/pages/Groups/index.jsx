import Header from "../../components/header";
import { CreateGroups } from "../../components/CreateGroups";
import ListAllGroups from "../../components/ListAllGroups";
import { Container } from "./styles";

const PageGroups = () => {
  return (
    <div>
      <Header />
      <Container>
        <CreateGroups />
        <ListAllGroups />
      </Container>
    </div>
  );
};

export default PageGroups;
