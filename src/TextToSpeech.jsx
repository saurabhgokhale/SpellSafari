import React, { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea onChange={handleTextChange} value={text} />
      <button onClick={speakText}>Speak</button>
    </div>
  );
};

export default TextToSpeech;
