import styles from '../styles/Header.module.css'
const index = () => {
  return (
    <div className='container'>
     <div className={styles.header}>
     <h1>Budget Tracer </h1>
     <span className="badge bg-secondary">$0</span>
     </div>

    </div>
  )
}
export default index