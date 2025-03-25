import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => { state.push(action.payload); },
    deleteTask: (state, action) => state.filter(task => task.id !== action.payload),
    updateTask: (state, action) => state.map(task => task.id === action.payload.id ? action.payload : task),
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
