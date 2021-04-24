import { useState } from 'react'
import '../styles/globals.css'
import DefaultLayout from '../components/_layouts/DefaultLayout'
// hooks
import useLocalStorage from '../hooks/useLocalStorage';

// CHECK running code on browser (window && document are not available on the server.)
if (typeof window !== "undefined") {
  // if null, save a default value to localStorage
  if (localStorage.getItem("userList") === null) {
    localStorage.setItem('userList', JSON.stringify([]));
  }
}

function MyApp({ Component, pageProps }) {
  const [userList, setUserList] = useLocalStorage('userList');
  const getLayout = Component.getLayout || (page => <DefaultLayout children={page} userList={userList} setUserList={setUserList} />)

  return getLayout(
    <Component {...pageProps} userList={userList} setUserList={setUserList} />
  )
}

export default MyApp