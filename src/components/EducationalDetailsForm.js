import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './education.css';

const EducationalDetailsForm = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const [degreeDetails, setDegreeDetails] = useState({
    degree: '',
    college: '',
    course: '',
    city: '',
    state: '',
    percentage: ''
  });

  const [twelfthDetails, setTwelfthDetails] = useState({
    educationLevel: '',
    school: '',
    city: '',
    state: '',
    percentage: ''
  });

  const [tenthDetails, setTenthDetails] = useState({
    educationLevel: '',
    school: '',
    city: '',
    state: '',
    percentage: ''
  });

  const handleDegreeChange = e => {
    setDegreeDetails({ ...degreeDetails, [e.target.name]: e.target.value });
  };

  const handleTwelfthChange = e => {
    setTwelfthDetails({ ...twelfthDetails, [e.target.name]: e.target.value });
  };

  const handleTenthChange = e => {
    setTenthDetails({ ...tenthDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('degreeDetails', JSON.stringify(degreeDetails));
    localStorage.setItem('twelfthDetails', JSON.stringify(twelfthDetails));
    localStorage.setItem('tenthDetails', JSON.stringify(tenthDetails));
    navigate('/address'); // Use the navigate function to redirect
  };

  return (
    <div>
      <h2>Educational Details</h2>
      <form onSubmit={handleSubmit}>

        {/* Degree Details */}
        <div className="education-section">
          <h3>Degree Details</h3>
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" value={degreeDetails.degree} onChange={handleDegreeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="college">College Name</label>
            <input type="text" id="college" name="college" value={degreeDetails.college} onChange={handleDegreeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course Name</label>
            <input type="text" id="course" name="course" value={degreeDetails.course} onChange={handleDegreeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={degreeDetails.city} onChange={handleDegreeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" value={degreeDetails.state} onChange={handleDegreeChange} />
          </div>
          <div className="form-group">
            <label htmlFor="percentage">Percentage/CGPA</label>
            <input type="text" id="percentage" name="percentage" value={degreeDetails.percentage} onChange={handleDegreeChange} />
          </div>
        </div>

        {/* 12th Details */}
        <div className="education-section">
          <h3>12th Details</h3>
          <div className="form-group">
            <label htmlFor="educationLevel12">Education Level</label>
            <input type="text" id="educationLevel12" name="educationLevel" value={twelfthDetails.educationLevel} onChange={handleTwelfthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="school12">School Name</label>
            <input type="text" id="school12" name="school" value={twelfthDetails.school} onChange={handleTwelfthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city12">City</label>
            <input type="text" id="city12" name="city" value={twelfthDetails.city} onChange={handleTwelfthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state12">State</label>
            <input type="text" id="state12" name="state" value={twelfthDetails.state} onChange={handleTwelfthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="percentage12">Percentage/CGPA</label>
            <input type="text" id="percentage12" name="percentage" value={twelfthDetails.percentage} onChange={handleTwelfthChange} />
          </div>
        </div>

        {/* 10th Details */}
        <div className="education-section">
          <h3>10th Details</h3>
          <div className="form-group">
            <label htmlFor="educationLevel10">Education Level</label>
            <input type="text" id="educationLevel10" name="educationLevel" value={tenthDetails.educationLevel} onChange={handleTenthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="school10">School Name</label>
            <input type="text" id="school10" name="school" value={tenthDetails.school} onChange={handleTenthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city10">City</label>
            <input type="text" id="city10" name="city" value={tenthDetails.city} onChange={handleTenthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="state10">State</label>
            <input type="text" id="state10" name="state" value={tenthDetails.state} onChange={handleTenthChange} />
          </div>
          <div className="form-group">
            <label htmlFor="percentage10">Percentage/CGPA</label>
            <input type="text" id="percentage10" name="percentage" value={tenthDetails.percentage} onChange={handleTenthChange} />
          </div>
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default EducationalDetailsForm;
