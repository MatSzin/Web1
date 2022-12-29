import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Never Have I Ever AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Never Have I Ever AI" />
        <p className="Welcome to the definitive AI for your Never Have I Ever Questionset">
        Welcome to the definitive AI for your Never Have I Ever Questionset
        </p>
      </main>

      <Footer />
    </div>
  )
}
