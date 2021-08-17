import { Container, Load } from "./styles";

const Loading = ({ size = "30" }) => {
  return (
    <Container>
      <Load size={size}></Load>
    </Container>
  );
};
export default Loading;
