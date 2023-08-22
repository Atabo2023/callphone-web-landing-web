import React from 'react';

const Clickable = ({ url, classContent }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      {classContent}
    </a>
  );
};

export default Clickable;
