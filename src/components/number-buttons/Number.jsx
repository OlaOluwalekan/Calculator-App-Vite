import { useSelector } from 'react-redux'
import styles from './numbers.module.css'
import { Button } from '../buttons/Buttons'

const Number = ({ number }) => {
  const { theme } = useSelector((store) => store.general)

  return <Button className={`${styles.main} ${styles[theme]}`}>{number}</Button>
}
export default Number
