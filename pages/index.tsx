import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>BeeBombshell&apos;s Portfolio 💜</title>
        <link rel="icon" href="/beebombshell.png" type='image/x-icon' /> 
        <meta name="description" content="Welcome to my portfolio website" key="desc" />
        <meta property="og:title" content="BeeBombshell&apos;s Portfolio 💜" />
        <meta
          property="og:description"
          content="Welcome to BeeBombshell&apos;s portfolio website"
        />
        <meta
          property="og:image"
          content="https://github.com/BeeBombshell/BeeBombshell-Portfolio/blob/main/public/banner.png?raw=true"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      {/* About Me */}
      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section className='snap-center' id='experience'>
          <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-center'>
        <Skills />
      </section>

      {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </ div>
  )
}