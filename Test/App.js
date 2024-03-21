class App extends React.Component {
  state = {
    text: "",
  };

  handleClick = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.props.btnTitle}</button>
        <TextComponent text={this.state.text} />
      </>
    );
  }
}

const TextComponent = (props) => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(
  <App btnTitle="Dodaj cyfre" />,
  document.getElementById("root")
);
