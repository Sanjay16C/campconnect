import React, { useState } from "react";
import "./Event.css";
import culturalFest from "./images.jpeg";
import dataScienceWorkshop from "./datascience-workshop1714ad5f8cdc439ea9f850313f9db93f.tmb-th950x345.jpg";
import aiBusinessTalk from "./https---cdn.evbuc.com-images-839266309-2173220867483-1-original.20240902-050442.avif";
import startupExpo from "./65b2297795c85_startup-expo.jpg.webp";

const events = [
  {
    title: "Data Structures Workshop",
    date: "Sat, 8 Mar",
    location: "Auditorium - Block A",
    category: "Workshop",
    price: "Free",
    image: dataScienceWorkshop,
    description: "Learn the fundamentals of Data Structures with hands-on coding sessions.",
    time: "10:00 AM - 3:00 PM",
    organizer: "Tech Club",
    registerLink: "https://forms.gle/1qY39x6FC99uWnwP7"
  },
  {
    title: "AI in Business - Guest Talk",
    date: "Sun, 10 Mar",
    location: "Hall 3 - Tech Park",
    category: "Seminar",
    price: "₹199",
    image: aiBusinessTalk,
    description: "Explore how AI is transforming businesses with real-world case studies.",
    time: "11:00 AM - 1:00 PM",
    organizer: "AI Research Lab",
    registerLink: "https://forms.gle/pr6yvzdK5ey24izL6"
  },
  {
    title: "Annual Cultural Fest",
    date: "Fri, 15 Mar",
    location: "Main Ground",
    category: "Fest",
    price: "₹499 onwards",
    image: culturalFest,
    description: "Enjoy a vibrant mix of music, dance, and art performances.",
    time: "6:00 PM - 10:00 PM",
    organizer: "Cultural Committee",
    registerLink: "https://example.com/register-cultural-fest"
  },
  {
    title: "Startup Expo 2025",
    date: "Wed, 20 Mar",
    location: "Innovation Hall",
    category: "Exhibition",
    price: "Free",
    image: startupExpo,
    description: "Network with top startups, investors, and entrepreneurs.",
    time: "9:00 AM - 5:00 PM",
    organizer: "Entrepreneurship Cell",
    registerLink: "https://example.com/register-startup-expo"
  },
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dateFilter, setDateFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesDate = dateFilter === "All" || event.date.includes(dateFilter);
    const matchesCategory = categoryFilter === "All" || event.category === categoryFilter;
    return matchesDate && matchesCategory;
  });

  return (
    <div className="event-page">
      <aside className="event-filters">
        <h3>Filters</h3>
        
        {/* Date Filter */}
        <div className="filter-group">
          <h4>Date</h4>
          <button onClick={() => setDateFilter("Today")}>Today</button>
          <button onClick={() => setDateFilter("Tomorrow")}>Tomorrow</button>
          <button onClick={() => setDateFilter("This Weekend")}>This Weekend</button>
          <button onClick={() => setDateFilter("All")}>All</button>
        </div>

        {/* Category Filter */}
        <div className="filter-group">
          <h4>Category</h4>
          <button onClick={() => setCategoryFilter("Workshop")}>Workshops</button>
          <button onClick={() => setCategoryFilter("Seminar")}>Seminars</button>
          <button onClick={() => setCategoryFilter("Fest")}>Festivals</button>
          <button onClick={() => setCategoryFilter("Exhibition")}>Exhibitions</button>
          <button onClick={() => setCategoryFilter("All")}>All</button>
        </div>
      </aside>

      <div className="event-list">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {filteredEvents.map((event, index) => (
            <div key={index} className="event-card" onClick={() => setSelectedEvent(event)}>
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-info">
                <span className="event-date">{event.date}</span>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-category">{event.category}</p>
                <p className="event-price">{event.price}</p>
                <a href={event.registerLink} className="register-link">Register Here</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="event-modal" onClick={() => setSelectedEvent(null)}>
          <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedEvent(null)}>✖</button>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
            <h2>{selectedEvent.title}</h2>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p><strong>Time:</strong> {selectedEvent.time}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Organizer:</strong> {selectedEvent.organizer}</p>
            <p className="event-description">{selectedEvent.description}</p>
            <p><strong>Price:</strong> {selectedEvent.price}</p>
            <a href={selectedEvent.registerLink} className="register-link">Register Here</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;