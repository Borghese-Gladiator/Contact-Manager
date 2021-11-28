import styles from './DownloadButton.module.css';
import { storageKey } from '../../utils/utils';

export default function DownloadButton() {
  const downloadTxtFile = () => {
    if (typeof window !== "undefined") {
      const element = document.createElement("a");
      const file = new Blob([localStorage.getItem(storageKey)],
        { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `${storageKey}.txt`;
      document.body.appendChild(element);
      element.click();
    } else {
      alert("Running server side right now")
    }
  }

  return (
    <label
      onClick={downloadTxtFile}
      className={styles.upload_button}
    >
      <span>
        Download
      </span>
    </label>
  );
}

