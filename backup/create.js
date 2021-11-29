import { useReducer } from 'react';
import Head from 'next/head'
// styling
import styles from '../../styles/CreatePage.module.css'
// utils 
import { getDefaultUser } from '../../src/utils/utils';

const defaultName = "Adrian Chase"
const shortBio = "Interactive Studio CEO from Argentina"

export default function CreatePage({ userList = [], setUserList }) {
  const createUser = (e) => {
    e.preventDefault();
    const tempObj = {
      name: e.target.name.value === "" ? defaultName : e.target.name.value,
      shortBio: e.target.shortBio.value === "" ? shortBio : e.target.shortBio.value,
    }
    console.log(tempObj)
    setUserList(oldArray => [...oldArray, getDefaultUser(tempObj)]);
  }

  return (
    <div>
      <Head>
        <title>Create Users | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Create User
        </h1>
        <form onSubmit={createUser} style={{ width: '280px' }}>
          <Row>
            <label htmlFor="name" style={{ flexGrow: 1 }}>Name:</label>
            <input type="text" id="name" name="name" placeholder="Adrian Chase" />
          </Row>
          <br />
          <Row>
            <label htmlFor="shortBio" style={{ flexGrow: 1 }}>Short Bio:</label>
            <input type="text" id="shortBio" name="shortBio" placeholder="Interactiva Studio CEO from Argentina" />
          </Row>
          <br />

          <button
            type="submit"
            style={{
              backgroundColor: '#3c415c',
              color: 'white',
              padding: '1em 1.5em',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}>
            <span>Create User</span>
          </button>
        </form>
      </main>

    </div >
  );
}