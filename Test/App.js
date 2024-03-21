class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "A",
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      text: this.state.text + "B",
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
