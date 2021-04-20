export default (req, res) => {
  // req.body is a string (not an object)
  if (req.method === 'POST') {
    // Process a POST request
    const parsedBody = JSON.parse(req.body)
    const { name } = parsedBody
    const { v4: uuidv4 } = require('uuid');

    res.status(200).json({
      id: uuidv4(),
      name: name,
      bioObject: {
        age: "25",
        location: "Belmont, MA, USA",
        gender: "Male",
        languages: ["Cantonese", "Mandarin"],
        occupation: "Student (Master's)",
        major: "CS (Reinforcement Learning)"
      },
      friendGroup: 'League of Legends',
      notesList: [
        { id: uuidv4(), text: "Fall 2022 - going study abroad in Trinity College in Ireland", done: false },
        { id: uuidv4(), text: "Spring 2021 - peer mentor (not even starting Zoom calls, but paid for like 7~ hours of work a week)", done: false },
      ],
      onlineAccountsList: [
        { id: uuidv4(), text: "Discord - Blah#1111" },
        { id: uuidv4(), text: "Messenger - Blah" },
      ],
      dateLastTalked: JSON.stringify(new Date()),
      dateMet: JSON.stringify(new Date())
    })
  } else {
    res.status(400).json({
      error: "set request to a POST?"
    })
  }
}