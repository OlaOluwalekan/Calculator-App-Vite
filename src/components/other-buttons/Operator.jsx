import { useSelector } from 'react-redux'
import { Button } from '../buttons/Buttons'
import styles from '../number-buttons/numbers.module.css'

const Operator = ({ text }) => {
  const { theme } = useSelector((store) => store.general)

  return <Button className={`${styles.main} ${styles[theme]}`}>{text}</Button>
}
export default Operator
