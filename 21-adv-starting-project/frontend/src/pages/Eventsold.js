import { Link } from 'react-router-dom';

const EVENTS = [
  { id: 'ribs', title: 'RibFest', date: 'July 15th' },
  { id: 'mtg', title: 'Jumpstart', date: 'July 9th' },
  { id: 'weeb', title: 'Animethon', date: 'July 14th' },
];

export default function EventsPage() {
  return (
    <>
      <h1>The Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>
              {event.title} - {event.date}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
