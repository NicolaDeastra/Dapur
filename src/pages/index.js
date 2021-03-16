import Head from 'next/head'

import Layout from '@/Components/Layout'
import Hero from '@/Components/Hero'
import RecipeGrid from '@/Components/RecipeGrid'

import Api from '@/lib/api'

export async function getStaticProps(context) {
  const newRecipe = await Api.getNewRecipe()
  const article = await Api.getTipsMasak()

  return {
    props: { newRecipe, article },
    revalidate: 300,
  }
}

export default function Home({ newRecipe, article }) {
  return (
    <Layout>
      <Head>
        <title>
          Free open source website provides manga in Bahasa - Mamang
        </title>
        <meta
          name='title'
          content='Free open source website provides manga in Bahasa - Mamang'
        />
        <meta
          name='description'
          content='Free open source website provides manga in Bahasa'
        />
      </Head>
      <Hero />
      <RecipeGrid title='Recipes' recipes={newRecipe.results} />
      <RecipeGrid title='Articles' recipes={article.results} />
    </Layout>
  )
}
