import Head from 'next/head'
import { server  } from '../../config'
import { Inter } from 'next/font/google'


import homeStylez from './../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={homeStylez.card}>
      <img src="./ghrost.jpg" />
    <section className={homeStylez.card}>
      <p>One Time in the middle of the night I heard a strange 
        noise in the woods. I went outside of the house and started heading 
        into the treeline. 
        They grabbed me right away and I had to scream to get them to let me go.
        They almost gave me a haircut.
      </p>
    </section> 
    </div>
  )
}

