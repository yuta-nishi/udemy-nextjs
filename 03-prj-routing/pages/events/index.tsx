import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { EventList } from '@/components/Events/EventList';
import { EventsSearch } from '@/components/Events/EventsSearch';
import { getAllEvents } from '@/dummy-data';

const AllEventsPage: NextPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
