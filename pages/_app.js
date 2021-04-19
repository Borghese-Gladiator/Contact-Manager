import { useState } from 'react'
import '../styles/globals.css'
import DefaultLayout from '../components/_layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
  const [userList, setUserList] = useState([]);
  const getLayout = Component.getLayout || (page => <DefaultLayout children={page} userList={userList} setUserList={setUserList} />)

  return getLayout(
    <Component {...pageProps} userList={userList} setUserList={setUserList} />
  )
}

export default MyApp