import { useSelector } from 'react-redux'
import styles from './pad.module.css'
import Number from '../number-buttons/Number'
import Delete from '../other-buttons/Delete'
import Operator from '../other-buttons/Operator'
import Dot from '../number-buttons/Dot'
import Zero from '../number-buttons/Zero'
import Reset from '../other-buttons/Reset'
import EqualsTo from '../other-buttons/EqualsTo'

const Pad = () => {
  const { theme } = useSelector((store) => store.general)

  return (
    <div className={`${styles.main} ${styles[theme]}`}>
      <section>
        <Number number={7} />
        <Number number={8} />
        <Number number={9} />
        <Delete />
        <Number number={4} />
        <Number number={5} />
        <Number number={6} />
        <Operator text='+' />
        <Number number={1} />
        <Number number={2} />
        <Number number={3} />
        <Operator text='-' />
        <Dot />
        <Zero />
        <Operator text='/' />
        <Operator text='×' />
      </section>
      <article>
        <Reset />
        <EqualsTo />
      </article>
    </div>
  )
}
export default Pad
