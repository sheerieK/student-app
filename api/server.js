const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
    res.status(201).send("Home Page ");
});


//Endpoint to Get the data from Json file 
app.get('/api/students', (req, res) => {
    const filePath = path.join(__dirname, "students.json");
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading student data');
        return;
      }

      // Parse  JSON data and send as a response
      try {
        const students = JSON.parse(data);
        res.json(students);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error parsing student data');
      }
    });
  });



// Endpoint to add the students
app.post("/api/students", (req, res) => {
    const newStudent = req.body; 

    // Read the JSON data first from json file
    fs.readFile(path.join(__dirname, "students.json"), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error in reading file");
            return;
        }

        try {
            const students = JSON.parse(data);
            students.push(newStudent);

            //write student detail into existing Json file
             fs.writeFile(path.join(__dirname, "students.json"), JSON.stringify(students), (err) => {
                if (err) {
                    console.error("Error saving the data into JSON file", err);
                    return;
                }
                res.status(201).send(newStudent);
            });
        } catch (err) {
            console.error("Error parsing the JSON data", err);
            res.status(500).send("Error parsing the data of JSON file");
        }
    });

    console.log("Student added");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});










