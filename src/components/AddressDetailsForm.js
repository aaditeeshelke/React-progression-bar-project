import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './address.css';
const AddressDetailsForm = () => {
  const navigate = useNavigate();

  const [permanentAddress, setPermanentAddress] = useState({
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: ''
  });

  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    address: '',
    pincode: '',
    city: '',
    state: '',
    country: ''
  });

  const handlePermanentAddressChange = e => {
    setPermanentAddress({ ...permanentAddress, [e.target.name]: e.target.value });
  };

  const handleCorrespondenceAddressChange = e => {
    setCorrespondenceAddress({ ...correspondenceAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('permanentAddressDetails', JSON.stringify(permanentAddress));
    localStorage.setItem('correspondenceAddressDetails', JSON.stringify(correspondenceAddress));
    navigate('/preview');
  };

  return (
    <div className="container">
      <h2>Address Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <h3>Permanent Address</h3>
            <div className="form-group">
              <label htmlFor="permanentaddress">Address</label>
              <input type="text" className="form-control" id="permanentaddress" name="address" value={permanentAddress.address} onChange={handlePermanentAddressChange} />
            </div>
            <div className="form-group">
              <label htmlFor="permanentPincode">Pincode</label>
              <input type="text" className="form-control" id="permanentPincode" name="pincode" value={permanentAddress.pincode} onChange={handlePermanentAddressChange} />
            </div>
          </div>
          <div className="col-md-6">
            <h3>Correspondence Address</h3>
            <div className="form-group">
              <label htmlFor="correspondenceaddress">Address</label>
              <input type="text" className="form-control" id="correspondenceaddress" name="address" value={correspondenceAddress.address} onChange={handleCorrespondenceAddressChange} />
            </div>
            <div className="form-group">
              <label htmlFor="correspondencePincode">Pincode</label>
              <input type="text" className="form-control" id="correspondencePincode" name="pincode" value={correspondenceAddress.pincode} onChange={handleCorrespondenceAddressChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="permanentCity">City</label>
              <input type="text" className="form-control" id="permanentCity" name="city" value={permanentAddress.city} onChange={handlePermanentAddressChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="correspondenceCity">City</label>
              <input type="text" className="form-control" id="correspondenceCity" name="city" value={correspondenceAddress.city} onChange={handleCorrespondenceAddressChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="permanentState">State</label>
              <input type="text" className="form-control" id="permanentState" name="state" value={permanentAddress.state} onChange={handlePermanentAddressChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="correspondenceState">State</label>
              <input type="text" className="form-control" id="correspondenceState" name="state" value={correspondenceAddress.state} onChange={handleCorrespondenceAddressChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="permanentCountry">Country</label>
              <input type="text" className="form-control" id="permanentCountry" name="country" value={permanentAddress.country} onChange={handlePermanentAddressChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="correspondenceCountry">Country</label>
              <input type="text" className="form-control" id="correspondenceCountry" name="country" value={correspondenceAddress.country} onChange={handleCorrespondenceAddressChange} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
};

export default AddressDetailsForm;
