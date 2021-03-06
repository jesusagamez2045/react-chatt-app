// @packages
import { useState } from 'react';

// @styles
import './App.css';
import Chatt from './components/chatt';
import LoginForm from './components/login-form';

const App = () => {
  const [name, setName] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (userName) => {
    setName(userName);
    setRegistered(true);
  };

  return (
    <>
      {
        !registered ? (
          <div className="container-login">
            <LoginForm onSubmit={handleSubmit}/>
          </div>
        ) : (
          <div className="container-chatt">
            <Chatt name={name} />
          </div>
        )
      }
    </>
  );
}

export default App;
