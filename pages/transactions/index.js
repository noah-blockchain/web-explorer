import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import fetchTransactions from '~/containers/transactions/fetchData'
import TransactionDetailsComponent from '~/components/sections/transactionDetails'
import TransactionDetailsContainer from '~/containers/transactions'
import Pagination from '~/components/pagination'

import '~/common.blocks/page/page_transactions.less'

const List = ({ data = {}, pagination ={} }) => {

  return (
    <div>
      <Pagination {...pagination}/>
      {data.map((item, i) => (<TransactionDetailsComponent data={item} key={i}/>))}
      <Pagination {...pagination}/>
    </div>)
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
        <NavbarTop/>
        <NavbarMiddle current="transactions"/>
        <div className="section">
          <div className="wrapper_section-content">
            <h1 className="page__title">Transactions</h1>
          </div>
        </div>
        <div className="page__list">
          <TransactionDetailsContainer rawData={transactions}>
            <List/>
          </TransactionDetailsContainer>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async () => {
  const transactions = await fetchTransactions().catch(() => [])
  return { transactions }
}

export default Page
