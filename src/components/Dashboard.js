import React from 'react';
import './Dashboard.css'; // Import CSS file for additional styling

const Dashboard = () => {
  
  const formData = JSON.parse(localStorage.getItem('formData')) || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="personal-details">
        <h3 className="section-heading">Personal Details</h3>
        <p>Photo:</p>
      {formData.personalDetails.photoDataUrl && <img src={formData.personalDetails.photoDataUrl} alt="Uploaded" style={{ width: '200px', height: '200px' }} />}
        <p><strong>First Name:</strong> {formData.personalDetails.firstName}</p>
        <p><strong>Last Name:</strong> {formData.personalDetails.lastName}</p>
        <p><strong>Email:</strong> {formData.personalDetails.email}</p>
       
          </div>

        
        <div className="address-details">
            <h3>Permanent Address</h3>
            <p><strong>Address:</strong> {formData.permanentAddressDetails.address}</p>
            <p><strong>Pincode:</strong> {formData.permanentAddressDetails.pincode}</p>
            <p><strong>City:</strong> {formData.permanentAddressDetails.city}</p>
            <p><strong>State:</strong> {formData.permanentAddressDetails.state}</p>
            <p><strong>Country:</strong> {formData.permanentAddressDetails.country}</p>
          </div>

          <div className="address-details">
            <h3>Correspondence Address</h3>
            <p><strong>Address:</strong> {formData.correspondenceAddressDetails.address}</p>
            <p><strong>Pincode:</strong> {formData.correspondenceAddressDetails.pincode}</p>
            <p><strong>City:</strong> {formData.correspondenceAddressDetails.city}</p>
            <p><strong>State:</strong> {formData.correspondenceAddressDetails.state}</p>
            <p><strong>Country:</strong> {formData.correspondenceAddressDetails.country}</p>
          </div>


        <div className="education-details">
          <h3 className="section-heading">Educational Details</h3>
          <div className="degree-details">
            <h4>Degree Details</h4>
            <p><strong>Degree:</strong> {formData.degreeDetails.degree}</p>
            <p><strong>College:</strong> {formData.degreeDetails.college}</p>
            <p><strong>Course:</strong> {formData.degreeDetails.course}</p>
            <p><strong>City:</strong> {formData.degreeDetails.city}</p>
            <p><strong>State:</strong> {formData.degreeDetails.state}</p>
            <p><strong>Percentage/CGPA:</strong> {formData.degreeDetails.percentage}</p>
          </div>
          
          <div className="twelfth-details">
            <h4>12th Details</h4>
            <p><strong>Education Level:</strong> {formData.twelfthDetails.educationLevel}</p>
            <p><strong>School Name:</strong> {formData.twelfthDetails.school}</p>
            <p><strong>City:</strong> {formData.twelfthDetails.city}</p>
            <p><strong>State:</strong> {formData.twelfthDetails.state}</p>
            <p><strong>Percentage/CGPA:</strong> {formData.twelfthDetails.percentage}</p>
          </div>

          <div className="tenth-details">
            <h4>10th Details</h4>
            <p><strong>Education Level:</strong> {formData.tenthDetails.educationLevel}</p>
            <p><strong>School Name:</strong> {formData.tenthDetails.school}</p>
            <p><strong>City:</strong> {formData.tenthDetails.city}</p>
            <p><strong>State:</strong> {formData.tenthDetails.state}</p>
            <p><strong>Percentage/CGPA:</strong> {formData.tenthDetails.percentage}</p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary print-btn" onClick={handlePrint}>Print</button>
    </div>
  );
};

export default Dashboard;