import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { EventList } from '@/components/Events/EventList';
import { ResultsTitle } from '@/components/Events/ResultsTitle';
import { Button } from '@/components/UI/Button';
import { ErrorAlert } from '@/components/UI/ErrorAlert';
import { getFilteredEvents } from '@/dummy-data';

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();

  const filteredDate = router.query.slug;

  if (!filteredDate) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredDate[0];
  const filteredMonth = filteredDate[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
