import Layout from "@/components/layout/Layout"
import MeetupList from "@/components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'My first blog Post',
    image: 'https://unsplash.com/photos/OgqWLzWRSaI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    creator: 'Queen Ozone',
    description: 'This is my firt post about my experience in sport development and talent aspirations'
  },
  {
    id: 'm2',
    title: 'My blog Post',
    image: 'https://unsplash.com/photos/OgqWLzWRSaI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    creator: 'Queen Ozone',
    description: 'This is my firt post about my experience in sport development and talent aspirations'
  },
  
]

function HomePage () {
  return (
    <Layout>
        <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  )
}

export default HomePage