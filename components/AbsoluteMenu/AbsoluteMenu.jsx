import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// styling
import styles from './AbsoluteMenu.module.css';
// hooks
import useOnClickOutside from "../../hooks/useOnClickOutside";
// icons
import { CgMoreVerticalO } from 'react-icons/cg';

const AbsoluteMenu = ({ position, children }) => {
  const [open, setOpen] = useState(false);
  
  const wrapperRef = useRef(null);

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (open) {
      setOpen(false)
    }
  });

  return (
    <div className={styles[`absolute_${position}`]} ref={wrapperRef}>
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