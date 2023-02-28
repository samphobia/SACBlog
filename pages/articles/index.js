import  Link  from 'next/link';
import { Fragment } from 'react';

function ArticlesPage () {
  return (
    <Fragment>
      <h1>The Articles Page</h1>
      <ul>
        <li>
          <Link href='/articles/Actualise-your-sport-dreams'>
            Actualise your Sport Dreams
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default ArticlesPage