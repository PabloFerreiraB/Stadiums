import client from '../graphql/client'
import { GET_PAGES } from '../graphql/queries'
import PageTemplate from 'templates/Pages'
import { useRouter } from 'next/dist/client/router'

export default function AboutPage() {
  const router = useRouter()

  if (router.isFallback) return null

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES)

//   console.log(pages)

//   return {
//     props: {}
//   }
// }

// getStaticPaths => serve para gerar as urls em build time /about, /stadiums/barcelona
// getStaticProps => serve para buscar dados da página (props) - runtime - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
