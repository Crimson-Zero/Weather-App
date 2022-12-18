import './styles/App.css';
import WeatherFrom from './components/WeatherForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Weather Application
        </h1>
        <WeatherFrom / >
      </header>
    </div>
  );
}

export default App;
