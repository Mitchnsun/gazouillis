import Head from "next/head"
import { Container, Typography } from "@mui/material"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gazouillis</title>
        <meta name="description" content="Twitter made in France" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <Typography variant="h1" gutterBottom>
          Bienvenue à Gazouillis
        </Typography>

        <Typography>Twitter made in France</Typography>
      </Container>
    </>
  )
}
