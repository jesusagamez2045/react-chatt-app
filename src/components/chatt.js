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
      const date = new Date();
      const formatedDate = date.toLocaleString();
      const newMessage = {
        ...msg,
        from: msg.name === name,
        date: formatedDate
      }
      setMessages([...messages, newMessage])
    });

    return () => {
      socket.off();
    }
  }, [messages, name]);

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
      <div className="wrapper-chatt">
        <ListMessages messages={messages}/>
        <form onSubmit={handleSubmit} className="chatt-form">
          <textarea placeholder="Escribe tu mensaje" cols="30" rows="2" value={message} onChange={handleChangeMessage} />
          <button disabled={isDisabled} className="btn-primary">Enviar</button>
        </form>
      </div>
    </>
  );
};

Chatt.propTypes = {
  name: PropTypes.string.isRequired
};

export default Chatt;