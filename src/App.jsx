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
      cargo: 'Joagdora de The Sims 4'
    },
    content: [
      {type: 'paragraph', content: 'Quem nunca quis enriquecer os Sims em um piscar de olhos? Esse cheat adiciona 50.000 Simoleons à conta da sua família.'},
      {type: 'paragraph', content: 'Como usar:'},
      {type: 'paragraph', content: '1-Abra a barra de comandos (Ctrl + Shift + C).'},
      {type: 'paragraph', content: '2-Digite motherlode e pronto!'},
      {type: 'paragraph', content: 'Repita quantas vezes quiser até atingir o patrimônio dos seus sonhos.'},
      {type: 'link', content: 'https://www.techtudo.com.br/listas/2024/05/codigos-e-cheats-the-sims-4-veja-lista-completa-com-todas-as-dicas-edjogos.ghtml', text: 'Clique aqui descobrir mais cheats'}
    ],
    dataPublicacao: new Date('2024/09/10 09:44:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/Clarinha2124.png',
      nome: 'Clara Cavalheiro',
      cargo: 'Jogadora de The Sims 3'
    },
    content: [
      {type: 'paragraph', content: 'Se você ama personalizar seus Sims e suas casas, os Custom Content (CCs) são indispensáveis! Eles trazem roupas, cabelos, móveis e decorações exclusivas criadas por fãs talentosos.'},
      {type: 'image', content: 'https://i.pinimg.com/736x/f2/2e/24/f22e24c979d38373769ffa95b39ded88.jpg'},
      {type: 'link', content: 'https://br.pinterest.com/pin/324892560637435130/', text: 'Clique aqui para ver o CC acima'}
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
