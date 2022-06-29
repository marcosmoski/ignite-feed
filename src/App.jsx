import { Header } from './components/Header'
import {  Post } from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
              name: "Marcos Alberto Cosmoski Filhgo", 
              role: "Web Developer", 
              avatarUrl: "https://github.com/marcosmoski.png"
            },
    publishedAt: new Date("2022-06-01 11:00:00"),
    content: [
              {type: "paragraph", content: "Fala galeraa 👋" }, 
              {type: "paragraph", content: "Tudo bem com vocês?"}, 
              {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
              {type: "link", content: "👉 jane.design/doctorcare"}, 
              {type: "link", content: "#novoprojeto #nlw #rocketseat"}
            ],
  },
  {
    id: 2,
    author: {
              name: "Diego Fernandes", 
              role: "Web Developer", 
              avatarUrl: "https://github.com/diego3g.png"
            },
    publishedAt: new Date("2022-06-03 11:00:00"),
    content: [
              {type: "paragraph", content: "Fala galeraa 👋" }, 
              {type: "paragraph", content: "Tudo bem com vocês?"}, 
              {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
              {type: "link", content: "👉 jane.design/doctorcare"}, 
              {type: "link", content: "#novoprojeto #nlw #rocketseat"}],
  }
];

export function App() {

  return (
    
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                      key={post.id} 
                      author={post.author}
                      publishedAt={post.publishedAt}
                      postContent={post.content}
                />
              )}) 
          }
        </main>
      </div>
    </div>
  )
}



