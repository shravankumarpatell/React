import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

function App() {

  return (
    <Provider store={store}>
    <AddTodo/>
    <Todos/>
  </Provider>
  )
}

export default App
