import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BeeBombshell's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/beebombshell.png" type='image/x-icon' />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Me */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </>
  )
}