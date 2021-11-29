import { useState } from 'react';
import styles from './UserCardList.module.css';
// custom
import AbsoluteBtn from '../../components/AbsoluteBtn';
import Card from '../../components/Card';
// icons
import { AiFillDelete } from 'react-icons/ai';
// utils
import { dateDifference, truncateDescription } from '../../utils/utils';

const dateTodayObj = new Date();

function UserCardList({ userList, deleteUser }) {
  const [selectedUserList, setSelectedUserList] = useState([])
  const isEmptySelectedUserList = selectedUserList.length === 0;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Sort by Date Added</button>
        <button>Sort by Date Last Talked</button>
        <button>Sort by Alphabetical</button>
      </div>
      {
        isEmptySelectedUserList
          ? <></>
          : <AbsoluteBtn position="bottom_right"><AiFillDelete style={{ fontSize: 20 }} /></AbsoluteBtn>
      }
      {
        userList.map(({ name, shortBio, dateLastTalked }, idx) => {
          const dateLastTalkedObj = new Date(JSON.parse(dateLastTalked));
          const daysSinceLastTalk = dateDifference(dateTodayObj, dateLastTalkedObj);
          const truncatedText = truncateDescription(shortBio);
          return (
            <Card>
              <h3>{name}</h3>
              <h5>{daysSinceLastTalk} days since last talk</h5>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {truncatedText}
              </span>
            </Card>
          )
        })
      }
    </>
  );
};

export default UserCardList;