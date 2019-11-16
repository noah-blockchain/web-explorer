import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import CoinsDetailsComponent from '~/components/sections/coinDetails'
import CoinsDetailsContainer from '~/containers/coin'
import TransactionDetailsComponent from '~/components/sections/transactionDetails'
import TransactionDetailsContainer from '~/containers/transactions_coins'
import Pagination from '~/components/pagination'
import fetchCoinDetails from '~/containers/coin/fetchData'
import fetchTransactionsCoins from '~/containers/transactions_coins/fetchData'
import ChartsDetailComponent from '~/components/sections/charts'
import '~/common.blocks/page/page_coins.less'


const List = ({ data = {}, pagination = {} }) => {
  return (
    <div>
      <Pagination {...pagination} />
      {data.map((item, i) => (
        <div className="wallet-tx">
          <TransactionDetailsComponent data={item} key={i} type={'transactions'}/>
        </div>
      ))}
      <Pagination {...pagination} />
    </div>
  )
}

const Page = ({ coins, coin, transactions }) => {
  const language = 'en'

  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_transaction">
        <NavbarTop/>
        <NavbarMiddle current='coins'/>
        <div className='section section_transaction-details-title'>
          <div className='wrapper_section-content'>
            <h1 className='section__title'>
              Coin Details
            </h1>
          </div>
        </div>
        <div className="section_coins_main-details">
          <CoinsDetailsContainer rawData={coins}>
            <CoinsDetailsComponent/>
          </CoinsDetailsContainer>
          <ChartsDetailComponent/>
        </div>
        <TransactionDetailsContainer coin={coin} rawData={transactions}>
          <List/>
        </TransactionDetailsContainer>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async (context) => {
  const { coin } = context.query
  const coins = await fetchCoinDetails(coin).catch(() => ({}))
  const transactions = await fetchTransactionsCoins(1, coin).catch(() => ({}))
  console.log(transactions, 'D')
  return { coins: coins, coin, transactions }
}

export default Page
