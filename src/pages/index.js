import Head from 'next/head'

import Layout from '@/Components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mamang - Free open source manga sub indo website</title>
      </Head>
      <div>
        <p className='font-serif text-8xl  font-extrabold text-black'>
          Hallo word
        </p>
      </div>
    </Layout>
  )
}
