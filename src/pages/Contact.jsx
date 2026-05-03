import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); 

  // API Integration Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulating a POST request to a fake API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'TrustMart Contact Inquiry',
          body: message,
          userId: 1, 
          email: email
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus('error');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary">Contact Us</h2>
      <p className="text-center text-muted">Send us a message and our API will process it.</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email Address:</label>
                <input 
                  type="email" 
                  className="form-control" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message:</label>
                <textarea 
                  className="form-control" 
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required 
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending via API...' : 'Send Message'}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="alert alert-success mt-3">Message sent successfully to server!</div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mt-3">Failed to connect to API.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;