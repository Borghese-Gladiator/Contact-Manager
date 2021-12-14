import { useEffect, useState } from 'react';
import styles from './UserCardList.module.css';
// custom
import AbsoluteBtn from '../../components/AbsoluteBtn';
// icons
import { AiFillDelete } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
// utils
import { dateDifference, truncateDescription } from '../../utils/utils';

const dateTodayObj = new Date();
// const dateLastTalkedString = dateMet.toLocaleDateString('us-US', { year: 'numeric', month: 'short', day: 'numeric' })

const AddUserCard = () => {
  const addUser = () => console.log("ADD USER MODAL");
  return (
    <button className={styles.add_btn} onClick={addUser}>
      <BsPlusCircle style={{fontSize: 25}} />
    </button>
  )
}

function UserCardList({ userList, deleteUserList }) {
  const initialCheckedState = new Array(userList.length).fill(false)
  console.log(initialCheckedState)
  const [checkedState, setCheckedState] = useState(initialCheckedState);
  const handleOnChange = (position) => {
    console.log("CALLED ON CHANGE")
    console.log(position)
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    console.log(updatedCheckedState)
    setCheckedState(updatedCheckedState);
  };

  let noCheckedItems = !checkedState.includes(true);
  useEffect(() => {
    noCheckedItems = !checkedState.includes(true);
  }, [checkedState])

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Sort by Date Added</button>
        <button>Sort by Date Last Talked</button>
        <button>Sort by Alphabetical</button>
      </div>
      {
        noCheckedItems
          ? <></>
          :
          <AbsoluteBtn position="bottom_right" onClick={() => deleteUserList(selectedIdList)}>
            <AiFillDelete style={{ fontSize: 20 }} />
          </AbsoluteBtn>
      }
      <div className={styles.card_list}>
        {
          userList.map(({ id, name, shortBio, dateLastTalked, placeLastTalked, contactMethod }, idx) => {
            // Parse string date into date object
            const dateLastTalkedObj = new Date(JSON.parse(dateLastTalked));
            const daysSinceLastTalk = dateDifference(dateTodayObj, dateLastTalkedObj);
            const daysText = daysSinceLastTalk === 1 ? "day" : "days";
            const truncatedText = truncateDescription(shortBio);
            console.log(`${checkedState}`)
            console.log(`CHECKED STATE: ${checkedState[idx]}`)
            return (
              <div className={`${styles.card} ${checkedState[idx] ? styles.active_card : ""}`} key={`user_card_${idx}`} onClick={() => handleOnChange(idx)}>
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
              </div>
            )
          })
        }
        <AddUserCard />
      </div>
    </>
  );
};

export default UserCardList;