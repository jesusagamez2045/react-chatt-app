// @packages
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// @scripts
import socket from '../services/socket';
import ListMessages from './list-messages';

const Chatt = ({ name }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit('connected', name);
  }, [name]);

  useEffect(() => {
    socket.on('messages', msg => {
      setMessages([...messages, msg])
    });

    return () => {
      socket.off();
    }
  }, [messages]);

  const handleChangeMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length === 0) return;

    socket.emit('message', name, message);
    setMessage("");
  }

  const isDisabled = message.trim().length === 0;

  return (
    <>
      <div>
        <ListMessages messages={messages}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Escriba su mensaje</label>
          <textarea cols="30" rows="10" value={message} onChange={handleChangeMessage} />
          <button disabled={isDisabled}>Enviar</button>
        </form>
      </div>
    </>
  );
};

Chatt.propTypes = {
  name: PropTypes.string.isRequired
};

export default Chatt;