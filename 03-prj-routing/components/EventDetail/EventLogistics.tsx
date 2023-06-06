import { AddressIcon } from '../Icons/AddressIcon';
import { DateIcon } from '../Icons/DateIcon';
import classes from './EventLogistics.module.css';
import { LogisticsItem } from './LogisticItem';

interface Props {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

export const EventLogistics: React.FC<Props> = ({ date, address, image, imageAlt }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
