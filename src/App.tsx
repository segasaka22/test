import Card from "./card"
import Navbar from "./navbar"
import { useState } from "react";

function App() {

  return (
    <>
      {/* <h1 className='font-bold bg-red-50 py-10'>Website by Maula S</h1> */}
      <Navbar/>
      <div className="min-h-screen bg-amber-600 py-10 flex items-center justify-center">
        <Card/>
      </div>
    </>
  )
}

export default App
