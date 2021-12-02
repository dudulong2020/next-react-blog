// import App from 'next/app'

import 'antd/dist/antd.css'

// // export default App

import '../static/style/pages/comm.css'

import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   const getLayout = Component.getLayout || ((page) => page)
//   return getLayout(<Component {...pageProps} />)
// }

// export default MyApp



import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


// export default App
