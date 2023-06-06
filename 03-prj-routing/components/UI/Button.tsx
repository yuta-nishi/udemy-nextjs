import Link from 'next/link';

import classes from './Button.module.css';

interface Props {
  link: string | undefined;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ link, children }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return <button className={classes.btn}>{children}</button>;
};
