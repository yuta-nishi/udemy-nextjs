import classes from './EventContent.module.css';

interface Props {
  children: React.ReactNode;
}

export const EventContent: React.FC<Props> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};
