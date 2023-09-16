import { useSelector } from 'react-redux'
import ThemeSelect from './ThemeSelect'
import styles from './header.module.css'

const Header = () => {
  const { theme } = useSelector((store) => store.general)

  return (
    <header className={`${styles.main} ${styles[theme]}`}>
      <p>calc</p>
      <ThemeSelect />
    </header>
  )
}
export default Header
