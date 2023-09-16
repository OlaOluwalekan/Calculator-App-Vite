import { useSelector } from 'react-redux'
import { Button } from '../buttons/Buttons'
import styles from './numbers.module.css'

const Zero = () => {
  const { theme } = useSelector((store) => store.general)

  return <Button className={`${styles.main} ${styles[theme]}`}>0</Button>
}
export default Zero
