import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingSpinnerProps {
  size?: 'sm';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size, 
  className = 'd-flex justify-content-center my-5' 
}) => {
  return (
    <div className={className}>
      <Spinner animation="border" size={size} />
    </div>
  );
};
