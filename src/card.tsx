import { useState, useRef } from "react";
import cake from "./assets/cake.png";
import pa from "./assets/pamed.jpg"

import HBD from "./HBD.mp3"
import confetti from "https://cdn.skypack.dev/canvas-confetti"


const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen){
      let bdMusic = new Audio(HBD);
      confetti()
      bdMusic.play();
      setIsOpen(true);
    }
    
  }

  // let bdMusic = new Audio("./HBD.mp3")

  // if (isOpen) {
  //   bdMusic.play()
  // }


  return (
  
    <div className="relative w-80 h-60">
      {/* <div className={'transform duration-700 transition-all ease-in-out bg-amber-900 ${isOpen ? "rotate-y-180" : "" }'} onClick={handleOpen}> */}
      <div
        className={`w-full h-full transition-all duration-700 ease-in-out transform ${
          isOpen ? "rotate-y-180" : ""
        }`}
        onClick={handleOpen}
      >
      <div className="w-full h-full">
        <div className={`flex p-4 rounded-2xl absolute inset-0 items-center justify-center bg-amber-50 ${isOpen ? "opacity-0" : "opacity-100"} `}>
          <figure>
          <img className="w-35" src={cake}/>
          <figcaption className="text-center py-2 font-serif text-amber-600">klik disini!!!</figcaption>
          </figure>
        </div>

        <div className={`flex -4 rounded-2xl absolute inset-0 items-center transform rotate-y-180 duration-0 justify-center bg-amber-50 ${isOpen ? "opacity-100" : "opacity-0"} `}>
          <figure>
          <img className="w-60 rounded-2xl" src={pa}/>
          <figcaption className="text-center py-1 font-serif text-yellow-400">!!HBD PA!!</figcaption>
          {/* <figcaption className="text-center text-xs font-serif text-blue-400">now playing happy birthday.mp3</figcaption> */}
          </figure>
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default Card
