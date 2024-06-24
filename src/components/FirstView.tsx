import {Component} from "react";
import imgWave1 from "@/assets/images/wave1.svg";
import imgWave2 from "@/assets/images/wave2.svg";
import logo from "@/assets/images/splite.svg";
import imgScroll from "@/assets/images/scroll.svg";
import imgGithub from "@/assets/images/github.svg";

export default class FirstView extends Component {
  render() {
    return (
      <div className='h-screen w-screen'>
        <img className='max-sm:hidden' src={imgWave1}/>
        <img className='absolute top-0 opacity-50 max-sm:hidden' src={imgWave2}/>
        <img className='hidden md:block absolute md:w-52 md:bottom-36 md:right-36 max-sm:bottom-32 max-sm:right-4' src={logo}/>
        <div className='text-center w-full mt-20 mx-auto text-8xl max-sm:text-5xl max-sm:mt-10'>
          <span className='opacity-50'>
            <span className='text-[#316FA5]'>WEB</span> Engineer
          </span>
          <img className='ml-4 mt-6 w-32 md:w-52 inline-block md:hidden' src={logo}/>
        </div>
        <div className='text-center w-72 mt-20 mx-auto opacity-80 text-2xl max-sm:mt-10'>
          <span className='text-color2'>y.tada@splite.biz</span>
        </div>
        <a className='text-center block w-max mt-20 mx-auto max-sm:mt-10'
           href="https://github.com/splite-tada" target="_blank"><img src={imgGithub}/>
        </a>

        <div className='absolute bottom-2 text-center w-full mx-auto block text-color7 text-4xl'>
          <img className='mx-auto animate-bounce max-sm:w-12' src={imgScroll}/>
          s c r o l l
        </div>
      </div>
    )
  }
}