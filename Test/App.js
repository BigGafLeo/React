class Counter extends React.Component {
  state = {
    clickCount: 0,
    result: 0,
  };

  handleMathClick(type, number) {
    if (type !== "reset") {
      this.setState((prevState) => ({
        clickCount: prevState.clickCount + 1,
        result:
          type === "sub"
            ? prevState.result - number
            : prevState.result + number,
      }));
    } else {
      this.setState((prevState) => ({
        clickCount: 0,
        result: 0,
      }));
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleMathClick.bind(this, "sub", 10)}>
          -10
        </button>
        <button onClick={this.handleMathClick.bind(this, "add", 1)}>+1</button>
        <button onClick={() => this.handleMathClick("sub", 1)}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset wyniku
        </button>
        <h1>Liczba kliknięć: {this.state.clickCount}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
