import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 2 }}>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Card key={task.id} sx={{ maxWidth: 500, margin: 'auto', background: '#f8f9fa' }}>
            <CardContent>
              <Typography variant="h6">{task.text}</Typography>
              {task.extraInfo && task.extraInfo.type === 'weather' && (
                <Typography color="text.secondary">Weather: {task.extraInfo.data.weather[0].description}</Typography>
              )}
              {task.extraInfo && task.extraInfo.type === 'news' && (
                <Typography color="text.secondary">News: {task.extraInfo.data[0].title}</Typography>
              )}
              <Button 
                variant="outlined" 
                color="error" 
                sx={{ marginTop: 1 }} 
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography align="center" sx={{ marginTop: 2 }}>No tasks added yet.</Typography>
      )}
    </Box>
  );
};

export default TaskList;
