import * as React from "react";
import * as ReactDOM from "react-dom";

type AppProps = { message: string };
type AppState = { count: number };

const AppStateless: React.SFC<AppProps> = ({ message }) => <div>{message}</div>;

class AppStateful extends React.Component<AppProps, AppState> {
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div onClick={this.increment}>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <AppStateless message="Hello world live with SFC" />
    <AppStateful message="counter:" />
  </div>,
  document.getElementById("root")
);
