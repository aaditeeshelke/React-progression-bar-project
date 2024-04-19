import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreviewAndSubmitForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PreviewAndSubmitForm = ({ photoDataURL, setPhotoDataURL }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalDetails: JSON.parse(localStorage.getItem('personalDetails')) || {},
    degreeDetails: JSON.parse(localStorage.getItem('degreeDetails')) || {},
    twelfthDetails: JSON.parse(localStorage.getItem('twelfthDetails')) || {},
    tenthDetails: JSON.parse(localStorage.getItem('tenthDetails')) || {},
    permanentAddressDetails: JSON.parse(localStorage.getItem('permanentAddressDetails')) || {},
    correspondenceAddressDetails: JSON.parse(localStorage.getItem('correspondenceAddressDetails')) || {}
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const [photoDataUrl, setPhotoDataUrl] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null); 
  // Assuming formData contains the photo as a base64 data URL
  const { personalDetails, permanentAddressDetails, correspondenceAddressDetails, degreeDetails, twelfthDetails, tenthDetails } = formData;
  



  useEffect(() => {
    if (personalDetails && personalDetails.photo) {
      const imageUrl = URL.createObjectURL(personalDetails.photo);
      setPhotoUrl(imageUrl);
      return () => URL.revokeObjectURL(imageUrl); // Clean up to release the object URL
    }
  }, [personalDetails]);

  console.log('photoDataUrl:', photoDataUrl);
  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('formData', JSON.stringify(formData));
      navigate('/dashboard');
    }, 2000);
  };
 
  return (
    <div className="page">
      <div className="container">
        <div className="form-container">
          <h2>Preview Your Details</h2>
          <div className="preview-details">
         < h3>Personal Details:</h3>
         <p>Photo:</p>
      {personalDetails.photoDataUrl && <img src={personalDetails.photoDataUrl} alt="Uploaded" style={{ width: '200px', height: '200px' }} />}
      <p>First Name: {personalDetails.firstName}</p>
      <p>Last Name: {personalDetails.lastName}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Gender: {personalDetails.gender}</p>
      
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
              <h3>Educational Details</h3>
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
          <button type="button" onClick={handleSubmit} className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewAndSubmitForm;
