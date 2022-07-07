import React from "react"
import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"

export default function About({ title }) {
  const linkClickHandler = () => {
    Router.push('/')
  }

  return (
    <MainLayout title={'About Page'}>
      <h1>{title}</h1>
      <button onClick={linkClickHandler}>Вернуться на главную</button>
      <button onClick={() => Router.push('/posts')}>На страницу постов</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about')
  const data = await response.json()

  return {
    title: data.title
  }
}