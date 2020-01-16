import React from 'react'
import config from '~/config/index'
import Layout from '~/components/layout'
import NavbarTop from '~/components/sections/navbar/top'
import NavbarMiddle from '~/components/sections/navbar/middle'

import fetchWalletDetails from '~/containers/wallet/fetchData'
import fetchTransactionsAddress from '~/containers/transactions_address/fetchData'

import '~/common.blocks/page/page_transaction.less'

// const List = ({ data = {}, pagination = {} }) => {
//   return (
//     <div>
//       <Pagination {...pagination} />
//       {data.map((item, i) => (
//         <div className="wallet-tx">
//           <TransactionDetailsComponent data={item} key={i}  type={'transactions'}/>
//         </div>
//       ))}
//       <Pagination {...pagination} />
//     </div>
//   )
// }

const Page = ({ wallet, transactions, address }) => {
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
        <NavbarMiddle current={'wallet'}/>
        <div className='section section_transaction-details-title'>
          <div className='wrapper_section-content'>
            <h1 className='section__title'>
              Wallet Details
            </h1>
          </div>
        </div>

        <div className='section section_transaction-details-title'>
          <div className='wrapper_section-content'>
            <h1 className='section__title'>
              Transactions
            </h1>
          </div>
        </div>

      </main>
    </Layout>
  )
}

Page.getInitialProps = async (context) => {
  const { wallet } = context.query
  const data = await fetchWalletDetails(wallet).catch(() => ({}))
  console.log(data, "data")
  const transactions = await fetchTransactionsAddress(1, wallet).catch(() => ({}))
  console.log(transactions, "TRANSACTION")
  console.log(wallet, "address")
  return { wallet: data, transactions, address: wallet }
}

export default Page
