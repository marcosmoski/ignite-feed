import styles from './Post.module.css'
import { useState } from 'react'
import { Comment } from './Comment' 
import { Avatar } from './Avatar'
import { format, formatDistance, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'

export function Post (props) { 
  const publishedAtFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH':'mm 'h'", { locale: ptBR })
  const publishedAtDistanceToNow = formatDistanceToNow(props.publishedAt, { locale: ptBR, addSuffix: true })

  const  [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const isNewCommentInputEmpty = comment.length === 0;

  function handleCommentChange (e) {
    e.target.setCustomValidity('')
    setComment(e.target.value)
  }

  function handleFormInvalid(e) { 
    e.target.setCustomValidity('Por favor, digite um comentário')
  }


  function handleCreateNewComment(event) {
    event.preventDefault();
    console.log('submit')

    setComments([...comments, {
      id: comments.length + 1,
      author: {
        name: "Marcos Alberto Cosmoski Filho",
        role: "Web Developer",
        avatarUrl: "https://github.com/marcosmoski.png"
      }, 
      publishedAt: new Date(), 
      content: comment
    }])
  }

  function deleteComment(comment) {
    const commentsWithoutDeletedOne = comments.filter(c => c.content !== comment); 
    setComments(commentsWithoutDeletedOne)
  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author?.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div> 


        <time title={publishedAtFormatted} dateTime={props.publishedAt.toISOString()}>
          {publishedAtDistanceToNow}
        </time>

      </header> 

      <div className={styles.content}>
            {
              props.postContent.map((part) => {
                return (part.type === "paragraph") ? (
                    <p key={part.content}>{part.content}</p>  
                ) : (
                    <p key={part.content}> 
                      <a href='#'> {part.content} </a>
                    </p>
                )
                
              })
            }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong> Deixe seu comentário </strong>
        <textarea 
            placeholder='Deixe um comentário' 
            onChange={handleCommentChange}
            onInvalid={handleFormInvalid}
            required
        />
        <footer> 
          <button 
            type='submit'
            disabled={isNewCommentInputEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}> 
        {
          comments?.map((comment) => {
            return (
              <Comment key={comment.id}
                       author={comment.author} 
                       publishedAt={comment.publishedAt}
                       content={comment.content}
                       onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  ) 
}