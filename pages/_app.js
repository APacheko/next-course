import '../styles/main.scss'
import NextNProgress from 'nextjs-progressbar'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextNProgress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}