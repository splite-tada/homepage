import imgWave1 from "@/assets/images/wave1.png";
import imgWave2 from "@/assets/images/wave2.png";
import imgBubble from "@/assets/images/bubble.png";
import imgScroll from "@/assets/images/scroll.svg";
import logo from "@/assets/images/splite.svg";
export default function App() {
  return (
    <div>
      <header>
        <div id="waves">
          <img id="wave1" src={imgWave1}/>
          <img id="wave2" src={imgWave2}/>
        </div>
        <img id="bubble" src={imgBubble}/>
        <img id="splite" src={logo}/>
        <div id="scroll-group">
          <img id="scroll-img" src={imgScroll}/>
          <div id="scroll">scroll</div>
        </div>
      </header>
      {/*<div style="height: 1300px"/>*/}
    </div>
  )
}
