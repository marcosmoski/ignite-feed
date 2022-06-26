import { Header } from './components/Header'
import {  Post } from './Post'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    
    <div>
      <Header />
      <h1>Hello world! </h1>
      <div className={styles.wrapper}>

      </div>
    </div>
  )
}



