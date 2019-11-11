import React, { useState } from 'react';
    import './Todo.css';

    function Task({ task }) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
            </div>
        );
    }
    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "Buy Milk",
                completed: true
            },
            {
                title: "Cycling class at 06:30am",
                completed: true
            },
            {
                title: "Have Lunch with Sondre",
                completed: false
            }
        ]);
        return (
            <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }

    export default Todo;