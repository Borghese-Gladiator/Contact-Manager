export default (req, res) => {
  // req.body is a string (not an object)
  if (req.method === 'POST') {
    // Process a POST request
    const parsedBody = JSON.parse(req.body)
    const { name, bio, metThrough } = parsedBody
    const { v4: uuidv4 } = require('uuid');
  
    res.status(200).json({
      id: uuidv4(),
      name: name,
      bio: bio,
      metThrough: metThrough,
      notes: {},
      dateLastTalked: new Date(),
      dateCreated: new Date()
    })
  } else {
    res.status(400).json({
      error: "set request to a POST?"
    })
  }
}