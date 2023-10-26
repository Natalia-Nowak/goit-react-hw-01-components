import './Statistics.css';
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  if (title === null) {
    return <section className="statistics">{RenderStatistics(stats)}</section>;
  } else {
    return (
      <section className="statistics">
        <h2 className="title">{title}</h2>

        {RenderStatistics(stats)}
      </section>
    );
  }
}
function RenderStatistics(stats) {
  return (
    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.string,
};

RenderStatistics.propTypes = {
  stats: PropTypes.string,
};
