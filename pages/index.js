import MeetupList from "@/components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Getting into sports',
    image: 'https://res.cloudinary.com/dlwvuv2hh/image/upload/v1677662094/sacblog2_vqpszs.png',
    creator: 'Queen Ozone',
    description: 'This is my firt post about my experience in sport development and talent aspirations'
  },
  {
    id: 'm2',
    title: 'My blog Post',
    image: 'https://res.cloudinary.com/dlwvuv2hh/image/upload/v1677662094/sacblog2_vqpszs.png',
    creator: 'Queen Ozone',
    description: 'This is my firt post about my experience in sport development and talent aspirations'
  },
  
]

function HomePage (props) {
  return (
        <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {
  return{
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage