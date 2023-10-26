import './Profile.css';
import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{'@' + tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="stats-card">
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li className="stats-card">
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li className="stats-card">
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.string,
};
