import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import type { CalendarApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";

const Timetable: React.FC = () => {
  const calendarRef = useRef<FullCalendar | null>(null);

  // State for events
  const [events, setEvents] = useState([
    {
      title: "Math Class",
      start: "2025-09-22T09:00:00",
      end: "2025-09-22T10:30:00",
    },
    {
      title: "Physics Lab",
      start: "2025-09-23T14:00:00",
      end: "2025-09-23T16:00:00",
    },
    {
      title: "English Literature",
      start: "2025-09-24T11:00:00",
      end: "2025-09-24T12:30:00",
    },
  ]);

  // Switch views dynamically
  const handleChangeView = (viewName: string) => {
    const calendarApi: CalendarApi | null =
      calendarRef.current?.getApi() || null;
    if (calendarApi) {
      calendarApi.changeView(viewName);
    }
  };

  // Handle click on empty slot
  const handleDateClick = (arg: { dateStr: string }) => {
    const title = prompt("Enter class/event name:");
    if (title) {
      const newEvent = {
        title,
        start: arg.dateStr,
        end: arg.dateStr, // simple, could be expanded to ask for end time
      };
      setEvents((prev) => [...prev, newEvent]);
    }
  };

  return (
    <div className="p-6">
      {/* Controls */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => handleChangeView("timeGridDay")}
          className="px-4 py-2 rounded-lg bg-purple-500 text-white"
        >
          Daily
        </button>
        <button
          onClick={() => handleChangeView("timeGridWeek")}
          className="px-4 py-2 rounded-lg bg-green-500 text-white"
        >
          Weekly
        </button>
        <button
          onClick={() => handleChangeView("dayGridMonth")}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
        >
          Monthly
        </button>
        <button
          onClick={() => handleChangeView("multiMonthYear")}
          className="px-4 py-2 rounded-lg bg-orange-500 text-white"
        >
          Yearly
        </button>
      </div>

      {/* Calendar */}
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          multiMonthPlugin,
          interactionPlugin,
        ]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={false}
        height="auto"
        slotMinTime="08:00:00"
        slotMaxTime="18:00:00"
        allDaySlot={false}
        dateClick={handleDateClick} // 👈 enables click-to-add
      />
    </div>
  );
};

export default Timetable;
