import  Link  from 'next/link';
import { Fragment } from 'react';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';

function ArticlesPage () {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData)
  }
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
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>
  )
}

export default ArticlesPage