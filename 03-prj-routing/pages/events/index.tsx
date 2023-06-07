import { NextPage } from 'next';

import { EventList } from '@/components/Events/EventList';
import { EventsSearch } from '@/components/Events/EventsSearch';
import { getAllEvents } from '@/dummy-data';

const AllEventsPage: NextPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
