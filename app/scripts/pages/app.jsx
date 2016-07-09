import React from 'react';
import Header from '../components/header.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <div className="content">
          <h1>Test</h1>
        </div>
      </div>
    );
};

export default App;