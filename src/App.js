import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEvent from "./components/AddEvent/AddEvent";
import EventList from "./components/EventList/EventList";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home> </Home>}></Route>
        <Route path="/home" element={<Home> </Home>}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard/eventList"
          element={<EventList></EventList>}
        ></Route>
        <Route
          path="/dashboard/addEvent"
          element={<AddEvent></AddEvent>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
