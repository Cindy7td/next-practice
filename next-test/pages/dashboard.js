import React from 'react';
import Button from 'components/base/Card'
import { useRouter } from 'next/router'
import Link from 'next/link'


function Home() {
  return (
    <div>
      <Link href="/"><a> Back </a></Link>
      <h1>Dashboard </h1>
    </div>
  )
}

export default Home
