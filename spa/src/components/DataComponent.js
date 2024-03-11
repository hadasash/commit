import React from 'react';
import { Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const DataComp = () => {
  const userData = useSelector((state) => state.userData);

  return (
    <Paper  style={{ padding: '20px', marginTop: '20px' }}>    <Typography>
      <strong>User name:</strong> {userData?.username}
    </Typography>
    <Typography>
      <strong>Phone number:</strong> {userData?.phoneNumber}
    </Typography>
  </Paper>
  );
};

export default DataComp;
