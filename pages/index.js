import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="min-w-full text-gray-800 py-14 px-4 md:px-0">
        <div className="flex items-center container mx-auto max-w-5xl justify-between">
          {/* logo */}
          <Link href="#">
            <a className="text-xl md:text-3xl font-bold">
              <span className="bg-gradient-to-br from-brand-blue font-Josefin to-brand-green  pr-2 bg-clip-text text-transparent">
                Bored Ape
              </span>
            </a>
          </Link>
        </div>
      </header>

      <div className="h-full container max-w-5xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center max-w-4xl w-full">
          <Link href="/mint" passHref>
            <a className="mt-16 font-Exo uppercase inline-flex items-center px-6 py-2 text-sm md:text-2xl font-medium text-center rounded-lg bg-gray-100 text-brand-red hover:bg-brand-red hover:text-gray-100 hover:rounded-full ">
              Go to minting page
              <img
                src="/images/Comp-1_1.gif
              "
                className="w-15 h-7"
              />
            </a>
          </Link>
          <br />
          {/* main image */}

          <img
            src="/images/22.png"
            className="w-64 h-64 rounded-lg object-cover"
          />
          <div className="flex flex-col md:items-start items-center justify-center text-center text-gray-600 px-4 md:px-0 py-10 ">
            <h2 className="text-2xl md:text-4xl ">
              About Collection
              <p className="mt-6 text-lg">
                {`BoredApes are a collection of 5 burning hot NFTs living in
                the core of the blockchain. Each individual BoredApes is
                carefully curated from over 150 traits, along with some
                incredibly rare 1/1s that have traits that can't be found from
                any other BoredApes. Our vision is to create an amazing project
                that will shed light, joy, love, and creativity! Burn on,
                BoredApes!`}
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
