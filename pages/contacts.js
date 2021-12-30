import UserList from '../src/components/UserList';
import { getMetaWithTitle } from "../src/utils/utils";

export default function ContactsPage({ userList = [], setUserList }) {
  return (
    <div>
      { getMetaWithTitle("View Contacts | Contact Manager") }
      <main>
        <UserList userList={userList} setUserList={setUserList} />
      </main>
    </div>
  )
}