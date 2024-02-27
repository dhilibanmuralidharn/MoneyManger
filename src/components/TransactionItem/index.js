import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  handleDelete = () => {
    const {onDelete} = this.props
    onDelete()
  }

  render() {
    const {transaction} = this.props
    const {title, amount, type, id} = transaction
    return (
      <li className="history-list-container" key={id}>
        <div className="history-list-titles-container">
          <p className="history-list-titles">{title}</p>
          <p className="history-list-titles">{amount}</p>
          <p className="history-list-titles">{type}</p>
        </div>
        <button className="dlt-button" onClick={this.handleDelete}>
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </li>
    )
  }
}
export default TransactionItem
