import Routes from './routes';
import "./App.css"
import Header from './components/Header/index.jsx';


function App() {
  return (
    <div className="App">
      <div className="Body-app">
      <Header/>
      <Routes/>
      </div>
    </div>
  );
}

export default App;