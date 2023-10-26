import './TransactionHistory.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="transaction-header">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className="transaction-cell">{item.type}</td>
            <td className="transaction-cell">{item.amount}</td>
            <td className="transaction-cell">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.string,
};
