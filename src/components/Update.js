import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
const URL = "https://jsonplaceholder.typicode.com/todos";


export default function Update(props) {
//navigate used to go from one page to another
  const navigate = useNavigate();
  const data = props.data;
  const { id } = useParams();

  let taskToBeUpdated = { title: "" };
  //iterating over data
  data.forEach((item) => {
    if (item.userId === 1 && item.id.toString() === id) {
      taskToBeUpdated = item;
    }
  });

  const [title, setTitle] = useState(taskToBeUpdated.title);
  
  function updateTask() {
    
    const updatedTask = {
      id: id,
      title: title,
      userId: 1,
    };
    Axios.put(`${URL}/${id}`, updatedTask)
      .then(() => {
        toast.success("Task Updated Successfully!");
        navigate("/");
      })
      .catch((err) => toast.error("Can not update..!"));
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button className="add-task" type="submit" onClick={updateTask} >
          Update Task
        </button>
      </form>
    </div>
  );
}
