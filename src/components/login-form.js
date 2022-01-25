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
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Introduzca su nombre de usuario</label>
      <input value={name} onChange={handleChangeName} />
      <button>Ir al chat</button>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
