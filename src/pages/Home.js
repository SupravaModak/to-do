import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/authSlice';
import { Button, Typography, Container, Paper, Box } from '@mui/material';

const Home = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, background: '#ffffff' }}>
        
        {/* ✅ Header Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1976d2' }}>
          📝 Welcome to To-Do App
        </Typography>
        
        {/* ✅ Authentication Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          {isAuthenticated ? (
            <Button variant="contained" color="error" onClick={() => dispatch(logout())}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={() => dispatch(login())}>
              Login
            </Button>
          )}
        </Box>

        {/* ✅ Show Task Management Only if Logged In */}
        {isAuthenticated ? (
          <>
            <TaskInput />
            <TaskList />
          </>
        ) : (
          <Typography align="center" sx={{ color: 'gray', marginTop: 2 }}>
            Please login to manage your tasks.
          </Typography>
        )}

      </Paper>
    </Container>
  );
};

export default Home;
