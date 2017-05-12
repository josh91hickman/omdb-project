import React from 'react';
import './style.css';

// Components
import Header from './Header';
import Search from './Search';

const App = (props) => (
  <div className="text-center">
    <Header />
    <hr />
    <div className="col-md-4 col-md-offset-4 col-sm-12">
      <div className="text-center">
        <Search />
      </div>
    </div>
  </div>
);

export default App;
