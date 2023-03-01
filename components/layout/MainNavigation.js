import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/saclogog-bg.png' 

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div>
        <Image src={logo}
        alt='logo'
        width={80}
        height={80} 
        />
        </div>
        <p>SACBlog</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Articles</Link>
          </li>
          <li>
            <Link href='/articles'>Add New Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
