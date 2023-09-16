import { useSelector } from 'react-redux'
import { Button } from '../buttons/Buttons'
import styles from './delete.module.css'

const Delete = () => {
  const { theme } = useSelector((store) => store.general)

  return <Button className={`${styles.main} ${styles[theme]}`}>DEL</Button>
}
export default Delete
