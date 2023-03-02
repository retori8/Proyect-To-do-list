import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// import textura from "../../img/textura.jpg";

//create your first component
const Home = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    setList([...list, task]);
    setTask("");
  }
  console.log(task);
  console.log(list);

  function handleDelete (i){
    const deleteTask =[...list]
    deleteTask.splice(i,1)
    setList(deleteTask)
  }

  return (
    <div id="container" className="card col-8 p-3 ">
      <div className="card-body ">
        <h5 id="title" className="card-title text-center text-white fs-1">
          TO DO LIST
        </h5>
        <div className="form-floating">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <hr/>
          </form>
        </div>
        <ul className="list-group active">
          {list.length > 0 ? (
            list.map((task, i) => {
              return (
                <li
                  id="task" className="list-group-item d-flex justify-content-between"
                  key={i}
                >
                  {task}
                  <button
                    id="buttonDelete"
                    type="button"
                    className="btn-close btn-close-focus-shadow"
                    aria-label="Close"
                    onClick={handleDelete}
                  ></button>
                </li>
              );
            })
          ) : (
            <li className="list-group-item d-flex justify-content-between">
              "No tasks, add a task"
            </li>
          )}
          <li className="list-group-item align-items-start">
            <span className="badge bg-secondary rounded-pill">
              {list.length} items left
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
