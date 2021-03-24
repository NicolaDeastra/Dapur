import Head from 'next/head'

import Layout from '@/Components/Layout'
import Category from '@/Components/Category'
import Hero from '@/Components/Hero'
import RecipeGrid from '@/Components/RecipeGrid'

import Api from '@/lib/api'

export async function getStaticProps(context) {
  const newRecipe = await Api.getNewRecipe()
  const article = await Api.getTipsMasak()

  return {
    props: { newRecipe, article },
    revalidate: 60000,
  }
}

export default function Home({ newRecipe, article }) {
  return (
    <Layout>
      <Head>
        <title>Let's Start Cooking with Popular Recip - Dapur</title>
        <meta
          name='title'
          content="Let's Start Cooking with Popular Recip - Dapur"
        />
        <meta
          name='description'
          content='Free open source website recipes in Bahasa'
        />
      </Head>
      <Hero />
      <Category />
      <RecipeGrid title='Recipes' recipes={newRecipe.results} />
      <RecipeGrid title='Articles' recipes={article.results.slice(0, 9)} />
    </Layout>
  )
}
