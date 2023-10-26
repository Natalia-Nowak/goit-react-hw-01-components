import './FriendList.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend-card">
      <div
        className={
          'friend-isOnline ' + (isOnline ? 'friend-online' : 'friend-offline')
        }
      >
        •
      </div>
      <img className="friend-img" src={avatar} alt="User avatar"></img>
      <p>{name}</p>
    </div>
  );
};

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.string,
};
