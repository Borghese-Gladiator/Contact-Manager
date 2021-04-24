// generate IDs (unique keys for React rendering)
import { v4 as uuidv4 } from 'uuid';


//capitalize only the first letter of the string. 
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* difference between date1 and date2 in days (date2 - date1) */
/* date1 and date 2 are already javascript date objects */
export function dateDifference(date2, date1) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// POTENTIAL SERVER FUNCTIONS

export function getDefaultUser(name, shortBio, friendGroup) {
  return {
    id: uuidv4(),
    name: name,
    shortBio: shortBio,
    bioObject: {
      age: "25",
      location: "Belmont, MA, USA",
      gender: "Male",
      languages: ["Cantonese", "Mandarin"],
      occupation: "Student (Master's)",
      major: "CS (Reinforcement Learning)"
    },
    friendGroup: friendGroup,
    notesList: [
      { id: uuidv4(), text: "Fall 2022 - going study abroad in Trinity College in Ireland", done: false },
      { id: uuidv4(), text: "Spring 2021 - peer mentor (not even starting Zoom calls, but paid for like 7~ hours of work a week)", done: false },
    ],
    onlineAccountsList: [
      { id: uuidv4(), text: "Discord - BoxedCube#1111" }
    ],
    dateLastTalked: JSON.stringify(new Date()),
    dateMet: JSON.stringify(new Date())
  }
}