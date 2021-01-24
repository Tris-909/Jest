import React from 'react';
import './app.scss';
import Header from './components/header/index';
import Headline from './components/headline/index';
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline 
          header="Posts"
          desc="Click The Button To Render Posts"
        />
      </section>
    </div>
  );
}

export default App;
