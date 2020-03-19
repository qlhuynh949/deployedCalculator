import React, { Component } from 'react'
import KeyButton from './components/KeyButton'

class App extends Component {

  state = {
    result: 0,
    num1: 0,
    num2: 0,
    num1String: '',
    num2String: '',
    operator: '',
    isCalculated: false,
    isOperatorChose: false,
    display: ''
  }

  handleIncrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleMultiplyBy2Count = () => {
    this.setState({ count: this.state.count * 2 })
  }

  handleDivideBy2Count = () => {
    this.setState({ count: this.state.count / 2 })
  }

  handleResetCount = () => {
    this.setState({ count: this.state.count = 0 })
  }
  // write a function that moves count down by 1

  // write a function that moves count up by multiplying count by 2

  // write a function that moves count down by dividing count by 2

  handleOperator = (value) => {

    this.setState({ isOperatorChose: true })
    this.setState({ operator: value })
  }

  handleEqual = (value) => {
    let num1 = Number(this.state.num1String)
    let num2 = Number(this.state.num2String)
    let result = 0
    this.state.isCalculated = true
    // Assign value based on the operator
    switch (this.state.operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = NaN;
    }
    this.setState({ display: result })
  }

  handleEnterNumber = (value) => {
    if ((this.state.isOperatorChose === false) && (this.state.isCalculated === false)) {
      this.setState({ num1String: this.state.num1String + value })

    }
    else
    {
      this.setState({ num2String: this.state.num2String + value })

    }
  }
  handleClear =()=>
  {
    this.setState({ result: 0 })
    this.setState({ num1: 0 })
    this.setState({ num2: 0 })
    this.setState({ num1String: '' })
    this.setState({ num2String: '' })
    this.setState({ operator: '' })
    this.setState({ isCalculated: false })
    this.setState({ isOperatorChose: false })
    this.setState({ display: '' })
  }
  render() {
    return (
      <div>
        <h1>Number 1: {this.state.num1String}</h1>
        <h1>Operator: {this.state.operator}</h1>
        <h1>Number 2: {this.state.num2String}</h1>
        <h1>Result: {this.state.display}</h1>

        <KeyButton
          keyItem={0}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={1}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={2}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={3}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={4}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={5}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={6}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={7}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={8}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={9}
          handleKey={this.handleEnterNumber} />
        <KeyButton
          keyItem={'+'}
          handleKey={this.handleOperator} />
        <KeyButton
          keyItem={'-'}
          handleKey={this.handleOperator} />
        <KeyButton
          keyItem={'/'}
          handleKey={this.handleOperator} />
        <KeyButton
          keyItem={'*'}
          handleKey={this.handleOperator} />
        <KeyButton
          keyItem={'='}
          handleKey={this.handleEqual} />
        <KeyButton
          keyItem={'Clear'}
          handleKey={this.handleClear} />

      </div>
    )
  }
}

export default App
