

const express = require('express');

const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Enable CORS for all routes
app.use(cors());

// Define a simple route
/*app.get('/', (req, res) => {
  res.send('Hello, world!');
});*/

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Hamza',
  password: 'password',
  database: 'backend',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

connection.query(`
  CREATE TABLE IF NOT EXISTS transporters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255), location VARCHAR(100)
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table "transporters" created successfully');
  }
});

// Define the API endpoint for retrieving all transporters
/*app.get('/transporters', (req, res) => {
    const sql = 'SELECT * FROM transporters';
  
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving data:', err);
        res.status(500).json({ error: 'Failed to retrieve data' });
      } else {
        if (result.length > 0) {
          res.json(result);

        } else {
          res.status(404).json({ message: 'No transporters found' });
        }
      }
    });
  });
  */

// Define the API endpoint for retrieving all transporters
app.get('/transporters', (req, res) => {
	const sql = 'SELECT * FROM transporters';

	connection.query(sql, (err, result) => {
		if (err) {
			console.error('Error retrieving data:', err);
			res.status(500).json({ error: 'Failed to retrieve data' });
		} else {
			if (result.length > 0) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ message: 'No transporters found' });
			}
		}
	});
});



  
  // Define the API endpoint for retrieving a specific transporter by ID
  app.get('/transporters/:id', (req, res) => {
    const transporterId = req.params.id;
    const sql = 'SELECT * FROM transporters WHERE id = ?';
    
    connection.query(sql, [transporterId], (err, result) => {
      if (err) {
        console.error('Error retrieving data:', err);
        res.status(500).json({ error: 'Failed to retrieve data' });
      } else {
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.status(404).json({ message: 'Transporter not found' });
        }
      }
    });
  });
  
  // Define the API endpoint for creating a new transporter
app.post('/transporters', (req, res) => {
  const name = req.body && req.body.name; // Only include the 'name' property
  const location = req.body && req.body.location; // Include the 'location' property
  
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }
  
  const sql = 'INSERT INTO transporters (name, location) VALUES (?, ?)';
  const values = [name, location];
  
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Failed to insert data' });
    } else {
      res.status(201).json({ message: 'Data inserted successfully' });
    }
  });
});

  
  
  
  // Define the API endpoint for updating a specific transporter by ID
app.put('/transporters/:id', (req, res) => {
  const transporterId = req.params.id;
  const { name, location } = req.body;
  const sql = 'UPDATE transporters SET name = ?, location = ? WHERE id = ?';
  const values = [name, location, transporterId];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).json({ error: 'Failed to update data' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Data updated successfully' });
      } else {
        res.status(404).json({ message: 'Transporter not found' });
      }
    }
  });
});

  
  // Define the API endpoint for deleting a specific transporter by ID
  app.delete('/transporters/:id', (req, res) => {
    const transporterId = req.params.id;
    const sql = 'DELETE FROM transporters WHERE id = ?';
    
    connection.query(sql, [transporterId], (err, result) => {
      if (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Failed to delete data' });
      } else {
        if (result.affectedRows > 0) {
          res.json({ message: 'Data deleted successfully' });
        } else {
          res.status(404).json({ message: 'Transporter not found' });
        }
      }
    });
  });
  
  
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
