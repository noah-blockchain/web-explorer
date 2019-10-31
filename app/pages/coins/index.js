import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchCoins from '~/containers/coins/fetchData'
import CoinsDetailsComponent from '~/components/coins'
import CoinsDetailsContainer from '~/containers/coins'


const Page = ({ coins }) => {
  const language = 'en'
  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_transactions">
        <NavbarTop />
        <NavbarMiddle current="coins" />
        <div className="section">
          <div className="wrapper_section-content">
            <h1 className="page__title">Coins</h1>
          </div>
        </div>
        <div className="page__list">
          <CoinsDetailsContainer rawData={coins}>
            <CoinsDetailsComponent />
          </CoinsDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async () => {
  const coins = await fetchCoins().catch(() => [])
  return { coins }
}

export default Page
