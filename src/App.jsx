import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  

  return (
    <div className=' w-full h-screen duration-300 '
    style={{backgroundColor: color}}
    > <p className='flex justify-center font-bold text-5xl '>Background-Color-Changer</p>
    <div className='fixed flex justify-center bottom-12 inset-x-0 '>
      <div className='flex gap-4 '>
        <button onClick={()=> setColor("red")} className='border-solid border-2 border-black px-3 bg-red-800 text-white font-bold  rounded-3xl'>Red</button>
        <button onClick={()=> setColor('green')} className='border-solid border-2 border-black px-3 bg-green-800 text-white font-bold  rounded-3xl'>Green</button>
        <button onClick={()=> setColor("blue")} className='border-solid border-2 border-black px-3 bg-blue-800 text-white font-bold  rounded-3xl'>Blue</button>
        <button onClick={()=> setColor('yellow')} className='border-solid border-2 border-black px-3 bg-yellow-300 text-black font-bold rounded-3xl'>Yellow</button>
        <button onClick={()=> setColor('white')} className='border-solid border-2 border-black px-3 bg-white text-black font-bold  rounded-3xl'>White</button>
        <button onClick={()=> setColor('gray')} className='border-solid border-2 border-black px-3 bg-gray-600 text-white font-bold rounded-3xl'>Gray</button>
        <button onClick={()=> setColor('pink')} className='border-solid border-2 border-black px-3 bg-pink-300 text-black font-bold  rounded-3xl'>Pink</button>
        <button onClick={()=> setColor('#DCDCDC')} className='border-solid border-2 border-black px-3 bg-[#DCDCDC] text-black font-bold rounded-3xl'>Lavender</button>
        <button onClick={()=> setColor('black')} className='border-solid border-2 border-black px-3 bg-black text-white font-bold  rounded-3xl'>Black</button>
        <button onClick={()=> setColor('purple')} className='border-solid border-2 border-black px-3 bg-purple-800 text-black font-bold rounded-3xl'>Purple</button>
        <button onClick={()=> setColor('olive')} className='border-solid border-2 border-black px-3 bg-[#808000] text-black font-bold rounded-3xl'>Olive</button>
      </div>
    </div>

    
  </div>
  )
}

export default App
