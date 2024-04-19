import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PersonalDetailsForm.css';

const PersonalDetailsForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    photoDataUrl: '' // Add photoDataUrl to store data URL of the photo
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    if (e.target.name === 'photo') {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, photoDataUrl: reader.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const validateForm = () => {
    let errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.photoDataUrl) { // Check if photoDataUrl is empty
      errors.photo = 'Photo is required';
    }
    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem('personalDetails', JSON.stringify(formData));
      navigate('/education', { state: { formData } }); // Pass form data to preview page
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="form-container">
          <h2>Upload Your Photo</h2>
          <div className="form-group">
            <input type="file" id="photo" name="photo" onChange={handleChange} className="form-control-file" />
            {errors.photo && <span className="error">{errors.photo}</span>}
          </div>
          <h2>Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="form-control">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            {/* Other personal details inputs */}
            <button type="submit" className="btn btn-primary">Next</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
