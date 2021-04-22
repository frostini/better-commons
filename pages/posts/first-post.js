import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost () {
  return  (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>This is the first post example</h1>
      <h1>
        <Link href="/">
          <a>return to home
          </a>
        </Link>
      </h1>
    </Layout>
  )
}