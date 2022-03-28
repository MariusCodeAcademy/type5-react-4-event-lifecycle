import './counter.css';

function Counter() {
  console.log('Counter component ran');
  // useState
  let count = 5;
  function downHandler() {
    console.log('Down button was clicked');
    count--;
    console.log('count ===', count);
  }

  return (
    <div className='counter'>
      <h2>{count}</h2>
      <div className='control'>
        <button onClick={() => console.log('up was clicked')}>UP</button>
        <button onClick={downHandler}>DOWN</button>
      </div>
    </div>
  );
}

export default Counter;
