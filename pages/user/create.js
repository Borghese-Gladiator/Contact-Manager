import { useReducer } from 'react';
import Head from 'next/head'
// generate IDs (unique keys for React rendering)
import { v4 as uuidv4 } from 'uuid';
// styling
import styles from '../../styles/CreatePage.module.css'

const getDefaultUser = ({ name, shortBio, friendGroup }) => ({
  id: uuidv4(),
  name: name,
  shortBio: shortBio,
  bioObject: {
    age: "25",
    location: "Belmont, MA, USA",
    gender: "Male",
    languages: ["Cantonese", "Mandarin"],
    occupation: "Student (Master's)",
    major: "CS (Reinforcement Learning)"
  },
  friendGroup: friendGroup,
  notesList: [
    { id: uuidv4(), text: "Fall 2022 - going study abroad in Trinity College in Ireland", done: false },
    { id: uuidv4(), text: "Spring 2021 - peer mentor (not even starting Zoom calls, but paid for like 7~ hours of work a week)", done: false },
  ],
  onlineAccountsList: [
    { id: uuidv4(), text: "Discord - BoxedCube#1111" }
  ],
  dateLastTalked: JSON.stringify(new Date()),
  dateMet: JSON.stringify(new Date())
})

const tempObj = {
  name: "Chunlok Lo",
  shortBio: "Master's CS, Reinforcement Learning specialist",
  friendGroup: "League of Legends",
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

export default function CreatePage({ userList, setUserList }) {
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
        <title>Delete Users | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Create User
        </h1>
        <div>
          Count: {state.count}
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