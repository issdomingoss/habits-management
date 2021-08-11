import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import RandomFrases from "./components/RandomFrases";

function App() {
  return (
    <>
      <RandomFrases />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
