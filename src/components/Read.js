import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
//------------------------ API URL --------------------------
const URL = "https://jsonplaceholder.typicode.com/todos";

export default function Read(props) {
  const data = props.data;

  //------------------- Delete Function ---------------------
  function handleDelete(id) {
    Axios.delete(`${URL}/${id}`)
      .then(() => {
        toast.success("Task Deleted Successfully!");
      })
      .catch((err) => toast.error("Task Can Not Be Deleted"));
  }

  return (
    <div>
      <div className="container">
        {data.map((item, index) => {
          if (item.userId === 1) {
            return (
              <div className="todo-item" key={item.id}>
                <div className="title">
                  <div className="s-no">
                    <b>
                      {index + 1}.{"\u00A0"}{" "}
                    </b>
                  </div>
                  {item.title}
                </div>
                <div className="btns">
                  <button className="edit">
                    <Link to={`/update/${item.id}`}>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                    </Link>
                  </button>
                  <button
                    className="done"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <button className="add-task">
        <Link to="/create-task">Add New Task</Link>
      </button>
    </div>
  );
}
