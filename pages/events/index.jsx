import { getAllEvents } from "../../dummy-data";
import eventList from "../../components/events/event-list";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
