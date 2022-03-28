import './App.css';
import Counter from './components/counter/Counter';

function App() {
  const isUserLoggedIn = true;
  return (
    <div className='App'>
      <h1>App</h1>
      <Counter />
      <LoginLogout status={isUserLoggedIn} />
    </div>
  );
}

export default App;
