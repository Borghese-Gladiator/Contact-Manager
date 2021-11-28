import { useState, useEffect } from 'react'
import '../styles/globals.css'
import DefaultLayout from '../src/components/_layouts/DefaultLayout'
import { storageKey } from '../src/utils/utils';

function MyApp({ Component, pageProps }) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(storageKey, JSON.stringify(userList));
    }
  }, [userList]);

  useEffect(() => {
    setUserList(JSON.parse(localStorage.getItem(storageKey)) || [])

    setIsInitialized(true);
  }, []);

  const getLayout = Component.getLayout || (page => <DefaultLayout children={page} userList={userList} setUserList={setUserList} />)

  return getLayout(
    <Component {...pageProps} userList={userList} setUserList={setUserList} />
  )
}

export default MyApp;