import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchValidators from '~/containers/validators/fetchData'
import CoinsDetailsComponent from '~/components/validators'
import CoinsDetailsContainer from '~/containers/validators'

const Page = ({ validators }) => {
  const language = 'en'
  console.log('validators', validators)
  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_transactions">
        <NavbarTop />
        <NavbarMiddle current="validators" />
        <div className="section">
          <div className="wrapper_section-content">
            <h1 className="page__title">Validators</h1>
          </div>
        </div>
        <div className="page__list">
          <CoinsDetailsContainer rawData={validators}>
            <CoinsDetailsComponent />
          </CoinsDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async () => {
  console.log('getInitialProps initiated')
  const validators = await fetchValidators().catch(() => [])
  console.log('validators', validators)
  return { validators }
}

export default Page
