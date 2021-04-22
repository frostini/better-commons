import Link from 'next/link'

export default function FirstPost () {
  return  (
    <div className="container">
      <h1>This is the first post example</h1>
      <h1>{' '}
      <Link href="/"><a>return to home</a></Link>
      </h1>
    </div>
  )
}