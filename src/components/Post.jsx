import styles from './Post.module.css';
import { Comment } from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { LineSegment } from '@phosphor-icons/react';

//author: {avatarUrl: "", nome: "", cargo:""}
//dataPublicacao: Date
//content: string

export function Post({author, dataPublicacao, content}){
    const dataFormatada = format(dataPublicacao, "d 'de' LLLL 'às' HH:mm'h'", {locale:ptBR})
    const dataRelativaAoPost = formatDistanceToNow(dataPublicacao, {
        locale: ptBR,
        addSuffix: true
    })
    
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                    className={styles.avatar} 
                    src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.nome}</strong>
                        <span>{author.cargo}</span>
                    </div>
                </div>
                <time title={dataFormatada} dateTime={dataPublicacao.toISOString()}>
                    {dataRelativaAoPost}
                </time>
            </header>
            <div className={styles.content}>

                {
                    content.map(line => {
                       if (line.type === 'paragraph'){
                            return <p>{line.content}</p>;
                       } 
                       else if (line.type === 'link'){
                            return <p><a target='blank' href={line.content}>{line.text}</a></p>
                       }

                       else if(line.type === 'image'){
                        return <img src={line.content} alt="" />
                       }
                    })
                }

            </div>
            
            <form className={styles.commentForm}>
             <strong>Deixe seu feedback</strong>

             <textarea placeholder='Deixe um comentário'></textarea>


           <footer>
             <button type='submit'> Publicar </button>
             </footer>
            </form>

<div className={styles.commentList}>
<Comment/>
<Comment/> 
<Comment/> 
</div>





        </article>

    )
}