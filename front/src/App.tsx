import RoutesMain from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./style/GlobalStyle";
// import './style/App.css'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <RoutesMain />
    </div>
  );
}

export default App;
