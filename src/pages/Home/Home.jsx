import React from 'react'
import { Hero, Features, NewArrivals, PopularProducts, Banner, About, Blog, NewsLetter } from '../../components'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProducts />
      <Banner />
      <About />
      <Blog />
      <NewsLetter />
    </>
  )
}

export default Home