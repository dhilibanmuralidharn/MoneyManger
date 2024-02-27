import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactions: [],
    titleInput: '',
    amountInput: '',
    optionId: 'INCOME',
  }

  handleTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  handleAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  handleOption = event => {
    this.setState({optionId: event.target.value})
  }

  handleAddTransaction = () => {
    const {titleInput, amountInput, optionId} = this.state
    if (titleInput && amountInput) {
      const newTransaction = {
        id: uuidv4(),
        title: titleInput,
        amount: parseFloat(amountInput),
        type: optionId,
      }
      this.setState(prevState => ({
        transactions: [...prevState.transactions, newTransaction],
        titleInput: '',
        amountInput: '',
      }))
    }
  }

  handleDeleteTransaction = index => {
    this.setState(prevState => {
      const updatedTransactions = [...prevState.transactions]
      updatedTransactions.splice(index, 1)
      return {transactions: updatedTransactions}
    })
  }

  render() {
    const {id, transactions, titleInput, amountInput, optionId} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <div className="header-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="description">
              Welcome back to your <span className="spanEl">Money Manager</span>
            </p>
          </div>
          <ul>
            <MoneyDetails transactions={transactions} />
          </ul>
          <div className="transaction-and-history-container">
            <form className="transaction-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <div>
                <label htmlFor="title" className="label-heading">
                  Title
                </label>
                <br />
                <input
                  value={titleInput}
                  type="text"
                  id="title"
                  className="inputElemnet"
                  onChange={this.handleTitleInput}
                />
                <br />
              </div>
              <div>
                <label htmlFor="amount" className="label-heading">
                  AMOUNT
                </label>
                <br />
                <input
                  value={amountInput}
                  type="number"
                  id="amount"
                  className="inputElemnet"
                  onChange={this.handleAmountInput}
                />
                <br />
              </div>
              <div className="type-container">
                <label htmlFor="optionsId" className="label-heading">
                  Type
                </label>
                <br />
                <select
                  id="optionsId"
                  className="inputElemnet"
                  value={optionId}
                  onChange={this.handleOption}
                >
                  {transactionTypeOptions.map(option => (
                    <option key={option.optionId} value={option.optionId}>
                      {option.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button
                  type="button"
                  className="add-button"
                  onClick={this.handleAddTransaction}
                >
                  Add
                </button>
              </div>
            </form>
            <div>
              <ul className="history-container">
                <h1>History</h1>
                <li className="list-item">
                  <p className="list-items-heading">Title</p>
                  <p className="list-items-heading">Amount</p>
                  <p className="list-items-heading">Type</p>
                </li>
                {transactions.map((transaction, index) => (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                    onDelete={() => this.handleDeleteTransaction(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
