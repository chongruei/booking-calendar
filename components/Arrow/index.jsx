import styles from './Arrow.module.scss'

export const Direction = {
  RIGHT: 'right',
  LEFT: 'left',
}

const Arrow = ({ direction = Direction.RIGHT }) => <div className={styles[direction]} />
export default Arrow
