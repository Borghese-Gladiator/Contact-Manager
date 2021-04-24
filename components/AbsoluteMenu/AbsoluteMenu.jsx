import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AbsoluteMenu.module.css'
// icons
import { CgMoreVerticalO } from 'react-icons/cg';

const AbsoluteMenu = ({ position, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles[`absolute_${position}`]}>
      {!open
        ? <span onClick={() => setOpen(true)}><CgMoreVerticalO className={styles.kc_fab_main_btn} /></span>
        : 
        <div className={styles.menuContainer}>
          <span onClick={() => setOpen(false)}><CgMoreVerticalO className={styles.kc_fab_main_btn} /></span>
          {children}
        </div>
      }
    </div>
  )
};

AbsoluteMenu.propTypes = {
  position: PropTypes.oneOf(['top_right', 'top_left', 'bottom_right', 'bottom_left'])
};

export default AbsoluteMenu;