import { useState, useEffect } from 'react';
import mainVideo from './assets/MAIN_VIDEO.mp4';
import bosm from './assets/BOSM.jpg';
import dataDialogues from './assets/Chap 1.jpg';
import mindMarket from './assets/Mind, Markets.jpg';
import resumeWorkshop from './assets/Resume Building.jpg';
import studyCircle from './assets/Study Circle.jpg';
import interfaceImg from './assets/Main poster.jpg';
import inkspire from './assets/ARC.jpg';
import enigmaticEnclave from './assets/Enigmatic Enclave Solve the Mystery.png';
import stockStormExchange from './assets/FINOMANIAC.jpg';
import hrImperium from './assets/HR_ IMPERIUM.png';
import cashOrClash from './assets/ILC ClashCASH.jpg';
import innoMun from './assets/Marketing Club Final Poster.png';
import moneyball from './assets/MoneyBall Final Poster.png';
import productParadox from './assets/product.png';

interface Event {
  id: number;
  title: string;
  date: string; // Human-readable date(s)
  time: string; // Human-readable time
  venue: string;
  speaker?: string;
  posterUrl: string;
  category: string;
  startDateTime: string; // YYYY-MM-DDT... or YYYY-MM-DD
  endDateTime: string;   // YYYY-MM-DDT... or YYYY-MM-DD (exclusive end for multi-day)
}

function App() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const today = new Date();
  const [calendarMonthIdx, setCalendarMonthIdx] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

const events: Event[] = [
  {
    id: 1,
    title: "Resume Building Workshop",
    date: "August 24, 2025",
    time: "3:00 PM to 4:00 PM",
    venue: "Virtual",
    speaker: "Arjun Bhatnagar & Sudhanshu Ranjan",
    posterUrl: resumeWorkshop,
    category: "Workshop",
    startDateTime: new Date(2025, 7, 24, 15, 0, 0).toISOString(),
    endDateTime: new Date(2025, 7, 24, 16, 0, 0).toISOString(),
  },
  {
    id: 2,
    title: "Data Dialouges Unplugged Chap 1",
    date: "August 28, 2025",
    time: "5:00 PM to 7:00 PM",
    venue: "Virtual",
    speaker: "Kireeti Kesavamurthy",
    posterUrl: dataDialogues,
    category: "Speaker Session",
    startDateTime: new Date(2025, 7, 28, 17, 0, 0).toISOString(),
    endDateTime: new Date(2025, 7, 28, 19, 0, 0).toISOString(),
  },
  {
    id: 3,
    title: "BOSM 2025",
    date: "September 17 - 21, 2025",
    time: "All Day",
    venue: "TBD",
    posterUrl: bosm,
    category: "Festival",
    startDateTime: "2025-09-17",  // local date
    endDateTime: "2025-09-21",    // local date, inclusive
  },
  {
    id: 4,
    title: "Mind, Market & Ministries",
    date: "September 27, 2025",
    time: "11:30 AM to 1:30 PM",
    venue: "NAB 6163",
    speaker: "Kunal Rahar",
    posterUrl: mindMarket,
    category: "Seminar",
    startDateTime: new Date(2025, 8, 27, 11, 30, 0).toISOString(),
    endDateTime: new Date(2025, 8, 27, 13, 30, 0).toISOString(),
  },
  {
    id: 5,
    title: "Study Circle (Product Management)",
    date: "October 12, 2025",
    time: "5:00 PM to 7:00 PM",
    venue: "Virtual",
    speaker: "Students",
    posterUrl: studyCircle,
    category: "Study Circle",
    startDateTime: new Date(2025, 9, 12, 17, 0, 0).toISOString(),
    endDateTime: new Date(2025, 9, 12, 19, 0, 0).toISOString(),
  },
  {
    id: 6,
    title: "Interface",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    posterUrl: interfaceImg,
    category: "Festival",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02",    // inclusive
  },
  {
    id: 7,
    title: "Inkspire",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Alumini Relations Club",
    posterUrl: inkspire,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 8,
    title: "Enigmatic Enclave",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Media Relations Club",
    posterUrl: enigmaticEnclave,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 9,
    title: "Stock Storm Exchange",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Finance Club",
    posterUrl: stockStormExchange,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 10,
    title: "HR Imperium",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "HR & Sponsorship Club",
    posterUrl: hrImperium,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 11,
    title: "Cash or Clash",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Industry Linkage Club",
    posterUrl: cashOrClash,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 12,
    title: "InnoMun",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Marketing Club",
    posterUrl: innoMun,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 13,
    title: "Moneyball",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Operations Club",
    posterUrl: moneyball,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
  {
    id: 14,
    title: "The Product Paradox",
    date: "October 31 - November 2, 2025",
    time: "All Day",
    venue: "TBD",
    speaker: "Product Management Club",
    posterUrl: productParadox,
    category: "Competition",
    startDateTime: "2025-10-31",
    endDateTime: "2025-11-02"
  },
];



 const isDateInRange = (event: Event, targetDate: Date) => {
  const formatLocalDate = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

  const targetDateString = formatLocalDate(targetDate);
  const startDateString = event.startDateTime.split('T')[0];
  const endDateString = event.endDateTime.split('T')[0];

  // Single-day event
  if (startDateString === endDateString) {
    return targetDateString === startDateString;
  }

  // Multi-day event: inclusive start, inclusive end
  return targetDateString >= startDateString && targetDateString <= endDateString;
 };



  const getEventsForDate = (date: Date): Event[] => {
    return events.filter(ev => isDateInRange(ev, date));
  };

  // Auto-select first event for the selected date (or clear selection)
  useEffect(() => {
    const eventsForSelected = getEventsForDate(selectedDate);
    if (eventsForSelected.length > 0) {
      if (!eventsForSelected.some(ev => ev.id === selectedEventId)) {
        setSelectedEventId(eventsForSelected[0].id);
      }
    } else {
      setSelectedEventId(null);
    }
  }, [selectedDate, selectedEventId]); // include selectedEventId to satisfy linter and avoid stale closures

  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }
  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  const daysInMonth = getDaysInMonth(calendarYear, calendarMonthIdx);
  const firstDay = getFirstDayOfMonth(calendarYear, calendarMonthIdx);
  const calendarDays: Array<Date | null> = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(new Date(calendarYear, calendarMonthIdx, d));

  function generateGoogleCalendarUrl(event: Event) {
    // Format date-time strings to Google Calendar format (YYYYMMDDTHHMMSS or YYYYMMDD)
    const formatForCalendar = (dt: string) => dt.replace(/[-:]/g, '').replace(/\..*$/, '');
    const start = formatForCalendar(event.startDateTime);
    const end = formatForCalendar(event.endDateTime);

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${start}/${end}&details=${encodeURIComponent(event.speaker || '')}&location=${encodeURIComponent(event.venue)}&sf=true&output=xml`;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <video
          src={mainVideo}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className="w-full h-[60vh] object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center py-8">
        {/* Title removed as requested */}
         <h2 className="text-4xl font-extrabold mb-4 text-blue-900 tracking-wide">Event Calendar</h2>

        <p className="text-base text-gray-700 max-w-2xl text-center">
          Stay updated with upcoming events, workshops, and seminars.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
        {/* Calendar Section (left) */}
        <div className="w-full lg:max-w-md">
          <div className="flex items-center justify-between mb-2">
            <button
              className="px-2 py-1 text-sm text-blue-900 hover:bg-blue-100 rounded"
              onClick={() => {
                const newMonthIdx = calendarMonthIdx === 0 ? 11 : calendarMonthIdx - 1;
                const newYear = calendarMonthIdx === 0 ? calendarYear - 1 : calendarYear;
                setCalendarMonthIdx(newMonthIdx);
                setCalendarYear(newYear);
                setSelectedDate(new Date(newYear, newMonthIdx, 1));
              }}
            >&lt;</button>
            <span className="font-semibold text-lg text-gray-900">{months[calendarMonthIdx]} {calendarYear}</span>
            <button
              className="px-2 py-1 text-sm text-blue-900 hover:bg-blue-100 rounded"
              onClick={() => {
                const newMonthIdx = calendarMonthIdx === 11 ? 0 : calendarMonthIdx + 1;
                const newYear = calendarMonthIdx === 11 ? calendarYear + 1 : calendarYear;
                setCalendarMonthIdx(newMonthIdx);
                setCalendarYear(newYear);
                setSelectedDate(new Date(newYear, newMonthIdx, 1));
              }}
            >&gt;</button>
          </div>

          <div className="grid grid-cols-7 gap-2 bg-white rounded-lg shadow p-4">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
              <div key={day} className="text-xs font-semibold text-gray-500 text-center mb-2">{day}</div>
            ))}

            {calendarDays.map((date, idx) => {
              if (!date) return <div key={idx}></div>;

              const eventsForDate = getEventsForDate(date);
              const isEvent = eventsForDate.length > 0;
              const isSelected = date.toDateString() === selectedDate.toDateString();

              return (
                <button
                  key={idx}
                  className={`h-16 w-full rounded-lg border flex flex-col items-start justify-start p-1 text-sm font-medium transition
                    ${isEvent ? "bg-blue-100 border-blue-400 text-blue-900 hover:bg-blue-200" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}
                    ${isSelected ? "!bg-blue-900 !text-white !border-blue-900 ring-2 ring-offset-1 ring-blue-500" : ""}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span className={`font-bold ${isSelected ? 'text-white' : ''}`}>{date.getDate()}</span>
                  {isEvent && (
                    <span className="flex gap-1 mt-2">
                      {eventsForDate.slice(0,3).map(ev => (
                        <span key={ev.id} className={`inline-block w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-900'}`}></span>
                      ))}
                      {eventsForDate.length > 3 && (
                        <span className={`text-[10px] ${isSelected ? 'text-white' : 'text-blue-900'} ml-1`}>+{eventsForDate.length - 3}</span>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Events for selected date (right) */}
        <div className="w-full flex-1">
          <h3 className="text-xl font-semibold mb-4 text-blue-900">
            Events on {selectedDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </h3>
          <div className="space-y-3">
            {(() => {
              const eventsForSelected = getEventsForDate(selectedDate);

              if (eventsForSelected.length === 0) {
                return <div className="text-gray-500">No events for this date.</div>;
              }

              const eventToDisplay = eventsForSelected.find(ev => ev.id === selectedEventId) || eventsForSelected[0];

              return (
                <>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {eventsForSelected.map(ev => (
                      <button
                        key={ev.id}
                        className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors
                          ${eventToDisplay.id === ev.id ? "bg-blue-900 text-white border-blue-900" : "bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100"}`}
                        onClick={() => setSelectedEventId(ev.id)}
                      >
                        {ev.title.length > 18 ? ev.title.slice(0, 15) + "..." : ev.title}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white rounded-lg shadow p-6 border border-blue-100">
                    <h4 className="text-2xl font-bold mb-2 text-blue-900">{eventToDisplay.title}</h4>
                    <img 
  src={eventToDisplay.posterUrl} 
  alt={eventToDisplay.title} 
  className="w-full h-auto max-h-[80vh] object-contain rounded mb-4 border border-gray-100" 
/>


                    <div className="mb-2 text-gray-700"><strong>Date:</strong> {eventToDisplay.date}</div>
                    <div className="mb-2 text-gray-700"><strong>Time:</strong> {eventToDisplay.time}</div>
                    <div className="mb-2 text-gray-700"><strong>Venue:</strong> {eventToDisplay.venue}</div>
                    {eventToDisplay.speaker && <div className="mb-2 text-gray-700"><strong>Speaker:</strong> {eventToDisplay.speaker}</div>}
                    <div className="mb-2 text-gray-700"><strong>Category:</strong> {eventToDisplay.category}</div>
                    <button
                      className="mt-4 bg-blue-900 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex items-center"
                      onClick={() => window.open(generateGoogleCalendarUrl(eventToDisplay), '_blank')}
                    >
                      Add to Calendar
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Footer removed as requested */}
    </div>
  );
}

export default App;
