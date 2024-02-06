import { useState, useEffect} from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState(localStorage.getItem('color') || 'olive')  

  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap text-justify justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center shadow-xl gsp-3 rounded-md bg-white px-3 py-2">
            <button 
            onClick={() => {setColor("red")}}
            className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg" 
            style={{backgroundColor:'red'}}>Red</button>
             <button
             onClick={() => {setColor("green")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'green'}}>Green</button>
             <button
             onClick={() => {setColor("black")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'black'}}>Black</button>
             <button
             onClick={() => {setColor("purple")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'purple'}}>purple</button>
             <button 
             onClick={() => {setColor("olive")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'olive'}}>Olive</button>
             <button
             onClick={() => {setColor("orange")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'orange'}}>orange</button>
             <button
             onClick={() => {setColor("blue")}}
              className="outline-none px-4 py-1 bg-color text-white m-2 rounded-lg"
            style={{backgroundColor:'blue'}}>Blue</button>
          </div>
        </div>
      </div>
  )
}

export default App
