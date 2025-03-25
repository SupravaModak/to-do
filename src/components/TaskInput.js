import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { fetchRelevantData } from '../utills/api';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
  const [task,setTask] = useState(null);
  const [extraInfo] = useState(null);
  const dispatch = useDispatch();

  const handleAddTask = async () => {
    if (task) {
      const apiData = await fetchRelevantData(task);
      dispatch(addTask({ id: Date.now(), text: task, priority: 'Medium', extraInfo: apiData }));
      setTask('');
    }
  };

  return (
  <><div>
      {extraInfo && (
        <div>
          {extraInfo.type === 'weather' && <p>Weather: {extraInfo.data.weather[0].description}</p>}
          {extraInfo.type === 'news' && <p>Top News: {extraInfo.data[0].title}</p>}
        </div>
      )}
    </div>
    <Box sx={{ display: 'flex', gap: 2, padding: 2, justifyContent: 'center' }}>
        <TextField
          variant="outlined"
          label="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{ width: '60%' }} />
        <Button variant="contained" color="primary" onClick={handleAddTask}>Add</Button>
      </Box></>
  );
};

export default TaskInput;
