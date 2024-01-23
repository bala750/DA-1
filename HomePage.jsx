// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 

const HomePage = () => {
  return (
    <div className="homepage">
        <Navbar />
      <header>
        <h1>Welcome to the Agriculture Loan Portal</h1>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Apply for Agriculture Loans</li>
            <li>Check Loan Status</li>
            <li>Interest Rates and Terms</li>
            {/* Add more features as needed */}
          </ul>
        </section>
        <section className="actions">
          <Link to="/apply-loan">Apply for Loan</Link>
          <Link to="/check-status">Check Loan Status</Link>
          {/* Add more action links as needed */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Agriculture Loan Portal</p>
      </footer>
    </div>
  );
};

export default HomePage;
