import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/esm/locale'
import { useState } from 'react'


export function Comment (props) { 
  const publishedAtFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH':'mm 'h'", { locale: ptBR })
  const publishedAtDistanceToNow = formatDistanceToNow(props.publishedAt, { locale: ptBR })
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() { 
    props.onDeleteComment(props.content)
  }


  function handleLikeComment(e) { 
    setLikeCount(likeCount + 1);
  }

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
              <strong>{props.author?.name}</strong>
              <time 
                  dateTime={props?.publishedAt.toISOString()}
                  title={publishedAtFormatted}
               > 
                Cerca de {publishedAtDistanceToNow} atràs 
              </time>
            </div> 
            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          
            <p>{props.content}</p>
          

        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20}/>
            Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>
    </div>
  )
}