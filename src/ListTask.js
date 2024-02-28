import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, onToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default ListTask;
