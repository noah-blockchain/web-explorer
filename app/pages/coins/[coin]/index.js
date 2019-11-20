import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'
import CoinsDetailsComponent from '~/components/sections/coinDetails'
import CoinsDetailsContainer from '~/containers/coin'

import TransactionDetailsContainer from '~/containers/transactions_coins'
import fetchTransactionsCoins from '~/containers/transactions_coins/fetchData'
import TransactionsComponent from '~/components/transactions'


import fetchCoinDetails from '~/containers/coin/fetchData'
import ChartsDetailComponent from '~/components/sections/charts'
import '~/common.blocks/page/page_coins.less'
// -- Validators

import fetchValidators from '~/containers/validators/fetchData'
import ValidatorsContainer from '~/containers/validators'
import ValidatorsComponent from '~/components/sections/validators'

import fetchDelegators from '~/containers/delegators/fetchData'
import DelegatorsContainer from '~/containers/delegators'
import DelegatorsComponent from '~/components/sections/delegators';

import fetchHolders from '~/containers/holders/fetchData'
import HoldersContainer from '~/containers/holders'
import HoldersComponent from '~/components/sections/holders'

const Page = ({ coins, coin, transactions, validators, holders, delegators }) => {
  const language = 'en'

  return (
    <Layout
      pageTitle="NOAH Blockchain Explorer"
      description="NOAH Blockchain Explorer"
      language={language}
      locales={config.languages}
    >
      <main className="page_coins">
        <NavbarTop/>
        <NavbarMiddle current='coins'/>
        <div className='section section_transaction-details-title'>
          <div className='wrapper_section-content'>
            <h1 className='section__title'>
              Coin Details
            </h1>
          </div>
        </div>
        <CoinsDetailsContainer rawData={coins}>
          <CoinsDetailsComponent/>
        </CoinsDetailsContainer>
        <div className="section bottom-section">

          <div className="wrapper_section-content">
            <div className="page__tables">
              <div className="left">
                <DelegatorsContainer rawData={delegators}>
                  <DelegatorsComponent/>
                </DelegatorsContainer>
              </div>
              <div className="right">
                <ChartsDetailComponent/>
              </div>
            </div>
          </div>
        </div>
        <div className="section bottom-section">
          <div className="wrapper_section-content">
            <div className="page__tables">
              <div className="left">
                <ValidatorsContainer rawData={validators}>
                  <ValidatorsComponent/>
                </ValidatorsContainer>
                <div className="bottom-divider"></div>
                <HoldersContainer rawData={holders}>
                  <HoldersComponent/>
                </HoldersContainer>
              </div>
              <div className="right">
                <TransactionDetailsContainer coin={coin} rawData={transactions} showMore={'/coins/' + coin + '/transactions'}>
                  <TransactionsComponent/>
                </TransactionDetailsContainer>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

Page.getInitialProps = async (context) => {
  const { coin } = context.query
  // const coins = await fetchCoinDetails(coin).catch(() => ({}))
  // const transactions = await fetchTransactionsCoins(1, coin).catch(() => ({}))

  const coinsPromise = fetchCoinDetails(coin).catch(() => ({}))
  const validatorsPromise = fetchValidators(1, coin).catch(() => [])
  const delegatorsPromise = fetchDelegators(1, coin).catch(() => [])

  const holdersPromise = fetchHolders(1, coin).catch(() => [])
  const transactionsPromise = fetchTransactionsCoins(1, coin).catch(() => [])

  const [coins, validators, holders, transactions, delegators] = await Promise.all([
    coinsPromise,
    validatorsPromise,
    holdersPromise,
    transactionsPromise,
    delegatorsPromise
  ])

  return { coins: coins, coin, transactions, validators: validators, holders, delegators }
}

export default Page
