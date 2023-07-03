const express = require('express');

const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors());

// Initialize the objectPositions variable to store transporters positions
const objectPositions = {};

// Define the API endpoint for retrieving all transporters
app.get('/transporters', (req, res) => {
  res.status(200).json(objectPositions);
});

// Define the API endpoint for retrieving a specific transporter by ID
app.get('/transporters/:id', (req, res) => {
  const transporterId = req.params.id;
  const position = objectPositions[transporterId];

  if (position) {
    res.status(200).json(position);
  } else {
    res.status(404).json({ message: 'Transporter not found' });
  }
});

// Define the API endpoint for creating a new transporter
app.post('/transporters', (req, res) => {
  const name = req.body && req.body.name; // Only include the 'name' property
  const location = req.body && req.body.location; // Include the 'location' property
  
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }
  
  // Store the transporter's position in the objectPositions variable
  objectPositions[name] = { name, location };
  
  res.status(201).json({ message: 'Transporter created successfully', id: name });
});

// Define the API endpoint for updating a specific transporter by ID
app.put('/transporters/:id', (req, res) => {
  const transporterId = req.params.id;
  const { name, location } = req.body;

  // Check if the transporter with the given ID exists
  if (!objectPositions[transporterId]) {
    res.status(404).json({ message: 'Transporter not found' });
    return;
  }

  // Update the transporter's position in the objectPositions variable
  objectPositions[transporterId] = { name, location };

  res.json({ message: 'Transporter updated successfully' });
});

// Define the API endpoint for deleting a specific transporter by ID
app.delete('/transporters/:id', (req, res) => {
  const transporterId = req.params.id;

  // Check if the transporter with the given ID exists
  if (!objectPositions[transporterId]) {
    res.status(404).json({ message: 'Transporter not found' });
    return;
  }

  // Delete the transporter's position from the objectPositions variable
  delete objectPositions[transporterId];

  res.json({ message: 'Transporter deleted successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
