import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {transactions} = this.props
    const {title, amount, type} = transactions

    const balanceAmount = transactions.reduce((acc, curr) => {
      if (curr.type === 'INCOME') {
        return acc + curr.amount
      } else if (curr.type === 'EXPENSES') {
        return acc - curr.amount
      }
      return acc
    }, 0)

    const incomeAmount = transactions.reduce((acc, curr) => {
      if (curr.type === 'INCOME') {
        return acc + curr.amount
      }
      return acc
    }, 0)

    const expenseAmount = transactions.reduce((acc, curr) => {
      if (curr.type === 'EXPENSES') {
        return acc + curr.amount
      }
      return acc
    }, 0)

    return (
      <div className="detailed-list-container">
        <li className="balance-container">
          <img
            className="imgEl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div>
            <p>Your Balance</p>
            <p data-testid="balanceAmount">RS {balanceAmount}</p>
          </div>
        </li>
        <li className="income-container">
          <img
            className="imgEl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div>
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {incomeAmount}</p>
          </div>
        </li>
        <li className="expensive-container">
          <img
            className="imgEl"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
          <div>
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expenseAmount}</p>
          </div>
        </li>
      </div>
    )
  }
}
export default MoneyDetails
