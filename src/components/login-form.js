// @packages
import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length === 0) return;

    onSubmit(name);
  }

  const isDisabled = name.trim().length === 0;

  return (
    <div className="white-box">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Bienvenido</h2>
        <label htmlFor="">Introduzca su nombre de usuario</label>
        <input value={name} placeholder="Nickname" onChange={handleChangeName} />
        <button className="btn-primary" disabled={isDisabled}>Ir al chat</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
