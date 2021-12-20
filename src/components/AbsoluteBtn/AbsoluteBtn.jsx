import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import styles from './AbsoluteBtn.module.css';

function AbsoluteBtn({ position, onClick, children}) {
  const absoluteAlignClassName = `absolute_${position}`;

  return (
    <div className={`${styles[absoluteAlignClassName]} ${styles.dropdown}`} onClick={onClick}>
      <Button className={styles.dropbtn}>{children}</Button>
    </div>
  )
}

AbsoluteBtn.propTypes = {
  position: PropTypes.oneOf(['top_right', 'top_left', 'bottom_right', 'bottom_left']),
  onClick: PropTypes.func
};

export default AbsoluteBtn;