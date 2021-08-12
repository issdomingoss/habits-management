import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import RandomFrases from "./components/RandomFrases";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Accordion />
      <RandomFrases />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
