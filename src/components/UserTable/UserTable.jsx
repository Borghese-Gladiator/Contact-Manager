import React from 'react';
import styles from './UserTable.module.css';
// icons
import { RiDeleteBin7Line } from 'react-icons/ri';
// utils
import { dateDifference } from '../../utils/utils';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { users: sortedItems, requestSort, sortConfig };
};

const ProductTable = ({ userList, deleteUser }) => {
  const { users, requestSort, sortConfig } = useSortableData(userList);
  return (
    <table className={styles.table_root}>
      <thead>
        <tr>
          <th>
            <button onClick={() => requestSort('name')}>
              Name
            </button>
          </th>
          <th>
            <button onClick={() => requestSort('id')}>
              ID
            </button>
          </th>
          <th>
            <button onClick={() => requestSort('friendGroup')}>
              Group
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
      </thead>
      <tbody>
        {users.map((user, idx) => {
          const dateLastTalked = new Date(JSON.parse(user.dateLastTalked))
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.friendGroup}</td>
              <td>{dateDifference(new Date(), dateLastTalked)}</td>
              <td><button onClick={() => deleteUser(user.id)} ><RiDeleteBin7Line /></button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;