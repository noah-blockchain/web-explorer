import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import Preface from '~/components/sections/preface'
import UpdatesComponent from '~/components/sections/updates'
import UpdatesContainer from '~/containers/summary'
import fetchSummary from '~/containers/summary/fetchData'
import BlocksComponent from '~/components/blocks'
import BlocksContainer from '~/containers/blocks'
import fetchBlocks from '~/containers/blocks/fetchData'
import TransactionsComponent from '~/components/transactions'
import TransactionsContainer from '~/containers/transactions'
import fetchTransactions from '~/containers/transactions/fetchData'
import '~/common.blocks/page/page_home.less'

const Page = ({ summary, blocks, transactions }) => {
  const language = 'en'

  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_home">
        <NavbarTop />
        <NavbarMiddle />
        <Preface />
        <UpdatesContainer rawData={summary}>
          <UpdatesComponent />
        </UpdatesContainer>
        <div className="section">
          <div className="wrapper_section-content">
            <div className="page__tables">
              <BlocksContainer rawData={blocks}>
                <BlocksComponent />
              </BlocksContainer>
              <TransactionsContainer rawData={transactions}>
                <TransactionsComponent />
              </TransactionsContainer>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async () => {
  const summaryPromise = fetchSummary().catch(() => [])
  const blocksPromise = fetchBlocks().catch(() => [])
  const transactionsPromise = fetchTransactions().catch(() => [])

  const [summary, blocks, transactions] = await Promise.all([
    summaryPromise,
    blocksPromise,
    transactionsPromise
  ])

  return { summary, blocks, transactions }
}

export default Page
