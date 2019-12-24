import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchWallets from '~/containers/wallets/fetchData'
import ValidatorsDetailsComponent from '~/components/wallets'
import ValidatorsDetailsContainer from '~/containers/wallets'

const Page = ({ wallets }) => {
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
        <NavbarMiddle current="wallets" />
        <div className="section">
          <div className="wrapper_section-content">
          </div>
        </div>
        <div className="page__list">
          <ValidatorsDetailsContainer rawData={wallets}>
            <ValidatorsDetailsComponent />
          </ValidatorsDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async context => {
  const wallets = await fetchWallets().catch(() => [])
  return { wallets }
}

export default Page
