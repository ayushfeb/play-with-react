import Card from './components/card'
import './App.css'

function App() {


  return (
    <>
        <h1 className='bg-purple-400 p-4 rounded-md m-4'>Tailwind CSS</h1>
        <Card username='Aarav Saini' btnText='visit me'/>
        <br />
        <Card username='Anaisha Saini'/>
    </>
  )
}

export default App
