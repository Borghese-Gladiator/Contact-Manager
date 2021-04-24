import { storageKey } from '../../../utils/utils';
import styles from './UploadButton.module.css';

// Styling input type file button: https://stackoverflow.com/questions/572768/styling-an-input-type-file-button
function getFile(event) {
  if (typeof window !== "undefined") {
    const input = event.target
    if ('files' in input && input.files.length > 0) {
      // add file content to localStorage
      // input.files[0] => file object - name, size, lastModified, etc.
      readFileContent(input.files[0]).then(content => {
        localStorage.setItem(storageKey, content);
        window.location.reload()
      }).catch(error => console.log(error))
    }
  } else {
    alert("Running server side right now")
  }

}

function readFileContent(file) {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}

function UploadButton() {
  return (
    <div onChange={getFile}>
      <label htmlFor="file-upload" className={styles.upload_button}>
        Upload
        <input id="file-upload" type="file" className={styles.file_input} />
      </label>
    </div>
  )
}

export default UploadButton