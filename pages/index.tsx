import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Gazouillis</title>
        <meta name="description" content="Twitter made in France" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Bienvenue à Gazouillis
        </h1>

        <p>
          Twitter made in France
        </p>
      </main>
    </>
  )
}
