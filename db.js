const fs = require('fs');
const path = require('path');

const eventsFilePath = path.join(__dirname, 'events.json');

let events = [];
if (fs.existsSync(eventsFilePath)) {
  const fileData = fs.readFileSync(eventsFilePath, 'utf8');
  events = JSON.parse(fileData);
}

/**
 * Add a new event to the database.
 * @param {Object} eventData - The data sent to the Eventbrite API.
 * @param {string} eventId - The event ID received from the Eventbrite API.
 */
function addEvent(eventData, eventId) {
console.log("Adding event:", eventData, eventId);
  const newEvent = {
    name: eventData.event?.name?.html || null,
    description: eventData.event?.description?.html || null,
    start: {
      timezone: eventData.event?.start?.timezone || null,
      utc: eventData.event?.start?.utc || null,
    },
    end: {
      timezone: eventData.event?.end?.timezone || null,
      utc: eventData.event?.end?.utc || null,
    },
    currency: eventData.event?.currency || null,
    eventId: eventId,
    timestamp: new Date().toISOString(),
  };

  events.push(newEvent);
  console.log("Current events array:", events);

  try {
    fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));
    console.log("Events successfully written to file.");
  } catch (error) {
    console.error("Error writing to events.json:", error);
  }
}

/**
 * Get all stored events.
 * @returns {Array} The array of stored events.
 */
function getEvents() {
  return events;
}

module.exports = {
  addEvent,
  getEvents,
};