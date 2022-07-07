import Link from "next/link"
import { MainLayout } from "../components/MainLayout"
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>Error 404</h1>
      <p >Страницы не сущестует	&#128577;<Link href={'/'}>
        <a className={classes.a}>Назад</a>
      </Link>
      </p>
    </MainLayout>
  )
}