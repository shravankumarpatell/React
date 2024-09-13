
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <div id='container'>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App