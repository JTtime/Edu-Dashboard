import React, { useState, useEffect } from 'react';
import { Typography, Paper } from '@mui/material';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-IN', options);
  };

  return (
    <Paper style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: 'fit-content', padding: '0.5rem' }}>
      <Typography variant="h5">{formatTime(currentTime)}</Typography>
      <Typography variant="subtitle1">{formatDate(currentTime)}</Typography>
    </Paper>
  );
};

export default TimeDisplay;
