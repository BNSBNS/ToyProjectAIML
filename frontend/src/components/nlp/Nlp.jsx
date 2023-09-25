import React, { useState, useEffect } from 'react';
import './nlp.css'




function Nlp() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    return (
      <div>
        {/* Render your data here */}
      </div>
    );
  }
  
  export default Nlp;