import Link from "next/link"
import Head from "next/head"
import { MainLayout } from "../components/MainLayout"

export default function Index() {
  return (
    <MainLayout title={'Home Page'}>
      <h1>Привет next JS!</h1>
      <p><Link href={'/about'}><a>О себе</a></Link></p>
      <p><Link href='/posts'><a>Посты</a></Link></p>
    </MainLayout>
  )
}