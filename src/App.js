import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask } from './tasksReducer';
import AddTask from './AddTask';
import ListTask from './ListTask';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (description) => {
    dispatch(addTask(description));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAddTask} />
      <ListTask tasks={tasks} onToggle={handleToggleTask} />
    </div>
  );
};

export default App;

