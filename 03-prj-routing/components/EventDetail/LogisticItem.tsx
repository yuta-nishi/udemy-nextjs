import classes from './LogisticItem.module.css';

interface Props {
  icon: React.FC;
  children: React.ReactNode;
}

export const LogisticsItem: React.FC<Props> = ({ children, icon: Icon }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
};
