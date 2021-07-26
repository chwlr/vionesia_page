import Head from 'next/head'
import SolutionTwo from '../../components/Content/solution/security_defence'

export default function ProductSecurity() {
  return (
    <div>
      <Head>
        <title>VIONESIA SOLUTIONS</title>
        <meta name="description" content="vionesia Security and Defence page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SolutionTwo />
      </main>
    </div>
  )
}
