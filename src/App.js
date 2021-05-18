import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { BarChart } from './components/BarChart';

import './App.css';

// TODO: test data
const charts = require('./charts.json');

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: имитация запроса к серверу
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      <div className="App-container">
        {loading ? (
          <Loader />
        ) : charts.map((chart, index) => (
          <div key={`chart_${index}`} className="App-flex-box">
            <h3 className="h3">{chart.title}</h3>
            <BarChart
              points={chart.points}
              color={chart.color}
              columnWidth={chart.columnWidth}
              paddingWidth={chart.paddingWidth}
            />
          </div>
        ))}
      </div>
  
      <div>
        <a
          className="link"
          href="https://github.com/Leneli/react-bar-chart"
          target="_blank"
          rel="noopener noreferrer"
        >Go to GitHub</a>
      </div>
    </div>
  );
};

export default App;
