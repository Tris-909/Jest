import React from 'react';
import './app.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';

const tempArr = [{
  fName: 'Tri',
  lName: 'Tran',
  email: 'tranminhtri9090@gmail.com',
  age: 21,
  onlineStatus: 'true'
}];

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline 
          header="Posts"
          desc="Click The Button To Render Posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
