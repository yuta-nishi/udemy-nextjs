import classes from './ErrorAlert.module.css';

interface Props {
  children: React.ReactNode;
}

export const ErrorAlert: React.FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>;
};
