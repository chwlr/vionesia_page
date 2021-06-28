import Head from 'next/head'
import HomeContent from '../components/Content/home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>VIONESIA</title>
        <meta name="description" content="vionesia home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContent />
      </main>
    </div>
  )
}
