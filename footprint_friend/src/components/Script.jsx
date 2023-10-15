import React, { useEffect, useState } from 'react';
const { PythonShell } = require('python-shell');

function OpenAIResponse() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    let options = {
      scriptPath: 'C:\Users\krish\Documents\petrol_hackathon\footprint_friend', // Replace with the path to your Python script
      args: []
    };

    PythonShell.run('openai_script.py', options, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        setResponse(results[0]);
      }
    });
  }, []);

  return (
    <div>
      <div className="card">
        <p>{response}</p>
      </div>
    </div>
  );
}

export default OpenAIResponse;