const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());
const { addEvent } = require('./db'); // Import the addEvent function from db.js

// Replace this with your actual OAuth token
const EVENTBRITE_TOKEN = 'W5TACDM6GESNY75BFGZH';
const ORGANIZATION_ID = '2704452906331';

app.post('/create-event', async (req, res) => {
  const eventData = req.body;

  try {
    const response = await axios.post(
      `https://www.eventbriteapi.com/v3/organizations/${ORGANIZATION_ID}/events/`,
      eventData,
      {
        headers: {
          Authorization: `Bearer ${EVENTBRITE_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

        // Add the sent data and received eventId to the "database"
        addEvent(eventData, response.data.id);
        
    // Send back the event ID
    res.json({ success: true, eventId: response.data.id });
  } catch (error) {
    console.error('Error creating event:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.response?.data || 'Unknown error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
