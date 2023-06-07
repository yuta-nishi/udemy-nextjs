import { Button } from '../UI/Button';
import classes from './ResultsTitle.module.css';

interface Props {
  date: Date;
}

export const ResultsTitle: React.FC<Props> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show All Events</Button>
    </section>
  );
};
