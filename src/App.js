import logo from './img/logo.svg';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto em construção...
        </p>
      </main>
    </div>
  );
}

export default App;


/*
Logo - Soluções - CLientes - Preço - Contatos
*/