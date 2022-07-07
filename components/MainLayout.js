import Link from "next/link";
import Head from "next/head";
import classes from '../styles/nav.module.scss'

export function MainLayout({ children, title = 'Next App' }) {

  return (
    <>
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next,js,react" />
        <meta name="description" content="Тестовый прокет на Next.js"/>
        <meta charset="utf-8" />
      </Head>
      <nav className={classes.nav}>
        <Link href="/"><a className={classes.a}>Главная</a></Link>
        <Link href="/about"><a className={classes.a}>О себе</a></Link>
        <Link href="/posts"><a className={classes.a}>Посты</a></Link>
      </nav>
      <main className={classes.main}>
        {children}
      </main>
    </>
  )
}