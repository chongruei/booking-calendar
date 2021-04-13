import styles from './Button.module.scss'

const Button = ({ type = 'button', onClick, disabled = false, outerClass, children }) => (
  <button type={type} onClick={onClick} className={outerClass || styles.button} disabled={disabled}>
    {children}
  </button>
)

export default Button
