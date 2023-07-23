import { useEffect } from 'react';
import '@/styles/globals.scss'
import Navbar from '@/component/navbar.mjs'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer /> */}
      {/* </Navbar> */}
    </>
  )
}