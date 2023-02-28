import Link from 'next/link'

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>SACblog</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Articles</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
