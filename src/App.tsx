import { Route, Routes } from 'react-router-dom'
import './App.css'
import { AppRouter } from './views/config/AppRouter'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={ <AppRouter/> } />
      </Routes>
      
    </>
  )
}

export default App
