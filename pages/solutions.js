import Head from 'next/head'
import SolutionContent from '../components/Content/solution'

export default function Solutions() {
  return (
    <div>
      <Head>
        <title>VIONESIA SOLUTIONS</title>
        <meta name="description" content="vionesia Solutions page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SolutionContent />
      </main>
    </div>
  )
}
