import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import './global.css';

//author: {avatarUrl: "", nome: "", cargo:""}
//dataPublicacao: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/Carlainha.png',
      nome: 'Caroline Radichi',
      cargo: 'Aluno da Etec'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera!!'},
      {type: 'paragraph', content: 'Amanhã teremos viagem a Bienal'},
      {type: 'link', content: 'http://uol.com.br'}
    ],
    dataPublicacao: new Date('2024/09/10 09:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/Clarinha2124.png',
      nome: 'Clara Cavalheiro',
      cargo: 'Aluno da Etec'
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera!!'},
      {type: 'paragraph', content: 'Eu fui na viagem a Bienal'},
      {type: 'link', content: 'http://g1.com.br'}
    ],
    dataPublicacao: new Date('2024/11/05 09:44:00')
  }
]
export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          
          {posts.map(post =>{
            return(
            <Post
              author={post.author}
              content={post.content}
              dataPublicacao={post.dataPublicacao}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
