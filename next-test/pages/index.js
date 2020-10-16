import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MyCard from '../components/base/Card'

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <MyCard title = "Terminar la practica de web "  date = "10/15/20" 
          status = "Done" asignee = "Cindy" id = "1" /> 

      <MyCard title = "Subir el repo " date = "10/15/20" 
        status = "In Progress" asignee = "Yessica" id = "2"/>

      <MyCard title = "Enviar al profe" date = "10/15/20" 
        status = "To Do" asignee = "Ricardo" id = "3"  />
    </>
  )
}


