// import { useRouter } from 'next/router';
import ArticlesDetails from '@/components/meetups/ArticlesDetail'


function ArticlesDetailsPage () {
  return (
    <ArticlesDetails 
      image='https://res.cloudinary.com/dlwvuv2hh/image/upload/v1677662094/sacblog2_vqpszs.png'
      title='How to get into sports'
      creator='Queen Ozone'
      description='Learn how to leverage your determination and talent and suceed in sports'
    />
  )
}

export default ArticlesDetailsPage