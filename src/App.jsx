import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/header/Header'
import Screen from './components/screen/Screen'
import Pad from './components/pad/Pad'

const App = () => {
  const { theme } = useSelector((store) => store.general)

  return (
    <div className={`main ${theme}`}>
      <div>
        <Header />
        <Screen />
        <Pad />
      </div>
    </div>
  )
}
export default App
