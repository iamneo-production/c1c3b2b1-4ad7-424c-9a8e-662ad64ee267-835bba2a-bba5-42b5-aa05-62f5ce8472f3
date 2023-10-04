import React from 'react';
import './Privacy.css';
import feedback1 from '../Assets/Image/feedback.jpg';
import { useNavigate } from 'react-router-dom';
const Privacy = () => {

  const nav=useNavigate();
  const handleGoBack = () => {
   // Navigate to your signup pagenav(')
   nav('/');
  };
  return (
    <div className='hk'>
    <div className="header-image7">
    <img src={feedback1} alt="FCb" />
    </div>
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
 
      <p>This Privacy Policy explains how we collect, use, and disclose personal information when you use our services and website.</p>

      <h2>Information We Collect</h2>
      <p>We may collect information from you when you visit our website, register for an account, make a purchase, or interact with our services. This information may include:</p>
      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>Address</li>
        <li>Phone number</li>
        <li>Usage data</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the collected information for various purposes, including:</p>
      <ul>
        <li>Providing and maintaining our services</li>
        <li>Improving our services</li>
        <li>Processing payments</li>
        <li>Communicating with you</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>We may share your personal information with third-party service providers that assist us in delivering our services. We will not sell, rent, or trade your personal information to third parties for marketing purposes without your consent.</p>

      <h2>Security</h2>
      <p>We take reasonable measures to protect your personal information, but no method of transmission over the internet is completely secure.</p>
      <button onClick={handleGoBack} className="go-back-button">Go Back</button>
      {/* Add more sections as needed for your specific privacy policy */}
    </div>

    </div>
  );
};

export default Privacy;
