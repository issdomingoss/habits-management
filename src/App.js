import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Header from "./components/header";
import RandomFrases from "./components/RandomFrases";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RandomFrases />
      <Routes />
    </>
  );
}

export default App;
