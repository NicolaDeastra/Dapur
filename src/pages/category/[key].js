import Head from 'next/head'
import { useRouter } from 'next/router'

import Api from '@/lib/api'
import Layout from '@/Components/Layout'
import RecipeGrid from '@/Components/RecipeGrid'

export async function getServerSideProps({ params: { key } }) {
  const recipe = await Api.getRecipeByCategory(key)
  return {
    props: {
      recipe,
    },
  }
}

export default function Category({ recipe: { results } }) {
  const router = useRouter()
  const { key } = router.query

  return (
    <Layout>
      <Head>
        <title>{key} | dapur</title>
      </Head>
      <RecipeGrid title='Category' recipes={results} />
    </Layout>
  )
}
