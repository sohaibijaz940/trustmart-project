import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="text-centre mb-5">
        <h1 className="display-5 fw-bold text-primary">Welcome to TrustMart</h1>
        <p className="lead text-muted">Your trusted partner for market price verification</p>
        <img 
          src="https://placehold.co/1200x300/004488/ffffff?text=TrustMart+Market+Companion" 
          alt="Banner" 
          className="img-fluid rounded shadow mb-4"
        />
      </div>

      <div className="row text-center mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-primary">Data Verification</h4>
              <p>Real-time price verification using trimmed mean algorithms.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-primary">Trusted Suppliers</h4>
              <p>Verified supplier network with quality assurance.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h4 className="text-primary">Market Insights</h4>
              <p>Comprehensive analytics and reporting tools.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center">
          <h4 className="mb-3">Platform Overview</h4>
          <div className="ratio ratio-16x9 shadow">
            <iframe 
              src="https://www.youtube.com/embed/DkLGKo0TsFE" 
              title="TrustMart Overview" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/registration" className="btn btn-warning btn-lg fw-bold shadow">
          Register as Supplier
        </Link>
      </div>
    </div>
  );
};

export default Home;