import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/header/Header'

const App = () => {
  const { theme } = useSelector((store) => store.general)

  return (
    <div className={`main ${theme}`}>
      <div>
        <Header />
      </div>
    </div>
  )
}
export default App
