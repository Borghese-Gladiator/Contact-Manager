import { useReducer } from 'react';
import Head from 'next/head'
// styling
import styles from '../../styles/CreatePage.module.css'
// utils 
import { getDefaultUser } from '../../src/utils/utils';

const tempObj = {
  name: "Chunlok Lo",
  shortBio: "Badminton, Master's Comp Sci",
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function MassCreatePage({ userList=[], setUserList }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const createUsers = () => {
    const tempUserList = []
    for (let i = 0; i < state.count; i++) {
      tempUserList.push(getDefaultUser(tempObj))
    }
    setUserList(oldArray => [...oldArray, ...tempUserList]);
  }

  return (
    <div>
      <Head>
        <title>Mass Create | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Mass Create
        </h1>
        <div>
          Number of Users to Create: {state.count}
          <div>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
          </div>
        </div>
        <br />
        <div>
          <button
            onClick={createUsers}
            style={{
              backgroundColor: '#3c415c',
              color: 'white',
              padding: '1em 1.5em',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}>
            <span>Create {state.count} Users</span>
          </button>
        </div>
      </main>

    </div>
  );
}