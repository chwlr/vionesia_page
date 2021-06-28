import Head from 'next/head'
import AboutContent from '../components/Content/about'

export default function Products() {
  return (
    <div>
      <Head>
        <title>ABOUT VIONESIA</title>
        <meta name="description" content="vionesia about page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutContent />
      </main>
    </div>
  )
}
