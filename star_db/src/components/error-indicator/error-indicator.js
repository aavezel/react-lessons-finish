import React from 'react';
import './error-indicator.css';
import error_svg from './error.svg'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="text-center">
        <img alt="BOOM!" src={error_svg} width={150} height={150} />
      </div>
      <span className="boom">BOOM!</span>
      <span>something has gone terrible wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
