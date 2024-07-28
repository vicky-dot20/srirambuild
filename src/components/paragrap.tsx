import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return (
    <p className="mt-2 text-gray-700">{children}</p>
  );
};

export default Paragraph;
