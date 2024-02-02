import Card from './components/card'
import './App.css'

function App() {


  return (
    <>
        <h1 className='bg-purple-400 p-4 rounded-md m-4'>Tailwind CSS</h1>
        <Card username='Ayush' btnText='visit me'/>
        <Card username='Saini'/>
    </>
  )
}

export default App
