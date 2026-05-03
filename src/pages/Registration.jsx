import React, { useState } from 'react';

const Registration = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    supplierid: '',
    componenttype: '',
    price: '',
    quality: 'original',
    locationconsent: false
  });

  const [submitted, setSubmitted] = useState(false);

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 3. Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call or processing
    console.log("Registered Data:", formData);
    setSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Supplier Registration</h2>
      
      {submitted && (
        <div className="alert alert-success text-center">
          Registration Successful! Data logged to console.
        </div>
      )}

      <div className="card p-4 shadow mx-auto" style={{ maxWidth: '600px' }}>
        <form onSubmit>
          <div className="mb-3">
            <label className="form-label">Supplier ID:</label>
            <input 
              type="text" 
              name="supplierid" 
              className="form-control" 
              value={formData.supplierid}
            //  onChange={handleChange}
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Component Type:</label>
            <select 
              name="componenttype" 
              className="form-select"
              value={formData.componenttype}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Component --</option>
              <option value="screen">Smartphone Screen</option>
              <option value="battery">Battery Pack</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Price (PKR):</label>
            <input 
              type="number" 
              name="price" 
              className="form-control" 
              value={formData.price}
              onChange={handleChange}
              min="100"
              required 
            />
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Quality:</label>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="quality" 
                value="original"
                checked={formData.quality === 'original'}
                onChange={handleChange}
              />
              <label className="form-check-label">Original</label>
            </div>
            <div className="form-check form-check-inline">
              <input 
                className="form-check-input" 
                type="radio" 
                name="quality" 
                value="copy"
                checked={formData.quality === 'copy'}
                onChange={handleChange}
              />
              <label className="form-check-label">Copy</label>
            </div>
          </div>

          <div className="mb-3 form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              name="locationconsent"
              checked={formData.locationconsent}
              onChange={handleChange}
              required 
            />
            <label className="form-check-label">I consent to share location data.</label>
          </div>

          <button type="submit" className="btn btn-success w-100">Submit Registration</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;