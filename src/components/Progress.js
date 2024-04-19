import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser, FaGraduationCap, FaMapMarkerAlt, FaEye ,FaChartPie} from 'react-icons/fa';
import './Progress.css';

const Progress = ({ onNext }) => {
  const location = useLocation();
  const [completedSteps, setCompletedSteps] = useState([]);

  const steps = [
    { path: '/', label: 'Personal Details', icon: <FaUser /> },
    { path: '/education', label: 'Education', icon: <FaGraduationCap /> },
    { path: '/address', label: 'Address', icon: <FaMapMarkerAlt /> },
    { path: '/preview', label: 'Preview', icon: <FaEye /> },
    { path: '/dashboard', label: 'Dashboard',  icon: <FaChartPie  />}
  ];

  useEffect(() => {
    const currentStepIndex = steps.findIndex(step => step.path === location.pathname);
    if (!completedSteps.includes(currentStepIndex)) {
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps.push(currentStepIndex);
      setCompletedSteps(newCompletedSteps);
    }
  }, [location.pathname]);

  const progressPercentage = (completedSteps.length / (steps.length - 1)) * 100;

  const handleNextClick = () => {
    const currentStepIndex = steps.findIndex(step => step.path === location.pathname);
    if (!completedSteps.includes(currentStepIndex)) {
      const newCompletedSteps = [...completedSteps];
      newCompletedSteps.push(currentStepIndex);
      setCompletedSteps(newCompletedSteps);
    }
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex < steps.length) {
      onNext(steps[nextStepIndex].path);
    }
  };

  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && <div className="progress-line" style={{ backgroundColor: completedSteps.includes(index - 1) ? '#28a745' : '#007bff' }}></div>}
          <div className={`step ${completedSteps.includes(index) ? 'completed' : ''}`}>
            <span className="step-icon">{step.icon}</span>
            <span className="step-label">{step.label}</span>
          </div>
        </React.Fragment>
      ))}
      <div className="progress-bar" style={{ width: `${progressPercentage}%`, backgroundColor: completedSteps.length === steps.length - 1 ? '#28a745' : '#007bff' }}></div>
      
    </div>
  );
};

export default Progress;
