class Counter extends React.Component {
  state = {
    clickCount: 0,
    result: this.props.result,
  };

  handleMathClick = (type, number) => {
    //debugger;
    if (type !== "reset") {
      this.setState((prevState) => ({
        clickCount: prevState.clickCount + 1,
        result:
          type === "sub"
            ? prevState.result - Number(number)
            : prevState.result + Number(number),
      }));
    } else {
      this.setState(() => ({
        clickCount: 0,
        result: this.props.result,
      }));
    }
  };

  render() {
    return (
      <>
        {/* <button onClick={this.handleMathClick.bind(this, "sub", 10)}>
          -10
        </button>
        <button onClick={this.handleMathClick.bind(this, "add", 1)}>+1</button>
        <button onClick={() => this.handleMathClick("sub", 1)}>-1</button>
        <button onClick={this.handleMathClick.bind(this, "reset")}>
          Reset wyniku
        </button> */}
        <MathButton
          name="-10"
          number="10"
          type="sub"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="sub"
          click={this.handleMathClick}
        />
        <MathButton
          name="1"
          number="1"
          type="add"
          click={this.handleMathClick}
        />
        <MathButton
          name="10"
          number="10"
          type="add"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset"
          number="10"
          type="reset"
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.clickCount}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}

const MathButton = (props) => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
