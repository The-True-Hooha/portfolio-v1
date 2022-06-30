import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Ogar | Software Engineer</title>
        <meta name="portfolio" content="portfolio by David Ogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <main className='w-full h-[2000px]'>
      </main>
    </div>
  )
}
