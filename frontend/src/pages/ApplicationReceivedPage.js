import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/ApplicationReceived.css";

const ApplicationReceivedPage = () => {
  const location = useLocation();

  const appId =
    location.state?.applicationId ||
    location.state?.app_id ||
    location.state?.application_id ||
    null;

  return (
    <div className="app-received-container">
      <div className="success-card">

        <div className="icon-wrapper">
          <span className="icon">🎉</span>
        </div>

        <h2 className="title">Application Received!</h2>
        <p className="subtitle">Thank you for submitting your application.</p>

        {appId ? (
          <div className="id-box">
            <p>Your Application ID</p>
            <h3>{appId}</h3>
          </div>
        ) : (
          <p className="error-text">Application ID not found!</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationReceivedPage;