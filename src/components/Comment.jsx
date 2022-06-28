import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment () { 
  return (
    <div className={styles.comment}>
      <Avatar 
          hasBorder={false}
          src="https://github.com/marcosmoski.png" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Cosmoski</strong>
              <time dateTime="">Cerca de 1 hora atràs </time>
            </div> 
            <button title='Responder'>
              <Trash size={24}/>
            </button>
          </header>

          <p> Muito bom parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}