import Head from 'next/head'
import ContactContent from '../components/Content/contact'

export default function Products() {
  return (
    <div>
      <Head>
        <title>CONTACT VIONESIA</title>
        <meta name="description" content="vionesia contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactContent />
      </main>
    </div>
  )
}
