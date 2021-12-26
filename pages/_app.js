import { useState, useEffect } from 'react';
import DefaultLayout from '../src/components/_layouts/DefaultLayout';
import { storageKey } from '../src/utils/utils';
import '../styles/globals.css';
import 'antd/dist/antd.css';

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

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return getLayout(
    <Component {...pageProps} userList={userList} setUserList={setUserList} />
  )
}

export default MyApp;