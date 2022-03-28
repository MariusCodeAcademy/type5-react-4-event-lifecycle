import './App.css';
import Counter from './components/counter/Counter';
import LoginLogout from './components/LoginLogout';
import ReactForm from './components/ReactForm';

function App() {
  const isUserLoggedIn = false;
  return (
    <div className='App'>
      <LoginLogout status={isUserLoggedIn} />
      <h1>App</h1>
      <div className='grid'>
        <Counter />
        <Counter />
        <Counter />
      </div>
      <ReactForm />
    </div>
  );
}

export default App;
