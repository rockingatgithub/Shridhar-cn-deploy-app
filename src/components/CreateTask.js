import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
const URL = "https://jsonplaceholder.typicode.com/todos";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [newTasks, setNewTasks] = useState([]);

  const navigate = useNavigate();
  
  function postData() {
    let newTask = {
      title: title,
      userId: 1,
    };
    if(newTask.title === ""){
      toast.error("Please Enter the Title")
    }else{
      Axios.post(URL, newTask).then(() => {
        setNewTasks([...newTasks, newTask]);
        toast.success("Task Added Successfully!");
        navigate("/");
      });
    }
  }

  return (
    <div>
      <div className="input">
        <input
          type="text"
          name="title"
          id="task-title"
          placeholder="Enter Task Title :)"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button className="add-task" onClick={postData} type="submit">
          ADD TASK
        </button>
      </div>
    </div>
  );
}
