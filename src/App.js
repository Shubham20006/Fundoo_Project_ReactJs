import Router from "./Router/Router"
import store from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>

    </div>
  );
}

export default App;
