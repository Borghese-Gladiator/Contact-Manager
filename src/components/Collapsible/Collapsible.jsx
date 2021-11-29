import React, { useEffect, useRef, useState } from "react";
import styles from "./Collapsible.module.css";
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

function Collapsible({ header, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  return (
    <>
      <div className={styles.collapsible_card_edonec}>
        <div>
          <div className={styles.collapsible_header_edonec}>
            <div className={styles.title_text_edonec}>{header}</div>
            <button
              type="button"
              className={styles.collapsible_icon_button_edonec}
              onClick={handleFilterOpening}
            >
              {isOpen ? <AiFillCaretDown style={{color: "white"}} /> : <AiFillCaretUp style={{color: "white"}} />}
            </button>
          </div>
        </div>
        <div className={styles.collapsible_content_edonec} style={{ height }}>
          <div ref={ref}>
            <div className={styles.collapsible_card_edonec}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
