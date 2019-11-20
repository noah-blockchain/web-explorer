import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import TransactionDetailsContainer from '~/containers/transactions_coins'
import fetchTransactionsCoins from '~/containers/transactions_coins/fetchData'
import TransactionDetailsComponent from '~/components/sections/transactionDetails'
import Pagination from '~/components/pagination'

import '~/common.blocks/page/page_transactions.less'

const List = ({ data = {}, pagination = {} }) => {
  return (
    <div>
      <Pagination {...pagination} />
      {data.map((item, i) => (
        <TransactionDetailsComponent data={item} key={i} type={'transactions'}/>
      ))}
      <Pagination {...pagination} />
    </div>
  )
}

const Page = ({ transactions }) => {
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
            <h1 className="page__title">Transactions</h1>
          </div>
        </div>
        <div className="page__list">
          <TransactionDetailsContainer rawData={transactions}>
            <List />
          </TransactionDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async (context) => {
  const { coin } = context.query

  const transactions = await fetchTransactionsCoins(1, coin).catch(() => [])
  return { transactions }
}

export default Page
