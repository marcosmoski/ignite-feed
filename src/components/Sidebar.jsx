import styles from './Sidebar.module.css'

export function Sidebar () { 
  return (
    <aside className={styles.sidebar}> 
      <img 
          className={styles.cover}
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
          alt="" 
      />

      <div className={styles.profile}>
        <strong>Usuario</strong>
        <span> Cargo </span>
      </div>

      <footer>
        <a href='#'> 
            Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}