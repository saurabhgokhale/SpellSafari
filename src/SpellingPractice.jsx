import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Block, Input, Center, Left, Box, Stats } from './StyledComponents';

const SpellingPractice = () => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    axios.get('https://spellings-dcs.s3.ap-south-1.amazonaws.com/spelling.txt')
      .then(response => {
        setWords(response.data.split(','));
      });
  }, []);
  

  const checkSpelling = () => {
    if (userInput === words[currentIndex]) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again.');
    }
  };

  return (
    <Row>
      <Block>
        <p>Spelling Practice</p>
        { words[currentIndex] && (
          <Box>
            <audio controls>
              <source src={`https://ssl.gstatic.com/dictionary/static/sounds/oxford/${words[currentIndex]}--_us_1.mp3`} type="audio/mpeg" />
            </audio>
            <Input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
            <button onClick={checkSpelling}>Check</button>
            {feedback && <Stats>{feedback}</Stats>}
          </Box>
        )}
      </Block>
    </Row>
  );
};

export default SpellingPractice;
