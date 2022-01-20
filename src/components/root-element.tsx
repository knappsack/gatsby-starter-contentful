import React from 'react'
import Header from './header'
import Footer from './footer'

const RootElement = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-5 py-10 sm:py-20 min-h-main" role="main">
        <div className="max-w-screen-xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  )
}

export default RootElement
