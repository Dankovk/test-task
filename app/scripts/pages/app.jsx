import React from 'react';
import Header from '../components/header.jsx'

const App = (props) => {
    return (
      <div>
        <Header />
        <div className="content">
            {React.cloneElement(props.children, props)}
        </div>
      </div>
    );
};

export default App;