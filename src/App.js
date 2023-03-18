import React from 'react';
import Header from './components/header';
import HomePage from './pages/home_page'
import GlobalStyles from './components/global_styles/styles';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
