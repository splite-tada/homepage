import {Component} from "react";

export default class Bubbles extends Component {
  render() {
    return (
      <>
        <div className="bubbles grid grid-cols-3 gap-1">
          <div>
            <div className="bubble bubble-1" style={{ animationDelay: '0.2s' }}></div>
            <div className="bubble bubble-1" style={{ animationDelay: '3.6s' }}></div>
          </div>
          <div></div>
          <div>
            <div className="bubble bubble-2" style={{ animationDelay: '0s' }}></div>
            <div className="bubble bubble-2" style={{ animationDelay: '3.0s' }}></div>
          </div>
        </div>
      </>
    )
  }
}