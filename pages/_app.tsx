import { AppProps } from 'next/dist/shared/lib/router/router'
import '@styles/index.css'
import Layout from "@components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
