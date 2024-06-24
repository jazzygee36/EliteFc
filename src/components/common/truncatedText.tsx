import React, { useState } from 'react';

type TruncatedTextProps = {
  text: string;
  maxLength: number;
};

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText =
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return (
    <div>
      <span>{isTruncated ? truncatedText : text}</span>
      {text.length > maxLength && (
        <button
          onClick={toggleTruncation}
          style={{
            marginLeft: '8px',
            cursor: 'pointer',
            color: 'blue',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
          }}
        >
          {isTruncated ? 'Show More' : 'Show Less'}
        </button>
      )}
    </div>
  );
};

export default TruncatedText;
