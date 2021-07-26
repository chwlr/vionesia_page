import Head from 'next/head'
import SolutionOne from '../../components/Content/solution/erp_crm'

export default function ProductErpcrm() {
  return (
    <div>
      <Head>
        <title>VIONESIA SOLUTIONS</title>
        <meta name="description" content="vionesia Erp & CRM page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SolutionOne />
      </main>
    </div>
  )
}
