// @packages
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListMessages = ({ messages }) => {

  const divMessagesRef = useRef(null);

  useEffect(() => {
    divMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div>
      {messages?.map((item, index) => <div key={index}>{item.name} - {item.message}</div>)}
      <div ref={divMessagesRef} />
    </div>
  );
};

ListMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  })).isRequired
};


export default ListMessages;
