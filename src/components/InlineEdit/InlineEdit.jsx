import React, { useState, useEffect, useRef, useCallback } from "react";
// custom hooks
import useKeypress from "../../hooks/useKeypress";
import useOnClickOutside from "../../hooks/useOnClickOutside";
// input sanitization
import DOMPurify from "dompurify";
// styling
import styles from './InlineEdit.module.css'
// add type checking for arguments
import PropTypes from 'prop-types';

function InlineEdit({ text, onSetText }) {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress("Enter");
  const esc = useKeypress("Escape");

  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      onSetText(inputValue);
      setIsInputActive(false);
    }
  });

  const onEnter = useCallback(() => {
    if (enter) {
      onSetText(inputValue);
      setIsInputActive(false);
    }
  }, [enter, inputValue, onSetText]);

  const onEsc = useCallback(() => {
    if (esc) {
      setInputValue(text);
      setIsInputActive(false);
    }
  }, [esc, text]);

  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);

  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and close the editor
      onEnter();
      // if Escape is pressed, revert the text and close the editor
      onEsc();
    }
  }, [onEnter, onEsc, isInputActive]); // watch the Enter and Escape key presses

  const handleInputChange = useCallback(
    event => {
      // sanitize the input a little
      setInputValue(DOMPurify.sanitize(event.target.value));
    },
    [setInputValue]
  );

  const handleSpanClick = useCallback(() => setIsInputActive(true), [
    setIsInputActive
  ]);

  return (
    <span className={styles.inline_text} ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={handleSpanClick}
        className={`${styles.inline_text_copy} ${!isInputActive ? styles.inline_text_copy_active : styles.inline_text_copy_hidden}`}
      >
        {text}
      </span>
      <input
        ref={inputRef}
        // set the width to the input length multiplied by the x height
        // it's not quite right but gets it close
        style={{ minWidth: Math.ceil(inputValue.length) + "ch" }}
        value={inputValue}
        onChange={handleInputChange}
        className={`${styles.inline_text_input} ${isInputActive ? styles.inline_text_input_active : styles.inline_text_input_hidden}`}
      />
    </span >
  );
}

InlineEdit.propTypes = {
  text: PropTypes.string,
  onSetText: PropTypes.func,
};

export default InlineEdit;
