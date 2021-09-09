import Head from 'next/head'
import SolutionFour from "../../components/Content/solution/professional_services";

export default function ProfServices() {
    return (
        <div>
            <Head>
                <title>VIONESIA SOLUTIONS</title>
                <meta name="description" content="vionesia Professional Services page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <SolutionFour />
            </main>
        </div>
    )
}
