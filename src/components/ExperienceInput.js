import React, {useState} from 'react';
import TaskInput from './TaskInput';

function ExperienceInput(props) {
    const {name, title, tasks, dates, onDelete, onExperienceChange} = props;

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete();
    }

    const handleChange = (type, value) => {
        onExperienceChange({name, title, tasks, dates, [type]: value});
    }

    const [nextTaskID, setNextTaskID] = useState(0);

    const deleteTask = (id) => {
        handleChange('tasks', tasks.filter((task) => task.id !== id));
    }

    const addTask = (e) => {
        e.preventDefault();
        handleChange('tasks', [...tasks, {description: '', id: nextTaskID}]);
        setNextTaskID(nextTaskID + 1);
    }

    const updateTask = (info, id) => {
        const newInfo = {description: info, id};
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === id) {
                const beforeTasks = tasks.slice(0, i);
                beforeTasks.push(newInfo);
                const newTasks = beforeTasks.concat(tasks.slice(i + 1, tasks.length));
                handleChange('tasks', newTasks);
            }
        }
    }

    return (
        <div>
            <form>
                <label>
                    Company Name:
                    <input type='text' value={name} onChange={(e) => handleChange('name', e.target.value)} />
                </label>
                <label>
                    Title:
                    <input type='text' value={title} onChange={(e) => handleChange('title', e.target.value)} />
                </label>
                <label>
                    Tasks:
                    <ul>
                        {tasks.map((task) => {
                            return (
                                <TaskInput 
                                    description={task.description}
                                    onDelete={() => deleteTask(task.id)}
                                    onChange={(info) => updateTask(info, task.id)}
                                    key={task.id}
                                />
                            )}
                        )}
                    </ul>
                    <button onClick={addTask}>Add New Task</button>
                </label>
                <label>
                    Dates:
                    <input type='text' value={dates} onChange={(e) => handleChange('dates', e.target.value)} />
                </label>
                <button onClick={handleDelete}>X</button>
            </form>
        </div>
    )
}

export default ExperienceInput;