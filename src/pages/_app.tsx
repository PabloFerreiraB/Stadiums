import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Stadiums</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="theme-color" href="#06092b" />
        <meta name="description" content="All the stadiums in the world." />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
