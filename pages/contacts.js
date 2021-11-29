import { useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/DeletePage.module.css'
// custom components
import UserTable from '../src/components/UserTable';
import Row from '../src/components/Row';
import Card from '../src/components/Card';
// icons
import { AiFillDelete } from 'react-icons/ai';
import { BiTable } from 'react-icons/bi';
import { BsCardHeading } from 'react-icons/bs';
// utils
import { dateDifference, truncateDescription } from '../src/utils/utils';

export default function ContactsPage({ userList = [], setUserList }) {
  const [isTableView, setIsTableView] = useState(false);
  const toggleTableView = () => setIsTableView(true);
  const toggleCardView = () => setIsTableView(false);
  const [selectedUserList, setSelectedUserList] = useState([])
  const isEmptySelectedUserList = selectedUserList.length === 0;
  
  const addUser = (e) => {
    e.preventDefault();
    const tempObj = {
      name: e.target.name.value === "" ? defaultName : e.target.name.value,
      shortBio: e.target.shortBio.value === "" ? shortBio : e.target.shortBio.value,
    }
    console.log(tempObj)
    setUserList(oldArray => [...oldArray, generateUserObject(tempObj)]);
  }
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }

  return (
    <div>
      <Head>
        <title>View Contacts | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contacts
        </h1>
        <Row>
          <div style={{ alignSelf: "center" }}>
            <button>Sort by Date Added</button>
            <button>Sort by Date Last Talked</button>
            <button>Sort by Alphabetical</button>
          </div>
          <div style={{flex: 1}} />
          <div style={{ alignSelf: "flex-end" }}>
            <button onClick={toggleTableView}><BiTable />Table</button>
            <button onClick={toggleCardView}><BsCardHeading />Cards</button>
          </div>
        </Row>
        
        <tr>
          <th>
            <button onClick={() => requestSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button onClick={() => requestSort('shortDesc')}>
              Desc
            </button>
          </th>
          <th>
            <button onClick={() => requestSort('placeLastTalked')}>
              Last Talked Place
            </button>
          </th>
          <th style={{ flexGrow: 1 }}>
            <button onClick={() => requestSort('dateLastTalked')}>
              Last Talked (Days)
            </button>
          </th>
          <th>
            Delete
          </th>
        </tr>
        {
          userList.map(({ name, shortBio, dateLastTalked, dateAdded }, idx) => {
            const dateLastTalked = new Date(JSON.parse(user.dateLastTalked));
            const dateToday = new Date();
            const daysSinceLastTalk = dateDifference(dateToday, dateLastTalked);
            const truncatedText = truncateDescription(shortBio);
            return (
              <Card>
                <h3>{name}</h3>
                <h5>{daysSinceLastTalk} days since last talk</h5>
                <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>             
                  {this.truncate(this.props.name)}
                </span>
              </Card>
            )
        {
          isEmptySelectedUserList ? <></>
          : <AbsoluteBtn position="bottom_right"><AiFillDelete style={{fontSize: 20}} /></AbsoluteBtn>
        }
        {
          isTableView ? <UserTable userList={userList} deleteUser={deleteUser} />
          : <UserCardList userList={userList} deleteUser={deleteUser}></UserCardList>
        }
      </main>
    </div>
  )
}