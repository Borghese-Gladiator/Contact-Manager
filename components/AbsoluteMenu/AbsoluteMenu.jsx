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

  const absoluteAlignClassName = `absolute_${position}`;
  const contentAlignClassName = position.includes("right") ? styles.left_align_content : "";

  return (
    <div className={`${styles[absoluteAlignClassName]} ${styles.dropdown}`} ref={wrapperRef}>
      <button className={styles.dropbtn}><CgMoreVerticalO /></button>
      <div className={`${styles.dropdown_content} ${contentAlignClassName}`}>
        {children}
      </div>
    </div>
  )
};

AbsoluteMenu.propTypes = {
  position: PropTypes.oneOf(['top_right', 'top_left', 'bottom_right', 'bottom_left'])
};

export default AbsoluteMenu;