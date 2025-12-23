
import { Routes , Route} from 'react-router-dom'
import Counter from './pages/Counter'
import Forms from './pages/Forms'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/counter" element={<Counter/>} />
       <Route path="/form" element={<Forms/>} />
    </Routes>

  )
}

export default App
