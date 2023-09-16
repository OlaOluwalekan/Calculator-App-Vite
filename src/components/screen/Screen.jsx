import { useSelector } from 'react-redux'
import styles from './screen.module.css'

const Screen = () => {
  const { theme } = useSelector((store) => store.general)

  return <div className={`${styles.main} ${styles[theme]}`}>0</div>
}
export default Screen
