import {Component} from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className='text-center bg-[#316FA5] text-[#FFFFF4] py-2'>
          <div>Copyright {(new Date()).getFullYear()} splite all right reserved.</div>
        </footer>
      </>
    )
  }
}