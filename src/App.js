import "./App.css";
import Cart from "./components/cart/cart";
import Login from "./components/login/login";
import Purchase from "./components/purchase/purchase";
import Total from "./components/total/total";

function App() {
  return (
    /* 
     * We use provider to make the store object available 
     * to the entire application or only the selected components 
     */

    /*
     * The flow of event handling with redux 
     * - When there is an action, you dispatch with a payload
     */

      <div className="app">
        <Login />
        <Purchase />
        <Cart />
        <Total />
      </div>
  );
}

export default App;
