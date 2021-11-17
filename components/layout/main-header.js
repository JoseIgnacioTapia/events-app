import Link from 'next/link';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <a>NextEvents</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li className={classes.navigation}>
            <Link href="/events">
              <a>Browse All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
