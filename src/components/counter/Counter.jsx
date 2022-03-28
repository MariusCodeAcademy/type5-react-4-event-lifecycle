import { useState } from 'react';
import './counter.css';

function Counter() {
  console.log('Counter component ran');
  // useState
  const [count, setCount] = useState(5);
  // let count = 5;
  function downHandler() {
    console.log('Down button was clicked');
    // count--; // niekada tiesiogiia state nekeiciam
    setCount(count - 1);
    console.log('count ===', count);
  }

  const upHandler = () => {
    setCount(count + 1);
  };

  const upFiveHandler = function () {
    setCount(count + 5);
  };

  const dynamicClass = count < 0 ? 'negative' : '';
  const greenClass = count > 20 ? 'green' : '';

  const calcClass = () => {
    if (count < 0) {
      return 'negative';
    }
    if (count > 20) {
      return 'green';
    }
    return '';
  };

  // prideti mygtuka +5 kuri paspaudus count padidinama 5 taskais
  // padaryti kad jei reikme daugiau uz 20 tai jos spalva zalia

  return (
    <div className='counter'>
      <h2 className={calcClass()}>{count}</h2>
      <div className='control'>
        <button onClick={upHandler}>UP</button>
        <button onClick={upFiveHandler}>UP +5</button>
        {count > -5 && (
          <button disabled={count === -5} onClick={downHandler}>
            DOWN
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;
