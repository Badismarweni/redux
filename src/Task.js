import React from 'react';

const Task = ({ task, onToggle }) => {
  const { id, description, isDone } = task;

  return (
    <div>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onToggle(id)}
      />
      <span>{description}</span>
    </div>
  );
};

export default Task;
