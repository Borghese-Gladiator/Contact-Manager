import '../styles/globals.css'
import DefaultLayout from '../components/_layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => <DefaultLayout children={page} />)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp