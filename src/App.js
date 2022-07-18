import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import CreateTask from "./components/CreateTask";
import Update from "./components/Update";
import NavBar from "./components/NavBar";
import { ToastContainer } from 'react-toastify';

//------------------------------ API -------------------------------------
const URL = "https://jsonplaceholder.typicode.com/todos";
//---------------------- storing data via react hook --------------------
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //---------------- used AXIOS to fetch URL -----------------------------
    Axios.get(URL).then((res) => setData(res.data)); //res.data Response stored 
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/*-------------To rout over the childs used React Routers */}
        <Route exact path="/" element={<Read data={data} />} />
        <Route exact path="/create-task" element={<CreateTask />} />
        <Route exact path="/update/:id" element={<Update data={data} />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
