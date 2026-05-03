import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">About TrustMart</h1>
      <div className="card shadow-sm p-4 mb-4 border-success">
        <h3 className="text-success">Our Mission</h3>
        <p>
          To eliminate information asymmetry in local technology markets by providing 
          consumers with accurate, real-time pricing data and verified supplier information.
        </p>
      </div>

      <div className="card shadow-sm p-4">
        <h3>Project Details</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Developer:</strong> Sohaib Ijaz</li>
          <li className="list-group-item"><strong>Goal:</strong> Combat deceptive pricing</li>
          <li className="list-group-item"><strong>Methodology:</strong> Trimmed Mean Statistical Analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default About;