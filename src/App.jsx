import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Corders from './components/Corders'
import Second from './components/Second'
import Fetch from './components/Fetch'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

// import useState from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Navbar/>
       <Corders /> 
       <Second />     */}
       {/* <Fetch/> */}

       <Route>
         <Routes>
           <Route path=''></Route>
         </Routes>
       </Route>
       
    </>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Josh & Codist + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //</div>
  )
}

export default App
