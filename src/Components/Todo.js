import React, { useState, useEffect } from "react";
import "./Todo.css";


function Task({ task, index, completeTask, removeTask}) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "trash" }}
    >
      {task.title}
      <div className="comments">
        
        <button
          style={{ background: "red" }}
          onClick={() => removeTask(index)}
        ></button>
        <button
          style={{ FontAwesomeIcon: "fa fa-trash" }}
          onClick={() => completeTask(index)}
        ></button>
      </div>
    </div>
  );
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks, trash] = useState([
    {
      title: "Buy Milk",
      completed: true
    },
    {
      title: "06:30am Cycling class at Sats St. Olav",
      completed: true
    },
    {
      title: "Meet Sondre for dinner",
      completed: false
    },
    {
      title: "Hike Trolltunga",
      completed: false
    },
    {
      title: "Finish this app",
      completed: true
    },
    {
      title: "Have drinks with Jake",
      completed: false
    },
    {
      title: "Call Mom",
      completed: true
    },
    {
      title: "Send in appeal",
      completed: false
    },
    {
      title: "Order new License",
      completed: false
    }
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.completed).length);
  });

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const icon  = trash === 'trashoutline' ? 'trashalternative' : 'trash';

  return (
    <div className="todo-container">
      <div style={{ backgroundColor: "#81C7F5" }} className="header">
        Pending tasks({tasksRemaining})
        
      </div>
      <div className="content"></div>
      
      <div className="tasks">
      <i className={` ${icon} icon`} />
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            icon={`${icon} icon`}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
}

export default Todo;
