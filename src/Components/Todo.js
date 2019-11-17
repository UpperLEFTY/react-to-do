import React, { useState, useEffect } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faker from "faker";

function Task({ task, index, completeTask, removeTask, FontAwesomeIcon }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <div className="comments">
        <icon />
        <button
          style={{ background: "red" }}
          onClick={() => removeTask(index)}
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
  const [tasks, setTasks] = useState([
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

  return (
    <div className="todo-container">
      <div style={{ backgroundColor: "#81C7F5" }} className="header">
        Pending tasks({tasksRemaining})
      </div>
      <div className="content"></div>
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
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
