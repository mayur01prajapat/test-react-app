import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./components/Cart";
import ShowMessage from "./components/ShowMessage";

function App() {
  return (
    <Provider store={store}>
      <ShowMessage />
      <Cart />
    </Provider>
  );
}

export default App;
