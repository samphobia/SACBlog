import { useRouter } from 'next/router';

function ArticlesDetailsPage () {
  const router = useRouter()

  const articlesId = router.query.articlesID



  return <h1> The ArticlesDetailsPage</h1>
}

export default ArticlesDetailsPage