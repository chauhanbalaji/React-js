import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import { useState } from 'react' // ✅ Add this line

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with self</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

