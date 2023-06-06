import { Event } from '@/types/event';
import { AddressIcon } from '../Icons/AddressIcon';
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import { DateIcon } from '../Icons/DateIcon';
import { Button } from '../UI/Button';
import classes from './EventItem.module.css';

interface Props extends Event {}

export const EventItem: React.FC<Props> = ({ id, title, location, date, image }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
