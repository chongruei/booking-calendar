import styles from './Layout.module.scss'

const Layout = ({ children }) => <main className={styles.container}>{children}</main>

export default Layout
