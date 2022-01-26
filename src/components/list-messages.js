// @packages
import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// @scripts
import MessageItem from './message-item';

const ListMessages = ({ messages }) => {

  const divMessagesRef = useRef(null);

  useEffect(() => {
    divMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className="box-messages">
      {messages?.map((item, index) => {
        return (
          <MessageItem key={index} message={item}/>
        )
      })}
      <div ref={divMessagesRef} />
    </div>
  );
};

ListMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    from: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};


export default ListMessages;
