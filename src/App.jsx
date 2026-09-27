import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStote from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStote}>
        <Body />
      </Provider>
    </>
  );
}

export default App;
