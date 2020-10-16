import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from 'components/base/Card'

export default function Home() {
  return (
    <>
      <Button title = "Cards #1 " description = "Lorem ipsum " date = "10/10/20" 
          status = "Done" asignee = "Asignee: Cindy" onClick = { '/dashboard' } />
      <Button title = "Cards #2 " description = "Lorem ipsum2 " date = "10/15/20" 
        status = "In Progress" asignee = "Asignee: Yessica" onClick = { '/dashboard' }/>
      <Button title = "Cards #3 " description = "Lorem ipsum3 " date = "01/10/20" 
        status = "To Do" asignee = "Asignee: Ricardo" onClick = { '/dashboard' } />
    </>
  )
}


