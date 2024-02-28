// Redux actions and reducers for tasks management

// Actions types
const ADD_TASK = 'ADD_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

// Action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random().toString(36).substr(2, 9), // Generate random ID
    description,
    isDone: false,
  }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

// Reducer
const initialState = {
  tasks: []
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        )
      };
    default:
      return state;
  }
};

export default tasksReducer;
