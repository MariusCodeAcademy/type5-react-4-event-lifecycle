import './App.css';
import Counter from './components/counter/Counter';
import LoginLogout from './components/LoginLogout';

function App() {
  const isUserLoggedIn = true;
  return (
    <div className='App'>
      <LoginLogout status={isUserLoggedIn} />
      <h1>App</h1>
      <Counter />
    </div>
  );
}

export default App;
