import Header from "../../components/header";
import { CreateGroups } from "../../components/CreateGroups";
import ListAllGroups from "../../components/ListAllGroups";
import { Container } from "./styles";
import { Redirect } from "react-router-dom";

const PageGroups = ({ AuthN }) => {

  if(!AuthN){
    return <Redirect to='/login'/>
  }

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
