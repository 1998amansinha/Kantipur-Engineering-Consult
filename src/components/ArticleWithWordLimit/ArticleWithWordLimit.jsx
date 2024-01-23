import React, { useState } from 'react';
import './articlewithwordlimit.css';

const ArticleWithWordLimit = ({ text }) => {
  const maxWordsToShow = 15
  ; // Adjust the desired word limit

  const [showFullText, setShowFullText] = useState(false);

  const toggleTextVisibility = () => {
    setShowFullText(!showFullText);
  };

  const words = text.split(' ');
  const displayText = showFullText ? text : words.slice(0, maxWordsToShow).join(' ');

  return (
    <div className='words'>
      <p className="p__para">{displayText}</p>
      {maxWordsToShow < words.length && (
        <button style={{borderRadius:'8px'}} className='custom__button' onClick={toggleTextVisibility}>
          {showFullText ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};


export default ArticleWithWordLimit;
