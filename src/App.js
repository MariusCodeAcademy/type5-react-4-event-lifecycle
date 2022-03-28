import './App.css';
import Counter from './components/counter/Counter';
import LoginLogout from './components/LoginLogout';
import ReactForm from './components/ReactForm';

function App() {
  console.log('App component ran');
  const isUserLoggedIn = false;
  return (
    <div className='App'>
      <LoginLogout status={isUserLoggedIn} />
      <h1>App</h1>
      <div className='grid'>
        <Counter title='People' />
        <Counter title='Cars' initValue={10} />
        <Counter title='House' initValue={15} />
      </div>
      <ReactForm />
    </div>
  );
}

export default App;
