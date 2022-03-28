import { useState } from 'react';

function ReactForm() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  function nameChangeHandler(event) {
    // console.log('input ivyko', event);
    const reikme = event.target.value;
    setUserName(reikme);
  }
  function userAgeHandler(event) {
    setUserAge(event.target.value);
  }

  function formSendHandler(e) {
    e.preventDefault();
    console.log('js is in control');
    if (userAge === '' || userName === '') {
      console.log('privalomi laukai');
      setError('privalomi laukai');
      return;
    }
    setError(null);
    const newObj = {
      userAge,
      userName,
    };
    console.log('newObj ===', newObj);
    // e.target.reset(); // neveikia
    setUserAge('');
    setUserName('');
  }

  return (
    <div>
      <h2>React form</h2>
      <form onSubmit={formSendHandler}>
        {error && <h3 className='negative'>{error}</h3>}
        <input onChange={nameChangeHandler} value={userName} type='text' placeholder='Name' /> <br />
        <input onChange={userAgeHandler} value={userAge} type='number' placeholder='Age' /> <br />
        <button>Submit</button>
      </form>
      <div className='results'>
        UserName: {userName} UserAge: {userAge}
      </div>
    </div>
  );
}

export default ReactForm;
