import {Component} from "react";

export default class Waves extends Component<{ backgroundColor: string }> {
  render() {
    return (
      <div className="wave" style={{backgroundColor: this.props.backgroundColor}}></div>
    )
  }
}