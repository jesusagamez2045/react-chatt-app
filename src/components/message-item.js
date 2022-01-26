// @packages
import PropTypes from 'prop-types';

// @assets
import profile from '../assets/profile.jpg';

const MessageItem = ({ message }) => {
  return (
    <div className={message.from ? 'author' : ''}>
      <div className="container-avatar">
        <img src={profile} alt="profile" className="avatar" />
        <div className="avatar-info">
          <span>{message.name}</span>
          <span className="avatar-date">{message.date}</span>
        </div>
      </div>
      <div className="content-message">
        <p>{message.message}</p>
      </div>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.shape({
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    from: PropTypes.bool.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};

export default MessageItem;