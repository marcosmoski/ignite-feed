import { Header } from './components/Header'
import {  Post } from './Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    
    <div>
      <Header />
      <h1>Hello world! </h1>
      <div className={styles.wrapper}>
        <Sidebar />

        <Post author="MARCOS" content="conteudo"/>
      </div>
    </div>
  )
}



