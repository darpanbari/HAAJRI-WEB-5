import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import './ReactCalendar.css';

const ReactCalendar = () => {
  const events = [
    { title: 'Workshops', start: '2023-08-08' },
    { title: 'Indian Independence Day', start: '2023-08-15' },
    { title: "Parsi New Year's Day", start: '2023-08-16' },
    { title: 'Trade shows', start: '2023-08-25' },
    { title: 'Raksha Bandhan', start: '2023-08-30' },
    { title: 'Krishna Janmashtami', start: '2023-09-07' },
  ];

  return (
    <div className="calendar-container p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        views={{
          
          timeGridDay: { buttonText: 'Day' },
          timeGridWeek: { buttonText: 'Week' },
          dayGridMonth: { buttonText: 'Month' },

        }}
      />
    </div>
  );
};

export default ReactCalendar;
