import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../features/generalSlice'

const ThemeSelect = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((store) => store.general)

  const changeTheme = () => {
    if (theme === 'theme1') {
      dispatch(toggleTheme('theme2'))
    } else if (theme === 'theme2') {
      dispatch(toggleTheme('theme3'))
    } else {
      dispatch(toggleTheme('theme1'))
    }
  }

  return (
    <div>
      <article>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </article>

      <div>
        <p>THEME</p>
        <section onClick={changeTheme}>
          <span></span>
        </section>
      </div>
    </div>
  )
}
export default ThemeSelect
