import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Progress from './components/Progress';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import EducationalDetailsForm from './components/EducationalDetailsForm';
import AddressDetailsForm from './components/AddressDetailsForm';
import PreviewAndSubmitForm from './components/PreviewAndSubmitForm'; // Import the PreviewAndSubmitForm component
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Progress />
      <Routes>
        <Route path="/" element={<PersonalDetailsForm />} />
        <Route path="/education" element={<EducationalDetailsForm />} />
        <Route path="/address" element={<AddressDetailsForm />} />
        <Route path="/preview" element={<PreviewAndSubmitForm />} /> {/* Define route for Preview and Submit page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
