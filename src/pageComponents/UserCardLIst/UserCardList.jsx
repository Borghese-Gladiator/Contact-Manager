import { useEffect, useState } from 'react';
import styles from './UserCardList.module.css';
// custom
import AbsoluteBtn from '../../components/AbsoluteBtn';
import Card from '../../components/Card';
// icons
import { AiFillDelete } from 'react-icons/ai';
// utils
import { dateDifference, truncateDescription } from '../../utils/utils';

const dateTodayObj = new Date();
// const dateLastTalkedString = dateMet.toLocaleDateString('us-US', { year: 'numeric', month: 'short', day: 'numeric' })

function UserCardList({ userList, deleteUserList }) {
  const [checkedState, setCheckedState] = useState(
    new Array(userList.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    console.log(checkedState)
  };

  let isEmptySelectedIdList = checkedState.includes(true);
  useEffect(() => {
    console.log(checkedState)
    isEmptySelectedIdList = checkedState.includes(true);
  }, [checkedState])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Sort by Date Added</button>
        <button>Sort by Date Last Talked</button>
        <button>Sort by Alphabetical</button>
      </div>
      {
        isEmptySelectedIdList
          ? <></>
          :
          <AbsoluteBtn position="bottom_right" onClick={() => deleteUserList(selectedIdList)}>
            <AiFillDelete style={{ fontSize: 20 }} />
          </AbsoluteBtn>
      }
      {
        userList.map(({ id, name, shortBio, dateLastTalked, placeLastTalked, contactMethod }, idx) => {
          // Parse string date into date object
          const dateLastTalkedObj = new Date(JSON.parse(dateLastTalked));
          const daysSinceLastTalk = dateDifference(dateTodayObj, dateLastTalkedObj);
          const daysText = daysSinceLastTalk === 1 ? "day" : "days";
          const truncatedText = truncateDescription(shortBio);
          return (
            <Card key={`user_card_${idx}`} onClick={() => handleCardClick(id)}>
              <input
                type="checkbox"
                checked={checkedState[idx]}
                onChange={() => handleOnChange(idx)}
              />
              <h2>{name}</h2>
              <h4>Last talked: {daysSinceLastTalk} {daysText} ago</h4>
              <h4>Last talked at: {placeLastTalked}</h4>
              <span>Contact by: {contactMethod}</span>
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