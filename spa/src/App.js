import React, { useState } from 'react';
import { Tab, Tabs, Container, Paper } from '@mui/material';
import FormComp from './components/FormComponent';
import DataComp from './components/DataComponent';

const App = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (formData) => {
    setUserData(formData);
    setTabIndex(1); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Tabs value={tabIndex} onChange={(e, index) => setTabIndex(index)}>
          <Tab label="Form" />
          <Tab label="User" />
        </Tabs>
        {tabIndex === 0 && <FormComp onSubmit={handleFormSubmit} />}
        {tabIndex === 1 && <DataComp userData={userData} />}
      </Paper>
    </Container>
  );
};

export default App;
