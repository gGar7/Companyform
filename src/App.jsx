import { useState } from 'react'
import './App.css'
import CompanyForm from "./CompanyForm";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <CompanyForm />
    </div>
    </>
  )
}

export default App
