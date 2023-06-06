import classes from './EventSummary.module.css';

interface Props {
  title: string;
}

export const EventSummary: React.FC<Props> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};
