import React from 'react';

interface CardBodyProps {
  content?: string;
}

export const CardBody = ({ content = "No content provided" }: CardBodyProps) => {
  return (
    <div className="card-body">
      <p>{content}</p>
    </div>
  );
};
