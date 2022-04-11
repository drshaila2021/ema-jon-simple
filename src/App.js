import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Order from "./component/Order/Order";
import Inventory from "./component/Inventory/Inventory";
import About from "./component/About/About";
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
