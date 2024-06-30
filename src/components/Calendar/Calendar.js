import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    start: new Date(),
    end: new Date(),
    allDay: false,
  },
  // Add more events as needed
];

const CalendarComponent = () => (
  <div style={{ height: 500 }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default CalendarComponent;
